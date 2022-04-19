const { Parser } = require("../src/Parser");

describe("parser", () => {
  test("number and string", () => {
    const parser = new Parser();
    const program = `32;"hello";`;

    const ast = parser.parse(program);

    expect(ast).toEqual({
      body: [
        {
          expression: { type: "NumericLiteral", value: 32 },
          type: "ExpressionStatement",
        },
        {
          expression: {
            type: "StringLiteral",
            value: "hello",
          },
          type: "ExpressionStatement",
        },
      ],
      type: "Program",
    });
  });

  test("strings double quote", () => {
    const parser = new Parser();
    const program = `"hello";`;

    const ast = parser.parse(program);

    expect(ast).toEqual({
      body: [
        {
          expression: { type: "StringLiteral", value: "hello" },
          type: "ExpressionStatement",
        },
      ],
      type: "Program",
    });
  });

  test("strings single quote", () => {
    const parser = new Parser();
    const program = `'hello';`;

    const ast = parser.parse(program);

    expect(ast).toEqual({
      body: [
        {
          expression: { type: "StringLiteral", value: "hello" },
          type: "ExpressionStatement",
        },
      ],
      type: "Program",
    });
  });

  test("numbers", () => {
    const parser = new Parser();
    const program = `42;`;

    const ast = parser.parse(program);

    expect(ast).toEqual({
      body: [
        {
          expression: { type: "NumericLiteral", value: 42 },
          type: "ExpressionStatement",
        },
      ],
      type: "Program",
    });
  });
});
