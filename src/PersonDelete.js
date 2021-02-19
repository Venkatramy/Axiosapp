import React from 'react';
import axios from 'axios';
export default class PersonDelete extends React.Component{
    state={
        id:''
    }
    handleChange=e=>{
        this.setState({id:e.target.value});
    }
    handleSubmit=e=>{
        e.preventDefault();
        axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
        .then(res=>{
            console.log(res);
            console.log(res.data);
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    Person ID:
                    <input type="text" name="id" onChange={this.handleChange}/>
                    <button type="submit">Delete</button>
                </form>
            </div>
        );
    }

}


/*export default axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/users'
})*/



