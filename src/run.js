const { Parser } = require("./Parser");
const parser = new Parser();
const program = `/*
   hello
*/

32
`;

const ast = parser.parse(program);
console.log(JSON.stringify(ast, null, 2));
