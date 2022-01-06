import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer'
const Layout = (props) => {
    return (
        <div>
            <Header></Header>
            {props.children}
            <Footer></Footer>
            
        </div>
    );
};

export default Layout;