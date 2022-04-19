const { Parser } = require("../src/Parser");

describe("parser", () => {
  test("parses numbers and ignores comments", () => {
    const parser = new Parser();
    const program = `/*
   hello
*/

32
`;

    const ast = parser.parse(program);

    expect(ast).toEqual({
      body: { type: "NumericLiteral", value: 32 },
      type: "Program",
    });
  });
});
