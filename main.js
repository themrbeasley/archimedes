const { app, BrowserWindow, globalShortcut } = require('electron');
const path = require('path');
const iconPath = path.join(__dirname, 'assets', 'ai.png');


let win;

function createWindow() {
  win = new BrowserWindow({
    width: 450,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      enableRemoteModule: false,
    },
    frame: false,
    alwaysOnTop: true,
    transparent: true,
    resizable: true,
	icon: iconPath,
  });

  win.loadURL('https://chat.openai.com');
  
   win.webContents.on('did-finish-load', () => {
    win.webContents.insertCSS(`
      body {
        -webkit-app-region: drag;
      }
    `);
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });

  globalShortcut.register('Alt+W', () => {
    if (win.isVisible()) {
      win.hide();
    } else {
      win.show();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('will-quit', () => {
  globalShortcut.unregisterAll();
});
