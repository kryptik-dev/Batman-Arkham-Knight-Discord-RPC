const { app, Menu } = require('electron');
const { spawn } = require('child_process');
const path = require('path');

app.on('ready', () => {
  Menu.setApplicationMenu(null);
  const vbsPath = path.join(process.resourcesPath, 'launch-batman-silent.vbs');
  spawn('wscript.exe', [vbsPath], {
    detached: true,
    stdio: 'ignore',
    windowsHide: true
  }).unref();
  app.quit();
});

app.on('window-all-closed', () => {}); 