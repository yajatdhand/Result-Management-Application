# Result-Management-System
 
# Backend Setup
1. Open this Project in Visual Studio.
 
2. Open a new terminal.
 
3. Run "npm install" and "npm install -g nodemon" to install all the dependencies.
 
4. Run "npm start" to run the application.
 
# Frontend
Open the url http://localhost:4200 on a browser.
 
# How To Explore
   
   Home page will be rendered on port number 4200 (localhost:4200) and there will be two options to move forward as a : 
   
   1. Teacher
   
   2. Student  
 
# For teacher
 
  Please enter below credentials for teacher login : 
   
   password: password@123
 
 1. After successfully logging in, teacher can view all the students, add a new student, edit and remove.
 
 2. For adding student if roll number already exists in the mongodb public database, it will show error message.
 
 3. Teacher can logout by clicking on 'Logout' button from Menu(navbar).
 
 # Logout
 
   A cookie will be genereated when teacher will login and it will be deleted when logout is hit.
 
# For student
 
 By Clicking on student card it will show student where student can enter his/her roll number and date of birth.
 
 If the details entered match an entry from the database, the student will be redirected to result page, otherwise

 an error will be thrown to enter correct credentials.
