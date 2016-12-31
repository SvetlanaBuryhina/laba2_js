var fs = require("fs");
var f1 = fs.readFileSync('access.log', 'utf8');
pattern = /[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/ig
ips = f1.match(pattern);

var unique = {};
for (var i in ips) {
	if (ips[i] in unique) {
		unique[ips[i]] += 1;
	}
	else unique[ips[i]] = 1;
}

var keys = Object.keys(unique);
keys.sort();
var subnet = "";
for (var i in keys) {
	pattern=/[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/i
	var subnew = keys[i].match(pattern);
	if (subnew[0] != subnet) {
		console.log('---');
		console.log(subnew[0]);
		subnet = subnew[0];
	}
	console.log(keys[i], "-", unique[keys[i]]);
}
