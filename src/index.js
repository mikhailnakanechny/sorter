class Sorter {
  constructor() {
    // your implementation
     this.arr=[];
     this.compareFunction=function(x,y){return x-y;};
     }

  add(element) {
    // your implementation
      this.arr.push(element);
  }

  at(index) {
    // your implementation
      return this.arr[index];
  }

  get length() {
    // your implementation
      return this.arr.length;
  }

  toArray() {
    // your implementation
      return this.arr;
  }

  sort(indices) {
      indices.sort(function(x,y){return x-y});

      let newArr=[];

      for (let i=0;i<indices.length;i++){
          newArr.push(this.arr[indices[i]]);
          }

      newArr.sort(this.compareFunction);

      for (let i=0;i<indices.length;i++){
          this.arr[indices[i]]=newArr[i];
      }

  }

  setComparator(compareFunction) {
    // your implementation
      this.compareFunction=compareFunction;
  }
}

module.exports = Sorter;