import React from 'react'

class Cards extends React.Component{
    constructor(){
        super()
        this.state={
            Data:{}

        }
    }
    componentDidMount(){
        console.log(this.props.allinfo)

        var bearer='Bearer 5d0ba2fa6bcfc87139e85170,eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkMGJhMmZhNmJjZmM4NzEzOWU4NTE3MCIsImlhdCI6MTU2MTM3MTEyNCwiZXhwIjoxNTYxOTc1OTI0fQ.IazTLyTq-9_g6MxqGnJt0zSCbY4l__aqEVVLxajpu7E';

        fetch("https://dev.getbasis.co/v1/modules/cards/5d0ba2fa6bcfc87139e85170",{
            method: 'POST',
            withCredentials: true,
           body: JSON.stringify(this.props.allinfo),
          
            headers:{
                'Authorization': bearer,
                'X-FP-API-KEY': 'iphone', 
                'Content-Type': 'application/json'
        }}).then(response =>response.json()).then(data =>{
                   
              this.setState({
                   Data:data
              })
        })
    }
     compare(a,b){
       const c=a.position
       const d=b.position
       return c-d
    }
    render(){
        console.log(this.state.Data)
      return(
          <div>
          dwsd
          </div>
      )
    }

}
export default Cards