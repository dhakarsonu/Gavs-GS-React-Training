import React, { Component } from 'react';
import AppContext from './Common/appContext';

class AppBody extends Component{
    constructor(props){
        super(props);
        this.state = {
            color : "black",
            font : "",
            size : 14,
            profile : {}
        };
    }

    componentDidMount(){
        console.log("componentDidMount");
        // fetch('/load/data').then((response)=>{
        //     if(response && response.data){
        //         this.setState({profile : response.data});
        //     }
        // });
        
    }

    componentWillMount(){
        console.log("componentWillMount");
    }

    componentDidUpdate(){
        console.log("componentDidUpdate");
    }

    componentWillUpdate(){
        console.log("componentDidUpdate");
    }

    componentWillUnmount(){
        console.log("componentDidUpdate");
    }

    componentDidCatch(){
        console.log("componentDidCatch");
    }

    componentWillReceiveProps(){
        console.log("componentWillReceiveProps");
    }

    colorChangeHandler = (color,context) =>{
        if(color === "black"){
            this.setState({color:'white'});
            return;
        }
        context.setName("Application");
        this.setState({color:'black'});
        context.history.replace("/profile");
        window.location.href = "/profile";
    }
    
    render(){
        return(
            <AppContext.Consumer>
                {
                    context => (
                        <React.Fragment>
                            <div className="App-body">
                                <span style={{color : `${this.state.color}`}}>{context.name} -> Application Body</span>
                                <button onClick={_=>{this.colorChangeHandler(this.state.color,context)}}>Change My Color</button>
                            </div>
                        </React.Fragment>
                    )
                }
            </AppContext.Consumer>
            
      )
    }
}

export default AppBody;