function filter(...params) {
    const modifiedArr = params.filter((item, index) => params.indexOf(item) === index);
    return modifiedArr;
}
