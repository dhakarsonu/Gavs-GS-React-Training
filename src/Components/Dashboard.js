import '../App.css';
import AppHeader from './AppHeader';
import AppBody from './AppBody';
import AppContext from './Common/appContext';
import React from 'react';

const Dashboard = (props) => {

    const[name,setName] = React.useState("Dashboard");

    return (
        <AppContext.Provider value={{
            ...props,
            name,
            setName
        }}>
            <div className="App">
                <AppHeader />
                <AppBody />
            </div>
        </AppContext.Provider>
      );
};

export default Dashboard;
