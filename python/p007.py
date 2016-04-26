def prime_list(x):
    return [i for i in range(2, x+1) if all([i%x for x in range(2, int(i**0.5+1))])][10000]
print(prime_list(120000))
