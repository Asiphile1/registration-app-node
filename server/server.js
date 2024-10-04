// server/index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { db, bucket } = require('./firebase');

const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Add Employee
app.post('/addEmployee', async (req, res) => {
  const { name, surname, age, idNumber, role } = req.body;
  const newEmployee = { name, surname, age, idNumber, role };
  try {
    await db.collection('employees').doc(idNumber).set(newEmployee);
    res.status(200).send('Employee added');
  } catch (error) {
    res.status(500).send('Error adding employee');
  }
});

// Get Employees
app.get('/getEmployees', async (req, res) => {
  try {
    const employees = [];
    const snapshot = await db.collection('employees').get();
    snapshot.forEach((doc) => employees.push(doc.data()));
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).send('Error fetching employees');
  }
});

// Update Employee
app.put('/updateEmployee/:id', async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  try {
    await db.collection('employees').doc(id).update(updatedData);
    res.status(200).send('Employee updated');
  } catch (error) {
    res.status(500).send('Error updating employee');
  }
});

// Delete Employee
app.delete('/deleteEmployee/:id', async (req, res) => {
  const id = req.params.id;
  try {
    await db.collection('employees').doc(id).delete();
    res.status(200).send('Employee deleted');
  } catch (error) {
    res.status(500).send('Error deleting employee');
  }
});

// Search Employee by ID
app.get('/searchEmployee/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await db.collection('employees').doc(id).get();
    if (doc.exists) {
      res.status(200).json(doc.data());
    } else {
      res.status(404).send('Employee not found');
    }
  } catch (error) {
    res.status(500).send('Error searching employee');
  }
});

// handiling photos

app.post('/addEmployee', upload.single('photo'), async (req, res) => {
    const { name, surname, age, idNumber, role } = req.body;
    const newEmployee = { name, surname, age, idNumber, role };
  
    try {
      // Upload photo to Firebase Storage
      const file = bucket.file(`${idNumber}-${req.file.originalname}`);
      await file.save(req.file.buffer);
  
      // Add photo URL to Firestore
      const photoURL = `https://storage.googleapis.com/${bucket.name}/${file.name}`;
      newEmployee.photoURL = photoURL;
  
      await db.collection('employees').doc(idNumber).set(newEmployee);
      res.status(200).send('Employee added with photo');
    } catch (error) {
      res.status(500).send('Error adding employee');
    }
  });


app.listen(5000, () => {
  console.log('Server running on port 5000');
});






// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 5000;


// app.use(express.json());


// app.get('/', (req, res) => {
//   res.send('Server is running');
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
