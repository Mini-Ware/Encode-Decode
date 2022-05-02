const encode_bin = require("./encode/bin.js")
const encode_base = require("./encode/b64.js")
const encode_hex = require("./encode/hex.js")

exports.encode = function(type, string) {
	if (type == "bin"){
		return encode_bin.convert(string);
	}else if (type == "b64"){
		return encode_base.convert(string);
	}else if (type == "hex"){
		return encode_hex.convert(string);
	}
}

const decode_bin = require("./decode/bin.js")
const decode_base = require("./decode/b64.js")
const decode_hex = require("./decode/hex.js")

exports.decode = function(type, string) {
	if (type == "bin"){
		return decode_bin.convert(string);
	}else if (type == "b64"){
		return decode_base.convert(string);
	}else if (type == "hex"){
		return decode_hex.convert(string);
	}
}
