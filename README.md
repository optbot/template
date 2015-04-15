template
===
Template for new packages.

Usage
---
### Basic
1.  Install:
    
        $ npm install

2.  Run:

        $ sudo npm start
       
### Details
To start a new package called `mypackage`:

    $ cd $HOME/workspace
    $ mkdir mypackage && cd mypackage
    $ git clone git@github.com:optbot/template.git .
    $ rm -rf .git/
    $ git init

Then set up the connection to a blank remote repo on GitHub.

Testing
---
### Functionality
    $ npm test

### Code conformity
    $ jshint lib test
    $ jscs .

Connects to
---
No connections
