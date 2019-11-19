function authorization() {
	var name = prompt ("Введите имя", '');
	var password = prompt ("Введите пороль", '');
	if (name.length >= 3 && password.length >= 6) {
		console.log ("Авторизация прошла успешно!");
	} else {
		console.log ("Неверное имя или пароль!");
	}
}