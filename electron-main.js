
const { app, BrowserWindow } = require('electron');
const path = require('path');
const config = require('./company.config.json');

function createWindow() {
  const win = new BrowserWindow({
    width: 1366,
    height: 768,
    title: config.companyName + ' - نظام إدارة الأعمال',
    icon: path.join(__dirname, 'icon.png'),
    webPreferences: { nodeIntegration: false, contextIsolation: true }
  });
  win.loadFile('dist/index.html');
  // win.loadFile('business-system-v2.html'); // للتجربة السريعة
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
