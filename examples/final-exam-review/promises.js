/*
 * object that represents an async sync 
 * status
 *  * pending
 *  * finished successfully
 *  * finished with an error
 * what to do when it's done
 * what to do when there's an error
 */
/*
promise constructor takes function as argument
argument... and run it (bc it's a function... a function that 
  performs some async task)
argument > executor

promise object has then method.... allows you to set both
fulfill and reject
then always returns a promise
*/

const p1 = new Promise(function(fulfill, reject) {
  fulfill(1);
});

const p2 = p1.then(function(val) {
  console.log(val);
  // return new Promise(function(fulfill, reject) {
  //  fulfill(100); 
  // });
  // same as above
  return 2;
})


p2.then(console.log);


/*
const p = new Promise(function(fulfill, reject) {
  console.log(1);
  fulfill(2); // will only be called after executor finishes
  console.log(3);
  // any async task that you want
  // reject(-1)
  // const sensorVal = 5;
  // fulfill(sensorVal);
  // call fulfill if task succeeded
  // call reject if task fails
});

p.then(console.log, function(val) {
  console.log('error', val)
});
*/

//p2 = p.then(console.log)
//p.then(console.log)
//  .then(...)
















