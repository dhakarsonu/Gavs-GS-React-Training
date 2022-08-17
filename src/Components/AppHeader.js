import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {UPDATE_NAME} from '../reducer/AppReducer';
import AppContext from './Common/appContext';

const AppHeader = (props) => {
    const [status,setStatus] = React.useState(false);
    const [start,setStart] = React.useState(false);
    const [counter,setCounter] = React.useState(1);
    const dispatch = useDispatch();
    const appName = useSelector(state => state.AppReducer.name);
    const context = React.useContext(AppContext);
    
    React.useEffect(() => {
        if(!status){
            console.log("Initiate Training");
            setStatus(true);
            return;
        }
        console.log("Turn Off Training");
    },[status]);

    const startClickHander = () =>{
        setStart(!start);
        dispatch(UPDATE_NAME({
            name: `Gavs-GS - ${counter}`
        }));
        setCounter(counter + 1);
        context.setName("Application Header");
    };

    return (
        <header className="App-header">
            {context.name} -> {appName} {start ? "ON" : "OFF"}
            <button onClick={startClickHander}>{start ? "Stop" : "Start"}</button>
        </header>
    );
}
  
export default AppHeader;