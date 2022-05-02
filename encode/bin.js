exports.convert = function(string) {
	var n = 0;
	var fullstr = "";
	while (n <= (string.length-1)){
	    var sus = parseInt(string.charCodeAt(n)).toString(2);
	    while (sus.length < 8){
	       sus = "0"+sus;
	    }
	    fullstr += sus;
	    n = n+1;
	}
	return fullstr
}
