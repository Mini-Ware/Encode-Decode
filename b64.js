exports.convert = function(string) {
	var b64 = Buffer.from(string, 'base64').toString('utf-8');
	return b64;
}
