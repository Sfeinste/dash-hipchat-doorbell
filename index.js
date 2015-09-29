var dash_button   = require('node-dash-button');
var HipChatNotify = require('hipchat-notify');
var settings      = require('./config.js');

var dash    = dash_button(settings.config.mac_addr);
var hipchat = new HipChatNotify(settings.config.hipchat_room, settings.config.hipchat_token);

dash.on("detected", function (){
    hipchat.notify('ding-dong!');
});