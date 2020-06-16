/* 
input 3,1,4,6,9,2,5,7

                  3
                /  \
               1   4
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

newBSH.insert(3, 1);
newBSH.insert(1, 4);
newBSH.insert(4, 6);
newBSH.insert(6, 9);
newBSH.insert(9, 2);
newBSH.insert(2, 5);
newBSH.insert(5, 7);
newBSH.insert(7, 6);
newBSH.insert(6, 4);

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

    if(!tree) {
        return 0;
    }

    if(tree.left === null && tree.right === null) {
        return 1;
    }

    if(tree.left === null) {
        return findHeight(tree.right) + 1;
    }

    if(tree.right === null) {
        return findHeight(tree.left) + 1;
    }

    return Math.max(findHeight(tree.left), findHeight(tree.right)) + 1
}
// console.log(newBSH.key)
console.log(findHeight(newBSH))