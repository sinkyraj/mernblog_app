# mernblog_app
A user created blog app. User can register, login and can create post and display these information in their profile and home page.

# tools or npm packages (package.json)
   express mongoose concurrently if-env dotenv passport passport-local passport-local-mongoose jsonwebtoken
   reactstrap, bootstrap, react-router-dom
# description 
 1- I used create-react-app command to create this app.
 2- db folder has database information.
 3- React's  client folder(UI) can communicate with the backend through server.js file.
 4- App's data is defined in the model folder in User.js and Post.js file and it communicate with database using mongoose and also using plugin passprt-local-mongoose for user authentication.
 5- routes folder has userRoutes and postRoutes.  a. userRoutes has register routes to create a user, Login routes authenticate the user using jsonwebtoken and userRoutes gets user profile information. b. PostRoutes belongs to User and User can create post.
 6- dotenv file has secret in case of deployment.
 7 - App's UI has been established in the client folder and UI has been designed using the React libraries - reactstrap, bootstrap, react-router-dom.
 8- client's component folder has Navbar information, pages has multi view structure (Home, Login, Profile). 
 9- Client's Util folder has custom axios method to communicate with backened routes.
 10- Please write npm i in the root directory terminal and another npm i in client directory terminal to install all the packages you requires to run this app.
 11- Please wrire npm start in the root directory terminal to start app.

