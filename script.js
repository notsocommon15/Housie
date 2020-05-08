new Vue({
  el: ".tambola",
  data() {
    return {
      boardNumbers: 90,
      checked: [],
      currentNumber: 0
    };
  },
  computed: {
    isFinished() {
      return this.checked.length === 90;
    }
  },
  methods: {
    isChecked(n) {
      return this.checked.includes(n+1);
    },
    pickNumber() {
      while (1) {
        let number = Math.ceil(Math.random() * this.boardNumbers);
        if (!this.checked.includes(number)) {
          this.checked.push(number);
          this.currentNumber = number;
          break;
        }
      }
    }
  }
});
