function init() {
	var cards = document.getElementsByClassName('card');
	if (cards != undefined && cards.length > 0) {
		for (var i = 0; i < cards.length; i++) {
			cards[i].addEventListener("mouseenter", displayDetails);
			cards[i].addEventListener("mouseleave", hideDetails);
		}
	}
}

function displayDetails(evt) {
	var details = evt.currentTarget.getElementsByClassName('details');
	if (details != undefined && details.length > 0) {
		details[0].style.display = 'block';	
	}
}


function hideDetails(evt) {
	var details = evt.currentTarget.getElementsByClassName('details');
	if (details != undefined && details.length > 0) {
		details[0].style.display = 'none';	
	}
}


