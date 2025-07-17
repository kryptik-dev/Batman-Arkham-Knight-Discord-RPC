const RPC = require('discord-rpc');
const { exec } = require('child_process');

const clientId = '1395414403599302770';
RPC.register(clientId);

const rpc = new RPC.Client({ transport: 'ipc' });

function setActivity() {
  if (!rpc) return;
  rpc.setActivity({
    details: 'Playing Batman: Arkham Knight',
    startTimestamp: Date.now(),
    largeImageKey: 'batman',
    largeImageText: 'Batman: Arkham Knight',
    instance: false,
  });
}

function checkIfBatmanRunning() {
  exec('tasklist', (err, stdout, stderr) => {
    if (err) return;
    const isRunning = stdout.toLowerCase().includes('batmanak.exe');
    if (!isRunning) {
      process.exit();
    }
  });
}

rpc.on('ready', () => {
  setActivity();
  setInterval(() => {
    setActivity();
  }, 15e3);
});

rpc.login({ clientId }).catch(console.error);
setInterval(checkIfBatmanRunning, 2000); 