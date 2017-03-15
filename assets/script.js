var timer;
var audio = new Audio('assets/audio/Alarm.mp3');

$('#start_button').click(function(){

	var min_val = $('#minutes_input').val();
	var sec_val = $('#seconds_input').val();

	if (min_val <= 0 && sec_val <= 0) {
		alert("Please fill in times greater than 0 sec!");
	} else {
		
		$('.minutes').text(min_val);
		$('.seconds').text(sec_val);	

		startTimer();
	}
	
});

$('#stop_button').click(function(){
	stopTimer();
});

function startTimer() {
	var m = $('.minutes').text();
	var s = checkSecond($('.seconds').text() -1);
  
  	//if(m<0){alert('timer completed')}
  	if(s==59){m=m-1}

  	if (m<0) {
  		$('.minutes').text("00");
  		$('.seconds').text("00");
  		
  		//Play sound
		audio.play();

  	} else {

  		timer = setTimeout(startTimer, 1000);		
  		$('.minutes').text(m);
  		$('.seconds').text(s);
  	}

}

function stopTimer() {
	clearTimeout(timer);
	$('.minutes').text("00");
  	$('.seconds').text("00");
	audio.pause();
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}