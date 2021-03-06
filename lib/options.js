/**
 * @fileoverview Options configuration for optionator.
 * @author George Zahariev
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var optionator = require("optionator");

//------------------------------------------------------------------------------
// Initialization and Public Interface
//------------------------------------------------------------------------------

// exports "parse(args)", "generateHelp()", and "generateHelpForOption(optionName)"
module.exports = optionator({
  prepend: "eslint [options] file.js [file.js] [dir]",
  options: [{
    heading: "Options"
  }, {
    option: "help",
    alias: "h",
    type: "Boolean",
    description: "Show help."
  }, {
    option: "config",
    alias: "c",
    type: "path::String",
    description: "Load configuration data from this file."
  }, {
    option: "rulesdir",
    type: "path::String",
    description: "Load additional rules from this directory."
  }, {
    option: "format",
    alias: "f",
    type: "String",
    default: "stylish",
    description: "Use a specific output format."
  }, {
    option: "version",
    alias: "v",
    type: "Boolean",
    description: "Outputs the version number."
  }]
});
