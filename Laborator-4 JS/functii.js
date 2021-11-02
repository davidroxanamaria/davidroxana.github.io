
var	lista = {
	Alba:["Alba-Iulia", "Aiud", "Zlatna", "Ocna Mures"],
	Cluj: ["Cluj-Napoca", "Turda", "Dej", "Floresti"],
	Sibiu: ["Sibiu", "Poiana Sibiului", "Jina"], 
	Mures: ["Targu Mures", "Reghin", "Ludus"]}
	

window.onload = function creareOptiuniJudete(){
	
	var judet = document.getElementById("judetSelectat");
	
	for (jud in lista) 
		judet.options[judet.options.length] = new Option(jud,jud);
	
}	
	
function dropdownlist(judet){
	var oras = document.getElementById("orasSelectat");
	oras.length=1;

	for (var or in lista[judet.value])
		oras.options[oras.options.length] = new Option(lista[judet.value][or],lista[judet.value][or]);
		
}

function resetAll(){
	document.getElementById("judetSelectat").selectedIndex = 0;
    document.getElementById("orasSelectat").selectedIndex = 0;
	
}

function sortareTabel(n,table,tip,dir){
	var  rows, stop, i, x, y;

  stop = true;
  rows = table.rows;
  while (stop==true) {
  
   stop= false;
    for (i = 1; i < (rows.length - 1); i++) {
      stop= false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
    
      if (tip =="string" && dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          stop = true;  
          break;
        }
      } else if (tip == "numar" && dir =="desc") {
        if (parseInt(x.innerHTML) < parseInt(y.innerHTML)) {
          stop = true;
          break;
        }
      } else if(tip=="numar" && dir == "asc"){
			 if (parseInt(x.innerHTML) > parseInt(y.innerHTML)){
					stop = true;
			 break;}
	  }else if(tip=="string" && dir == "desc") 
			if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
				stop = true;  
				break;  
	  }
    }
    if (stop) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      stop = true;
    } 
  }
}


 