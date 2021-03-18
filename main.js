var firebaseConfig = {
	apiKey: "AIzaSyBicRKx6o6OQlI2P7LLjFhLXi8HzR4fSI4",
	authDomain: "mtaassignment1.firebaseapp.com",
	databaseURL: "https://mtaassignment1-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "mtaassignment1",
	storageBucket: "mtaassignment1.appspot.com",
	messagingSenderId: "715820354460",
	appId: "1:715820354460:web:c3be3f53b9e9c5f0689659"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database().ref();

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
	e.preventDefault();
	const name = getInputVal("name");
	const email = getInputVal("email");
	const message = getInputVal("message");

	saveMessage(name, email, message);
	document.querySelector('.alert').style.display = 'block';
	setTimeout(function () {
		document.querySelector('.alert').style.display = 'none';
	}, 3000);
	document.getElementById('contactForm').reset();
}

function getInputVal(id) {
	return document.getElementById(id).value;
}

function saveMessage(name, email, message) {
	let newMessageRef = messagesRef.push();
	newMessageRef.set({
		name: name,
		email: email,
		message: message
	});
}

document.querySelector('.lang-toggle').addEventListener('onclick', handleClick);

function handleClick(e) {
	e.preventDefault();
	let polski = document.querySelector('.pol');
	let english = document.querySelector('.ang');
	if (polski.style.display == "none") {
		polski.style.display == "block"
			&& english.style.display === "none";
	} else if (english.style.display == "none") {
		english.style.display == "block"
			&& polski.style.display === "none";
	}
}
