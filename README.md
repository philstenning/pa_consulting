
# Setup
Install the required packages from repo's root:
```
pip install -r requirements.txt
```

## VSCODE

If using Visual Studio code,
Install the following plugins this will make your code coding easier and the linting will point out errors, making the code consistent and 
keep all of us writing in the same style.

1. flake8: this is the code linter.
2. Prettier - Code formatter
3. markdownlint
4. Markdown All in One
5. Code Spell Checker
6. Python - the Microsoft version

Running the code in VSCode:

Pressing the F5 key should start VSCode running. It will run the file that currently selected or in focus so make sure app.py is in open and  selected.

if this is not working try adding a configuration file.

- Select the debug Icon on the left (Ctrl+Shift+D).
- From the drop down select box at top of the page ckick the arrow to open the box and scroll the bottom and select the 'Add Configuration'
- Check the .vscode folder and look for the lanch.json file
- Open and/or select the app.py and hit the F5 button again and it should now work.

## How to set up

Once you have installed all the plugins and restarted VSCode, press the F1 key.
Start typing 'python' and you will see the options for setting up the linter and interpreter.

- select flake8 for the linter
- select python3.7 for the interpreter. 

You will now have a new folder named .vscode, this folder is for your set-up and is not under source control
and will need to be set up on each machine you use.

## Use Git

Git is your friend, use it and learn to use it properly. 
https://learngitbranching.js.org/

You might find the tool https://www.gitkraken.com/ easier to use.

Work in a local branch!

Commit frequently so you can roll back if you need to.

To commit to the master branch you need to issue a pull request, do the following:

- Commit all your files to your working/Development branch
- push your changes to remote repo
- Create a 'pull request' from the github web interface.
  
When the code has been reviewed, if there are no issues or bugs, it can be added to the master branch.

## Issues and Bugs

If something is not working in the master branch, create a new 'issue' from the issues tab.