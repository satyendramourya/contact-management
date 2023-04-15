# Documentation for Running the App: 

### This app has two main pages: 
Contacts and Charts and Maps. The Contacts page includes a form for 
adding new contacts, a list of all added contacts, and the ability to edit and delete contacts. The Charts 
and Maps page includes a line graph showing the cases fluctuations and a react leaflet map with 
markers that indicate the country name, total number of active, recovered cases and deaths in that 
particular country as a popup. 

## To run the app, follow these steps:

Clone the repository from Github: 
```https://github.com/satyendramourya/contact-management.git ```

Install the required dependencies by running ```npm install ```in the terminal. 

Start the app by running npm start in the terminal. 
The app should now be running in your browser at``` http://localhost:3000. ```


# API Endpoint Used:
This app uses three different endpoints provided by the disease.sh API: 
World wide data of cases: ```https://disease.sh/v3/covid-19/all``` 

This API endpoint is used to fetch the data for the line graph in the Charts and Maps page. 
Country specific data of cases: ```https://disease.sh/v3/covid-19/countries ```

This API endpoint is used to fetch the data for the markers in the react leaflet map in the Charts and 
Maps page. 

Graph data for cases with date:``` https://disease.sh/v3/covid-19/historical/all?lastdays=all ```

This API endpoint is also used to fetch the data for the line graph in the Charts and Maps page. 

# Completed Project Links --
The repository from Github :``` https://github.com/satyendramourya/contact-management.git``` 

Live Demo :-``` https://contact-management-murex.vercel.app/ ```
