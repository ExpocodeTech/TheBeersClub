var LOGIN_VERIFY = {
	username: 'expocode',
	password: '123'
}

var loginData = {
	username: null,
	password: null,
	isValid: function(){
		if (this.username != '' && this.password != '') {
			if (LOGIN_VERIFY.username == this.username 
				&& LOGIN_VERIFY.password == this.password) {
				return true;
			};
		} else {
			return false;
		}
	}
}

var signUpData = {
	name: null,
	lastname: null,
	email: null,
	password: null
}

function processForm(hasAccount) {
	var loginMode = document.getElementById('loginMode');
	if (hasAccount) {
		var frmLogin = document.getElementById('frmLogin');
		frmLogin.style.display = 'block';
	} else {
		var frmSignUp = document.getElementById('frmSignUp');
		frmSignUp.style.display = 'block';
	};
	loginMode.style.display = 'none';
}

function processBack(){
	console.log('processBack');
	var loginMode = document.getElementById('loginMode');
	
	var frmLogin = document.getElementById('frmLogin');
	var frmSignUp = document.getElementById('frmSignUp');

	if (frmLogin.style.display == 'block') {
		frmLogin.style.display = 'none';
	} else if (frmSignUp.style.display == 'block') {
		frmSignUp.style.display = 'none';
	};
	loginMode.style.display = 'block';
}

function processLogin(){
	console.log('processLogin');
	var frmLogin = document.getElementById('frmLogin');

	if (frmLogin != null) {
		loginData.username = frmLogin.children.username.value;
		loginData.password = frmLogin.children.password.value;
		if (loginData.isValid()) {
			alert('Usuario logueado correctamente');
			frmLogin.style.display = 'none';
			displayAccountData();
		} else {
			alert('Error de logueo');
		}
	};
}

function displayAccountData(){
	var account = document.getElementById('account');
	if (account.style.display == 'block') {
		account.style.display = 'none'
	} else {
		account.style.display = 'block'
	};
}


function processSignUp(){
	console.log('processSignUp');
}
