function updateTime(){
    const timeEle = document.getElementById('time')
    const greetEle = document.getElementById('greeting')
    const date = new Date()
    const hours = date.getHours().toString().padStart(2,'0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}`;
    timeEle.textContent = timeString;

    let greeting;
    if (hours >= 5 && hours < 12) {
        greeting = 'Good Morning!';
    } else if (hours >= 12 && hours < 17) {
        greeting = 'Good Afternoon!';
    } else {
        greeting = 'Good Evening!';
    }
    greetEle.textContent = greeting;
}
setInterval(updateTime, 1000);
updateTime();