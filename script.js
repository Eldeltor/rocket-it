var car = {
	make: 'BMW',
	type: 'M3',
	color: 'White',
	isTurnedOn: false,
	year: 2015,
	seats: [
		'seat 1',
		'seat 2',
		'seat 3',
		'seat 4'
	],
	turnOn: function () {
		car.isTurnedOn = true;
	},
	turnOff: function () {
		car.isTurnedOn = false;
	},
	switchCar: function (isOn){
		console.log ('turn car ' +isOn);
		if (isOn == true) {
			car.isTurnedOn = true
		} else {
			car.isTurnedOn = false
		}
	},
	fly: function () {
		alert('something');
	}
};