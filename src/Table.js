import React from 'react';
import { DataGrid, ValueFormatterParams } from '@material-ui/data-grid';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import './Table.css'

export default function TableAdmin(props) {
    
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 300 },
    {
      field: 'Edit',
      headerName: 'Edit',
      width:120,
      renderCell: () => (
       
          
          <Button
            variant="contained"
            color="primary"
            size="small"
            startIcon={<EditIcon />}
          >
            Edit
          </Button>
        )
    },
    {
      field: 'delete',
      headerName: 'Delete',
      width:120,
      renderCell: () => (
       
          
        <Button
        variant="contained"
        color="secondary"
        size="small"
        startIcon={<DeleteIcon />}
      >
            Delete
          </Button>
        )
    },
  ];
  
  const rows = [
    { id: 1, name: 'houssem' },
    { id: 2, name: 'houssem' },
    { id: 3, name: 'houssem' },
    { id: 4, name: 'houssem' },
    { id: 5, name: 'houssem' },
    { id: 6, name: 'houssem' },
    { id: 7, name: 'houssem' },
    { id: 8, name: 'houssem' },
    { id: 9, name: 'houssem' },
    { id: 10, name: 'houssem' },
    { id: 11, name: 'houssem' },
    { id: 12, name: 'houssem' },
    
  ];
      
      
    return (
        <div className="table">
        
        <Button className="add__button" variant="outlined" color="primary" startIcon={<AddIcon/>}>
            Add
        </Button>
        <div style={{ height: 400  }}>
            <DataGrid rows={rows} columns={columns} pageSize={5} />
        </div>
        </div>
    )
}
