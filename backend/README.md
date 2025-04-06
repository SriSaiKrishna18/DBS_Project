# Backend Project Documentation

## Overview
This backend project is built using Node.js and Express. It provides API endpoints to access attendance, students, and courses data stored in CSV files.

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd DBS_Project/backend
   ```

2. **Install Dependencies**
   Run the following command to install the required packages:
   ```bash
   npm install
   ```

3. **Run the Server**
   Start the server using the following command:
   ```bash
   npm start
   ```
   The server will run on `http://localhost:3000`.

## API Endpoints

- **GET /api/attendance**
  - Description: Retrieves attendance data from the CSV file.
  - Response: Returns an array of attendance records.

- **GET /api/students**
  - Description: Retrieves student data from the CSV file.
  - Response: Returns an array of student records.

- **GET /api/courses**
  - Description: Retrieves course data from the CSV file.
  - Response: Returns an array of course records.

## Usage Examples

You can test the API endpoints using tools like Postman or curl. For example, to get the attendance data, you can use the following curl command:

```bash
curl http://localhost:3000/api/attendance
```

## Additional Information
Feel free to add more endpoints as needed. Ensure to update this README file with any new features or changes to the API.