console.log('Login cargado');

var loginData = {
	user: null,
	pass: null,
	completed: 0
}


function processLogin(){
	console.log('processLogin');

}

function processNew(){
	console.log('processNew');
}

function processSignUp(){
	console.log('processSignUp');	
}

/*function processLogin (e) {
	console.log(e);
	e.preventDefault();

	var loginData = {
		user: null,
		pass: null,
		completed: 0
	}

	var elements = e.target.children;
	for (var i = elements.length - 1; i >= 0; i--) {
		var el = elements[i];

		if (el.localName != 'input') {
			continue;
		};

		if (el.name == 'username') {
			loginData.user = el.value;
			loginData.completed++;
		} else	if (el.name == 'password') {
			loginData.pass = el.value;
			loginData.completed++;
		}
	};

	if (loginData.completed < 2) {
		alert('Todos los campos son onbligatorios');
	} else {

	}
}
var frmLogin = document.getElementById('frmLogin');
frmLogin.onsubmit = processLogin;*/