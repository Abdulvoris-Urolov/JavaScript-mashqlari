	let randomNumber = Math.round(Math.random()*10);


function findNumber() {
	let num = document.getElementById(`num`).value;

	let outNumber = document.getElementById(`out`);
	let inNumber = document.getElementById(`innum`);
	let message = document.getElementById(`msg`);

	//outNumber.innerHTML = "Kompyuter tanlagan raqam:  " + randomNumber;
	inNumber.innerHTML = "Siz kiritgan raqam:  " + num;

	if (randomNumber == num){
		message.innerHTML = "Siz topdingiz";
	}
	else if (randomNumber < num){
		message.innerHTML = "Siz katta raqam kiritingiz";
	}
	else if (randomNumber > num){
		message.innerHTML = "Siz kichik raqam kiritingiz";
	}
}