import React, { Component, useEffect } from 'react';
import AppContext from './Common/appContext';
import Loader from './Common/Loader';
import Code from  './Code';
import { useDispatch, useSelector } from 'react-redux';
import {UPDATE_TYPICODE} from '../reducer/AppReducer';

const AppBody = () =>{
    const [init,setinit] = React.useState(false);
    const dispatch = useDispatch();
    const typicode = useSelector(state => state.AppReducer.typicode);

    useEffect(()=>{
        if(init)
            return;
        setinit(true);
        const options = {
            method: 'GET'
        };
        
        fetch('https://jsonplaceholder.typicode.com/posts', options)
            .then(response => response.json())
            .then(response => {dispatch(UPDATE_TYPICODE({typicode: response}))})
            .catch(err => console.error(err));
    },[init]);

    const renderFoodList = () =>{
        if(typicode && !typicode.length)
            return <Loader />
        
        let components = [];

        typicode.map((code)=>{
            components.push(<Code code={code}/>)
        })

        return components;
    }

    return(
        <div className="food-list-wrapper">
            {
                renderFoodList()
            }
        </div>
    )
};

export default AppBody;