function done(){
			document.getElementById("myProgress").remove();
			if(document.getElementById("progress").innerHTML.includes("Failed")){							  	
					document.getElementById('load').innerHTML='<tr style="color:white;">'+
					'<td id="aexp" colspan="2" align="right" style="width: 12%;font-family: system-ui;font-size: 20px;">Autoload Exploit &nbsp;</td>'+
					'<td style="width: 10%;"><label class="switch"><input id="tog1" onclick="if(document.getElementById(\'tog1\').checked){document.getElementById(\'toggleExploit\').style.display=\'table-row\';localStorage.autoExploit=true;}else{document.getElementById(\'toggleExploit\').style.display=\'none\';localStorage.autoExploit=false;}" type="checkbox"><span class="slider new round"></span></label></td>'+
					'</tr>'+
					'<tr><td><br/></td></tr>'+
					'<tr id="toggleExploit" style="color:white;">'+
          '<td id="oexp" align="right" style="color:#585858;width: 45%;font-family: system-ui;font-size: 20px;">Preload Old Exploit &nbsp;</td>'+
					'<td style="width: 10%;"><label class="switch"><input checked id="tog" onclick="if(document.getElementById(\'tog\').checked){document.getElementById(\'oexp\').style.color=\'#585858\';document.getElementById(\'nexp\').style.color=\'white\';localStorage.jb=\'jb.js\';}else{document.getElementById(\'nexp\').style.color=\'#585858\';document.getElementById(\'oexp\').style.color=\'white\';localStorage.jb=\'oldjb.js\';}" type="checkbox"><span class="slider round"></span></label></td>'+
					'<td id="nexp" align="left" style="width: 45%;font-family: system-ui;font-size: 20px;">&nbsp;Preload New Exploit</td>'+
					'</tr>';
				  if(localStorage.autoExploit=="true"){document.getElementById('tog1').checked=true;document.getElementById('toggleExploit').style.display='table-row';}else{document.getElementById('tog1').checked=false;document.getElementById('toggleExploit').style.display='none';}
			    }else{
				  document.getElementById('load').innerHTML='<tr style="color:white;">'+	
					'<td align="center" colspan="3" >'+
          '</td>'+
          '</tr>'+
					'<tr><td><br/></td></tr>'+
					'<tr>'+
					'<td colspan="3" align="center"><hr><br></td>'+
					'</tr>'+
					'<tr>'+
					'<td align="center" colspan="3">'+
					'</tr><tr><td><br/></td></tr>'+
					'<tr>'+
					'<td align="center" colspan="3">'+
					'</tr><tr><td><br/></td></tr>'+
					'<tr>'+
					'<td align="center" colspan="3">'+
					'</tr><tr><td><br/></td></tr>'+
					'<tr>'+
					'<td align="center" colspan="3">'+
					'</tr><tr><td><br/></td></tr>'+
					'<tr>'+
					'<tr>'+
					'<td align="center" colspan="3">'+
					'<a href="#" id="restore2" class="button" onclick="toggle_payload(\'restore2\');return false" style="width:29%">Restore 7.5x</a>&nbsp;'+
					'<a href="#" id="restore" class="button" onclick="toggle_payload(\'restore\');return false" style="width:29%">DB_Restore 7.55</a>&nbsp;'+
 					'</tr><tr><td><br/></td></tr>'+
					'<tr>'+
					'<td align="center" colspan="3">'+
					'</tr>';
				  if(localStorage.autoExploit=="true"){document.getElementById('tog1').checked=true;document.getElementById('toggleExploit').style.display='table-row';document.getElementById('mexp').style.display='none';}else{document.getElementById('tog1').checked=false;document.getElementById('toggleExploit').style.display='none';document.getElementById('mexp').style.display='table-row';}
			}
			if(localStorage.jb=='jb.js'){document.getElementById('tog').checked=true;document.getElementById('oexp').style.color='#585858';document.getElementById('nexp').style.color='white';}else{document.getElementById('tog').checked=false;document.getElementById('oexp').style.color='white';document.getElementById('nexp').style.color='#585858';}
		}setTimeout("done()",3500);	