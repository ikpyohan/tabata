let cnt = 0;
async function repeater(){
    demo();
    await sleep(4000);
    let delay = -30000;
    for(let i=1; i < 9; i++){
        delay += 30000;
        setTimeout(async () => {
        rest()
        cnt++;
        }, delay);
    }
    setTimeout("goodJob()",241000);
    cnt = 0;
}
async function demo() {
    document.getElementById('display').innerHTML = 'Ready!';
    await sleep(1000);
    document.getElementById('display').innerHTML = '1!';
    await sleep(1000);
    document.getElementById('display').innerHTML = '2!';
    await sleep(1000);
    document.getElementById('display').innerHTML = '3!';
    
}
function rest(){
    exercise();
    setTimeout("breakTime()", 20000);
}
function exercise(){
    document.getElementById('display').innerHTML = 'Start!';
    playStart();
    setTimeout("counter(cnt)",1000);
}
function breakTime(){
    document.getElementById('display').innerHTML = 'Break!';
    playEnd();
}
function counter(cnt){
    document.getElementById('display').innerHTML = cnt;
}
function goodJob(){
    document.getElementById('display').innerHTML = 'Good Job!';
}
function playStart() {
    var audio = new Audio(
'https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3');
    audio.play();
}
function playEnd(){
    var audio = new Audio(
'src/censor-beep-3.mp3');
    audio.play();
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

