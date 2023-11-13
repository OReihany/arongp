# Introducing SOA
#### Project Installation Guide:
```
cp .env.template .env
npm install
npm run generate-theme
npm start
```
#### NPM Commands exlpained:
1. ```npm run start```  
This command will run the application in development mode, code changes will force application to reload.
1. ```npm run generate-theme```  
This command will generate [ant.design](https://ant.design) theme based on **custom-theme.less** file located in application directory.
1. ```npm run build```  
This command will build the application for production.
1. ```npm run serve```  
This command will serve the /build folder and start a proxy.

#### Environment Variables Explained:
All of these variables used during build and production, so make sure the **.env** exists in both environments.
1. ```PORT=4000```   
Used to determine application port
1. ```REACT_PUBLIC_URL=http://localhost:4000```   
Used to determine application absolute serving path, might be different in production environments.
1. ```REACT_PROXY_URL=https://www.roomvu.com/api```   
Used to initiate a reverse-proxy for development or production which is optional.
1. ```NODE_ENV=production```   
determines type of build whether it's 'development' or 'production'.
