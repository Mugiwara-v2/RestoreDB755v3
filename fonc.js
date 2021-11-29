function toggle_payload(pld){
  if(pld == "restore"){
		document.getElementById("progress").innerHTML="Loading Restore cache host.. Please wait..";
		preloadScripts(['cachev5.js','jsloader.js']);
	}else if(pld == "restore2"){
		document.getElementById("progress").innerHTML="Loading Restore cache host.. Please wait..";
		preloadScripts(['restore.js','jsloader.js']);
	}else if(pld == "restore3"){
		document.getElementById("progress").innerHTML="Loading Restore cache host.. Please wait..";
		preloadScripts(['cachev7.js','jsloader.js']);
	}
	if(window.postPayload)
		window.postPayload();
	payload_finished(pld);
	
}
function payload_finished(payload)
{
   if(payload != "exploit"){
		setTimeout(function(){document.getElementById("progress").innerHTML="PS4 Jailbreak 7.55 Payload Loaded Succesfully !!";},7000);
	}
}