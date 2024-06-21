// `process.argv`でコマンドライン引数を取得
const args = process.argv.slice(2);

const calculator = (args) => {
  const operation = args[0];
  const numbers = args.slice(1).map((num) => parseInt(num, 10));

  // 引数が数字以外だとエラーが発生する
  if (numbers.some((num) => isNaN(num))) {
    throw new Error("Invalid number");
  }

  // 31個以上の引数を指定するとエラーが発生する
  if (numbers.length > 30) {
    throw new Error("Too many numbers");
  }

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
  const result = numbers.reduce((acc, num) => acc + num, 0);

  // 計算結果が1000を超える場合は合計ではなく「too big」と文字列が返る
  if (result > 1000) {
    return "too big";
  }

  return result;
};

// 減算
const subtract = (numbers) => {
  const result = numbers.reduce((acc, num) => acc - num);

  // 計算結果がマイナスの場合は「negative number」と文字列が返る
  if (result < 0) {
    return "negative number";
  }

  return result;
};

// 乗算
const multiply = (numbers) => {
  const result = numbers.reduce((acc, num) => acc * num, 1);

  // 計算結果が1000を越える場合は「big big number」と文字列が返る
  if (result > 1000) {
    return "big big number";
  }

  return result;
};

// 除算
const divide = (numbers) => {
  // 割り算の場合、0で割るとエラーが発生する
  if (numbers.some((num) => num === 0)) {
    throw new Error("Cannot divide by zero");
  }

  const result = numbers.reduce((acc, num) => acc / num);
  // 計算結果を小数点以下2桁まで表示
  return Math.round(result * 100) / 100;
};

calculator(args);
