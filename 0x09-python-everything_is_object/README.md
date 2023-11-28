# 0x09. Python - Everything is object
---
## Background Context

Now that we understand that everything is an object and have a little bit of knowledge, let’s pause and look a little bit closer at how Python works with different types of objects.

BTW, have you ever modified a variable without knowing it or wanting to? I mean:
```
>>> a = 1
>>> b = a
>>> a = 2
>>> b
1
>>> 
```
OK. But what about this?
```
>>> l = [1, 2, 3]
>>> m = l
>>> l[0] = 'x'
>>> m
['x', 2, 3]
>>> 
```

This project is a little bit different than the usual projects. The first part is only questions about Python’s specificity like “What would be the result of…”. You should read all documentation first (as usual :)), then take the time to think and brainstorm with your peers about what you think and why. Try to do this without coding anything for a few hours.

Trying examples in the Python interpreter will give you most of the answers without having to think about it. Don’t go this route. First read, then think, then brainstorm together. Only then you can test in the interpreter.
---

## Resources:books:
Read or watch:
* [9.10. Objects and values](https://intranet.hbtn.io/rltoken/n1x09X-KJSllpJkJorBw2A)
* [9.11. Aliasing](https://intranet.hbtn.io/rltoken/3teQMNNfDeyGvCtZfjsf5g)
* [Immutable vs mutable types](https://intranet.hbtn.io/rltoken/JuPVygeoG27Q_qKxB2lP8g)
* [Mutation](https://intranet.hbtn.io/rltoken/UbL96sV3cIxewdQPW_zwRw)
* [9.12. Cloning lists](https://intranet.hbtn.io/rltoken/-t_1VsmKlgWHszL5y1YiKA)
* [Python tuples: immutable but potentially changing](https://intranet.hbtn.io/rltoken/IdBAdTYNLuS3YpRRQIam6Q)

---
## Learning Objectives:bulb:
What you should learn from this project:

* Why Python programming is awesome (don’t forget to tweet today, with the hashtag #pythoniscool :))
* What is an object
* What is the difference between a class and an object or instance
* What is the difference between immutable object and mutable object
* What is a reference
* What is an assignment
* What is an alias
* How to know if two variables are identical
* How to know if two variables are linked to the same object
* How to display the variable identifier (which is the memory address in the CPython implementation)
* What is mutable and immutable
* What are the built-in mutable types
* What are the built-in immutable types
* How does Python pass variables to functions

---

### [0. Who am I?](./0-answer.txt)
What function would you use to print the type of an object?

Write the name of the function in the file, without ().
```
answer -> type
```
### [1. Where are you?](./1-answer.txt)
* How do you get the variable identifier (which is the memory address in the CPython implementation)?
* Write the name of the function in the file, without ().
```
answer -> id
```

### [2. Right count](./2-answer.txt)
* In the following code, do a and b point to the same object?
* Answer with Yes or No.
```
>>> a = 89
>>> b = 100
```
```
answer -> No
```

### [3. Right count =](./3-answer.txt)
* In the following code, do a and b point to the same object?
* Answer with Yes or No.
```
>>> a = 89
>>> b = 89
```
```
answer -> Yes
```

### [4. Right count =](./4-answer.txt)
* In the following code, do a and b point to the same object?
Answer with Yes or No.
```
>>> a = 89
>>> b = a
```
```
answer -> Yes
```

### [5. Right count =+](./5-answer.txt)
* In the following code, do a and b point to the same object?
Answer with Yes or No.
```
>>> a = 89
>>> b = a + 1
```
```
answer -> No
```

### [6. Is equal](./6-answer.txt)
* What do these 3 lines print?
```
>>> s1 = "Holberton"
>>> s2 = s1
>>> print(s1 == s2)
```
```
answer -> True
```

### [7. Is the same](./7-answer.txt)
* What do these 3 lines print?
```
>>> s1 = "Holberton"
>>> s2 = s1
>>> print(s1 is s2)
```
```
answer -> True
```

### [8. Is really equal](./8-answer.txt)
* What do these 3 lines print?
```
>>> s1 = "Holberton"
>>> s2 = "Holberton"
>>> print(s1 == s2)
```
```
answer -> True
```

### [9. Is really the same](./9-answer.txt)
* What do these 3 lines print?
```
>>> s1 = "Holberton"
>>> s2 = "Holberton"
>>> print(s1 is s2)
```
```
answer -> True
```

### [10. And with a list, is it equal](./10-answer.txt)
* What do these 3 lines print?
```
>>> l1 = [1, 2, 3]
>>> l2 = [1, 2, 3] 
>>> print(l1 == l2)
```
```
answer -> True
```

### [11. And with a list, is it the same](./11-answer.txt)
* What do these 3 lines print?
```
>>> l1 = [1, 2, 3]
>>> l2 = [1, 2, 3] 
>>> print(l1 is l2)
```
```
answer -> False
```

### [12. And with a list, is it really equal](./12-answer.txt)
* What do these 3 lines print?
```
>>> l1 = [1, 2, 3]
>>> l2 = l1
>>> print(l1 == l2)
```
```
answer -> True
```

### [13. And with a list, is it really the same](./13-answer.txt)
* What do these 3 lines print?
```
>>> l1 = [1, 2, 3]
>>> l2 = l1
>>> print(l1 is l2)
```
```
answer -> True
```

### [14. List append](./14-answer.txt)
* What does this script print?
```
l1 = [1, 2, 3]
l2 = l1
l1.append(4)
print(l2)
```
```
answer -> [1, 2, 3, 4]
```

### [15. List add](./15-answer.txt)
* What does this script print?
```
l1 = [1, 2, 3]
l2 = l1
l1 = l1 + [4]
print(l2)
```
```
answer -> [1, 2, 3]
```

### [16. Integer incrementation](./16-answer.txt)
* What does this script print?
```
def increment(n):
    n += 1

a = 1
increment(a)
print(a)
```
```
answer -> 1
```

### [17. List incrementation](./17-answer.txt)
* What does this script print?
```
def increment(n):
    n.append(4)

l = [1, 2, 3]
increment(l)
print(l)
```
```
answer -> [1, 2, 3, 4]
```

### [18. List assignation](./18-answer.txt)
* What does this script print?
```
def assign_value(n, v):
    n = v

l1 = [1, 2, 3]
l2 = [4, 5, 6]
assign_value(l1, l2)
print(l1)
```
```
answer -> [1, 2, 3]
```

### [19. Copy a list object](./19-copy_list.py)
* Write a function def copy_list(l): that returns a copy of a list.

*    The input list can contain any type of objects
*    Your file should be maximum 3-line long (no documentation needed)
*    You are not allowed to import any module
```
guillaume@ubuntu:~/0x09$ cat 19-main.py
#!/usr/bin/python3
copy_list = __import__('19-copy_list').copy_list

my_list = [1, 2, 3]
print(my_list)

new_list = copy_list(my_list)

print(my_list)
print(new_list)

print(new_list == my_list)
print(new_list is my_list)

guillaume@ubuntu:~/0x09$ ./19-main.py
[1, 2, 3]
[1, 2, 3]
[1, 2, 3]
True
False
guillaume@ubuntu:~/0x09$ wc -l 19-copy_list.py 
3 19-copy_list.py
guillaume@ubuntu:~/0x09$ 
```
```
answer -> 

	#!/usr/bin/python3
	# -*- coding: utf-8 -*-
	"""
	Created on Tue May 26 09:11:17 2020

	@author: Robinson Montes
	"""
	def copy_list(l):
	    return l[:]
```

### [20. Tuple or not?](./20-answer.txt)
```
a = ()
```
Is a a tuple? Answer with Yes or No.
```
answer -> Yes
```

### [21. Tuple or not?](./21-answer.txt)
```
a = (1, 2)
```
Is a a tuple? Answer with Yes or No.
```
answer -> Yes
```

### [22. Tuple or not?](./22-answer.txt)
```
a = (1)
```
Is a a tuple? Answer with Yes or No.
```
answer -> No
```

### [23. Tuple or not?](./23-answer.txt)
```
a = (1, )
```
Is a a tuple? Answer with Yes or No.
```
answer -> Yes
```

### [24. Richard Sim's special #0](./24-answer.txt)
* What does this script print?
```
a = (1)
b = (1)
a is b
```
```
answer -> True
```

### [25. Richard Sim's special #1](./25-answer.txt)
* What does this script print?
```
a = (1, 2)
b = (1, 2)
a is b
```
```
answer -> False
```

### [26. Richard Sim's special #2](./26-answer.txt)
* What does this script print?
```
a = ()
b = ()
a is b
```
```
answer -> True
```

### [27. Richard Sim's special #3](./27-answer.txt)
```
>>> id(a)
139926795932424
>>> a
[1, 2, 3, 4]
>>> a = a + [5]
>>> id(a)
```
Will the last line of this script print 139926795932424? Answer with Yes or No.
```
answer -> No
```

### [28. Richard Sim's special #4](./28-answer.txt)
```
>>> a
[1, 2, 3]
>>> id (a)
139926795932424
>>> a += [4]
>>> id(a)
```

Will the last line of this script print 139926795932424? Answer with Yes or No.
```
answer -> Yes

---

## Author
* **Ricardo Sass** - [bluegalaxy13](https://github.com/bluegalaxy13)