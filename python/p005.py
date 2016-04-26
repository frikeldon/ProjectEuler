divs = range(2, 21)


def fitness(num):
    for x in divs:
        if num % x != 0:
            return False
    return True

answer = 20
while (not fitness(answer)):
    answer += 10

print(answer)
