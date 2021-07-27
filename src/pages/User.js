import axios from 'axios';
import React, { Component } from 'react';
import Input from '../components/Input';
import Table from '../components/Table';

class AddUser extends Component {
    constructor(props){
        super(props)

        this.state = {
            fname : '',
            uname : '',
            email : '',
            mobileNo : '',
            id : 0,
            users : [],
            BASE_URL : 'https://user-information-system.herokuapp.com/testsapphire/',
        }

    }
    componentDidMount = () =>{
        axios.get(this.state.BASE_URL+'user/getAll')
        .then(response =>  {
            console.log(response);
            this.setState(this.state.users=response.data)          
        });
    }
    handleChange = (e) =>{
        this.setState({
           [e.target.name]: e.target.value 
        });     
    }
    handleSubmit = (e)=>{
        if(this.state.id===0){
            axios.post(this.state.BASE_URL+'user/create', {
                firstName : this.state.fname,
                userName : this.state.uname,
                email : this.state.email,
                mobileNo : this.state.mobileNo
            },
            ).then((response) => console.log(response));
        }
        else{
            axios.post(this.state.BASE_URL+'user/update', {
                id : this.state.id,
                firstName : this.state.fname,
                userName : this.state.uname,
                email : this.state.email,
                mobileNo : this.state.mobileNo
            },
            ).then((response) => console.log(response));
        }
        window.location.reload(true);
        e.preventDefault()
    }
    view  = (id) =>{
        axios.get(this.state.BASE_URL+'/user/view/'+id)
        .then(response =>  {
            console.log(response);
            this.setState({
                id: response.data.id,
                uname : response.data.userName,
                fname : response.data.firstName,
                email : response.data.email,
                mobileNo : response.data.mobileNo
            });          
        })
    }
    delete  = (id) =>{
        axios.get(this.state.BASE_URL+'/user/delete/'+id)
        .then(response =>  {
            console.log(response); 
            window.location.reload(true);      
        })
    }
   
    render() {
        return (
            <div>
                <h3>User CRUD</h3>
                <form onSubmit = {this.handleSubmit}>
                    <div>
                        <label for="fname">First Name </label><br></br>
                        <Input type = "text" name = "fname" value = {this.state.fname}  onChange = {(e)=>this.handleChange(e)}></Input>
                    </div>
                    <div>
                        <label for="uname">User Name </label><br></br>
                        <Input type = "text" name = "uname" value = {this.state.uname} onChange = {(e)=>this.handleChange(e)}></Input>
                    </div>
                    <div>
                        <label for="email">Email </label><br></br>
                        <Input type = "email" name = "email" value = {this.state.email} onChange = {(e)=>this.handleChange(e)}></Input>
                    </div>
                    <div>
                        <label for="mobileNo">Mobile No </label><br></br>
                        <Input type = "text" name = "mobileNo" value = {this.state.mobileNo}  onChange = {(e)=>this.handleChange(e)}></Input>
                    </div>
                    <Input type = "submit" value = "SUBMIT" ></Input>
                </form>
                <Table list = {this.state.users} view = {this.view} deleteUser = {this.delete}></Table>
            </div>
            
        );
    }
}
export default AddUser;