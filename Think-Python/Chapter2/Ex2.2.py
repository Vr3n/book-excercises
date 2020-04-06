# 2. Suppose the cover price of a book is $26.95, but bookstores get a 40% discount. Shipping costs $3 for the first copy and 75 cents for each additional copy. what is the total wholesale cost of 60 copies.

cover_price = 24.95
discount_percentage = 40
number_of_books = 60

def ship_cost(n):
	"""
	Function to calculate shipping cost per book.
	"""
	if n == 1:
		return (n * 3)  # number of books * cost of shipping.
	else:
		return (3 + (n - 1) * 0.75) # Additional book copy costs $3 and 75cents.


def discount(price, d):
	"""
	Function to calculate discount.
	"""
	return (price - (price * (d / 100))) # Discount of 40%.


def wholesale_price(price, number_of_books):
	"""
	Function to Calculate Wholesale price.
	"""
	return ((price * number_of_books) + ship_cost(number_of_books))

d = discount(cover_price, discount_percentage)
wp = wholesale_price(d, number_of_books)

print(f" The discounted price is {d}")
print(f"The wholesale price of the book is {wp}") 