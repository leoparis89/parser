const { Parser } = require("../src/Parser");

describe("parser", () => {
  test("numbers", () => {
    const parser = new Parser();
    const program = `32`;

    const ast = parser.parse(program);

    expect(ast).toEqual({
      body: { type: "NumericLiteral", value: 32 },
      type: "Program",
    });
  });

  test("strings double quote", () => {
    const parser = new Parser();
    const program = `"hello"`;

    const ast = parser.parse(program);

    expect(ast).toEqual({
      body: { type: "StringLiteral", value: "hello" },
      type: "Program",
    });
  });

  test("strings single quote", () => {
    const parser = new Parser();
    const program = `'hello'`;

    const ast = parser.parse(program);

    expect(ast).toEqual({
      body: { type: "StringLiteral", value: "hello" },
      type: "Program",
    });
  });
});
