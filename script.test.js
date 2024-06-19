const { exec } = require("child_process");

describe("script.js CLI", () => {
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
      exec("node script.js subtract 3 10 3", (error, stdout, stderr) => {
        try {
          expect(stdout.trim()).toBe("-10");
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
});
