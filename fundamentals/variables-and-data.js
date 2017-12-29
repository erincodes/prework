
/*
* Variables, Data Types, and Typing
 */
let wordData;

wordData = "Word list";

console.log(wordData);

let subTotal = 100;
let tax = subTotal * .07;
let totalWithTax = tax + subTotal;

let obj = {
   key1: "Value 1",
	key2: 3,
	obj2: {
   	obj2Key1 : "value of inner object",
	},
};

console.log(obj.obj2.obj2Key1);

let obj = {
	key1: "value",
	key2: 4,
	boolean: true,
	obj2: {
		obj2Key1: "Internal Object Value",
	}
};

console.log(obj.key1);

console.log(typeof obj.key1);


