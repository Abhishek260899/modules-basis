import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import { Card, CardWrapper } from 'react-swipeable-cards';
class Cardsm extends React.Component{
    constructor(){
        super()
        this.state={
        }
    }
    componentDidMount(){
        this.props.selcards.sort(this.compare)
        console.log(this.props.selcards)
        var bearer='Bearer 5d199c8763a13328ad7a15c5,eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkMTk5Yzg3NjNhMTMzMjhhZDdhMTVjNSIsImlhdCI6MTU2MTk1OTU1OSwiZXhwIjoxNTYyNTY0MzU5fQ.11QXokuYj3PiI966NXGrYrzr65UWGAYFaZj1ZrL2aLc';
        

        fetch("https://dev.getbasis.co/v1/modules/cards",{
            method: 'POST',
            withCredentials: true,
           body: JSON.stringify({ cards:this.props.selcards}),
        
            headers:{
                'Authorization': bearer,
                'X-FP-API-KEY': 'iphone', 
                'Content-Type': 'application/json'
        }}).then(response =>response.json()).then(data =>{
             
              this.setState({
                   Data:data,
                   cardItem:data.results.cards
              })
        })
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.selcards !==this.props.selcards){
        this.props.selcards.sort(this.compare)
        console.log(this.props.selcards)
        var bearer='Bearer 5d199c8763a13328ad7a15c5,eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkMTk5Yzg3NjNhMTMzMjhhZDdhMTVjNSIsImlhdCI6MTU2MTk1OTU1OSwiZXhwIjoxNTYyNTY0MzU5fQ.11QXokuYj3PiI966NXGrYrzr65UWGAYFaZj1ZrL2aLc';

        fetch("https://dev.getbasis.co/v1/modules/cards",{
            method: 'POST',
            withCredentials: true,
           body: JSON.stringify({ cards:this.props.selcards}),
        
            headers:{
                'Authorization': bearer,
                'X-FP-API-KEY': 'iphone', 
                'Content-Type': 'application/json'
        }}).then(response =>response.json()).then(data =>{
             
              this.setState({
                   Data:data,
                   cardItem:data.results.cards
              })
        })
    }
    }    
     compare(a,b){
       const c=a.position
       const d=b.position
       return c-d
    }
    
    
      renderCards() {
        
        return this.state.cardItem.map((d,index) => {
          return(
            <Card
              key={index}
              >
             <div><h3 className="l" key={index}>{d.title}</h3>
           <p className="l" key={d._id}>{ReactHtmlParser(d.content)} </p></div>)}  
            </Card>
          );
        });
    } 

    render(){
     
  
      if(this.state.Data===undefined){
          return(<div> </div>)
      }
     let count=1
    console.log(this.state.cardItem)    
    return (
        <div>
        <CardWrapper>
        {this.renderCards()}
      </CardWrapper>
    
      </div>
    )
    }

}
export default Cardsm