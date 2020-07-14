import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Todo extends Component{

    render(){
        return(
            <tr>
            <td className={props.todo.todo_completed ? 'completed': ''}>
                <div class="card" ><div class="card-body">{props.todo.todo_description}
                </div></div></td>
            <td className={props.todo.todo_completed ? 'completed': ''}>
                    <div class="card"><div class="card-body">
                    {props.todo.todo_responsible}
                    </div></div></td>
            <td className={props.todo.todo_completed ? 'completed': '' } >
                    <div class="card" id="priority"><div class="card-body">
                    {props.todo.todo_priority}
                    </div></div></td>
            <td>
                <Link to={"/edit/"+ props.todo._id}><div class="card"><div class="card-body">
                <a class="icon 	fa fa-edit" id="uno" style={{}}></a>
                    </div></div>
                    </Link>
            </td>
            
            <td>
                     <label style={{paddingLeft: "7px"}}>
                    <input type="checkbox" />
                    <span></span>
                    </label>
                
                </td>
        </tr>
        )
    }
}

export default Todo;