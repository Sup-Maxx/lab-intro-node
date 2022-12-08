class SortedList {
  constructor(items, length) {
    this.items = []
    this.length = 0
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a,b) => a-b)
  }

  get(pos) {
    if (pos) return this.items[pos]
    if (pos => this.length) throw new Error ("OutofBounds")
  }

  max() { // biggest number inside of the array
    if (this.items = []) {
      throw new Error ("EmptySortedList")
    }
    else return Math.max(...this.items)
  }

  min() { // smallest number inside of the array
    if (this.items = []) {
      throw new Error ("EmptySortedList")
    }
    else return Math.min(...this.items)
  }

  sum() {
    sum = this.items.reduce((acc,cV) => {
      return acc+cV
    }, 0)
    return sum
  }

  avg() {
    return this.sum()/this.length
  }
}

module.exports = SortedList;
