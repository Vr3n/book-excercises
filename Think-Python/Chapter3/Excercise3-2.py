""" A function object is a value you can assign to a variable or pass as an argument. For example, do_twice is a function that takes a function as an argument and calls it twice.:
	def do_twice(f):
		f()
		f()

	Here's an example that uses do_twice to call a function names print_span twice:
		def print_span():
			print('spam')


		do_twice(print_spam)

	1. Type this example into a script and test it.

	2. Modify do_twice so that it takes two arguments, a function object and a value, and calls the function twice, passing the value as an argument.

	3. Copy the definition of print_twice from earlies in this chapter to your script.

	4. Use the Modified version of do_twice to call print_twice twice, passing "spam" as an argument.

	5. Define a new function called do_four that takes a function object and a value and calls the function four times, passing the value as a parameter. There should be only two statements in the body of this function, not four. 

"""

def print_string(s):
	print(s)

# print_spam()

def do_twice(f, p):
	f(p)
	f(p)

do_twice(print_string, 'viren')

def print_twice(s):
	print(s)
	print(s)

do_twice(print_twice, "spam")

def do_four(f, p):
	f(p ** 4)
	# for _ in range(4):
	# 	f(p)

do_four(print_string, "Geralt")