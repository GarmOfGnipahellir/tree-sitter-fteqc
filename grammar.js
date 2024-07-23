module.exports = grammar({
  name: "fteqc",

  rules: {
    source_file: ($) => repeat($._definition),

    _definition: ($) => choice($.function_definition),

    function_definition: ($) =>
      seq($._type, $.parameter_list, $.identifier, "=", $.block),

    _type: ($) => choice($.primitive_type),

    primitive_type: ($) => choice("void"),

    parameter_list: ($) => seq("(", ")"),

    identifier: ($) => /[a-z]+/,

    block: ($) => seq("{", repeat($._statement), "}"),

    _statement: ($) => choice($.return_statement),

    return_statement: ($) => seq("return", $._expression, ";"),

    _expression: ($) => choice($.identifier, $.number),

    number: ($) => /\d+/,
  },
});
