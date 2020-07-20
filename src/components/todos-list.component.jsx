import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



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
                    <div style={{display: 'flex'}}>
                        <div class="card">
                            <div class="card-body" style = {{display: 'flex'}}>
                                <Link to={"/edit/"+ props.todo._id}>
                                    <a class="icon 	fa fa-edit" id="uno" style={{paddingRight: '50%'}}></a>
                                </Link>
                                <div className="remove" style={{paddingLeft: '40%', paddingRight: '20%'}}>
                                        <a class='fa fa-trash-o' style={{color:"red"}} onClick={() => props.remove(props.todo._id)}></a>
                                </div>
                                
                            </div>
                            
                        </div>
                        {/* <div class="card">
                            <div class="card-body">
                             
                            </div>
                        </div> */}

                    </div>
                    
                       
                   
               
                       
                    
            
                
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
    async changeHandler(todos) {
        await this.setState({todos: todos}, () => {
            console.log(this.state.todos);
        });

    }
    
    
    removeRow = (rowId) => {
        // Array.prototype.filter returns new array
        // so we aren't mutating state here
        console.log(this.state.todos)
        console.log(rowId)
        const arrayCopy = this.state.todos.filter((row) => row._id !== rowId);
        this.changeHandler(arrayCopy);
    
        axios.delete('http://localhost:3000/todos/remove/' + rowId)
        .then(res => console.log(res.data))
        .catch(
            function(error){
                console.log(error)
            }
        )


        
   
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