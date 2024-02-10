class TrieNode {
  constructor() {
    this.children = new Map();
    this.isWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    if (word.length === 0) {
      return false;
    }

    let currNode = this.root;

    for (const char of word) {
      if (!currNode.children.has(char)) {
        currNode.children.set(char, new TrieNode());
      }

      currNode = currNode.children.get(char);
    }

    currNode.isWord = true;
  }

  search(word) {
    if (word.length === 0) {
      return false;
    }

    let currNode = this.root;
    for (let char of word) {
      if (!currNode.children.has(char)) {
        return false;
      }
      currNode = currNode.children.get(char);
    }

    return currNode.isWord;
  }

  startWith(prefix) {
    if (prefix.length === 0) {
      return false;
    }
    let currNode = this.root;

    for (let char of prefix) {
      if (!currNode.children.has(char)) {
        return false;
      }

      currNode = currNode.children.get(char);
    }

    return true;
  }
}

export default Trie;
