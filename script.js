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
	

	
	
	for(j = 0; j < questions_answers[i].length - 5; j++){
		
		if(j == 0){  
		div.innerHTML+='<div class="pointer" style="margin-left:'+questions_answers[i][2]*30+'; margin-top:'+questions_answers[i][3]*30+';">'+questions_answers[i][0]+'</div>'; 
		}
		
		if(questions_answers[i][1] == "goriz"){
			div.innerHTML += '<div class = "litle_fields_g"><div class="letter">'+questions_answers[i][j+5]+'</div></div>';
		}else{
			div.innerHTML += '<div class = "litle_fields_v"><div class="letter">'+questions_answers[i][j+5]+'</div></div>';
		}
	}
	
	(questions_answers[i][1] == "goriz")?(div.innerHTML += '<div style="clear: both">  </div>'): undefined;
	
	document.getElementById("for_work"+i).appendChild(div);
	
	delete div;
}


for(i = 0; i < questions_answers.length; i++){
	
	var div = document.createElement('div');
	div.id = 'button'+i;
	div.className = 'buttons';
	
	div.setAttribute('onclick', 'activ('+i+')');
	div.innerHTML = "Вопрос "+(i+1);
	
	panel.appendChild(div);
	
	
	
	var question = document.createElement('div');
	question.id = 'question'+i;
	question.className = 'questions';
	question.setAttribute('onclick', 'cbur("question'+i+'")');
	
	var text = document.createElement('div');
	text.id = 'text'+i;
	text.className = 'text';
	text.innerHTML = 'Вопрос №'+questions_answers[i][0]+':<br>'+questions_answers[i][4];
	
	var buttons = document.createElement('div');
	buttons.className = 'all_buttons_for_question';
	
	var button_1 = document.createElement('div');
	button_1.className = 'buttons_for_question_1';
	button_1.innerHTML = "Засчитать ответ";
	button_1.setAttribute("onclick", "true_answer("+i+")");
	
	var button_2 = document.createElement('div');
	button_2.className = 'buttons_for_question_2';
	button_2.innerHTML = "Вернуться";
	button_2.setAttribute("onclick", "$('#question"+i+"').fadeOut(500);");
	
	buttons.appendChild(button_1);
	buttons.appendChild(button_2);
	question.appendChild(text);
	question.appendChild(buttons);
	
	baz.insertBefore(question, panel);
	
}

}



function activ(n){
	
	for(i=0; i<questions_answers.length; i++){
		$('#question'+i).fadeOut(500);
	}
	$('#question'+n).fadeIn(500);
}



function true_answer(n){
	
	$('#question'+n).fadeOut(500);
	k = $('#big_field'+n+' .letter').fadeIn(900);
	k = $('#big_field'+n).css('border', '1px solid #000');
	$('#button'+n).hide(1500);
}


function cbur(n){

  var ie = 0;
  var op = 0;
  var ff = 0;
  var browser = navigator.userAgent;
  if (browser.indexOf("Opera") != -1) op = 1;
  else {
    if (browser.indexOf("MSIE") != -1) ie = 1;
    else {
      if (browser.indexOf("Firefox") != -1) ff = 1;
    }
  }
  var blok = document.getElementById(n);
  delta_x = 0;
  delta_y = 0;
  blok.onmousedown = saveXY;
  if (op || ff) {
    blok.addEventListener("onmousedown", saveXY, false);
  }
  document.onmouseup = clearXY;
  function saveXY(obj_event) {
    if (obj_event) {
      x = obj_event.pageX;
      y = obj_event.pageY;
    }
    else {
      x = window.event.clientX;
      y = window.event.clientY;
      if (ie) {
        y -= 2;
        x -= 2;
      }
    }
    x_blok = blok.offsetLeft;
    y_blok = blok.offsetTop;
    delta_x = x_blok - x;
    delta_y = y_blok - y;
    
    document.onmousemove = moveblok;
    if (op || ff)
      document.addEventListener("onmousemove", moveblok, false);
  }
  function clearXY() {
    document.onmousemove = null; 
  }
  function moveblok(obj_event) {

    if (obj_event) {
      x = obj_event.pageX;
      y = obj_event.pageY;
    }
    else {
      x = window.event.clientX;
      y = window.event.clientY;
      if (ie) {
        y -= 2;
        x -= 2;
      }
    }

    new_x = delta_x + x;
    new_y = delta_y + y;
    blok.style.top = new_y + "px";
    blok.style.left = new_x - 100 + "px";
  }

}


start();