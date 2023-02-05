import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import axios from "axios";
import { useDemoData } from '@mui/x-data-grid-generator';




const VISIBLE_FIELDS = ['firstName', 'lastName', 'email', 'phoneNumber'];


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

    const [data, setData] = React.useState([]);

    React.useEffect(() => {
      axios
        .get("http://localhost:5000/api/customers")
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);
  



  return (
    <Box sx={{ height: 400, width: 1 }}>
      <DataGrid
        rows={data}
        columns={columns}
        getRowId={(data) => data._id}
        pageSize={10}
        rowsPerPageOptions={[10,20]}
        autoHeight
      />
    </Box>
  );
}