function createCounter(initialValue) {
   let userNumber = initialValue || 0;
   let changeNumber = initialValue || 0;

    return {
      increment(value) {
        changeNumber += value || 1;
        return this;
      },

      decrement(value) {
        changeNumber -= value || 1;
        return this;
      },

      showValue() {
        return changeNumber;
      },

      discard() {
        changeNumber = userNumber;
        return this;
      },
    };
}
