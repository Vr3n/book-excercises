birthdays = {
    'Alice': 'Apr 1',
    'Bob': 'Dec 12',
    'Karol': 'Mar 4'
}

while True:
    print('Enter a name: (blank to quit)')
    name = input()
    if name == "":
        break

    if name in birthdays:
        print(f'{birthdays[name]} is birthday of {name}')
    else:
        print(f"I do not have birthday information for {name}")
        print("When is  their birthday?")
        bday = input()
        birthdays[name] = bday
        print('Birthday database updated.')
