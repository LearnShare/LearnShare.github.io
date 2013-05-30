var fs=require("fs"),
	parser=require("./lib/parser.js"),
	text="",
	list=new Array();

text=fs.readFileSync("./input1.txt").toString("utf-8");

parser.get(text);
list=parser.parse();

console.log(list);

//@todo 语法检查
// 1.多个相连的标识符