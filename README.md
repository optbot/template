template
===
Template for new packages.

Usage
---
1.  Install `template` dependencies:
    
        $ npm install

2.  Build `template`:

        $ sudo grunt
       
Details
---
To start a new package called `mypackage`:

    $ cd $HOME/workspace
    $ mkdir mypackage
    $ cp template/* mypackage/
    $ cp template/.gitignore mypackage/
    $ cd mypackage
    $ git init

Then set up the connection to your remote repo on GitHub.
