import React from 'react';
import Router from "./component/Router/Router";
import NavigationMenu from "./component/NavigationMenu/NavigationMenu";
import TopMenu from "./component/TopMenu/TopMenu";
import NavigationMenuRight from "./component/NavigationMenuRight/NavigationMenuRight";
import "./css/index.css"


function App() {
    return (
        <div className="App">
            <TopMenu/>
            <div className="App-block">
                <NavigationMenu/>
                <div className="content">
                    <Router/>
                </div>
                <NavigationMenuRight/>
            </div>
        </div>
    );
}

export default App;
