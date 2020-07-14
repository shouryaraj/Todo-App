import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Delete from './delete.jsx'



const Todo = props => {

        
     

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
        
                <div className="remove">
                    <a href="#" onClick={() => props.remove(props.todo._id)}>X</a>
                </div>
                       


                </td>

                
                <td>
                        <label style={{paddingLeft: "7px"}}>
                        <input type="checkbox" />
                        <span></span>
                        </label>
                    
                    </td>
            </tr>
        )}


class TodoList extends Component {
    constructor(props){
        super(props);
        this.state ={todos: []};
        this.removeRow = this.removeRow.bind(this)
    }

    componentDidMount(){
        axios.get('http://localhost:3000/todos/')
        .then(response => {
            this.setState({todos: response.data});
        })
        .catch(
            function(error){
                console.log(error)
            }
        )

    }

    componentDidUpdate(){
        axios.get('http://localhost:3000/todos/')
        .then(response => {
            this.setState({todos: response.data});
        })
        .catch(
            function(error){
                console.log(error)
            }
        )
    }
     onChangeTodoCompleted(e) {
        this.setState({
            todo_completed: !this.state.todo_completed
        });
    }
    
    removeRow = (rowId) => {
        // Array.prototype.filter returns new array
        // so we aren't mutating state here
        console.log(this.state.todos)
        console.log(rowId)
        const arrayCopy = this.state.todos.filter((row) => row._id !== rowId);
        this.setState({todos: arrayCopy});



        
        console.log(this.state.todos)
      };
    todoList() {
        return this.state.todos.map((currentTodo, i)=>{
          
            return <Todo todo={currentTodo} remove={this.removeRow} key={i} />    
        });
    }


    render (){
        return(
            <div className="table-div" >
               <h3>.............Things to do :D................</h3>
               <table  style={{marginTop: 20}}>
               <thead>
                   <tr>
                      
                       <th>Description</th>
                       <th>Responsible</th>
                       <th>Priority</th>
                       <th>Actions</th>
                       
                   </tr>
               </thead>
               <tbody>
                   {this.todoList()}
               </tbody>
               </table>
            </div>
           
        )
    }
}
export default TodoList;