var fs = require("fs");

var text = fs.readFileSync("package.json", "utf8")
var json = JSON.parse(text);
var preamble = "// " + (json.homepage || json.name)
    + " Version " + json.version + "."
    + " Copyright " + (new Date).getFullYear()
    + " " + json.author.name + ".";

module.exports = preamble;
