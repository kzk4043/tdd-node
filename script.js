// `process.argv`でコマンドライン引数を取得
const args = process.argv.slice(2);

const calculator = (args) => {
  const operation = args[0];
  const numbers = args.slice(1).map((num) => parseInt(num, 10));

  // operationによって処理を分岐
  switch (operation) {
    case "add":
      console.log(add(numbers));
      break;
    case "subtract":
      console.log(subtract(numbers));
      break;
    case "multiply":
      console.log(multiply(numbers));
      break;
    case "divide":
      console.log(divide(numbers));
      break;
    default:
      console.log("Invalid operation");
      return;
  }
};

// 加算
const add = (numbers) => {
  return numbers.reduce((acc, num) => acc + num, 0);
};

// 減算
const subtract = (numbers) => {
  return numbers.reduce((acc, num) => acc - num);
};

// 乗算
const multiply = (numbers) => {
  return numbers.reduce((acc, num) => acc * num, 1);
};

// 除算
const divide = (numbers) => {
  return numbers.reduce((acc, num) => acc / num);
};

calculator(args);
