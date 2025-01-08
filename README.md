# EventPage
This is my take on the Event Page assignment for Winc Academy

Assignment:

Description

In this project, you are going to put everything that you have learned in React basics and advanced together to create your own event app. Your HTML, CSS, JavaScript & React skills that you have learned from all the course modules will finally all come together. 

For this project, we would like you to create an event app. The theme is up to you, but in our starter JSON file, we have added a few examples, so you have an idea of how the data structure should look like.

In short, the event dashboard app should display a list of events, add events, edit events, delete events, and show a more detailed page of an event. We will describe the required features in more detail below.

For this project, you can freely use any of the tools you learned in this and the previous module. Think of useReducer, Context, or component composition. It is not necessary to use all of them, and you can build the project without them as well. We have installed ChakraUI for the project so that you don’t have to focus on styling as much and also have a good-looking app for in your portfolio. However, you are free to create your own CSS files and your own UI components. 

Instructions

Download the boilerplate template(opens in a new tab) that already has Vite, ChakraUI, StyledProps (not mandatory to use it), React Router installed, and it has some basic components to start with. We recommend using ChakraUI so that you have to spent less time on styling components and can use pre-made components that will look good in your portfolio. You are also welcome to use normal CSS if you prefer. 

We will be running a JSON server again. You can download the following JSON file(opens in a new tab) to run the server. Run the server by going to the directory that contains your JSON file using the terminal and enter the following command:

json-server events.json
Start by inspecting the different files, components and data structure.

A list of events

We would like to display a list of all events in <EventsPage/>. Start by retrieving all the events from the back-end using a query.

Display the fetched events on the users’ screen.

Add the following details when displaying an event: title, description, image, startTime & endTime, categories

Make an event item clickable that leads the user to a separate event page by using React Router.

Add an “Add event” button that either opens a pop-up/modal or leads you to a new screen where you can add new events by using a form.

Connect the add events feature with the back-end so that new events get uploaded to the server as well. 

Add a Search Function. We want a way for users to search for specific events on the page that displays all the events.

Add a Filter Function. We need a feature that lets users filter the displayed results based on different categories.

Event page

Start working in the <EventPage /> component and show the following details on the screen: title, description, image, startTime & endTime, categories and by who it’s created (name, image)

Create an “Edit” button that allows the user to edit the details shown on the page. You can open it in a modal, or the same page, etc. Use a form to edit the data.

Update the data on the server after saving newly made edits.

Show a message on success or on failure. This can be done e.g. in the form of a toast(opens in a new tab).

Add a delete button that allows the user to delete the event.

Add an extra check and warning to make sure that the user is 100% sure they want to delete the event

Sent a delete request to the server after confirmation. 

Redirect the user back to the events page

Tips

•
Don’t forget to take regular breaks

•
You can use code examples from previous exercises and projects

•
The app is relatively simple and you are not expecting a million users, so you don’t neccesarily have to set up a complex state management solution. Simply sending a (new) query to the back-end when rendering, for example, the event list to retrieve the data, is sufficient. There is no need to keep track of the data in a state that you update when editing or deleting an event. It can however be beneficial to fetch the users and categories once and store them in e.g. Context, so you don't have to fetch these multiple times in the events and event page (not that this is not mandatory).

Requirements

•
The app contains a form.

•
You have used React Router.

•
The app is responsive and is accessible on both mobile and desktop.

Events page

•
The page shows a list of all events that are retrieved from the back-end server with the following details: title, description, image, startTime, endTime and categories.

•
The user can click on an event that leads them to the ‘Event’ page using React Router.

•
There is a button that allows the user to add new events using a form. 

•
A query to add the event to the server is sent as well.

•
You can search through the events based on the name of the event.

•
You can filter through the list/search results based on categories.

Event page

•
The event page shows the following details:  title, description, image, startTime, endTime, categories and by who it’s created (display their name and image).

•
You can click on an edit button where the user can edit the details shown on the page. This has to be done in a modal or on the same page, not an external page. 

•
The back-end server data is updated after.

•
A succes or fail message is shown after a successful update.

•
You can click on a delete button to delete the event.

•
A delete query is sent to delete the data in the back-end.

•
After deleting an event, you get redirected to the Events page.

Extra Challenge

These extra challenges are completely optional and will not be graded.

•
Use Context to store the categories and users so that you only have to fetch them once.

Handing in your Course Project

When you feel ready, you can hand in your Project by uploading your GitHub link on the next page.
