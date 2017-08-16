# gladys-dummy-module
A dummy module for the [Gladys-Project](https://www.gladysproject.com)

See documentation on [Gladys Doc](https://www.gladysproject.com/fr/installation/develop-module/)

---

This has been designed for early stages of comprehension on gladys' modules dev and mostly inspired by Gladys Doc



It does nothing but installing files in '/api/hooks/slug'
Slug is the slug you define when installing a module in advanced mode.

# Basics :

### All starts with the file **index.js**.
This file should be a node module ( [Node doc](https://nodejs.org/api/modules.html#modules_modules) ) that exports a function which takes 'sails' as only argument

### Your Gladys module exposes the object returned by this node module

### By convention, all code resides in /lib :

index.js in root folder:

        // index.js
        module.exports = function(sails) {
            const myAwesomeFunction = require('./lib/myAwesomeFunction');
            const iLoveGladys = require('./lib/iLoveGladys');

            return {
                myAwesomeFunction : myAwesomeFunction,
                iLoveGladys : iLoveGladys
            }
        };

the rest of the code in /lib
<pre>
| - index.js
| - lib
    | - myAwesomeFunction.js
    | - iLoveGladys.js

</pre>


### Every property of the object returned by index.js should be a promise

If your not familiar with Promise : [check this](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Promise)

Most existing Gladys modules use 'bluebird' to "promisify" : [See doc here](http://bluebirdjs.com/docs/getting-started.html)

        // /lib/myAwesomeFunction.js

        const Promise = require('bluebird');

        module.exports = function myFirstFunction() {
            return new Promise(function(resolve, reject) {
                // async work here
                const valueToReturn = 42;

                resolve(valueToReturn);

                // if something fails
                reject(new Error('Oups'));
            })
        };

### Run your code in scripts

Simply do :

    gladys.modules.myAwesomeModule.MyStunningFunc()

### How to use this repository as base

If u don't like git ~~and are silly~~... Copy paste the content of each file respecting the tree.

Or...


1. Clone this repo :

        cd /path/To/My/Projects/Directory
        git clone https://github.com/Boimb/gladys-dummy-module.git

2. Create your new repo in github or gitlab or whatever.

3. Clone it

        git clone <my-awesome-module-git-uri>

4. Copy files from gladys-dummy-module to my-awesome-module

        /bin/cp -rf gladys-dummy-module my-awesome-module

5. Remove reference to initial git repo

        cd my-awesome-module
        rm -R .git

6. Push new files

        git init
        git add .
        git commit -a -m "Initial commit"
        git remote add origin <my-awesome-module-git-uri>
        git push -u --force origin master

7. Now you're on your own...

### Licence

![][https://licensebuttons.net/l/by-nc-sa/3.0/nl/88x31.png]

Distributed under Creative Commons 3.0 France [Licence](https://creativecommons.org/licenses/by-nc-sa/3.0/fr/)

Not officially part of the Gladys Project created by Pierre Gilles Leymarie
But prowdly promoting it and contributing.

Visit : [Gladys Project GitHub page](https://github.com/GladysProject/Gladys)