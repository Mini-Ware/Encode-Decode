exports.convert = function(string) {
	var bhex = Buffer.from(string.replace(/ /g, ""), 'hex').toString('utf-8')
	return bhex;
}
