import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { useFormik } from "formik"
import * as Yup from "yup"
import axios from 'axios';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const NewUserForm = () => {

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const phoneRegExp = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3,4})[-. ]*(\d{4})(?: *x(\d+))?\s*$/

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().trim().required('First name is required'),
    lastName: Yup.string().trim().required('Last name is required'),
    //email: Yup.string().email('Invalid email address').required('Email is required'),
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
      axios.post(process.env.REACT_APP_serverURL+'/api/customers', values)
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



  return (

    <Box display="flex" alignItems="center" flexDirection={"column"}>
      <Item>
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
          <Divider />
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
      </Item>
    </Box>
  );
};

export default NewUserForm;
