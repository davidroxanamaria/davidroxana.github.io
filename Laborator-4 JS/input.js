
function validateText(textInput, bullet, sub){
    var pattern = /^[a-z0-9]+$/;
    if(pattern.test(textInput.value)) {
        bullet.className = "dot_green";
		sub.disabled=false;

    }else {
        bullet.className = "dot_red";
		sub.disabled=true;
		//alert("Username-ul trebuie sa contina doar cifre si litere mici");
    }
}

function validateParola(textInput, bullet, sub){
   // var pattern1 = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!]).{8,32}$/;
	 var pattern = /^[0-9a-zA-Z!]+$/;

    if(textInput.value.match(pattern)) {
        bullet.className = "dot_green";
		sub.disabled=false;

    }else {
        bullet.className = "dot_red";
		sub.disabled=true;
		//alert("Username-ul trebuie sa contina doar cifre si litere mici");
    }
}


function validateEmail(textInput, bullet, sub){
	 var pattern = /^[0-9a-zA-Z_\.]+@([0-9a-zA-Z]+\.)+[0-9a-zA-Z]*$/;

    if(textInput.value.match(pattern)) {
        bullet.className = "dot_green";
		sub.disabled=false;

    }else {
        bullet.className = "dot_red";
		sub.disabled=true;
		//alert("Username-ul trebuie sa contina doar cifre si litere mici");
    }
}

function validateNrTel(textInput, bullet, sub){
	 //var pattern = /^(\(+[0-9]{2}\))[0-9]{3}[0-9]{3}[0-9]{3}$/;
	 var pattern = /^\(?[\+]?([0-9]{2})\)?([0-9]{3})([0-9]{3})([0-9]{3})$/;

    if(textInput.value.match(pattern)) {
        bullet.className = "dot_green";
		sub.disabled=false;

    }else {
        bullet.className = "dot_red";
		sub.disabled=true;
		//alert("Username-ul trebuie sa contina doar cifre si litere mici");
    }
}

// tipuri  'zz/ll/aaaa', 'll/zz/aaaa', 'zz/ll/aa'.
function validateDate(dateString,bullet, sub, tip){


	switch (tip){
	case 'zz/ll/aa':
        if (valid_dd_mm_aa(dateString)) {
            bullet.className = "dot_green";
			sub.disabled=false;
        }
        else{
			bullet.className = "dot_red";
			sub.disabled=true;
        }
		break;
	case'zz/ll/aaaa':
			if(valid_dd_mm_aaaa(dateString)){
				bullet.className = "dot_green";
				sub.disabled=false;
			}
			else{
				bullet.className = "dot_red";
				sub.disabled=true;
			}
		break;
	case 'll/zz/aaaa':
			if(valid_mm_dd_aaaa(dateString)){
				bullet.className = "dot_green";
				sub.disabled=false;
			}
			else{
				bullet.className = "dot_red";
				sub.disabled=true;
			}
		break;
	}
}


function valid_mm_dd_aaaa(dateString){

    if(!/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/.test(dateString.value))
        return false;

    var parts = dateString.value.split("/");
    var day = parseInt(parts[1], 10);
    var month = parseInt(parts[0], 10);
    var year = parseInt(parts[2], 10);

    if(year < 1000 || year > 3000 || month == 0 || month > 12)
        return false;

    var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
        monthLength[1] = 29;

    return day > 0 && day <= monthLength[month - 1];

}

function valid_dd_mm_aaaa(dateString){

    if(!/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/.test(dateString.value))
        return false;

    var parts = dateString.value.split("/");
    var day = parseInt(parts[0], 10);
    var month = parseInt(parts[1], 10);
    var year = parseInt(parts[2], 10);

    if(year < 1000 || year > 3000 || month == 0 || month > 12)
        return false;

    var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
        monthLength[1] = 29;

    return day > 0 && day <= monthLength[month - 1];

}

function valid_dd_mm_aa(dateString){

    if(!/^[0-9]{2}\/[0-9]{2}\/[0-9]{2}$/.test(dateString.value))
        return false;

    var parts = dateString.value.split("/");
    var day = parseInt(parts[0], 10);
    var month = parseInt(parts[1], 10);
    var year = parseInt(parts[2], 10);

    if( month == 0 || month > 12)
        return false;

    var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
	year = year + 2000;
    if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
        monthLength[1] = 29;

    return day > 0 && day <= monthLength[month - 1];

}










































