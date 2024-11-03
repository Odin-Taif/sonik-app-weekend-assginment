## Features

Here is the blueprint for the project:

![Project Logo](./blueprint.png)

Certainly! Below is a README template that outlines the endpoints you've defined in your Express.js application. This template includes sections for installation, usage, and detailed descriptions of each endpoint.

````markdown
# API Documentation

This document provides an overview of the API endpoints available in this application.

## Table of Contents

## Usage

To interact with the API, you can use tools like Postman, Insomnia, or any HTTP client. Ensure you have a valid token for authorization when making requests to protected endpoints.

### Authentication

Some endpoints require a valid user session. Use the `/login` endpoint to authenticate and obtain a session token.

## Endpoints

### Posts

#### 1. Create a Post

- **POST** `/post`
- **Authorization**: Required
- **Request Body**:
  ```json
  {
    "content": "String",
    "authorId": "String"
  }
  ```
- **Response**:
  - **201 Created**: The post was successfully created.
  - **400 Bad Request**: Invalid input.

#### 2. Get All Posts

- **GET** `/posts`
- **Authorization**: Required
- **Response**:
  - **200 OK**: Returns an array of posts.
  - **204 No Content**: No posts found.

#### 3. Update a Post

- **PATCH** `/posts/:id`
- **Authorization**: Required
- **Request Body**:
  ```json
  {
    "content": "String"
  }
  ```
- **Response**:
  - **200 OK**: The post was successfully updated.
  - **404 Not Found**: The post does not exist.
  - **400 Bad Request**: Invalid input.

#### 4. Delete a Post

- **DELETE** `/posts/:id`
- **Authorization**: Required
- **Response**:
  - **204 No Content**: The post was successfully deleted.
  - **404 Not Found**: The post does not exist.

#### 5. Get Posts by Author

- **GET** `/posts/:authorid`
- **Authorization**: Required
- **Response**:
  - **200 OK**: Returns an array of posts by the specified author.
  - **204 No Content**: No posts found for the specified author.

### Users

#### 1. Create a User

- **POST** `/user`
- **Request Body**:
  ```json
  {
    "name": "String",
    "email": "String",
    "password": "String"
  }
  ```
- **Response**:
  - **201 Created**: The user was successfully created.
  - **400 Bad Request**: Invalid input.

#### 2. Login User

- **POST** `/login`
- **Request Body**:
  ```json
  {
    "email": "String",
    "password": "String"
  }
  ```
- **Response**:
  - **200 OK**: Successful login, returns a token.
  - **401 Unauthorized**: Invalid credentials.

#### 3. Get All Users

- **GET** `/users`
- **Authorization**: Required
- **Response**:
  - **200 OK**: Returns an array of users.
  - **204 No Content**: No users found.

#### 4. Get User by ID

- **GET** `/users/:id`
- **Authorization**: Required
- **Response**:
  - **200 OK**: Returns user details.
  - **404 Not Found**: User does not exist.

### Notes:

- Adjust the repository link in the **Installation** section to point to your actual repository.
- The structure provides a clear overview of what each endpoint does, the expected request and response formats, and any authorization requirements.
- If there are specific error messages that your API returns, consider including them in the **Error Handling** section for clarity.
- If you're using a specific authentication mechanism, you may want to elaborate on how to obtain and use the token in the **Usage** section.

Feel free to customize any part of this README to better fit your project! If you have further questions or need assistance, let me know!

# Express weekend project

This weekend, you will build a web API and present it on Monday.

You will be scored on this presentation, meaning it is possible to succeed or fail.

## What to do during the weekend

- Create a public repository on your individual GitHub account.
- Create a project planning board for the repository.
- Create a big picture plan and add it to the readme in your repository.
- Write a backend API.
- Create a video recording where you present your work, and publish on YouTube.

## Planning requirements

- You make up your own idea.
- A visualization of how the app should work in your big picture plan.
- A project board that clearly shows your microsteps and expectations. Please divide the "done" column into half-days, so you have at least 4 different "done" columns. It needs to be clear in what order you did the tasks.

## Programming requirements

- Tech stack: typescript, tsx, node.js test runner, express.js, supertest, zod, uuid. You can choose to add other tools as you see fit.
- A minimum of two different application features. The features are not allowed to directly access each other's database data. If the feature needs data from another feature, you need to call a service method from the other feature.
- You need to implement at least one each of the following routes: `get all`, `create`, `get by ID`, `delete`, `update`. This means that not all features need all route types.
- Code architecture should be tidy. Good names, usage of factory functions, and simple code is expected.
- You should have one integration test per route.
- You should have at least one set of ZOMBIES unit tests for at least one feature. This means that you should not test the functional core with supertest, but just unit test with pure functions without side-effects.

## Presentation video requirements

- Keep the presentation short and relevant.
- The video should have your screen shared, and yourself via video. OBS can be used to set it up.
- The audio should be good enough quality that we can listen to it in the office on the big screen.
- The video content should be large enough to see on a larger mobile phone.
- Your presentation should have these segments, in this given order: `Who are you?`, `What did you build?`, `What's your big picture plan?`, `Showing the project board, explain your ways of working throughout the weekend.`, `Prove that the app can be run normally.`, `Demo the test cases to prove that the application works completely.`, `Show code that fulfilled a part of the requirements. Make it clear what piece of code fulfilled what requirement.`.

## Notes

- You will be scored on the content of the video recording. Make sure all relevant parts are presented to be properly evaluated.
- Make sure that it's easy to score you on each requirement by addressing what requirement you fulfilled in the different segments in your presentation.

```

```
````
