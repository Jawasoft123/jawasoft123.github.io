const jawaCheck = document.getElementById('jawaCheck');
const buttonDownloadJawa = document.getElementById('buttonDownloadJawa');
const buttonDownloadGenerator = document.getElementById('buttonDownloadGenerator');

jawaCheck.addEventListener('change', function() {
	if (this.checked) {		
		document.getElementById('buttonJawa').classList.remove("disabled");	
	} else {		
		document.getElementById('buttonJawa').classList.add("disabled");	
	}
});

buttonDownloadJawa.addEventListener('click', function(){
	var licenseJawa = loadFileAndPrintToConsole('https://jawasoft123.github.io/files/jawaLicense.txt');
	licenseJawa.then(value=>{
		document.getElementById('modalJawa').textContent = value;
	})
});

buttonDownloadGenerator.addEventListener('click', function(){
	var licenseJawa = loadFileAndPrintToConsole('https://jawasoft123.github.io/files/generatorLicense.txt');
	licenseJawa.then(value=>{
		document.getElementById('modalJawa').textContent = value;
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