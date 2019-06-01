#Made By Lakshya Sharma on 21/3/19

import numpy
import math
import time
import matplotlib.pyplot as plt

#Globals

population_size = 100                                                    #Size of population
num_datasets = 20                                                       #Number of Datasets
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
a = 0.4                                                                 #Averaging factor
pc = 0.5                                                                #Probability of Crossover
pm = 0.01                                                               #Probability of Mutation
fittest = 0                                                             #fittest individual for a generation
fit_list = []                                                           #list of fittest values
children_size = int(population_size*pc)                                 #Size of children population
parent_size = int(population_size*(1-pc))                               #Size of parent population
parent_indices = numpy.array([0]*population_size)                       #Marks selected parents
optimal = numpy.array([None]*num_parameters)                            #Test case of optimal data
dataset = numpy.array([[None]*(num_parameters+1)]*num_datasets)         #Dataset Values
population = numpy.array([[None]*(num_parameters+1)]*population_size)   #Population array
children = numpy.array([[None]*(num_parameters+1)]*children_size)       #Children array
parent = numpy.array([[None]*(num_parameters+1)]*parent_size)           #Parent array


def optimal_init():
    """Initializes first case of optimal result"""

    for i in range(num_parameters):
        optimal[i] = 100


def optimal_read():
    """Reads Previously Obtained Weights to improve upon them"""

    global optimal
    f = open("optimal.txt","r")
    temp = eval(f.read())
    f.close()
    optimal = temp[1]


def dataset_init():
    """Initializes datasets"""

    f = open("NewDataset.txt","r")
    Data = eval(f.read())

    for i in range(num_datasets):
        projects.append(Data[i][0])
        for j in range(num_parameters):
            dataset[i][j] = Data[i][1][j][1]


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
        dataset[i][num_parameters] = temp


def population_initialization():
    """Initializes a random set of weights in the search space"""

    for i in range(population_size):
        sum = 0
        for j in range(num_parameters):
            population[i][j] = numpy.random.uniform(1,500)


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
        if population[i][num_parameters] < 0.01:
            population[i][num_parameters] = 0


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
            for j in range(num_parameters):
                prob = numpy.random.uniform(0, 1)
                if prob < pm:
                    children[i][j] *= numpy.random.choice([0.9, 1.1])



def survivor_selection():
    """Replaces Unfit Individuals with children"""

    count = 0
    for i in range(population_size):
        if parent_indices[i] == 0:
            for j in range(num_parameters):
                population[i][j] = children[count][j]
            count += 1


def display():
    """Displays generation Details"""

    min = 10**100
    fittest = -1
    for i in range(population_size):
        if population[i][num_parameters] < min:
            min = population[i][num_parameters]
            fittest = i
    print("-" * 300 + "\n")
    print("Generation No.",Generation)
    print("Fitness achieved:",population[fittest][num_parameters])
    print()
    fit_list.append(population[fittest][num_parameters])


def plot_graph():
    """Plots a graph for each generation"""

    for i in range(population_size):
        plt.scatter(Generation, population[i][num_parameters])
        plt.pause(1e-10)
    plt.title("GA")
    plt.xlabel("Generation")
    plt.ylabel("Fitness Values")


def write_results():
    """Writes the fitness list and optimal list to files"""

    temp = []
    f = open("optimal.txt", "w")
    for i in range(num_parameters):
        temp.append(population[fittest][i])
    f.write(str([optimal, temp]))
    f.close()

    plt.savefig("First_Graph.png")


def termination_condition():
    """Checks whether the termination conditions have been reached """

    global Generation
    Generation += 1

    if Generation == 100:
        print("\nMaximum Number of Generations Reached\n\n")
        return False

    if Generation > 11:
        for k in range(1,10):
            check = 1
            if fit_list[len(fit_list)-k] != fit_list[len(fit_list)-k-1]:
                check = 0
                break
        if check == 1:
            print("\nMinimum Fitness Achieved\n\n")
            return False

    return True

# Main

optimal_read()
dataset_init()
preprocess_dataset()
calc_optimal_ELO()

#GA

start = time.time()
population_initialization()
Generation = -1

while termination_condition():

    fitness_calculation()
    display()
    plot_graph()
    parent_selection()
    new_crossover()
    random_mutation()
    survivor_selection()

write_results()

end = time.time()
print("Time Taken : ", end-start, " seconds\n")

plt.show()
