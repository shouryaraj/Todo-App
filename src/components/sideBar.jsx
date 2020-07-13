import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import 'font-awesome/css/font-awesome.css'



class SiderBar extends Component{
    render(){
        return(
            <div className="sidebar">
            <ul id="menu">
            <Link to="/" >
                 <a href="#t1"><li class="icon fa fa-home" id="uno"></li></a>
            </Link>
            <Link to="/create" >
                <a href="#t5"><li class="icon fa fa-plus-circle" id="cinco"></li></a>
            </Link>
            <Link>
                <a href="#t3"><li class="icon fa fa-rocket" id="tres"></li></a>
            </Link>

        
           
          </ul>
          </div>
          
        );
    }
}

export default SiderBar;