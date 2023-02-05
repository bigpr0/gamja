import React, { useState } from 'react';

import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { useFormik } from "formik"
import * as Yup from "yup"
import axios from 'axios';




const NewUserForm = () => {

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const phoneRegExp = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3,4})[-. ]*(\d{4})(?: *x(\d+))?\s*$/

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().trim().required('First name is required'),
    lastName: Yup.string().trim().required('Last name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Phone number is required')
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: ""

    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values))
      axios.post('http://localhost:5000/api/customers', values)
        .then(res => {
          console.log(res);
          setModalMessage("Success: Data retrieved successfully.");
          setShowModal(true);
        })
        .catch(err => {
          console.error(err);
          setModalMessage("Error: " + err.message);
          setShowModal(true);
        });
    },
    validationSchema: validationSchema,
    validateOnChange: false
  })

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Submit form data to the server, for example:
  //   axios.post('localhost/api/customers', formData)
  //      .then(res => console.log(res))
  //      .catch(err => console.error(err));
  // };



  return (

    <Box display="flex" alignItems="left" flexDirection={"column"}>
      <h1>Add New Customer</h1>
      <Divider />
      <div className='newform'>
        <form onSubmit={formik.handleSubmit} >
          <TextField
            id="firstName"
            name="firstName"
            label="First Name"
            margin="normal"
            variant="standard"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />

          <TextField
            id="lastName"
            name="lastName"
            label="Last Name"
            margin="normal"
            variant="standard"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />

          <TextField
            id="email"
            name="email"
            label="email"
            margin="normal"
            variant="standard"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            id="phoneNumber"
            name="phoneNumber"
            label="Phone Number"
            margin="normal"
            variant="standard"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
          />
          <br></br>
          <Button type="submit" variant="outlined" margin="normal" size="large" onSubmit={formik.handleSubmit}>Submit</Button>
          {showModal && (
            <div>
              <p>{modalMessage}</p>
              <Button variant="outlined" onClick={() => setShowModal(false)}>Finish</Button>
            </div>
          )}

        </form>
      </div>
    </Box>
  );
};

export default NewUserForm;
