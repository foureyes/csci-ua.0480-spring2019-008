/*
 * oops... 2 many callbacks
 * findOne(function() {
 *   hash(function() {
 *      save(function() {
 *        res.render()
 *      })
 *   })
 *
 * })
 * we can only log response
 * once request has been completed
 *
 * if we want to do something after an async task
 * dump it in the callback
 */

// an alternative... we can use promises
// this returns a promise that represents an async request
// (uses xmlhttprequest)
function myFetch(method, url) {
  const p = new Promise(function(fulfill, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    // xhr.setRequestHeader('Content-Type', 'x-www-formurlencoded');
    xhr.addEventListener('load', function() {
      if(xhr.status >= 200 && xhr.status < 400) {
        fulfill(xhr.responseText);  
      } else {
        reject('error');
      }
    });
    xhr.send();
    // xhr.send(post body goes here);
  });
  return p;
}

/*function main() {
  myFetch('GET', '/api/movies')
    .then(console.log.bind(null, 'using promises:'));
}
*/
/*async function main() {
  const response = await myFetch('GET', '/api/movies')
  console.log('using promises and async await', response);
}
*/
/*
function main() {
  fetch('/api/movies')
    .then((response) => response.json())
    .then((data) => console.log('using fetch', data));
}
*/
async function main() {
  const response = await fetch('/api/movies')
  const text = await response.json()
  console.log('using fetch and async await', text);
}


document.addEventListener("DOMContentLoaded", main);










