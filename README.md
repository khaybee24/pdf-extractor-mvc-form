# Resume Upload App

This is a simple Express application for uploading resumes in PDF format and storing them in a MongoDB database using Mongoose.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone <repository-url>
Install the dependencies:

bash
Copy code
npm install
Set up a MongoDB database:

Make sure you have MongoDB installed and running on your machine.
Update the MongoDB connection URL in index.js to point to your MongoDB instance.
Start the server:

bash
Copy code
npm start
The server should now be running on http://localhost:3000.

Endpoints
POST /upload: Uploads a resume file in PDF format. Expects a file field named resume in the request body. Returns JSON response with information about the uploaded resume.
Dependencies
express: Fast, unopinionated, minimalist web framework for Node.js.
multer: Middleware for handling multipart/form-data, primarily used for file uploads.
pdf-parse: Parse PDF files and extract their text content.
mongoose: MongoDB object modeling tool designed to work in an asynchronous environment.
License
This project is licensed under the MIT License.
