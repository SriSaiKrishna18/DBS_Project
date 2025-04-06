// backend/server.js
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const csv = require('csv-parser');
const app = express();
const PORT = 3000;

app.use(cors());

const readCSV = (filePath) => {
  return new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', reject);
  });
};

app.get('/api/attendance', async (req, res) => {
  const data = await readCSV('backend/data/attendance.csv');
  res.json(data);
});

app.get('/api/students', async (req, res) => {
  const data = await readCSV('backend/data/updated_students.csv');
  res.json(data);
});

app.get('/api/courses', async (req, res) => {
  const data = await readCSV('backend/data/updated_courses.csv');
  res.json(data);
});

// Add more endpoints as needed...

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
