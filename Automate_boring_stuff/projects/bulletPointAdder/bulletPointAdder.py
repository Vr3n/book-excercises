#! python3
# bulletPointAdder.py - Adds wikipedia bullet points to the start of each line
# of text on the clipboard.

import pyperclip
import pdb

text = "Lists of animals\nLists of aquarium life\nLists of biologists by author"

# TODO: Separate lines and add stars.
def bulletPointAdder(text):
    #pdb.set_trace()
    lines = text.split('\n')
    for i in range(len(lines)):
         lines[i] = '*' + lines[i]


print(bulletPointAdder(text))
