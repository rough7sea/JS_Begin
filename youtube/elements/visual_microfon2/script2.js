let
    body, num, array, width, context,
    logo, myElements, analyser, height;

body = document.querySelector('body');

num = 255;

array = new Uint8Array(num * 2);

width = 2;

let audio = document.getElementById('audio');

body.querySelector('h1').onclick = function () {
    let input = document.getElementById('file-input');

    console.log(input.files[0]);
    if (input.files[0])
        audio.setAttribute('src', URL.createObjectURL(input.files[0]));

    if (context)
        return;


    body.querySelectorAll('h1').forEach(item =>
    item.remove());
    body.querySelector('form').remove();


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