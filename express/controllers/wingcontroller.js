var path = require('path');
var fs = require('fs');
var configData = fs.readFileSync(path.dirname(require.main.filename) + '/main.conf', 'utf8');
configData = JSON.parse(configData);

module.exports.controller = function(app){



	app.get('/wing', function(req, res){
		//console.log("/angtest");
		console.log('Matt Controller routing view: matt to matt/matt.jade');
		res.render('wing/index.jade',{
				URL:configData.domain.address + ":" + configData.domain.port,
				webSocketClient:configData.webSocketClient,
				defaultUserImageUrl:configData.defaultUserImageUrl,
				defaultMemberImageUrl:configData.defaultMemberImageUrl,
				data:
					{
					}});
	});

	app.get('/slider', function(req, res){
		//console.log("/angtest");
		console.log('Matt Controller routing view: matt to matt/matt.jade');
		res.render('test/test1.php',{
				URL:configData.domain.address + ":" + configData.domain.port,
				webSocketClient:configData.webSocketClient,
				defaultUserImageUrl:configData.defaultUserImageUrl,
				defaultMemberImageUrl:configData.defaultMemberImageUrl,
				data:
					{
					}});
	});

	app.get('/slider2', function(req, res){
		//console.log("/angtest");
		console.log('Matt Controller routing view: matt to matt/matt.jade');
		res.render('test/test2.php',{
				URL:configData.domain.address + ":" + configData.domain.port,
				webSocketClient:configData.webSocketClient,
				defaultUserImageUrl:configData.defaultUserImageUrl,
				defaultMemberImageUrl:configData.defaultMemberImageUrl,
				data:
					{
					}});
	});

//   /public/js/slider/
//http://wingshootingdestinations.com/upload/Ads/topad_90.gif
//http://wingshootingdestinations.com/upload/Ads/topad_76.jpg
//
}
