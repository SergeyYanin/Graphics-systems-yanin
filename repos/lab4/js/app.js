let recognizer = new webkitSpeechRecognition();
let status = false;
let opacity = 1;
let operator = -1;

recognizer.interimResults = true;
recognizer.lang = 'ru-Ru';

setInterval(() => {
    if(status){
        if(opacity <= 0.3)
            operator = 1;
        if(opacity >= 1)
            operator = -1;

        opacity += 0.01 * operator;
        document.getElementById('listen-button').style.opacity = opacity;
    }
    else
        document.getElementById('listen-button').style.opacity = 1;
}, 10)


recognizer.onresult = function (event) {
    console.log(event);
    var result = event.results[event.resultIndex];
    document.getElementById('text').value= result[0].transcript;
    if (result.isFinal) {
        status = false;
    }
};

function speech () {
    if(!status) {
        recognizer.start();
        status = true;
    }
    else{
        recognizer.stop();
        status = false;
    }

}