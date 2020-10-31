const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value = '( )') {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (!isNaN(position) && position > 0 && position <= this.chain.length) {
      this.chain.splice(position-1, 1);
      return this;
  } else {
      this.chain = [];
      throw new Error();
  }
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    let res = "";
    for (let link of this.chain) {
        res += `( ${link} )~~`;
    }
    this.chain = [];
    return res.slice(0, -2);
  },
};

module.exports = chainMaker;
