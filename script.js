function createCounter(initialValue) {
    const userVariable = {
        userNumber: initialValue,
        changeNumber: initialValue,
    };

    let {userNumber = 0, changeNumber = 0} = userVariable;
    console.log(userNumber);

    return {
      increment(value) {
        const incrementVariable = {
            incrementNumber: value,
        };

        let {incrementNumber = 1} = incrementVariable;
        changeNumber += incrementNumber;
        console.log(changeNumber);

        return {changeNumber, ...this};
      },

      decrement(value) {
        const decrementVariable = {
            decrementNumber: value,
        };

        let {decrementNumber = 1} = decrementVariable;
        changeNumber -= decrementNumber;
        console.log(changeNumber);

        return {changeNumber, ...this};
      },

      showValue() {
        console.log(changeNumber);

        return changeNumber;
      },

      discard() {
        changeNumber = userNumber;
        console.log(changeNumber);

        return {changeNumber, ...this};
      },
    };
}

const counter = createCounter(0);

console.log(`test-counter-basic`);
    counter.increment(); // 1
    counter.increment(); // 2
    counter.increment(3); // 5

    counter.showValue(); // 5

    counter.decrement(); // 4
    counter.decrement(10); // -6

    counter.discard(); // 0

console.log(`test-counter-chainable`);
counter.increment().increment(20).decrement(3).showValue(); // 18
