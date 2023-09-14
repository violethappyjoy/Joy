const path = require('path')
const { app, BrowserWindow} = require('electron');

const isDev = process.env.NODE_ENV !== 'development';
const isMac = process.platform = 'darwin';

function createMainWindow(){
    const mainWindow = new BrowserWindow({
        title: 'Joy',
        width: isDev ? 1920 : 1280,
        height: isDev ? 1080 : 720
    });

    // Open Dev Tools If in Dev Env
    if(isDev){
        mainWindow.webContents.openDevTools()
    }

    mainWindow.loadFile(path.join(__dirname, './renderer/index.html'));
}
app.whenReady().then(()=> {
    createMainWindow();

    app.on('activate', ()=> {
        if (BrowserWindow.getAllWindows().length === 0) {
            createMainWindow();
        }
    });
});

app.on('window-all-closed', ()=>{
    if (!isMac) {
        app.quit();
    }
});