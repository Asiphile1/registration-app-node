
import React, { useState, useEffect } from 'react';
import './FormPage.css';

const FormPage = ({ addEmployee, updateEmployee, employee }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [position, setPosition] = useState('');
  const [id, setId] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    if (employee) {
      setName(employee.name);
      setEmail(employee.email);
      setPhone(employee.phone);
      setPosition(employee.position);
      setId(employee.id);
      setImagePreview(employee.image);
    }
  }, [employee]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = { name, email, phone, position, id, image: imagePreview };
    if (employee) {
      updateEmployee(newEmployee);
    } else {
      addEmployee(newEmployee);
    }
  };

  return (
    <div className="form-page">
      <div className="form-container">
        <h2>{employee ? 'Update Employee' : 'New Employee Details'}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Enter Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Enter Position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Enter ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
          <input type="file" accept="image/*" onChange={handleImageChange} required />
          <button type="submit">{employee ? 'Update' : 'Add'}</button>
        </form>
      </div>
      <div className="image-preview-container">
        {imagePreview ? (
          <img src={imagePreview} alt="Employee Preview" className="image-preview" />
        ) : (
          <p>Welcome the employee by adding a picture of them here, its the right thing to do</p>
        )}
      </div>
    </div>
  );
};

export default FormPage;

























// import React, { useState, useEffect } from 'react';
// import './FormPage.css';

// const FormPage = ({ addEmployee, updateEmployee, employee }) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [position, setPosition] = useState('');
//   const [id, setId] = useState('');
//   const [image, setImage] = useState(null);
//   const [imagePreview, setImagePreview] = useState(null);

//   useEffect(() => {
//     // Load data from local storage if available
//     const savedData = localStorage.getItem('employeeData');
//     if (savedData) {
//       const parsedData = JSON.parse(savedData);
//       setName(parsedData.name || '');
//       setEmail(parsedData.email || '');
//       setPhone(parsedData.phone || '');
//       setPosition(parsedData.position || '');
//       setId(parsedData.id || '');
//       setImagePreview(parsedData.image || '');
//     }

//     // Load employee data if provided
//     if (employee) {
//       setName(employee.name);
//       setEmail(employee.email);
//       setPhone(employee.phone);
//       setPosition(employee.position);
//       setId(employee.id);
//       setImagePreview(employee.image);
//     }
//   }, [employee]);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setImage(file);
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setImagePreview(reader.result);
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newEmployee = { name, email, phone, position, id, image: imagePreview };
    
//     // Save the data to local storage
//     localStorage.setItem('employeeData', JSON.stringify(newEmployee));
    
//     if (employee) {
//       updateEmployee(newEmployee);
//     } else {
//       addEmployee(newEmployee);
//     }
//   };

//   return (
//     <div className="form-page">
//       <div className="form-container">
//         <h2>{employee ? 'Update Employee' : 'New Employee Details'}</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Enter Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//           <input
//             type="email"
//             placeholder="Enter Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="text"
//             placeholder="Enter Phone Number"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             required
//           />
//           <input
//             type="text"
//             placeholder="Enter Position"
//             value={position}
//             onChange={(e) => setPosition(e.target.value)}
//             required
//           />
//           <input
//             type="text"
//             placeholder="Enter ID"
//             value={id}
//             onChange={(e) => setId(e.target.value)}
//             required
//           />
//           <input type="file" accept="image/*" onChange={handleImageChange} required />
//           <button type="submit">{employee ? 'Update' : 'Add'}</button>
//         </form>
//       </div>
//       <div className="image-preview-container">
//         {imagePreview ? (
//           <img src={imagePreview} alt="Employee Preview" className="image-preview" />
//         ) : (
//           <p>Welcome the employee by adding a picture of them here, its the right thing to do</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FormPage;





















































