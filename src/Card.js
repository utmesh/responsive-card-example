import React from 'react';
import './App.css'


export default function Card(props){
    return(
        <div className = 'Card'>
        {props.children}
        </div>
    )
}