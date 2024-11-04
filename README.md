# Project API Documentation

This README provides an overview of the API endpoints available in this application, along with instructions for installation, usage, and an outline of a video presentation for project demonstration.

## Features

- **User Authentication**: Secure login and session management.
- **Post Management**: Create, read, update, and delete posts.
- **User Management**: Create and retrieve user profiles.

## Online API

You can access the API for this project [here](https://salt.odinobusi.online/status).

## YouTube Video

You can view the video demonstration for this project [here](https://youtu.be/tc4dXAsIz00).

![Project Logo](./blueprint.png)

---

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Postman Collection](#postman-collection)
- [Authentication](#authentication)
- [Endpoints](#endpoints)
  - [Posts](#posts)
  - [Users](#users)
- [Presentation Video Requirements](#presentation-video-requirements)
- [Notes](#notes)

---

## Installation

Follow these steps to set up the project locally:

1. **Clone the Repository**:
   ```bash
   git clone https://your-repository-url.git
   cd your-repository-directory
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Set Up Environment Variables**:
   Configure your environment variables, including database connection strings and authentication keys, in a `.env` file.
4. **Start the Server**:
   ```bash
   npm start
   ```
5. **Testing the API**:
   Use tools like Postman, Insomnia, or any HTTP client to test the API endpoints.

---

## Usage

To interact with the API, utilize tools like Postman or Insomnia. Ensure that you have a valid token for authorization when making requests to endpoints that require it.

### Authentication

Certain endpoints require user authentication. Use the `/login` endpoint to authenticate and obtain a session token, which is required for accessing protected endpoints.

## Postman Collection

You can access the Postman collection for this project [here](https://spicy5.postman.co/workspace/spicy-Workspace~e3a1d0b4-8e1e-4416-8486-e1dca30dd627/collection/19840737-75070e22-8b6b-4a48-b9a3-968fd043aefd?action=share&creator=19840737).

---

## Endpoints

### Posts

#### 1. Create a Post

- **Method**: `POST`
- **URL**: `/post`
- **Authorization**: Required
- **Request Body**:
  ```json
  {
    "content": "String",
    "authorId": "String"
  }
  ```
- **Responses**:
  - **201 Created**: The post was successfully created.
  - **400 Bad Request**: Invalid input.

#### 2. Get All Posts

- **Method**: `GET`
- **URL**: `/posts`
- **Authorization**: Required
- **Responses**:
  - **200 OK**: Returns an array of posts.
  - **204 No Content**: No posts found.

#### 3. Update a Post

- **Method**: `PATCH`
- **URL**: `/posts/:id`
- **Authorization**: Required
- **Request Body**:
  ```json
  {
    "content": "String"
  }
  ```
- **Responses**:
  - **200 OK**: The post was successfully updated.
  - **404 Not Found**: The post does not exist.
  - **400 Bad Request**: Invalid input.

#### 4. Delete a Post

- **Method**: `DELETE`
- **URL**: `/posts/:id`
- **Authorization**: Required
- **Responses**:
  - **204 No Content**: The post was successfully deleted.
  - **404 Not Found**: The post does not exist.

#### 5. Get Posts by Author

- **Method**: `GET`
- **URL**: `/posts/:authorid`
- **Authorization**: Required
- **Responses**:
  - **200 OK**: Returns an array of posts by the specified author.
  - **204 No Content**: No posts found for the specified author.

### Users

#### 1. Create a User

- **Method**: `POST`
- **URL**: `/user`
- **Request Body**:
  ```json
  {
    "name": "String",
    "email": "String",
    "password": "String"
  }
  ```
- **Responses**:
  - **201 Created**: The user was successfully created.
  - **400 Bad Request**: Invalid input.

#### 2. Login User

- **Method**: `POST`
- **URL**: `/login`
- **Request Body**:
  ```json
  {
    "email": "String",
    "password": "String"
  }
  ```
- **Responses**:
  - **200 OK**: Successful login, returns a token.
  - **401 Unauthorized**: Invalid credentials.

#### 3. Get All Users

- **Method**: `GET`
- **URL**: `/users`
- **Authorization**: Required
- **Responses**:
  - **200 OK**: Returns an array of users.
  - **204 No Content**: No users found.

#### 4. Get User by ID

- **Method**: `GET`
- **URL**: `/users/:id`
- **Authorization**: Required
- **Responses**:
  - **200 OK**: Returns user details.
  - **404 Not Found**: User does not exist.

---

## Presentation Video Requirements

- Ensure your video covers the following:
  - Overview of the project features.
  - Demonstration of key API endpoints.
  - Explanation of how to authenticate and make requests.

## Notes

- Keep your documentation up to date as the API evolves.
- Provide examples and error handling tips wherever applicable.
