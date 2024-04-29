# Node.js Authentication Application

## Description

This is a Node.js application that provides user authentication functionality, including login and registration, implemented in TypeScript.

## Features

- **User Registration**: Allows new users to create an account by providing a username, email, and password.
- **User Login**: Allows registered users to authenticate by providing their username/email and password.
- **Password Hashing**: Securely stores user passwords using bcrypt for hashing and salting.
- **JSON Web Tokens (JWT)**: Uses JWT for session management and authentication.
- **Middleware**: Implements middleware functions to protect routes and validate user authentication.

## Technologies Used

- **Node.js**: A runtime environment for executing JavaScript code on the server-side.
- **Express.js**: A minimalist web framework for Node.js used for handling HTTP requests and routes.
- **TypeScript**: A statically typed superset of JavaScript that compiles to plain JavaScript.
- **bcrypt**: A library for hashing and salting passwords securely.
- **JSON Web Tokens (jsonwebtoken)**: A compact, URL-safe means of representing claims to be transferred between two parties.
- **dotenv**: A zero-dependency module that loads environment variables from a `.env` file into `process.env`.

## Installation

1. Clone the repository:

   ```bash
   git clone <repository_url>

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
   

## Usage

### Register

- **Endpoint**: `POST /api/register`
- **Request Body**:

  ```json
  {
    "username": "example",
    "email": "example@example.com",
    "password": "password"
  }

- **Reponse**: User object with a email and id

### Login

- **Endpoint**: `POST /api/login`
- **Request Body**:

  ```json
  {
    "email": "example@example.com",
    "password": "password"
  }
- **Reponse**: User object with a JWT token

### Info

- **Endpoint**: `POST /api/info`
- **Request Headers**:

  ```json
  {
    'Content-Type': 'application/json;charset=utf-8',
    Authorization: "Bearer JWT",
   
  }
- **Reponse**: User object with a email and id

License
This project is licensed under the MIT License - see the LICENSE file for details.






