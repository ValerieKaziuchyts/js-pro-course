function filter(...params) {
    const arr = params;
    const modifiedArr = [];

    arr.filter((item, index) => {
        if (arr.indexOf(item) === index) {
            modifiedArr.push(item);
        };
    });
    return modifiedArr;
}
