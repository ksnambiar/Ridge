import matplotlib.pyplot as plt

# Globals

num_parameters = 6                                                  # Number of Parameters
fit_list = []                                                       # List of fittest individuals of each generation

# UDF

def result_read():
    """Reads Previously Obtained Weights to improve upon them"""

    global fit_list
    f = open("Result.txt","r")
    fit_list = eval(f.read())
    f.close()

result_read()
temp = []
for i in range(len(fit_list)):
    temp.append(i)
plt.plot(temp, fit_list)
plt.scatter(temp, fit_list)
plt.xlabel("Generation")
plt.ylabel("Best Fitness Value")
plt.show()