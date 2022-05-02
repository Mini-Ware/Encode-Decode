exports.convert = function(string) {
	var bhex = Buffer.from(string, 'utf-8').toString('hex');
	return bhex.toUpperCase();
}
