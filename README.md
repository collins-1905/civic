# civic-voices To-Do List REST API

# To-Do List REST API

This is a To-Do List REST API built using Node.js, Express, and MongoDB. It allows users to create, retrieve, update, and delete tasks, adhering to best practices for REST API development.

## Features

- **Create Task**: Add a new task to the list.
- **Retrieve Tasks**: Get all tasks or a specific task by ID.
- **Update Task**: Edit a task by ID.
- **Delete Task**: Remove a task by ID.
- **Validation**: Ensures input data integrity.
- **Error Handling**: Provides meaningful error messages for invalid requests.

## Live Deployment

The API is deployed and accessible at: [https://lostid.co.ke](https://lostid.co.ke)

## Tech Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Hosting**: AWS EC2 Instance

## Installation and Setup

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or later)
- npm (v6 or later)
- MongoDB (or access to a MongoDB Atlas cluster)

### Steps

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd todo-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following variables:
   ```env
   PORT=3000
   MONGO_URI=<your-mongodb-connection-string>
   ```

4. Start the server:
   ```bash
   npm start
   ```

   The server will run on `http://localhost:3000` by default.

## API Endpoints

### Base URL

For local development: `http://localhost:3000`

For production: [https://lostid.co.ke](https://lostid.co.ke)

### Endpoints

#### 1. **Create Task**
   - **POST** `/tasks`
   - **Request Body**:
     ```json
     {
       "title": "Sample Task",
       "completed": false
     }
     ```
   - **Response**:
     ```json
     {
       "_id": "task-id",
       "title": "Sample Task",
       "completed": false
     }
     ```

#### 2. **Retrieve All Tasks**
   - **GET** `/tasks`
   - **Response**:
     ```json
     [
       {
         "_id": "task-id",
         "title": "Sample Task",
         "completed": false
       }
     ]
     ```

#### 3. **Retrieve Task by ID**
   - **GET** `/tasks/:id`
   - **Response**:
     ```json
     {
       "_id": "task-id",
       "title": "Sample Task",
       "completed": false
     }
     ```

#### 4. **Update Task**
   - **PUT** `/tasks/:id`
   - **Request Body**:
     ```json
     {
       "title": "Updated Task",
       "completed": true
     }
     ```
   - **Response**:
     ```json
     {
       "_id": "task-id",
       "title": "Updated Task",
       "completed": true
     }
     ```

#### 5. **Delete Task**
   - **DELETE** `/tasks/:id`
   - **Response**:
     ```json
     {
       "message": "Task deleted successfully."
     }
     ```

## Testing

- Use tools like [Postman](https://www.postman.com/) or [cURL](https://curl.se/) to test the API.
- Example with `curl`:
  ```bash
  curl -X GET https://lostid.co.ke/tasks
  ```

## Additional Notes

- Ensure the `MONGO_URI` in your `.env` file points to a valid MongoDB instance.
- Logs and errors are managed with console logging for simplicity.

## Deployment

The API is deployed on an AWS EC2 instance, with the following setup:

1. **Server**: Node.js application running on port `3000`.
2. **Reverse Proxy**: [Caddy](https://caddyserver.com/) handles HTTPS and domain routing.
3. **Domain**: [lostid.co.ke](https://lostid.co.ke) is registered and configured for the deployment.

To deploy updates:

1. SSH into the EC2 instance.
2. Pull the latest changes from the GitHub repository.
3. Restart the Node.js service.

## Contact

For any questions or clarifications, please contact:

- **Name**: Collins
- **Email**: [your-email@example.com]

