const dns = require('dns');
module.exports = class internetChecker {


/*
vaildIp = function(ip){
	var ip = ip.toString();
	var ipArray = ip.split('.');
	var validIp = true;
	if(ipArray.length!= 4){
		validIp = false;
	}
	else{
		for(var i = 0; i < ipArray.length; i++){
			if(ipArray[i] > 255){
				validIp = false;
			}
		}
	}
	return validIp;
}
*/



static Checker (client){
	setInterval(function(){
dns.resolve('www.google.com', async function(err) {
  if (err) {
     client.logger.error("No connection");
  } else {

     client.logger.log("internet is secure");
  }
});
}, 1000)
}
	
}