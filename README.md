# Homework

### exercise1 ###

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

### exercise2 ###

    function authorization() {
        var name = prompt ("Введите имя", '');
        var password = prompt ("Введите пороль", '');
        if (name.length >= 3 && password.length >= 6) {
            console.log ("Авторизация прошла успешно!");
        } else {
            console.log ("Неверное имя или пароль!");
        }
    }

