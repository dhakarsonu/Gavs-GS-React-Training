import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {UPDATE_NAME} from '../reducer/AppReducer';

const SearchText = (props) => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(UPDATE_NAME({
            name: `Gavs-GS - 100`
        }));
    });

    return (
        <div className="result">
            {props.query}
        </div>
    );
};
  
export default SearchText;