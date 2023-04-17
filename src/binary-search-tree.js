const {NotImplementedError} = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
    constructor() {
        this.binary = null;
    }
    root() {
        return this.binary;
    }
    add(data) {
        // console.log('data:', data);
        this.binary = addElem(this.binary, data);
        // console.log('this.binary', this.binary)
        function addElem(node, data) {
            if (!node) {
                return new Node(data);
            }
            if (node.data === data) {
                return node;
            }
            if (data < node.data) {
                node.left = addElem(node.left, data);
            } else {
                node.right = addElem(node.right, data);
            }
            // console.log("Node:", node);
            return node;
        }
    }

    has(/* data */) {}

    find(/* data */) {}

    remove(/* data */) {}

    min() {
        if(!this.binary){
            return null;
        }
        let node = this.binary;
        while(node.left){
            node = node.left;
            // console.log("Node:", node.left);
        }
        // console.log("Node:", node.data);
        return node.data;
    }

    max() {
        if(!this.binary){
            return null;
        }
        let node = this.binary;
        while(node.right){
            // console.log("Node:", node.right);
            node = node.right;
        }
        // console.log("Node:", node.data);
        return node.data;
    }
}

module.exports = {
    BinarySearchTree
};