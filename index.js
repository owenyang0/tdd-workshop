const fizzBuzz = () => (
  Array.from({
    length: 100
  }, (_, index) => index)
  .map(_ => _ + 1)
)

exports.fizzBuzz = fizzBuzz
