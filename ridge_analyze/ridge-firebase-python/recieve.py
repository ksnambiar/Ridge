# -*- coding: utf-8 -*-
"""
Created on Thu May 23 14:00:09 2019

@author: Sidharth
"""
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
from textblob import TextBlob 
import requests
import json
from textblob import TextBlob
clientId='7e5d6e8d846a02932508'
clientSecret='1f1fea3d6faf0b71a783b3746270553da658c5f4'


cred = credentials.Certificate('opensourced.json')

firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://opensourced-a8340.firebaseio.com'
})


ref= db.reference('projects')

project_data=ref.get()

print(project_data.keys())

#preprocess step
project_data['-L_AzsN4qoAup17B_vpE']
result_data={}
for i in project_data.keys():
    _temp=project_data[i]
    print(_temp)
    temp={}
    temp['name']=_temp['name']
    temp['description']=_temp['description']
    temp['githublink'] = _temp['githublink']
    result_data[i]=temp


print(result_data)
_temp=result_data['-LeapDOZ4GvP041pAUFj']['githublink'].split("/")[-2:]
_temp
needed=[]
for k in result_data.keys():
    _data=result_data[k]
    _temp2={}
    if _data['githublink']!='':
        _temp=_data['githublink'].split("/")[-2:]
        print(_temp)
        url="https://api.github.com/repos/"+_temp[0].strip()+"/"+_temp[1].strip()+"?client_id="+clientId+"&+client_secret="+clientSecret
        data=requests.get(url)
        parsed=json.loads(data.text)
        print(_temp[0]+"\n")
        
        _temp2['name']=_data['name']
        _temp2['clones']=parsed['forks_count']
        _temp2['stars']=parsed['stargazers_count']
        _temp2['description']=parsed['description']
        url2="https://api.github.com/repos/"+_temp[0].strip()+"/"+_temp[1].strip()+"/stats/contributors?client_id="+clientId+"&+client_secret="+clientSecret
        data2=requests.get(url2)
        parsed2=json.loads(data2.text)
        if len(parsed2)==0:
            data2=requests.get(url2)
            parsed2=json.loads(data2.text)
        total_commits=0
        total_add=0
        total_del=0
        for i in parsed2:
            total_commits+=i['total']
            for j in i['weeks']:
                total_add+=j['a']
                total_del+=j['d']
                if total_commits!= 0:
                    _temp2['lines_of_code_per_commit']=(total_add+total_del)/total_commits
                else:
                    _temp2['lines_of_code_per_commit']=(total_add+total_del)
        url3="https://api.github.com/repos/"+_temp[0].strip()+"/"+_temp[1].strip()+"/pulls?client_id="+clientId+"&+client_secret="+clientSecret
        data3=requests.get(url3)
        _temp2['merge_requests']=len(json.loads(data3.text))
        needed.append([k,_temp2])
    else:
        _temp2['name']=_data['name']
        _temp2['clones']=0
        _temp2['stars']=0
        _temp2['description']=_data['description']
        _temp2['lines_of_code_per_commit']=0
        _temp2['merge_requests']=0
        needed.append([k,_temp2])
  
for i in range(len(needed)):    
    data=needed[i][1]
    wiki = TextBlob(data['description'])
    data['description']=wiki.sentiment.polarity+wiki.sentiment.subjectivity
    needed[i][1]=data      

f=open("dataset.txt","w+")
f.write(str(needed))
f.close()
