const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  treeRoot = null;
	
  root() {
    return this.treeRoot;
  }

  add(data) {
    this.treeRoot = addValue(this.treeRoot, data);

	function addValue(node, value) {
		if (!node) {
			return new Node(value);
		}
		if (node.data === value) {
			return node;
		}
		if (node.data > value) {
			node.left = addValue(node.left, value);
		} else {
			node.right = addValue(node.right, value);
		}
		return node;
	}
  }

  has(data) {
    return searchValue(this.treeRoot, data);

	function searchValue(node, value) {
		if (!node) {
			return false;
		}
		if (node.data === value) {
			return true;
		}
		if (node.data > value) {
			return searchValue(node.left, value);
		} else {
			return searchValue(node.right, value);
		}
	}
  }

  find(data) {
    return getNode(this.treeRoot, data); 

	function getNode(node, value) {
		if (!node) {
			return null;
		}
		if (node.data === value) {
			return node;
		}
		if (node.data > value) {
			return getNode(node.left, value);
		} else {
			return getNode(node.right, value);
		}
	}
  }

  remove(data) {
    this.treeRoot = doRemove(this.treeRoot, data);

	function doRemove(node, value) {
		if (!node) {
			return null;
		}
		if (node.data > value) {
			node.left = doRemove(node.left, value);
			return node;
		}
		if (node.data < value) {
			node.right = doRemove(node.right, value);
			return node;
		}
		if (node.data === value) {
			if (!node.left && !node.right) {
				return null;
			}
			if (!node.left) {
				node = node.right;
				return node;
			}
			if (!node.right) {
				node = node.left;
				return node;
			}
			let leftMax = node.left;
			while (leftMax.right) {
				leftMax = leftMax.right;
			}
			node.data = leftMax.data;
			node.left = doRemove(node.left, leftMax.data);
			return node;
		}
	}
  }

  min() {
    return getMin(this.treeRoot);

	function getMin(node) {
	  if (!node) {
		return null;
	  }
	  if (!node.left) {
		return node.data;
	  }
	  let leftMin = node.left;
	  while (leftMin.left) {
		leftMin = leftMin.left;
	  }
	  return leftMin.data;
	}
  }

  max() {
    return getMax(this.treeRoot);

	function getMax(node) {
	  if (!node) {
		return null;
	  }
	  if (!node.right) {
		return node.data;
	  }
	  let rightMax = node.right;
	  while (rightMax.right) {
		rightMax = rightMax.right;
	  }
	  return rightMax.data;
	}
  }
}

module.exports = {
  BinarySearchTree
};