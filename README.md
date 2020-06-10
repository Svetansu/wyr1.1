# Would-You-Rather Project v1.1

This project is my second submission for the "Would You Rather?" react-redux application, a project for the Udacity React Developer Nanodegree.

## About...

"Would You Rather?" is an application based on a game with the same name. The app allows user to sign-in, post questions and answer questions posted by other users. A leaderboard functionality is present to maintain scores, based on the number of questions a user has posted and/or answered. React & Redux were the main technologies used to build the application. 'react-redux', 'redux-thunk', 'react-router' and libraries from Material UI are used in the project.

I have added some information below to make understanding my work easier:

    --  I chose to distribute App.js into separate components, which are:
            - Dashboard.js: Component to render each question currently posted, by the user and other users too.
            - ErrorPage.js: A page which renders an error message if a question is not fetched. 
            - Leaderboard.js: Component which renders the scoreboard for all users.
            - Navbar.js: Component which renders links ad buttons to be able to navigate through different components of the application.
            - NewQuestion.js: The component which renders the functionality to post a new question.
            - Question.js: Component used to fetch a question from the fake database.
            - QView.js: Component used to display question snippets on the Dashboard.
            - AnswerHere.js: The component used to render questions on the 'answer question' page.
            - Login.js: The initial component which allows users to Login to the application.

Some important features of the project include:
    
    -- State management
    -- Use of APIs
    -- Search handling
    -- Routing
    -- Context
    -- Redux store and its features
    -- Middleware


## To get started...

To get started developing right away:

* install all project dependencies with `npm install`/`yarn install`
* start the development server with `npm start`/`yarn start`
* run http://localhost:3000/ to view the application