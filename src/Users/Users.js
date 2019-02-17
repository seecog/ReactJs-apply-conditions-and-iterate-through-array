import React, { Component } from 'react';
import axios from 'axios';

class Users extends Component {


    constructor() {
        super();
        this.state = {
            users: 
                [
                    {name : 'Mohan',age : 21},
                    {name : 'Sohan',age : 22}
            
            ]
            
        }
    }

    componentWillMount = () => {
        axios.get("https://reqres.in/api/users?page=2").then((res) => {
            console.log('The response is ', res.data.data)
            this.setState({
                users: res.data.data
            })
        })
        .catch((err) => {
                console.log('The error is ', err);
            })
    }


    render() {
        return (
            <div>
                Hi all
            </div>
        );
    }

}

export default Users;