
import React from 'react';
import Modules from './Modules'
class Make1 extends React.Component{

    constructor(){
        super()
        this.state={
            
        }
    }

    componentDidMount(){
        var bearer='Bearer 5d199c8763a13328ad7a15c5,eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkMTk5Yzg3NjNhMTMzMjhhZDdhMTVjNSIsImlhdCI6MTU2MTk1OTU1OSwiZXhwIjoxNTYyNTY0MzU5fQ.11QXokuYj3PiI966NXGrYrzr65UWGAYFaZj1ZrL2aLc';

        fetch("https://dev.getbasis.co/v1/users/5d199c8763a13328ad7a15c5/modules",{
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
         <Modules  modules={this.state.Data.modules}/>
          </div>    
      )
    }

}
export default Make1
