/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './Descripcion.css';
import Foto from '../img/img1.jpg';
import 'react-awesome-button/dist/themes/theme-blue.css';
import { AwesomeButton } from 'react-awesome-button';

const Descripcion = (props) => {
  const { saludo, name, descripcion, nameButton } = props
  return ( 
    <React.Fragment>
      <div className="container-fluid pb-4">
        <div className="row-fluid">
          <div className="col-12">
            <h2 className="card-title text-center deepshadow">{saludo}</h2>
            <div className="col-12 col-sm-12">
              <h1 className="card-title text-center deepshadow">{name}</h1>
            </div>
            <div className="col-12 col-sm-12">
              <h2 className="card-text card-text-p text-center deepshadow">{descripcion}</h2>
            </div>
          </div>
        </div>
        <div className="row-fluid mt-3">
          <div className="card bg-dark text-white">
            <img className="card-img" src={Foto} alt="Card image" />
              <div className="card-img-overlay">
                <h5 className="card-title">
                  <AwesomeButton type="secondary" size="large" className="aws-btn" >
                    {nameButton}
                  </AwesomeButton>
                </h5>
              </div>
          </div>
        </div>
      </div>
    </React.Fragment>
   );
}
 
export default Descripcion;