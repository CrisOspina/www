import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Layout = (props) => {
  const { children } = props
    return (
      <React.Fragment>
          <Header/>

          { children }

          <Footer />
      </React.Fragment>
    );
}
 
export default Layout;
