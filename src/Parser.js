class Parser {
  parse(string) {
    this._string = string;
    return this.Program();
  }

  Program() {
    return {
      type: "Program",
      body: this.NumericLiteral(),
    };
  }

  NumericLiteral() {
    return {
      type: "NumericLiteral",
      value: Number(this._string),
    };
  }
}

module.exports = {
  Parser,
};
