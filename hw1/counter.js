function createCounter(initialValue) {
    const userVariable = {
        userNumber: initialValue,
        changeNumber: initialValue,
    };

    let {userNumber = 0, changeNumber = 0} = userVariable;

    return {
      increment(value) {
        const incrementVariable = {
            incrementNumber: value,
        };

        let {incrementNumber = 1} = incrementVariable;
        changeNumber += incrementNumber;
        
        return {changeNumber, ...this};
      },

      decrement(value) {
        const decrementVariable = {
            decrementNumber: value,
        };

        let {decrementNumber = 1} = decrementVariable;
        changeNumber -= decrementNumber;

        return {changeNumber, ...this};
      },

      showValue() {
        return changeNumber;
      },

      discard() {
        changeNumber = userNumber;

        return {changeNumber, ...this};
      },
    };
}
