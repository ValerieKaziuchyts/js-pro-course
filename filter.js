function filter(...params) {
    const arr = params;
    const modifiedArr = [];

    arr.filter((item, index) => {
        if (arr.indexOf(item) === index) {
            modifiedArr.push(item);
        };
    });
    console.log('test-filter');
    console.log(modifiedArr);
    return modifiedArr;
}

filter(8, 5, 67, 3, 4, 6, 67, 7, 4, 5, 6, 7, 8, 4, 3, 4, 6, 7, 8, 9); // [8, 5, 67, 3, 4, 6, 7, 9]
filter(1, 4, 1, 3, 2, 3, 1, 6, 7, 5, 7, 2, 3, 4, 5, 7, 1, 2, 34, 1, 3, 4, 6, 3, 3, 5, 6, 7); // [1, 4, 3, 2, 6, 7, 5, 34]