module.exports = function(str){
	return str.replace(/<!\[CDATA\[|\]\]>/gi, '');
}