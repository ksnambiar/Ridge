#Made By Lakshya Sharma on 21/3/19

import numpy
import math
import time
from scipy import stats
import matplotlib.pyplot as plt


#Globals

population_size = 100                                                   #Size of population
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
pm = 0.2                                                                #Probability of Mutation
fittest = 0                                                             #fittest individual for a generation
fit_list = []                                                           #list of fittest values
children_size = int(population_size*pc)                                 #Size of children population
parent_size = int(population_size*(1-pc))                               #Size of parent population
parent_indices = numpy.array([0]*population_size)                       #Marks selected parents
optimal = numpy.array([None]*num_parameters)                            #Test case of optimal data
dataset = numpy.array([[None]*(num_parameters)]*num_datasets)           #Dataset Values
population = numpy.array([[None]*(num_parameters+1)]*population_size)   #Population array
children = numpy.array([[None]*(num_parameters+1)]*children_size)       #Children array
parent = numpy.array([[None]*(num_parameters+1)]*parent_size)           #Parent array


def optimal_read():
    """Reads Previously Obtained Weights to improve upon them"""

    global optimal
    f = open("optimal.txt","r")
    temp = eval(f.read())
    f.close()
    optimal = temp


def dataset_init():
    """Initializes datasets"""

    f = open("NewDataset.txt","r")
    Data = eval(f.read())
    f.close()

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


def population_initialization():
    """Initializes a random set of weights in the search space"""

    for i in range(population_size):
        sum = 0
        for j in range(num_parameters):
            population[i][j] = numpy.random.uniform(1,100)


def fitness_calculation():
    """Calculates fitness of the existing population generation"""

    for i in range(population_size):
        temp_rank = ["TEMP"]
        temp_calc = [10*100]
        for j in range(num_datasets):
            calc = 0
            for k in range(num_parameters):
                calc += dataset[j][k]*population[i][k]
            for l in range(len(temp_calc)):
                if temp_calc[l] < calc:
                    temp_calc.insert(l, calc)
                    temp_rank.insert(l, projects[j])
                    break
            else:
                temp_calc.insert(-1, calc)
                temp_rank.insert(-1, projects[j])

        temp_rank.pop(0)
        temp_calc.pop(0)

        #tau,ignore = stats.kendalltau(projects, temp_rank)
        tau, ignore = stats.spearmanr(projects, temp_rank)
        population[i][num_parameters] = tau


def parent_selection():
    """Selects Parents with highest fitness values"""

    for i in range(len(parent_indices)):
        parent_indices[i] = 0
    for i in range(parent_size):
        max = -2
        max_index = parent_size

        for j in range(population_size):
            if population[j][num_parameters] > max and parent_indices[j] == 0:
                max = population[j][num_parameters]
                max_index = j

        parent_indices[max_index] = 1
        parent[i] = population[max_index]

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

    max = -2
    fittest = population_size
    for i in range(population_size):
        if population[i][num_parameters] > max:
            max = population[i][num_parameters]
            fittest = i
    print("-" * 300 + "\n\n")
    print("Generation No.",Generation)
    print("Fitness achieved:",population[fittest][num_parameters])
    print()
    fit_list.append(population[fittest][num_parameters])


def plot_graph():
    """Plots a graph for each generation"""

    for i in range(population_size):
        plt.scatter(Generation, population[i][num_parameters])
        plt.pause(0.0001)
    plt.title("GA")
    plt.xlabel("Generation")
    plt.ylabel("Fitness Values")


def write_results():
    """Writes the fitness list and optimal list to files"""

    temp = []
    f = open("optimal.txt", "w")
    for i in range(num_parameters):
        temp.append(population[fittest][i])
    f.write(str(temp))
    f.close()

    plt.savefig("Second_Graph.png")


def termination_condition():
    """Checks whether the termination conditions have been reached """

    global Generation
    Generation += 1

    if Generation == 1000:
        print("\nMaximum Number of Generations Reached\n\n")
        return False

    if Generation > 20:
        if fit_list[-1] == 1:
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


dataset_init()
preprocess_dataset()

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
plt.show()

end = time.time()
print("Time Taken : ", end-start, " seconds")
