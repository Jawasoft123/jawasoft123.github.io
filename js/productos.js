const jawaCheck = document.getElementById('jawaCheck');
const generatorCheck = document.getElementById('generatorCheck');
const buttonDownloadJawa = document.getElementById('buttonDownloadJawa');
const buttonDownloadGenerator = document.getElementById('buttonDownloadGenerator');

jawaCheck.addEventListener('change', function() {
	if (this.checked) {		
		document.getElementById('buttonJawa').classList.remove("disabled");	
	} else {		
		document.getElementById('buttonJawa').classList.add("disabled");	
	}
});

generatorCheck.addEventListener('change', function() {
	if (this.checked) {		
		document.getElementById('buttonGenerator').classList.remove("disabled");	
	} else {		
		document.getElementById('buttonGenerator').classList.add("disabled");	
	}
});

buttonDownloadJawa.addEventListener('click', function(){	
	var licenseJawa = loadFileAndPrintToConsole('https://jawasoft123.github.io/files/jawaLicense.txt');
	licenseJawa.then(value=>{
		document.getElementById('modalJawa').innerHTML = value;
	})
});

buttonDownloadGenerator.addEventListener('click', function(){	
	var licenseGenerador = loadFileAndPrintToConsole('https://jawasoft123.github.io/files/generatorLicense.txt');
	licenseGenerador.then(value=>{
		document.getElementById('modalGenerator').textContent = value;
	})
});

async function loadFileAndPrintToConsole(url) {
	try {
		const response = await fetch(url);
		const data = await response.text();		
		return data;
	} catch (err) {
		console.error(err);
	}
}