var doCoolStuff = function () {
	var currentClassName = document.getElementById('cool').className;
	//changing class name
	if (currentClassName == 'cool') {
		document.getElementById('cool').className = 'cool red';
	} else {
		document.getElementById('cool').className = 'cool';
	}
}

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
	fly: function () {
		alert('fly');
	},
	turnOn: function () {
		car.isTurnedOn = true;
	},
	turnOff: function () {
		car.isTurnedOn = false;
	},
	//changing car state
	switchCar: function (isOn){
		console.log ('turn car ' +isOn);
		if (isOn == true) {
			car.isTurnedOn = true
		} else {
			car.isTurnedOn = false
		}
	}
};