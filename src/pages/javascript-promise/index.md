---
title: A Quick Demo of Javascript Promises
date: 2017-08-11
---

### Using fetch

```javascript
let username = 'mrkjlchvz';
let url      = 'https://api.github.com/users/' + username + '/repos';

fetch(url)
  .then(response => {
    console.log(response);
    return response.json();
  })
  .then(data => {
    console.log(data); // the actual API data (list of repositories)
  });
```

### Using fetch, but with error checking

The above code looks good but lacks an error checking mechanism. What if we provided a
github username that does not exist? What if the github API is down?

Error checking is an important part when working with promises. Javascript makes it easy to do
this via the `.catch` callback.

Using our first example:

```javascript
fetch....
  .then....
  .then....
  .catch(error => {
    // send to error reporting service;
    // or maybe send an email;
    // or maybe just do nothing and show it to the console (bad example)
    console.error(error);
  });
```

### Writing your own Promises

```javascript
let employees = [
  { id: 1, name: 'mark', position: 'Web Developer' },
  { id: 2, name: 'billy', position: 'System Analyst' },
  { id: 3, name: 'mark', position: 'Chief Architect' },
  { id: 4, name: 'christopher', position: 'Mobile Developer' },
];

function getEmployeeByName(name) {
  // return a Promise object
  return new Promise((success, error) => {
    let employee = employees.find(emp => emp.name === name );

    if(employee) {
      success(employee);
    } else {
      error(Error('Employee not found'));
    }
  });
}

getEmployeeByName('mark')
  .then(data => {
    const { name, position } = data;
    console.log('Hello ' + name + ', your position is ' + position);
  })
  .catch(error => {
    console.log('Employee not found');
  });
```

If you will be writing your own promise objects, keep in mind that it accepts two
arguments like the example above.

The first argument is a `success` callback if the operation succeed and a data
is returned. In our case, we can consider it a `success` if the `name` we passed
exists on the `employees` array.

The second argument is an `error` callback if the operation fails. This is where
the `.catch()` will be used.

### Conclusion

In reality, it is not common to write your own promise object unless you really need
to. Most usually though, we will be consumers of functions that returns a promise and by
the time that happens, it will be a piece of cake!

Happy reading!

