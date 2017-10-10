//start create blocks
function start(){
	
var margint=0; //хранят сммарный отступ позиционных элементов

for(i = 0; i < questions_answers.length; i++){
	
	var div = document.createElement('div');
	div.id = 'big_field'+i;
	
	all.innerHTML+="<div id = 'for_work"+i+"' style = 'width:100%;  margin-top:"+(30*questions_answers[i][3] - margint)+"px;'></div>";
	
	if(questions_answers[i][1] == "goriz"){
		div.className = 'big_fields_g';
		div.setAttribute('style', 'margin-left:'+(30*questions_answers[i][2])+'px; width:'+((questions_answers[i].length - 5)*30)+'px;');
		//div.setAttribute('onclick', 'activ('+i+')');
		margint = (30*questions_answers[i][3])+30 + 2;
		
	}else{
		div.className = 'big_fields_v';
		div.setAttribute('style', 'margin-left:'+(30*questions_answers[i][2])+'px;');
		//div.setAttribute('onclick', 'activ('+i+')');
		margint = (30*questions_answers[i][3])+(questions_answers[i].length - 5)*30 +2;
		
	}
	

	document.getElementById("for_work"+i).appendChild(div);
	
	for(j = 0; j < questions_answers[i].length - 5; j++){
		
		if(questions_answers[i][1] == "goriz"){
			div.innerHTML += '<div class = "litle_fields_g"><div class="letter">'+questions_answers[i][j+5]+'</div></div>';
		}else{
			div.innerHTML += '<div class = "litle_fields_v"><div class="letter">'+questions_answers[i][j+5]+'</div></div>';
		}
	}
	
	(questions_answers[i][1] == "goriz")?(div.innerHTML += '<div style="clear: both"> </div>'): undefined;

	delete div;
}
}



function activ(n){
	alert(n);
}




start();