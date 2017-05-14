# HealthApp
HealthApp Project

---------------------------
To Run this application 
---------------------------

Create a file ConfigFile_Do_Not_Check_IN.js under actions and add the below entry 
export const APIKEY ='APIKEY';
export const SECRETKEY ='SECRETKEY';

npm install 
npm install --save-dev style-loader 

npm install --save-dev css-loader 

npm install babel-core

npm install react-bootstrap


Install latest version of react-tap-event-plugin



npm run dev

This is to schedule the appointment between the patient and the hospital and also helps the patient to see his record and helps the doctor to check the medical history of the patient. The user can create the account or use the google login to authenticate. Then the user can search for the doctors from the city and hospital and then request for the appointment. The doctor can see his appointment to see the scheduled patient. The doctor enters the summary of the visit  for the patient . The patient can see his record in his session.
This uses the React.js , Redux for the state management , dynamodb for the database and express and IAM for the authunteication, the DERN stack.

-----------------------------
--  Config Managment      ---
-----------------------------

To checkout  multiple files
git commit -a
git add "file-name	"
git push
