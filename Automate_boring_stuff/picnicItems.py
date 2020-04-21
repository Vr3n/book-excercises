allGuests = {
    'Alice': { 'apples': 5, 'pretzels': 2 },
    'Bob' : {'ham sandwitches': 3, 'apples': 2 },
    'Carol': {'cups': 3, 'apple pies': 1}
}

def totalBrought(guests, item):
    numBrought = 0
    for k,v in guests.items():
        numBrought = numBrought + v.get(item, 0)
    return numBrought

print('Number of things being brought: ')
print(f" - Apples {str(totalBrought(allGuests, 'apples'))}")
print(f" - Cups { str(totalBrought(allGuests, 'cups')) } ")
print(f" - Ham Sandwitches { str(totalBrought(allGuests, 'ham sandwitches'))}")
print(f" - Apple Pies {str( totalBrought(allGuests, 'apple pies'))}")

