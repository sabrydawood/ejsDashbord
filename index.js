require('module-alias/register');
require("dotenv").config();


const {lunch } = require("@root/dashboard"),
	config = require("@root/config"),
	logger = require("@helpers/Logger")



	const client = {};
  client.config =  config;
  client.logger = logger;

(async () => {


if (client.config.DASHBOARD.ENABLED) {
    client.logger.log("Launching dashboard");
    try {
lunch(client);
    } catch (ex) {
      client.logger.error("Failed to launch dashboard", ex);
    }
}

	


	
}) ();