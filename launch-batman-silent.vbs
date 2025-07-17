Set fso = CreateObject("Scripting.FileSystemObject")
Set WshShell = CreateObject("WScript.Shell")
batPath = fso.GetParentFolderName(WScript.ScriptFullName) & "\\launch-batman.bat"
WshShell.Run chr(34) & batPath & chr(34), 0
Set WshShell = Nothing
Set fso = Nothing 