'use strict';

var Botkit = require('botkit');
var config = require('../config');

var controller = Botkit.slackbot({
    debug: true,
    json_file_store: process.env.OPENSHIFT_DATA_DIR || config.JSON_STORAGE
});

var bot = controller.spawn({
    token: process.env.SLACK_TOKEN
}).startRTM();

module.exports = { controller: controller, bot: bot };