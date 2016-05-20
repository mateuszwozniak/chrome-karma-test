describe('getComputedStyle()', function () {

	var el;
	var matrix = 'matrix(0.1, 0.2, 0.3, 0.4, 0.5, 0.6)';
	var time = '0.2s';

	before(function () {
		el = document.createElement('div');
		el.style.transform = 'matrix(0.1, 0.2, 0.3, 0.4, 0.5, 0.6)';
		el.style.transitionDuration = time;
		document.body.appendChild(el);
	});

	after(function () {
		document.body.removeChild(el);
	});

	it('should return correct matrix', function () {
		var computedMatrix = window.getComputedStyle(el)['transform'];
		console.log('computed matrix:', computedMatrix);
		if (computedMatrix !== matrix) {
			throw new Error(computedMatrix + ' expected to be equal to ' + matrix);
		}
	});

	it('should return correct time', function () {
		var computedTime = window.getComputedStyle(el)['transitionDuration'];
		console.log('computed time:', computedTime);	
		if (computedTime !== time) {
			throw new Error(computedTime + ' expected to be equal to ' + time);
		}
	});

});
