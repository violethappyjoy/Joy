const path = require('path')
const { app, BrowserWindow, Menu} = require('electron');

const isDev = process.env.NODE_ENV !== 'development';
const isMac = process.platform === 'darwin';
// console.log(app.name)

function createMainWindow(){
    const mainWindow = new BrowserWindow({
        title: 'Joy',
        width: isDev ? 1920 : 1280,
        height: isDev ? 1080 : 720,
        minHeight: 400,
        minWidth: 400,
    });

    // Open Dev Tools If in Dev Env
    if(isDev){
        mainWindow.webContents.openDevTools()
    }

    mainWindow.loadFile(path.join(__dirname, './renderer/index.html'));
    }
app.whenReady().then(()=> {
    createMainWindow();

    const mainMenu = Menu.buildFromTemplate(menu);
    Menu.setApplicationMenu(mainMenu);


    app.on('activate', ()=> {
        if (BrowserWindow.getAllWindows().length === 0) {
            createMainWindow();
        }
    });
});

const menu = [
    ...(isMac
        ? [
            {
                label: app.name,
                submenu: [
                    {
                        label: 'About',
                    },
                ],
            },
        ]
        : []),
        {
            role: 'fileMenu',
        },
        ...(!isMac
            ? [
                {
                    label: 'Help',
                    submenu: [
                        {
                            label: 'About'
                        },
                    ],
                },
            ] : []),
            ...(isDev ?
                [
                    {
                        label: 'Developer',
                        submenu: [
                            {role: 'reload'},
                            {role: 'forcereload'},
                            {type: 'separator'},
                            {role: 'toggledevtools'},
                        ],
                    },
                ]
                : []),
];

app.on('window-all-closed', ()=>{
    if (!isMac) {
        app.quit();
    }
});