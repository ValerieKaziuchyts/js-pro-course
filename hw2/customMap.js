function customMap(callback) {
    const helpArr = [];
    for(let i = 0; i < this.length; i++) {
        helpArr.push(callback(this[i], i, this));
    };
    return helpArr;
  }
  
  Array.prototype.customMap = customMap;

  const array = ['hello', 'world', 'bye'];
  const newArray = array.customMap((value, index, arr) => {
    return value + ' !!!';
  })
