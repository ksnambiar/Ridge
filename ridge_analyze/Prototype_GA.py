#Made By Lakshya Sharma on 21/3/19

import numpy
import math
import time

#Globals

test = []
population_size = 2000                                                  #Size of population
num_datasets = 20                                                        #Number of Datasets
num_parameters = 6                                                      #Number of Parameters
parameters = {                                                          #Parameter Names and their ranges
    "1. Project Description" : [-1, 1],
    "2. Number of Stars" : [0, 100],
    "3. Number of Merge Requests" : [0, 50],
    "4. Number of clones": [0, 500],
    "5. Lines of Code per Commit": [1, 500],
    "6. Marks Obtained": [0,100]
}
a = 0.4                                                                 #Averaging factor
pc = 0.5                                                                #Probability of Crossover
pm = 1/6                                                                #Probability of Mutation
fittest = 0                                                             #fittest individual for a generation
fit_list = []
children_size = int(population_size*pc)                                 #Size of children population
parent_size = int(population_size*(1-pc))                               #Size of parent population
parent_indices = numpy.array([0]*population_size)                       #Marks selected parents
optimal = numpy.array([None]*num_parameters)                            #Test case of optimal data
dataset = numpy.array([[None]*(num_parameters+1)]*num_datasets)         #Dataset Values
population = numpy.array([[None]*(num_parameters+1)]*population_size)   #Population array
children = numpy.array([[None]*(num_parameters+1)]*children_size)       #Children array
parent = numpy.array([[None]*(num_parameters+1)]*parent_size)           #Parent array


def optimal_init():
    """Initializes test case of optimal result"""

    for i in range(num_parameters):
        optimal[i] = numpy.random.uniform(1,100)



def dataset_init():
    """Initializes test datasets"""

    for i in range(num_datasets):
        for params in parameters.keys():
            index = int(params[0])-1
            if index == 0:
                dataset[i][index] = numpy.random.uniform(parameters[params][0], parameters[params][1])
            else:
                dataset[i][index] = numpy.random.randint(parameters[params][0], parameters[params][1]+1)


def calc_optimal_rank():
    """Calculates optimal test case ELO"""

    for i in range(num_datasets):
        temp =0
        for j in range(num_parameters):
            temp += optimal[j]*dataset[i][j]
        dataset[i][num_parameters] = temp


def population_initialization():
    """Initializes a random set of weights in the search space"""

    for i in range(population_size):
        sum = 0
        for j in range(num_parameters):
            population[i][j] = numpy.random.uniform(1,100)


def fitness_calculation():
    """Calculates fitness of the existing population generation"""

    for i in range(population_size):
        difference = 0
        for j in range(num_datasets):
            calc = 0
            for k in range(num_parameters):
                calc += dataset[j][k]*population[i][k]
            difference += (dataset[j][num_parameters] - calc)
        population[i][num_parameters] = math.fabs(difference/num_datasets)


def random_crossover():
    """"Performs average crossover operation on randomly selected parents"""

    for i in range(0,children_size,2):
        p1 = numpy.random.randint(0, population_size)
        p2 = numpy.random.randint(0, population_size)

        for j in range(num_parameters):
            children[i][j] = a * population[p1][j] + (1 - a) * population[p2][j]
            children[i + 1][j] = (1 - a) * population[p1][j] + a * population[p2][j]

    for i in range(children_size):
        index = numpy.random.randint(0, population_size)
        for j in range(num_parameters):
            population[index][j] = children[i][j]

def parent_selection():
    """Selects Parents with highest fitness values"""

    for i in range(len(parent_indices)):
        parent_indices[i] = 0
    for i in range(parent_size):
        min = 10**100
        min_index = parent_size

        for j in range(population_size):
            if population[j][num_parameters] < min and parent_indices[j] == 0:
                min = population[j][num_parameters]
                min_index = j

        parent_indices[min_index] = 1
        parent[i] = population[min_index]

def new_crossover():
    """Performs crossover on selected parents"""

    for i in range(0,parent_size-1,2):
        for j in range(num_parameters):
            children[i][j] = a * parent[i][j] + (1-a)*parent[i+1][j]
            children[i+1][j] = (1-a) * parent[i][j] + a*parent[i+1][j]


def random_mutation():
    """Randomly mutates a parameter"""

    for i in range(children_size):
        i1 = numpy.random.randint(0, num_parameters-1)
        i2 = numpy.random.randint(0, num_parameters-1)
        children[i][i1] -= 0.01*children[i][i1]
        children[i][i2] += 0.01*children[i][i1]


def survivor_selection():
    """Replaces Unfit Individuals with children"""

    count = 0
    for i in range(population_size):
        if parent_indices[i] == 0:
            for j in range(num_parameters):
                population[i][j] = children[count][j]
            count += 1


def display(g):
    """Displays generation Details"""

    min = 10**100
    fittest = -1
    for i in range(population_size):
        if population[i][num_parameters] < min:
            fittest = i
    print("Generation No.",g)
    print("Fitness achieved:",population[fittest][num_parameters])
    print()
    print("-"*300+"\n\n")


# Main

optimal_init()

for i in range(10):
    print("\nNew Start\n\n")
    fit_list = []
    test.append(optimal)
    dataset_init()
    calc_optimal_rank()

    #GA

    #start = time.time()
    population_initialization()
    g=0
    check = True
    while g != 1000 and check == True:
        if g > 20:
            if fit_list[len(fit_list)-1] ==  fit_list[len(fit_list)-5] == fit_list[len(fit_list)-10]:
                check = False
        fitness_calculation()
        display(g)
        g+=1
        parent_selection()
        new_crossover()
        survivor_selection()
        #random_crossover()
        #random_mutation()
        fit_list.append(population[fittest][num_parameters])
    for i in range(num_parameters):
        optimal[i] = population[fittest][i]
#end = time.time()
#print("Time Taken : ", end-start, " seconds")
print("End\n")
for i in range(len(test)):
    print(test[i])

