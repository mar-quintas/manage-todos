# To-do Manager

A React-NestJS App to create, edit, check and delete tasks.

## Usage

*Requirements*

  npm @6.14.8

  node @14.15.1

  Download the repo and in `/manager` run `./start-todo-manager.sh`

  This will install React's requirements from ./package.json and start the server on localhost:3000

  On parallel will install NestJS requirements from ./src/frontend/package.json and start NestJS server on localhost:5000

  The database is already initialized, there is no action required.

### About the app

You can add new tasks, check or uncheck them, edit, save or cancel changes and delete tasks.

## Files

### Frontend

The frontend was developed in React js, with Axios, React-Router-DOM and ReactBootstrap.

Building from the base `react-create-app`


### Backend

The backend was developed with NestJS using typeORM with sqlite3 for the database.
