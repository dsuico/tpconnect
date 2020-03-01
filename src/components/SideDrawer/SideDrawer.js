import React from 'react';
import './SideDrawer.css';
import logo from '../../assets/images/adminLogo.png';

const sideDrawer = props => {
    let drawerClasses = ['side-drawer'];
    if(props.show) {
        drawerClasses = ['side-drawer','open'];
    }
    return (
        <nav className={drawerClasses.join(' ')}>
            <img src={logo} alt="logo">
                </img>
            <ul>
                <li><a href="/">Products</a></li>
                <li><a href="/">Users</a></li>
                <li><a href="/">Products</a></li>
            </ul>
        </nav>
    );
};

export default sideDrawer;