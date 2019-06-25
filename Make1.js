import React from 'react';
import Modules from './Modules'
class Make1 extends React.Component{

    constructor(){
        super()
        this.state={
            
        }
    }

    componentDidMount(){
        var bearer='Bearer 5d0ba2fa6bcfc87139e85170,eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkMGJhMmZhNmJjZmM4NzEzOWU4NTE3MCIsImlhdCI6MTU2MTM3MTEyNCwiZXhwIjoxNTYxOTc1OTI0fQ.IazTLyTq-9_g6MxqGnJt0zSCbY4l__aqEVVLxajpu7E';

        fetch("https://dev.getbasis.co/v1/users/5d0ba2fa6bcfc87139e85170/modules",{
            method: 'GET',
            withCredentials: true,
           
          
            headers:{
                'Authorization': bearer,
                'X-FP-API-KEY': 'iphone', 
                'Content-Type': 'application/json'
        }}).then(response =>response.json()).then(data =>{
                   
              this.setState({
                   Data:data.results
              })
        })
    }
    render(){

        if(this.state.Data === undefined) return (<div></div>)

      return(
        <div>
         <Modules modules={this.state.Data.modules}/>
          </div>    
      )
    }

}
export default Make1