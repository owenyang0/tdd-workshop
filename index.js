const fizzBuzz = () => (
  Array.from({
    length: 100
  }, (_, index) => index)
  .map(_ => _ + 1)
  .map(_ => (_ % 3 === 0 && _ % 5 === 0) ? 'FizzBuzz' : _)
  .map(_ => _ % 3 === 0 ? 'Fizz' : _)
  .map(_ => _ % 5 === 0 ? 'Buzz' : _)
)

exports.fizzBuzz = fizzBuzz
