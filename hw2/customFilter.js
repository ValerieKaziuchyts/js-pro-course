function customFilter(callback) {
  const helpArr = [];
  for (let i = 0; i < this.length; i++) {
    let result = callback(this[i], i, this);
    if (result) {
      helpArr.push(this[i]);
    }
  }
  return helpArr;
}

Array.prototype.customFilter = customFilter;

const array = [6, 7, 8, 9, 10];
const newArray = array.customFilter ((value, index, array) => {
  const flag = value >= 8;
  return flag;
})
