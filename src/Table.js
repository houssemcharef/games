import React, { useEffect, useState } from 'react';
import { DataGrid, ValueFormatterParams } from '@material-ui/data-grid';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import './Table.css'
import axios from './axios'

export default function TableAdmin(props) {

  const [games, setGames]= useState([]);
    
  const columns = [
    { field: 'id', headerName: 'ID', width: 200 },
    { field: 'title', headerName: 'Name', width: 300 },
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
   useEffect(() =>{
    const fetchGames = async () =>
            await axios.get('/sync').then ((res) => {
              setGames(res.data.map(item => {return {"id": item._id, "title": item.title} }));
              console.log(games);
            })
          fetchGames();
          

  }, []);
  
  console.log(games);
    return (
        <div className="table">
        
        <Button className="add__button" variant="outlined" color="primary" startIcon={<AddIcon/>}>
            Add
        </Button>
        <div style={{ height: 400  }}>
            <DataGrid rows={games} columns={columns} pageSize={5} />
        </div>
        </div>
    )
}
