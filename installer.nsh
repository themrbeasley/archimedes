!macro customInstall
Function customInstallFunction
  SetShellVarContext current
  CreateDirectory "$SMPROGRAMS\Archimedes"
  CreateShortCut "$SMPROGRAMS\Archimedes\Archimedes.lnk" "$INSTDIR\Archimedes.exe"
  CreateShortCut "$SMPROGRAMS\Archimedes\Uninstall Archimedes.lnk" "$INSTDIR\uninstaller.exe"
  CreateShortCut "$SMSTARTUP\Archimedes.lnk" "$INSTDIR\Archimedes.exe"
FunctionEnd
!macroend

!macro customUnInstall
Function customUnInstallFunction
  SetShellVarContext current
  Delete "$SMPROGRAMS\Archimedes\Archimedes.lnk"
  Delete "$SMPROGRAMS\Archimedes\Uninstall Archimedes.lnk"
  RMDir "$SMPROGRAMS\Archimedes"
  Delete "$SMSTARTUP\Archimedes.lnk"
FunctionEnd
!macroend
