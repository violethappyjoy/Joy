function updateTime(){
    const timeEle = document.getElementById('time')
    const date = new Date()
    const hours = date.getHours().toString().padStart(2,'0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}`;
    timeEle.textContent = timeString;
}
setInterval(updateTime, 1000);
updateTime();