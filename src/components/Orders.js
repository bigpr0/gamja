import React, {useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import axios from "axios";

const columns = [
    //{ field: '_id', headerName: 'ID' },
    {
      field: 'customerName',
      headerName: 'Customer name',
      width: 200,
      editable: true,
    },
    {
      field: 'recipient',
      headerName: 'Recipient',
      width: 200,
      editable: true,
    },
    {
      field: 'deliveryAddress',
      headerName: 'deliveryAddress',
      width:250,
      editable: true,
    },
    {
        field: 'orderStatus',
        headerName: 'Order Status',
        width: 200,
        editable: true,
    },
  ];

export default function Orders() {

    const [data, setData] = useState([]);

    useEffect(() => {
      axios
        .get("http://localhost:5000/api/orders")
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