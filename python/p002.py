def fibonacci(top):
    a, b = 1, 1
    while a <= top:
        yield a
        a, b = b, a + b

print(sum(filter(lambda x: x % 2 != 0, fibonacci(4000000))))
