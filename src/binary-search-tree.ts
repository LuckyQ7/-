/**
 * @description 二叉树遍历
 */

interface IBinaryTree {
  value: number;
  left: IBinaryTree | null;
  right: IBinaryTree | null;
}

const tree: IBinaryTree = {
  value: 4,
  left: {
    value: 3,
    left: {
      value: 1,
      left: null,
      right: null,
    },
    right: {
      value: 2,
      left: null,
      right: null,
    },
  },
  right: {
    value: 5,
    left: {
      value: 6,
      left: null,
      right: null,
    },
    right: {
      value: 7,
      left: null,
      right: null,
    },
  },
};

/**
 * @description 前序遍历
 */

function binaryTreeSearch1(tree: IBinaryTree | null) {
  if (tree == null) return;
  console.log(tree.value);
  binaryTreeSearch1(tree.left);
  binaryTreeSearch1(tree.right);
}

/**
 * @description 中序遍历
 */

function binaryTreeSearch2(tree: IBinaryTree | null) {
  if (tree == null) return;
  binaryTreeSearch2(tree.left);
  console.log(tree.value);
  binaryTreeSearch2(tree.right);
}

/**
 * @description 后序遍历
 */

function binaryTreeSearch3(tree: IBinaryTree | null) {
  if (tree == null) return;
  binaryTreeSearch3(tree.left);
  binaryTreeSearch3(tree.right);
  console.log(tree.value);
}

binaryTreeSearch3(tree);
