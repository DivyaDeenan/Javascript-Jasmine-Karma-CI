/**
 * Calculator function constructor.
 * @constructor
 */
function Calculator() {
  this.total = 0;
}

/**
 * Adds value to current total.
 *
 * @param {number} number
 * @returns {*}
 */
Calculator.prototype.add = function (number) {
  return this.total += number;
};

/**
 * Subtracts number from current total.
 *
 * @param {number} number
 * @returns {*}
 */
Calculator.prototype.subtract = function (number) {
  return this.total -= number;
};

/**
 * Multiplies value to current total.
 *
 * @param {number} number
 * @returns {*}
 */
Calculator.prototype.multiply = function (number) {
  return this.total *= number;
};

/**
 * Divides value to current total.
 *
 * @param {number} number
 * @returns {*}
 */
Calculator.prototype.divide = function (number) {
  if (number === 0) {
    throw new Error('Cannot divide by zero');
  }

  return this.total /= number;
};

/**
 * Getter that returns calculator version.
 */
Object.defineProperty(Calculator.prototype, 'version', {
  get: function () {
    return fetch('https://gist.githubusercontent.com/DivyaDeenan/55b148ce98af83c1ea6b7097d135dbd2/raw/003c322d70b880172b4b9894d5f490a5dc25901a/version.json')
      .then(function (result) {
        return result.json()
      })
      .then(function (json) {
        return json.version;
      });
  },
  enumerable: true,
  configurable: true
});
