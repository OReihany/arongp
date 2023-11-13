const hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true');

hotClient.subscribeAll(function (event) {
	if (event.action === 'built') {
		window.location.reload();
	}
});