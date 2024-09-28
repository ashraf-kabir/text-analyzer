echo "Initializing project...";
echo "Installing dependencies of server...";
npm install;
echo "Building server environment...";
cp .env.example .env;
cd client;
echo "Installing dependencies of client...";
npm install;
echo "Building client environment...";
cp .env.example .env;
echo "Project initialized successfully!";