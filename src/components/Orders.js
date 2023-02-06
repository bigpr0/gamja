import React, {useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import axios from "axios";
import { useNavigate } from 'react-router-dom';



const columns = [
    //{ field: '_id', headerName: 'ID' },
    {
      field: 'customerName',
      headerName: 'Customer',

      editable: true,
    },
    {
      field: 'recipient',
      headerName: 'Recipient',

      editable: true,
    },
    {
      field: 'deliveryAddress',
      headerName: 'Delivery Address',
      width:250,
      editable: true,
    },

    {
        field: 'delivery',
        headerName: 'Delivery',
        width: 200,
        editable: true,
    },


    {
        field: 'dueDate',
        headerName: 'Due Date',
        width:250,
        editable: true,
        valueFormatter: params => new Date(params?.value).toLocaleString()

    },
    {
        field: 'orderStatus',
        headerName: 'Status',
        width: 100,
        editable: true,
    },
  ];

export default function Orders() {

    const [data, setData] = useState([]);

    useEffect(() => {
      axios
        .get(process.env.REACT_APP_serverURL+"/api/orders",{cache:true})
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);


    
    const navigate = useNavigate();

    const handleRowClick = (row) => {
        navigate("/editorder/"+row.id)
  
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