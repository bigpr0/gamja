import React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const columns = [
    {
      field: 'firstName',
      headerName: 'First name',
      width: 200,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 200,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'email',
      width:250,
      editable: true,
    },
    {
        field: 'phoneNumber',
        headerName: 'Phone Number',
        width: 200,
        editable: true,
    },
  ];

export default function Customers() {

    const [data, setData] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
      axios
        .get(process.env.REACT_APP_serverURL+"/api/customers",{cache:true})
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);
  
    const handleRowClick = (row) => {
      navigate("/editcustomer/"+row.id)

    };



  return (
    <Box sx={{ height: 400, width: 1 }}>
      <DataGrid
        rows={data}
        columns={columns}
        getRowId={(data) => data._id}
        pageSize={10}
        rowsPerPageOptions={[10,20]}
        autoHeight
        onRowClick={handleRowClick}
      />
    </Box>
  );
}