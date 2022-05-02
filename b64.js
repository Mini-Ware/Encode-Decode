exports.convert = function(string) {
	var b64 = Buffer.from(string, 'utf-8').toString('base64');
	return b64;
}
