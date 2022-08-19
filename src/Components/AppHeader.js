import React from 'react';
import AppContext from './Common/appContext';

const AppHeader = React.memo((props) => {
    const id = React.useId();
    return (
        <header key={id} data-testid="header-element" className="App-header">
            <div className="header-left">
                <span>Food Recipes</span>
            </div>
            <div className="header-right">
                Sonu Dhakar
            </div>
        </header>
    );
});
  
export default AppHeader;