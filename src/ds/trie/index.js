import Trie from "./trie.js";

export default function () {
  const words = ["app", "ace", "ape"];

  const trie = new Trie();
  words.forEach((word) => trie.insert(word));

  console.log(trie.search("apple"));
  console.log(trie.startWith("app"));
}
