const jawaCheck = document.getElementById('jawaCheck');

jawaCheck.addEventListener('change', function() {
	if (this.checked) {		
		document.getElementById('buttonJawaWindows').disabled = false;
		document.getElementById('buttonJawaLinux').disabled = false;
	} else {		
		document.getElementById('buttonJawaWindows').disabled = true;
		document.getElementById('buttonJawaLinux').disabled = true;
	}
});