var keys = "abcdefghijklmnopqrstubwsyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
var code='';

function getCode(btn){
	code=generateCode(8);
	document.getElementById('code').innerHTML = "<center><label style='font-size:35px; margin-top:30px;'>"+code+"</label></center>";
	document.getElementById('button').removeAttribute('disabled');
	btn.setAttribute('disabled', 'disabled');
}

function generateCode(len){
	code='';
		for(i=0; i<len; i++){
			code+=keys.charAt(Math.floor(Math.random()*keys.length));
		}
	
	return code;
}

function checkCode(btn){
	var val=document.getElementById('ccode').value;
	
	if(val == ""){
		document.getElementById('result').innerHTML="<center class='text-danger'>Fill up the form first!</center>";
	}else{
		if(code==val){
			document.getElementById('result').innerHTML="<center class='text-success'>The code can be use</center>";
			document.getElementById('reset').style.display='inline';
		}else{
			document.getElementById('result').innerHTML="<center class='text-danger'>Invalid code<center>";
		}
	}
}