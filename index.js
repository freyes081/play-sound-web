const button = document.querySelectorAll('.drum');

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function () {

        const buttonInnerHTML = this.innerHTML;
        switch (buttonInnerHTML) {
            case 'w':
                const tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();                
                break;
            case 'a':
                const tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
                break;
            case 's':
                const tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
                break;
            case 'd':
                const tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
                break;
            case 'j':
                const snare = new Audio('sounds/snare.mp3');
                snare.play();
                break;
            case 'k':
                const crash = new Audio('sounds/crash.mp3');
                crash.play();
                break;
            case 'l':
                const kick = new Audio('sounds/kick-bass.mp3');
                kick.play();
                break;


        
            default:console.log(buttonInnerHTML);
                break;
        }
    });
}

document.addEventListener('keydown', function (event) {
    const buttonInnerHTML = event.key;
    switch (buttonInnerHTML) {
        case 'w':
            const tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'a':
            const tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case 's':
            const tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'd':
            const tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case 'j':
            const snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case 'k':
            const crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case 'l':
            const kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

        default:console.log(buttonInnerHTML);    
}
});







// var audio = new Audio("sounds/tom-1.mp3");
//         audio.play();