found = 0

for a in range(100, 1000):
    for b in range(a, 1000):
        num = a*b
        strNum = str(num)
        if strNum == strNum[::-1] and num > found:
            found = num

print(found)
