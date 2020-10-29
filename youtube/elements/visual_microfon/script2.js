let
    body, num, array, width, context,
    logo, myElements, analyser, height;

body = document.querySelector('body');

num = 255;

array = new Uint8Array(num * 2);

width = 2;

let audio = document.getElementById('audio');

window.onclick = function () {
    if (context)
        return;

    body.querySelector('h1').remove();

    for (let i = 0; i < num; i++) {
        logo = document.createElement('div');
        logo.className = 'logo';
        logo.style.background = 'red';
        logo.style.minWidth = width + 'px';
        body.appendChild(logo);
    }
    myElements = document.getElementsByClassName('logo');
    context = new AudioContext();
    analyser = context.createAnalyser();

    src = context.createMediaElementSource(audio);
    src.connect(analyser);
    analyser.connect(context.destination);

    audio.play();
    loop();
    // navigator.mediaDevices.getUserMedia({
    //     audio : true
    // }).then(stream =>{
    //     src = context.createMediaStreamSource(stream);
    //     src.connect(analyser);
    //     loop();
    // }).catch(error =>{
    //     alert(error + '\r\n\ Disconnect. Page will be reload');
    //     location.reload();
    // });

}

function loop() {
    analyser.getByteFrequencyData(array);

    requestAnimationFrame(loop);
    for (let i = 0; i < num; i++) {
        height = (array[i] - 125) * 6;
        myElements[i].style.minHeight = height + 'px';
        myElements[i].style.opacity = height * 3;
    }
}