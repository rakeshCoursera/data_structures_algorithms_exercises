// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require('./queue');

function weave(sourceOne, sourceTwo) {
  const q = new Queue();

  while (sourceOne.peek() || sourceTwo.peek()) {
    if (sourceOne.peek()) {
      q.add(sourceOne.remove());
    }

    if (sourceTwo.peek()) {
      q.add(sourceTwo.remove());
    }
  }

  return q;
}

/*
function weave(sourceOne, sourceTwo) {
  const newQ = new Queue();
  while(sourceOne.data.length > 0 && sourceTwo.data > 0){
    newQ.add(sourceOne.remove());
    newQ.add(sourceTwo.remove());
  }

  while(sourceOne.data.length > 0) {
    newQ.add(sourceOne.remove());
  }

  while(sourceTwo.data.length > 0) {
    newQ.add(sourceTwo.remove());
  }

  return newQ;
}
*/

// without affecting queues in argument
/* function weave(sourceOne, sourceTwo) {
  const newQ = new Queue();
  const q1data = sourceOne.data.slice();
  const q2data = sourceTwo.data.slice();
  while(q1data.length > 0 && q2data.length > 0){
    newQ.add(q1data.pop());
    newQ.add(q2data.pop());
  }

  if(q1data.length > 0) {
    q1data.forEach(val => newQ.add(val));
  }

  if(q2data.length > 0) {
    q2data.forEach(val => newQ.add(val));
  }

  return newQ;
}*/

module.exports = weave;
