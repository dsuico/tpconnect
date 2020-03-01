import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import FontIcon  from 'material-ui/FontIcon';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import './Toolbar.css';
const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div>
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="toolbar__logo"><a href="/">LOGO</a></div>
            <div className="spacer"></div>
            <div className="toolbar__navigation-items">
                <span>Hi, tpconnects  

                </span>
                <PowerSettingsNewIcon />

            </div>
        </nav>
    </header>
);

export default toolbar;