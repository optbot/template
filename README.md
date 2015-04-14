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
    $ mkdir mypackage
    $ cp template/* template/.gitignore template/.jscsrc mypackage/
    $ cd mypackage
    $ git init

Then set up the connection to your remote repo on GitHub.

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
