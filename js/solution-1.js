function terminal(many) {
	console.log ("Снять: " + many);
	var count = Math.ceil (many / 100);
	var sum = 0;
	for (var i = 1; i <= count; i++) {
		sum += 100;
		console.log ("Транзакция №" + i + " снято 100 ");
	}
	console.log ("Было снято " + sum);
}