import numpy

num_datasets = 0                                                       #Number of Datasets
num_parameters = 6                                                      #Number of Parameters
projects = []                                                           #Names of the projects
parameters = {                                                          #Parameter Names and their ranges
    "1. Project Description" : [0, 1],
    "2. Number of Stars" : [0, 100],
    "3. Number of Merge Requests" : [0, 50],
    "4. Number of clones": [0, 500],
    "5. Lines of Code per Commit": [1, 500],
    "6. Marks Obtained": [0,100]
}
optimal = numpy.array([None]*num_parameters)                            #Test case of optimal data
dataset = []                                                            #Dataset Values
rank = numpy.array([])                                                  #Ranks of projects


def dataset_init():
    """Initializes datasets"""

    f = open("ridge-firebase-python\\NewDataset.txt","r")
    Data = eval(f.read())
    f.close()

    for i in range(len(Data)):
        projects.append(Data[i][0])
        temp = []
        for j in range(num_parameters):
            temp.append(Data[i][1][j][1])
        dataset.append(temp)

    global num_datasets
    global rank
    num_datasets = len(dataset)
    rank = numpy.array([None]*num_datasets)

def optimal_read():
    """Reads Previously Obtained Weights to improve upon them"""

    global optimal
    f = open("optimal.txt","r")
    temp = eval(f.read())
    f.close()
    optimal = temp[1]

def preprocess_dataset():
    """Validates and preprocesses the dataset to avoid unwanted ranks"""

    for i in range(num_datasets):
        for params in parameters.keys():
            index = int(params[0]) - 1
            if index == 0:
                if dataset[i][index] not in range(parameters[params][0], parameters[params][1]):
                    if dataset[i][index] > parameters[params][1]:
                        dataset[i][index] = parameters[params][1]
            else:
                if dataset[i][index] not in range(parameters[params][0], parameters[params][1],1):
                    if dataset[i][index] > parameters[params][1]:
                        dataset[i][index] = parameters[params][1]

def calc_optimal_ELO():
    """Calculates ELO using Optimal set"""

    for i in range(num_datasets):
        temp =0
        for j in range(num_parameters):
            temp += optimal[j]*dataset[i][j]
        dataset[i].append(temp)


def ranking():
    """Ranks the Projects"""

    rank_count = 1
    while None in rank:
        max = -1
        index = num_parameters
        for i in range(num_datasets):

            if dataset[i][num_parameters] > max and rank[i] == None:
                max = dataset[i][num_parameters]
                index = i

        rank[index] = rank_count
        rank_count += 1


#Main

optimal_read()
dataset_init()
preprocess_dataset()
calc_optimal_ELO()
ranking()

dictionary = {}
for i in range(num_datasets):
    dictionary[rank[i]] = projects[i]

f = open("Rank.txt","w")
f.write(str(dictionary))
f.close()
