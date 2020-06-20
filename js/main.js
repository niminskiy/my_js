'use strict';

let x = 2;
let y = 4;
let n = 'string';
console.log(n.toUpperCase());

console.log((x + y) + ', ' + n.toUpperCase());

console.log(x * y);

let node = document.createElement('div');
let textnode = document.createTextNode('More');
node.appendChild(textnode);
node.getElementById('buttons').appendChild(node);