// dom is tree data structure

// Binary Tree

// 1.each node in this tree  one two or zero nodes and each child have one parent node

// types:
// 1.perfect binary tree
// 2.full binary tree

// binary search trees  

// requirement to be a binary search tree. To be a binary search tree, for every node, 
// all of the nodes in its left tree must be <= the node, and all of the nodes in its right subtree 
// must be > the node. Consider the following four examples...
// a.  5   -> TRUE
//    / \
//   2   7
 

// b.  5   -> FALSE, because the 6 is not ok to the left of the 5
//    / \
//   6   7
 

// c.   5  -> TRUE
//     / \
//    2   7
//   /
//  1

// d.   5  -> FALSE, the 6 is ok with the 2, but the 6 is not ok with the 5
//     / \
//    2   7
//   / \
//  1   6

// For the first two cases, the right answer can be seen just by comparing each node to the two nodes
//  immediately below it. However, the fourth case shows how checking the BST quality may depend on 
//  nodes which are several layers apart -- the 5 and the 6 in that case.

// visualgo.net      // site to play bst  

// https://visualgo.net/en/bst


1.balanced binary Tree
2.unbalanced binary Tree