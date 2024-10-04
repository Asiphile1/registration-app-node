import React, { useState, useEffect } from 'react';
import LoginPage from './components/LoginPage';
import Dashboard from './components/DashboardPage';
import FormPage from './components/FormPage';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('login');
  const [employees, setEmployees] = useState([]);
  const [pastEmployees, setPastEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    const storedPastEmployees = JSON.parse(localStorage.getItem('pastEmployees')) || [];
    setEmployees(storedEmployees);
    setPastEmployees(storedPastEmployees);
  }, []);

  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  useEffect(() => {
    localStorage.setItem('pastEmployees', JSON.stringify(pastEmployees));
  }, [pastEmployees]);

  const handleLogin = (username, password) => {
    // this will be my login details
    const validUsername = 'Asiphile';
    const validPassword = '4444';

    if (username === validUsername && password === validPassword) {
      setIsAuthenticated(true);
      setCurrentPage('dashboard');
    } else {
      alert('Please enter a valid username or password, check your spelling and try again. Enjoy your day!');
    }
  };

  const handleAddNewEmployee = () => {
    setCurrentPage('form');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPage('login');
  };

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
    setCurrentPage('dashboard');
  };

  const deleteEmployee = (id) => {
    const employeeToDelete = employees.find(employee => employee.id === id);
    setPastEmployees([...pastEmployees, employeeToDelete]);
    setEmployees(employees.filter(employee => employee.id !== id));
  };

  const updateEmployee = (updatedEmployee) => {
    setEmployees(employees.map(employee => employee.id === updatedEmployee.id ? updatedEmployee : employee));
    setCurrentPage('dashboard');
  };

  const selectEmployee = (employee) => {
    setSelectedEmployee(employee);
    setCurrentPage('form');
  };

  return (
    <div className="app">
      {currentPage === 'login' && <LoginPage onLogin={handleLogin} />}
      {currentPage === 'dashboard' && isAuthenticated && (
        <Dashboard 
          employees={employees} 
          pastEmployees={pastEmployees}
          onAddNewEmployee={handleAddNewEmployee} 
          onLogout={handleLogout}
          onDelete={deleteEmployee}
          onUpdate={selectEmployee}
        />
      )}
      {currentPage === 'form' && isAuthenticated && (
        <FormPage 
          addEmployee={addEmployee} 
          updateEmployee={updateEmployee} 
          employee={selectedEmployee} 
        />
      )}
    </div>
  );
};

export default App;






















// // do not need to import react from version 17 going upwards.
// import './App.css';
// // import Navbar from './components/Navbar';  
// //  once imported go and nest it where you want it to be in the page.
// // import right from './components/rightSide';



// import LoginPage from './components/LoginPage';
// import DashboardPage from './components/DashboardPage';
// import FormPage from './components/FormPage';


// function App() {
//   return (
//     <div>
//       <LoginPage />
//     </div>
//   );
// }

// export default App;





 





// did not work at all
// <Router>
    //   <Routes>
    //     <Route path="/" element={<LoginPage />} />
    //     <Route path="/dashboard" element={<DashboardPage />} />
    //     <Route path="/form" element={<FormPage />} />
    //   </Routes>
    // </Router>















// component is a function 
// in that function we need to return something
// that is a JSX template generally
// then at the end we export that function so we can use it somewhere else as well/