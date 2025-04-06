# DBS Project

This project consists of a backend and a frontend application designed to manage attendance, students, and courses data.

## Project Structure

```
DBS_Project
├── backend
│   ├── src
│   │   ├── server.js          # Sets up the Express server and API endpoints
│   │   └── routes
│   │       └── index.js       # Defines the routes for the backend application
│   ├── package.json            # Backend dependencies and scripts
│   └── README.md               # Documentation for the backend project
├── frontend
│   ├── public
│   │   └── index.html          # Main HTML file for the frontend application
│   ├── src
│   │   ├── App.js              # Main component of the React application
│   │   ├── components
│   │   │   └── ExampleComponent.js # Example React component
│   │   └── styles
│   │       └── App.css         # Styles for the frontend application
│   ├── package.json            # Frontend dependencies and scripts
│   └── README.md               # Documentation for the frontend project
└── README.md                   # Overview of the entire project
```

## Getting Started

### Backend Setup

1. Navigate to the `backend` directory.
2. Install dependencies using:
   ```
   npm install
   ```
3. Start the server with:
   ```
   npm start
   ```
4. The server will run at `http://localhost:3000`.

### Frontend Setup

1. Navigate to the `frontend` directory.
2. Install dependencies using:
   ```
   npm install
   ```
3. Start the frontend application with:
   ```
   npm start
   ```
4. The application will run at `http://localhost:3000`.

## API Endpoints

- **GET /api/attendance**: Retrieves attendance data from a CSV file.
- **GET /api/students**: Retrieves student data from a CSV file.
- **GET /api/courses**: Retrieves course data from a CSV file.

## Usage

This project can be used to manage and display attendance, student, and course information. The backend handles data retrieval from CSV files, while the frontend provides a user interface for interaction.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.