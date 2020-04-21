inventory = {
    'rope': 1,
    'torch' : 6,
    'gold coin': 42,
    'dagger': 1,
    'arrow': 12
}

def displayInventory(inv):
    total_items = 0
    for k,v in inv.items():
        print(f'{k} - {v}')
        total_items += v
    return total_items

print(f"Total number of items are: {displayInventory(inventory)} \n")

print(f"You killed the Dragon, let's see what he has in his loot!")

dragonLoot = ['gold coin', 'dagger', 'gold coin', 'gold coin', 'ruby' ]

print(dragonLoot)

print("Now looting the inventory!!! \n")

def addToInventory(inv, loot):
    for x in loot:
        inv.setdefault(x, 0)
        inv[x] += 1

addToInventory(inventory, dragonLoot)

print(f"After looting the dragon loot!")
#displayInventory(inventory)
print(f"Total number of items are: {displayInventory(inventory)} \n")

