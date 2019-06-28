import React from 'react'
import Cards from './Cards'
class Lesson extends React.Component{
  
    render(){
        const {lessons}=this.props
       
    const a=lessons.map((les,index) => <div><p key={index} className="LessonTitle"> Lesson {index+1} {les.title} </p>  </div> )
    const l=lessons.map((dom,index) => <Cards key={index} allinfo={dom.cards} /> ) 
        return(
            
         <div>
      <p>  {a}</p>
    </div>
        )
    }


}
export default Lesson 