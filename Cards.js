import React from 'react'
import ReactHtmlParser from 'react-html-parser'

class Cards extends React.Component{
    constructor(){
        super()
        this.state={
            Data:{},
            cardItem:[]
        }
    }
    componentDidMount(){
        
        this.props.selcards.sort(this.compare)
        console.log(this.props.selcards)
        var bearer='Bearer 5d0ba2fa6bcfc87139e85170,eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkMGJhMmZhNmJjZmM4NzEzOWU4NTE3MCIsImlhdCI6MTU2MTM3MTEyNCwiZXhwIjoxNTYxOTc1OTI0fQ.IazTLyTq-9_g6MxqGnJt0zSCbY4l__aqEVVLxajpu7E';

        fetch("https://dev.getbasis.co/v1/modules/cards",{
            method: 'POST',
            withCredentials: true,
           body: JSON.stringify({ cards:this.props.selcards}),
        
            headers:{
                'Authorization': bearer,
                'X-FP-API-KEY': 'iphone', 
                'Content-Type': 'application/json'
        }}).then(response =>response.json()).then(data =>{
             console.log(data);
              this.setState({
                   Data:data,
                   cardItem:data.results.cards
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
  
      if(this.state.Data===undefined){
          return(<div> </div>)
      }
      
      
      return(
        <div>
           {this.state.cardItem.map((mod,index) =><div><p key={index}>{mod.title}</p>
           <p key={index}>{ReactHtmlParser(mod.content)} </p></div>)}
            </div>   
      )
    }

}
export default Cards