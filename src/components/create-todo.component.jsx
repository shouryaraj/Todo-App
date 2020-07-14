import React, {Component} from 'react';
import axios from 'axios';
class createToDo extends Component {

    constructor(props){
        super(props);
        // Without binding we can use onchangeTodoDescription =() => {} type function
        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this)
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this)
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state ={
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        }
    }
    onChangeTodoDescription(e){
        this.setState({
            todo_description: e.target.value
        });
    }

    onChangeTodoResponsible(e){
        this.setState({
            todo_responsible: e.target.value
        });
    }
    onChangeTodoPriority(e){
        this.setState({
            todo_priority: e.target.value
        });
    }
 
    onSubmit(e){
        // getting rid off the default behaviour of HTML forum submission
        e.preventDefault();

        console.log('Form submitted')
        console.log(`Todo Description: ${this.state.todo_description}`)
        console.log(`Todo Responsible: ${this.state.todo_responsible}`)
        console.log(`Todo Priority: ${this.state.todo_priority}`)

        // Communicating with the backend
        const newTodo ={
            todo_description: this.state.todo_description,
            todo_responsible: this.state.todo_responsible,
            todo_priority: this.state.todo_priority,
            todo_completed: this.state.todo_completed
        }

        axios.post('http://localhost:3000/todos/add', newTodo)
            .then(res => console.log(res.data))
            .catch(
                function(error){
                    console.log(error)
                }
            )

            

        this.setState({
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        })
        window.alert("ToDo list Saved")
    }

    render (){
        return(
            <div className="form-div">
                     <div class="card" id="form-card">
                         <div class="card-body">
                           <p style={{fontSize: "200%", textAlign: "center", fontWeight:"bold"}}>Create new</p>
                    <form onSubmit={this.onSubmit} className="form-input-div">
                        <div className='form-group'>
                            <label>Description: </label>
                            <input type="text"
                            className="form-control"
                            value={this.state.todo_description}
                            onChange={this.onChangeTodoDescription}
                            required
                            />


                            
                        </div>
                        <div className='form-group' style={{paddingTop: "2%"}}>
                            <label>Responsible: </label>
                            <input type="text"
                            className="form-control"
                            value={this.state.todo_responsible}
                            onChange={this.onChangeTodoResponsible}
                            required
                            />
                        </div>
                    <div className="form-group" style={{paddingTop: "4%"}} >
                        <div className="form-check form-check-inline"> 
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityLow"
                                    value="L"
                                    checked={this.state.todo_priority === 'L'}
                                    onChange={this.onChangeTodoPriority} 
                                    />
                            <label className="form-check-label"> Low </label>

                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityMedium"
                                    value="M"
                                    checked={this.state.todo_priority === 'M'}
                                    onChange={this.onChangeTodoPriority} 
                                    />
                            <label className="form-check-label"> Medium </label>

                        </div>
                        <div className="form-check form-check-inline" >
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityHigh"
                                    value="H"
                                    checked={this.state.todo_priority === 'H'}
                                    onChange={this.onChangeTodoPriority} 
                                    />
                            <label className="form-check-label"> High </label>

                        </div>

                    </div>
                    <div className="form-group" style={{marginLeft: "38%", paddingTop: "10%"}}>
                        <input type="submit" value="Create Todo" className ="btn btn-dark btn-lg" />
                    </div>
                </form>
             </div>
            </div>
                
               

            </div>
        )
    }
}
export default createToDo;