current = 600851475143
factor = 3

while factor < current:
    while current % factor == 0:
        current = current / factor
    factor += 2

print(factor)
