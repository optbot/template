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
#### Create a new service
To create a new service called `myservice`:

    $ cd $HOME/workspace
    $ mkdir myservice && cd myservice
    $ git clone git@github.com:optbot/template.git .
    $ rm -rf .git/
    $ git init

Then set up the connection to a blank remote repo on GitHub.

#### Dependent code
To confirm that you are picking up `@optbot` packages in
dependent code, add the following line to the "dependencies"
declaration in `package.json` in the dependent service:

    "dependencies": {
        ...,
        "@optbot/template": "git://github.com/optbot/template.git"
    }

Now you can test that the dependency is getting picked up properly
by writing in the JavaScript managing the dependent service:

    var template = require('@optbot/template');
    template();

When you run the code, you should then see the message `Hello from @optbot/template!`
logged to console.

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
