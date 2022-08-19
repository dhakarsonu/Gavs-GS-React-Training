import '../App.css';
import AppHeader from './AppHeader';
import AppBody from './AppBody';
import AppContext from './Common/appContext';
import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {updateName} from '../Actions/appAction';

const Dashboard = (props) => {

    const[name1,setName] = React.useState("Dashboard");
    
    return (
        <AppContext.Provider value={{
            ...props,
            name1,
            setName
        }}>
            <div className="App">
                <AppHeader />
                <AppBody />
            </div>
        </AppContext.Provider>
      );
};

const mapStateToProps = (state, ownProps) => ({
    name : state.AppReducerNew.name,
});

const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({ updateName}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
