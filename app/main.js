'use strict'

Array.prototype.toTwenty = function(){
	var returnValue = [];
	for (var i=1; i<=20; i++) {returnValue.push(i)};
	return returnValue;
};

Array.prototype.toForty = function(){
	var returnValue = [];
	for (var i=2; i<=40; i+=2) {returnValue.push(i)};
	return returnValue;
};

Array.prototype.toOneThousand = function(){
	var returnValue = [];
	for (var i=10; i<=1000; i+=10) {returnValue.push(i)};
	return returnValue;
};
