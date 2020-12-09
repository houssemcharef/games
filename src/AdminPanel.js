import React from 'react';
import './AdminPanel.css'
import Navbaradmin from './NavbarAdmin';
import Table from './Table';

export default function Adminpanel(props) {
    

    return (
        <div className="AdminPanel">
            <Navbaradmin />
            <Table />
        </div>
    )
}
