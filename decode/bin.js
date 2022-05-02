exports.convert = function(string) {
	var fullstr = "";
	var n = 0;
	var midstr = "";
	var stastr = string;
	var b = 0;
	var c = 0;
	var a = 0;
	var coolstr = "";
	while (b < Math.round(string.length/8)){
	  coolstr = coolstr+stastr[a];
	  a = a+1;
	  c = c+1;
	  if (c >= 8){
	    c = 0;
	    b = b+1;
	    coolstr = coolstr+" ";
	  }
	}
	midstr = coolstr.split("").reverse().join("").substr(1).split("").reverse().join("").split(" ");
	while (n <= (midstr.length-1)){
	    fullstr += String.fromCharCode(parseInt(midstr[n], 2))
	    n = n+1;
	}
	return fullstr;
}
