var types={
	error: 0, // 错误
	punctuation: 1, // 标点
	operator: 2, // 运算符
	comment: 3, // 注释
	whitespace: 4, // 空白符
	statement: 5, // 过程控制
	value: 6, // 特殊值
	object_operator: 7, // 对象操作
	object_test: 8, // 对象检测
	obj: 9, // 对象
	identifier: 10, // 标识符
	string: 11, // 字符串
	number: 12 // 数字
};

var tokens={
// 标点 types.punctuation
//( ) { } [ ] " " ' ' , ;
	"(": types.punctuation,
	")": types.punctuation,
	"{": types.punctuation,
	"}": types.punctuation,
	"[": types.punctuation,
	"]": types.punctuation,
	'"': types.punctuation,
	"'": types.punctuation,
	",": types.punctuation,
	";": types.punctuation,
// 运算符 types.operator
//. :
//+ - * / %
//++ --
//+= -+ *= /= %=
//&= ^= |= <<= >>= >>>=
//> < >= <= == != === !== ?
//! && ||
//& | ~ ^ << >> >>>
	".": types.operator,
	":": types.operator,
	"+": types.operator,
	"-": types.operator,
	"*": types.operator,
	"/": types.operator,
	"%": types.operator,
	"=": types.operator,
	"++": types.operator,
	"--": types.operator,
	"+=": types.operator,
	"-=": types.operator,
	"*=": types.operator,
	"/=": types.operator,
	"%=": types.operator,
	"&=": types.operator,
	"|=": types.operator,
	"<<=": types.operator,
	">>=": types.operator,
	">>>=": types.operator,
	">": types.operator,
	"<": types.operator,
	">=": types.operator,
	"<=": types.operator,
	"==": types.operator,
	"!=": types.operator,
	"===": types.operator,
	"!==": types.operator,
	"!": types.operator,
	"&&": types.operator,
	"||": types.operator,
	"&": types.operator,
	"|": types.operator,
	"~": types.operator,
	"^=": types.operator,
	"<<": types.operator,
	">>": types.operator,
	">>>": types.operator,
// 注释 types.comment
// // /* */
// 空白符 types.whitespace
//\r \n   \t
	"\r": types.whitespace,
	"\n": types.whitespace,
	"\n": types.whitespace,
	" ": types.whitespace,
// 过程控制 types.statement
//if else for in do while switch case default break continue return try catch throw finally
	"if": types.statement,
	"else": types.statement,
	"for": types.statement,
	"in": types.statement,
	"do": types.statement,
	"while": types.statement,
	"switch": types.statement,
	"case": types.statement,
	"default": types.statement,
	"break": types.statement,
	"continue": types.statement,
	"return": types.statement,
	"try": types.statement,
	"catch": types.statement,
	"throw": types.statement,
	"finally": types.statement,
// 特殊值 types.value
//true false null undefined Infinity NaN
	"true": types.value,
	"false": types.value,
	"null": types.value,
	"undefined": types.value,
	"Infinity": types.value,
	"NaN": types.value,
// 对象操作 types.object_operator
//new delete var function
	"new": types.object_operator,
	"delete": types.object_operator,
	"var": types.object_operator,
	"function": types.object_operator,
// 对象检测 types.object_test
//instancesof typesof isFinite isNaN
	"instancesof": types.object_test,
	"typesof": types.object_test,
	"isFinite": types.object_test,
	"isNaN": types.object_test,
// 内置对象 types.object
//Array Boolean Date Function Math Number Object RegExp String
	"Array": types.obj,
	"Boolean": types.obj,
	"Date": types.obj,
	"Function": types.obj,
	"Math": types.obj,
	"Number": types.obj,
	"Object": types.obj,
	"RegExp": types.obj,
	"String": types.obj
};