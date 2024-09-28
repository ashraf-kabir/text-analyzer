@echo off
echo Initializing project...
echo Installing dependencies of server...
npm install

echo Building server environment...
copy .env.example .env

cd client
echo Installing dependencies of client...
npm install

echo Building client environment...
copy .env.example .env

echo Project initialized successfully!
pause
