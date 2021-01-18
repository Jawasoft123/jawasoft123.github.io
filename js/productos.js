const jawaCheck = document.getElementById('jawaCheck');

jawaCheck.addEventListener('change', function() {
	if (this.checked) {		
		document.getElementById('buttonJawaWindows').disabled = false;
		document.getElementById('buttonJawaLinux').disabled = false;
		loadFileAndPrintToConsole('https://jawasoft123.github.io/files/LICENSE.txt');
	} else {		
		document.getElementById('buttonJawaWindows').disabled = true;
		document.getElementById('buttonJawaLinux').disabled = true;
	}
});

async function loadFileAndPrintToConsole(url) {
	try {
		const response = await fetch(url);
		const data = await response.text();
		console.log(data);
	} catch (err) {
		console.error(err);
	}
}

