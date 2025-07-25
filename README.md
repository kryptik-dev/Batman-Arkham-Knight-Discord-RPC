# Batman Arkham Knight RPC Launcher

This project is a custom launcher for Batman: Arkham Knight that integrates with Discord Rich Presence (RPC).

## Features
- Launches Batman: Arkham Knight with Discord Rich Presence
- Silent background launching
- Customizable game path
- All in one .exe file

## Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- npm (comes with Node.js)
- Electron
- discord-rpc (npm package)

## Setup & Build
1. **Clone or download this repository.**
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Build:**
    ```sh
   npm run dist
   ```

## Configuration

### 1. Set Your Game Path
By default, the launcher uses a hardcoded path to Batman: Arkham Knight. To use your own game installation:

- Open `launch-batman.bat` in a text editor.
- Change the path to point to your own `BatmanAK.exe` location. Example:
  ```bat
  "C:\\Program Files (x86)\\Steam\\steamapps\\common\\Batman Arkham Knight\\Binaries\\Win64\\BatmanAK.exe"
  ```

### 2. Discord Client ID
This launcher uses a Discord Client ID for Rich Presence. You can use the provided client ID in the code:

- **Client ID:** 1395414403599302770

If you want to use your own, register an application at the [Discord Developer Portal](https://discord.com/developers/applications) and replace the client ID in `batman-rpc.js`.

## Usage
- Run `launch-batman-silent.vbs` to silently launch the game with Discord RPC.
- Or, install the setup exe from the dist directory

## Files
- `batman-rpc.js` – Handles Discord Rich Presence
- `main.js` – Main launcher logic
- `launch-batman.bat` – Batch file to launch the game
- `launch-batman-silent.vbs` – Silently runs the batch file
- `splash.html` – Optional splash screen

## Notes
- Make sure your game path is correct, or the launcher will not work.
- You can use the provided Discord Client ID, or set your own.

---

Enjoy Gotham! 
