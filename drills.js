/* 
input 3,1,4,6,9,2,5,7

                  3
                /  \
               1    4
                \     \
                 2    6
                     /  \
                    5   9
                        /
                       7 

 =============================
    Remove the root
 ===============================

                   4
                /  \
               1    6
                \     \
                 2     9
                     /  \
                    5   7
                        
                       

 */

// input 3,1,4,6,9,2,5,7

const bshClass = require('./bshClass');

const newBSH = new bshClass();

newBSH.insert(3, 3);
newBSH.insert(1, 1);
newBSH.insert(4, 4);
newBSH.insert(6, 6);
newBSH.insert(9, 9);
newBSH.insert(2, 2);
newBSH.insert(5, 5);
newBSH.insert(7, 7);

// console.log('find 5 =', newBSH.find(5));
// console.log('find 7 =', newBSH.find(7));

//console.log(newBSH);

/* =======================================
    What does  it do
========================================*/
function tree(t) {
	if (!t) {
		return 0;
	}
	return tree(t.left) + t.value + tree(t.right);
}

// const tree1 = tree(newBSH);
// console.log('============== What does it do ============');
// console.log(tree1);

//QUESTION 5 ------------------------------------------------

function findHeight(tree) {
	if (!tree) {
		return 0;
	}

	if (tree.left === null && tree.right === null) {
		return 1;
	}

	if (tree.left === null) {
		return findHeight(tree.right) + 1;
	}

	if (tree.right === null) {
		return findHeight(tree.left) + 1;
	}

	return Math.max(findHeight(tree.left), findHeight(tree.right)) + 1;
}
// console.log(newBSH.key)
// console.log(findHeight(newBSH))

//QUESTION 6 ------------------------------------------------

//Write an algorithm to check whether an arbitrary
//binary tree is a binary search tree, assuming the tree does not contain duplicates.

// right is greater than parent, or left is less
// if only one node, node should not have a right or left
// if leaf, no right or left
// each node has a key
// recursively, starting at head, check subtrees based on conditions above

function checkIfBst(tree) {
	console.log(tree);
	//base case -> once you get to a tree with no subtrees
	if (tree.left === null && tree.right === null) {
		console.log('testing');
		return true;
	}
	if (tree.parent === null) {
		if (tree.left === null) {
			return checkIfBst(tree.right);
		} else {
			return checkIfBst(tree.left);
		}
	}

	if (tree.left === null) {
		console.log('testing1');
		return checkIfBst(tree.right);
	}

	if (tree.right === null) {
		console.log('testing2');
		return checkIfBst(tree.left);
	}

	if (
		tree.left.value > tree.parent.value ||
		tree.right.value < tree.parent.value
	) {
		// console.log('tree left', tree.left.value, 'parent', tree.parent.value)
		return false;
	}

	if (tree.left.value < tree.parent.value) {
		console.log('testing4');
		return checkIfBst(tree.right);
	}
	if (tree.right.value > tree.parent.value) {
		console.log('testing5');
		return checkIfBst(tree.right);
	}
}
// checkIfBst(newBSH)
//console.log(checkIfBst());

/* ==============================
        3rd largest node
===============================*/

const state = {
	n: 3,
	result: null,
};

function largest3rd(tree, obj) {
	if (tree.right !== null) {
		largest3rd(tree.right, obj);
		if (obj.result !== null) {
			return;
		}
	}

	if (!--obj.n) {
		obj.result = tree.key;
		return;
	}

	if (tree.left) {
		largest3rd(tree.left, obj);
	}
}

largest3rd(newBSH, state);
console.log(state.result);

/* ================================
        3rd largest solution
=========================================*/
//Write an algorithm to find the third largest value in a binary search tree
function nth_largest(tree, state) {
	//Finding the largest node means traversing the right first.
	if (tree.right) {
		nth_largest(tree.right, state);
		if (state.result) return;
	}
	if (!--state.n) {
		//Found it.
		state.result = tree.key;
		return;
	}
	if (tree.left) nth_largest(tree.left, state);
}

function third_largest(tree) {
	//Special case: empty tree.
	if (tree.key == null) return null;
	let state = { n: 3, result: null };
	nth_largest(tree, state);
	return state.result;
}

/* ==============================
        Balanced BST
===============================*/
function createBalancedBst(arr, start = 0, end = arr.length) {
	if (end === start) {
		return null;
	}
	const middleIndex = Math.floor((end - start) / 2);
	const middleValue = arr[middleIndex];
	const node = new bshClass(middleValue);
	node.left = createBalancedBst(arr, 0, middleIndex);
	node.right = createBalancedBst(arr, middleIndex + 1, end);
	return node;
}

/* ================================
        Are they the same BST
======================================*/

const tree1 = new bshClass();
// iput  3, 5, 4, 6, 1, 0, 2

tree1.insert(3, 'a');
tree1.insert(5, 'b');
tree1.insert(4, 'c');
tree1.insert(6, 'd');
tree1.insert(1, 'e');
tree1.insert(0, 'f');
tree1.insert(2, 'g');

const tree2 = new bshClass();
// iput  3, 1, 5, 2, 4, 6, 0

tree2.insert(3, 'a');
tree2.insert(1, 'b');
tree2.insert(5, 'c');
tree2.insert(2, 'd');
tree2.insert(4, 'e');
tree2.insert(6, 'f');
tree2.insert(0, 'g');

console.log('trre1 =', tree1);
console.log('trre2 =', tree2);
