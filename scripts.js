document.getElementById('right').addEventListener('click', function(){
	document.querySelector('.bg-model').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', function(){
	document.querySelector('.bg-model').style.display = 'none';
});

document.getElementById('left').addEventListener('click', function(){
	document.querySelector('.bg-model2').style.display = 'flex';
});

document.querySelector('.close2').addEventListener('click', function(){
	document.querySelector('.bg-model2').style.display = 'none';
});