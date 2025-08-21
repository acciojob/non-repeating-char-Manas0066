function firstNonRepeatedChar(str) {
 // Write your code here

	let charcnt = {};

	for(let char of str){
		charcnt[char] = 1+ (charcnt[char]||0);
	}

	for(let ch of str){
		if(charcnt[ch]===1){
			return ch;
		}
	}

return null;  
	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
