import React from 'react'
import Cards from './Cards'
class Lesson extends React.Component{
  
    render(){
        const {lessons}=this.props
       
    const a=lessons.map((les,index) => <p key={index}> {les.title} </p> )
    const l=lessons.map((dom,index) => <Cards key={index} allinfo={dom.cards} /> ) 
        return(
            
         <div>
        {a} {l}
    </div>
        )
    }


}
export default Lesson 