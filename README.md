# Survey Poll App

Create a basic Survey/Poll application built with Node.js and Prisma.

## Overview

The application allows users to create and participate in surveys. Each survey consists of one or more questions, and each question can have multiple options. Users can select an option to vote in a survey.

## API Endpoints

The application provides the following endpoints:

- `GET /surveys`: Fetch all surveys.
- `POST /surveys`: Create a new survey.
- `GET /surveys/:id`: Fetch a specific survey.
- `PUT /surveys/:id`: Update a specific survey.
- `DELETE /surveys/:id`: Delete a specific survey.

## Tech Stack

- Typescript as the language
- Node.js: JavaScript runtime
- Express.js: Web application framework
- Prisma: Next-generation Node.js and TypeScript ORM