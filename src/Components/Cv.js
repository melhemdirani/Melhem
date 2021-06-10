import React from 'react';
import '../App.css';
import CancelIcon from '@material-ui/icons/Cancel';

function Cv({onRouteChange}) {
    return (
        <div className="CV">
            <button className="Cv_button"  onClick={() => onRouteChange('home')}> Go back <CancelIcon/></button>
            <div className="Resume" />
        </div>
    )
}

export default Cv
