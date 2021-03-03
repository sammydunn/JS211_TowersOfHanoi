'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// An object that represents the three stacks of Towers of Hanoi; 
  // * each key is an array of Numbers: 
    // * A is the far-left, 
    // * B is the middle, 
    // * C is the far-right stack
      // * Each number represents the largest to smallest tokens: 
        // * 4 is the largest, 
        // * 1 is the smallest

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

// Start here. What is this function doing?
// this is setting up the board
const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

// Next, what do you think this function should do?
//this function should move each token from each peg
//it needs to be able to move more than one token stacked on one another
const movePiece = (startStack, endStack) => {
 
 let piece = stacks[startStack].unshift(stacks[endStack].shift(piece))

  // the .unshift will will take the start stack and shift it to the beginning 
  

}

// Before you move, should you check if the move it actually allowed? Should 3 be able to be stacked on 2
//this uses the contionals to see if there has been an illegal move made
const isLegal = (startStack, endStack) => {
  // Your code here
if(stacks[startStack].lenght > 0){
  if(stacks[endStack].length == 0 || stacks[endStack].slice(-1) > stacks[startStack].slice(-1)){
    return true
  } else {
    return false
  }
}
}

// What is a win in Towers of Hanoi? When should this function run?
// this function calls on the test to see if there is a win
//it will call on the array length to see if there are full stacks
//if the conditions are met it will return true otherwise return false
const checkForWin = (startStack, endStack) => {
  // Your code here
if(stacks["c"].lenght == 4 || stacks["b"].length == 4){
  return true
} else {
  return false
}
}

// When is this function called? What should it do with its argument?
// This tells the user when there has been a win
//also tells user when a piece can't be moved
const towersOfHanoi = (startStack, endStack) => {
  // Your code here
if(isLegal(startStack,endStack)){
  movePiece(startStack,endStack)
} else {
  return console.log("can't move there")
} if (checkForWin()) {
  return console.log("Winner!")
}
}

const getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
