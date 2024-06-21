const { exec } = require("child_process");

// 通常の四則演算
describe("normal calculation", () => {
  // 「node script.js multiply 3 10 3」を実行して、90が返ってくることを確認する
  it("should multiply numbers correctly", () => {
    return new Promise((resolve, reject) => {
      exec("node script.js multiply 3 10 3", (error, stdout, stderr) => {
        try {
          expect(stdout.trim()).toBe("90");
          resolve();
        } catch (e) {
          reject(e);
        }
      });
    });
  });
  // 「node script.js add 3 10 3」を実行して、16が返ってくることを確認する
  it("should add numbers correctly", () => {
    return new Promise((resolve, reject) => {
      exec("node script.js add 3 10 3", (error, stdout, stderr) => {
        try {
          expect(stdout.trim()).toBe("16");
          resolve();
        } catch (e) {
          reject(e);
        }
      });
    });
  });
  // 「node script.js subtract 3 10 3」を実行して、-10が返ってくることを確認する
  it("should subtract numbers correctly", () => {
    return new Promise((resolve, reject) => {
      exec("node script.js subtract 20 10 3", (error, stdout, stderr) => {
        try {
          expect(stdout.trim()).toBe("7");
          resolve();
        } catch (e) {
          reject(e);
        }
      });
    });
  });
  // 「node script.js divide 100 10」を実行して、10が返ってくることを確認する
  it("should divide numbers correctly", () => {
    return new Promise((resolve, reject) => {
      exec("node script.js divide 100 10", (error, stdout, stderr) => {
        try {
          expect(stdout.trim()).toBe("10");
          resolve();
        } catch (e) {
          reject(e);
        }
      });
    });
  });
  // かけ算の場合、計算結果が1000を越える場合は「big big number」と文字列が返る（境界値1000の場合）
  it("should return 'too big' if the result is over 1000", () => {
    return new Promise((resolve, reject) => {
      exec("node script.js multiply 100 10", (error, stdout, stderr) => {
        try {
          expect(stdout.trim()).toBe("1000");
          resolve();
        } catch (e) {
          reject(e);
        }
      });
    });
  });
});

// 特殊な制限
describe("special limitations", () => {
  // 1個〜30個までの引数を受け取る（31個以上の引数を指定するとエラーが発生する）
  it("should not accept more than 30 props", () => {
    return new Promise((resolve, reject) => {
      exec(
        "node script.js add 1 1 1 1 1  1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 11",
        (error, stdout, stderr) => {
          try {
            expect(stderr.trim()).toContain("Too many numbers");
            resolve();
          } catch (e) {
            reject(e);
          }
        }
      );
    });
  });
  // 引数が数字以外だとエラーが発生する
  it("should not accept non-numeric arguments", () => {
    return new Promise((resolve, reject) => {
      exec("node script.js add 1 1 1 1 1 hoge", (error, stdout, stderr) => {
        try {
          expect(stderr.trim()).toContain("Invalid number");
          resolve();
        } catch (e) {
          reject(e);
        }
      });
    });
  });
  // 足し算の場合、計算結果が1000を超える場合は合計ではなく「too big」と文字列が返る
  it("should return 'too big' if the result is over 1000", () => {
    return new Promise((resolve, reject) => {
      exec("node script.js add 1000 1", (error, stdout, stderr) => {
        try {
          expect(stdout.trim()).toBe("too big");
          resolve();
        } catch (e) {
          reject(e);
        }
      });
    });
  });
  // 引き算の場合、計算結果がマイナスの場合は「negative number」と文字列が返る
  it("should return 'negative number' if the result is negative", () => {
    return new Promise((resolve, reject) => {
      exec("node script.js subtract 1 10", (error, stdout, stderr) => {
        try {
          expect(stdout.trim()).toBe("negative number");
          resolve();
        } catch (e) {
          reject(e);
        }
      });
    });
  });
  // かけ算の場合、計算結果が1000を越える場合は「big big number」と文字列が返る
  it("should return 'big big number' if the result is over 1000", () => {
    return new Promise((resolve, reject) => {
      exec("node script.js multiply 100 11", (error, stdout, stderr) => {
        try {
          expect(stdout.trim()).toBe("big big number");
          resolve();
        } catch (e) {
          reject(e);
        }
      });
    });
  });
  // 割り算の場合、計算結果を小数点以下2桁まで表示
  it("should return the result with 2 decimal places", () => {
    return new Promise((resolve, reject) => {
      exec("node script.js divide 1 3", (error, stdout, stderr) => {
        try {
          expect(stdout.trim()).toBe("0.33");
          resolve();
        } catch (e) {
          reject(e);
        }
      });
    });
  });
  // 割り算の場合、0で割るとエラーが発生する
  it("should not divide by zero", () => {
    return new Promise((resolve, reject) => {
      exec("node script.js divide 1 0", (error, stdout, stderr) => {
        try {
          expect(stderr.trim()).toContain("Cannot divide by zero");
          resolve();
        } catch (e) {
          reject(e);
        }
      });
    });
  });
});
