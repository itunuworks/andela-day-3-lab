'use strict'

module.exports = {
	findMissing: function(arr1, arr2){
		var big = arr1;
		var small = arr2;
		var returnValue = 0;

		if (arr1.length != arr2.length){
			if (arr1.length<arr2.length){
				big = arr2;
				small = arr1;
			}
			big = big.sort(function(a, b){return a - b});
			small = small.sort(function(a, b){return a - b});

			var low = 0;
			var high = small.length-1;

			while(low<=high){
				var index = Math.floor((low+high)/2);

				if (small[index] != big[index]){
					if (index == small.length-1 || index === 0){returnValue = big[index]}
					high = index - 1;
				}
				else{
					if (index == small.length-1){returnValue = big[index+1]}
					low = index + 1;
				}
			}
		}

		return returnValue;
	}
}


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

Array.prototype.search = function (num){
	var returnValue = {"count":0, "index":-1, "length":-1};
	var low = 0;
	var high = this.length-1;

	returnValue["length"] = this.length;
	if (this[low]!=num && this[high]!=num){
		while (low<=high){
			var index = Math.floor((low+high)/2);

			if (this[index] < num){
				low = index + 1;
			}
			else if(this[index] > num){
				high = index - 1;
			}
			else {
				returnValue["index"] = index;
				break;
			}
			returnValue["count"] ++;
		}
	}
	else{
		returnValue["index"] = low;
		if (this[high] == num){returnValue["index"] = high};
	}

	return returnValue;
};