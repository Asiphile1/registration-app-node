import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = ({ employees, pastEmployees, onAddNewEmployee, onLogout, onDelete, onUpdate }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEmployees = employees.filter(employee =>
    employee.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="dashboard">
      <nav className="navbar">
        <div className="logo">ELITE AIR</div>
        <div className="nav-buttons">
          <button className="nav-button" onClick={onAddNewEmployee}>Add New Employee</button>
          <button className="nav-button" onClick={onLogout}>Logout</button>
        </div>
      </nav>
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to the Dashboard</h1>
          <p>Manage your employees effectively</p>
        </div>
      </div>
      <div className="search-section">
        <input 
          type="text" 
          placeholder="Search for Employee by ID" 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <button className="search-button">Go</button>
      </div>
      <div className="dashboard-content">
        <div className="employee-table">
          <h2>Current Employees</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Position</th>
                <th>Image</th> 
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.map(employee => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.phone}</td>
                  <td>{employee.position}</td>
                  <td>
        {employee.image ? (
          <img src={employee.image} alt={`${employee.name}'s Image`} style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '5px' }} />
        ) : (
          <span>No Image</span>
        )}
      </td>
                  <td>
                    <button onClick={() => onUpdate(employee)}>Edit</button>
                    <button onClick={() => onDelete(employee.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="employee-table">
          <h2>Past Employees</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Position</th>
              </tr>
            </thead>
            <tbody>
              {pastEmployees.map(employee => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.phone}</td>
                  <td>{employee.position}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <footer className="dashboard-footer">
        <p>For any inquiries, contact Asiphlie Mthethwa <a href="mailto:asiphilemthethwa@gmail.com">Email me here</a></p>
      </footer>
    </div>
  );
};

export default Dashboard;