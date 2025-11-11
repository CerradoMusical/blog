@echo off
echo ========================================
echo    CERRADO MUSICAL - DEPLOY SCRIPT
echo ========================================
echo.

echo [1/4] Instalando dependencias...
call npm install
if %errorlevel% neq 0 (
    echo ERRO: Falha na instalacao das dependencias
    pause
    exit /b 1
)

echo.
echo [2/4] Executando linting...
call npm run lint
if %errorlevel% neq 0 (
    echo ERRO: Problemas encontrados no linting
    pause
    exit /b 1
)

echo.
echo [3/4] Fazendo build do projeto...
call npm run build
if %errorlevel% neq 0 (
    echo ERRO: Falha no build do projeto
    pause
    exit /b 1
)

echo.
echo [4/4] Build concluido com sucesso!
echo.
echo ========================================
echo   PROJETO PRONTO PARA DEPLOY!
echo ========================================
echo.
echo Proximos passos:
echo 1. Fazer commit das alteracoes
echo 2. Push para o repositorio GitHub
echo 3. Configurar GitHub Pages nas configuracoes do repo
echo 4. O deploy sera automatico via GitHub Actions
echo.
echo Estrutura do projeto:
echo - Cards responsivos com fotos em destaque
echo - Playlists estilo Spotify
echo - Design moderno e profissional
echo - Pronto para producao
echo.
pause
