import React from 'react';
import {Link} from 'react-router-dom';
import Creategame from '../form';

console.log(Creategame)

function CreateRd1() {  
return (
    <div className="menu">
        <div className="vertical-center">
        <Link to="/">
            <p className="title-text">
             The Bracket 
            </p>
        </Link>
          
        <div className="menu-text" id="mt2">
            {Creategame.category}
            
        </div>
        
       

        </div>
    </div>    
)};

export default CreateRd1;
