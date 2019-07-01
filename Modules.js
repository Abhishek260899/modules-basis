import React from 'react'
import Lesson from './Lesson'
import Cardsm from './Cardsm'
class Modules extends React.Component{
    constructor(){
        super();
        this.state={
            currentlessons:[],
        }
    }

    loadLesson(mod){
        
        this.setState({
            currentlessons:mod.lessons
        })
        console.log(this.state.currentlessons)
    }
    loadCards(abc){
     this.setState({
         LessonClicked:abc.cards
     })
     console.log(this.state.LessonClicked)
    }
    
       render () {
        const { modules } = this.props
        
        const les=modules.map((mod,index) => <Lesson key={index} lessons={mod.lessons} />)
     
        return(
            <div>
                { 
                    modules.map((mod,index) =>
                    
                    <div className="sc">
                     <div className="container">
                    <img src="https://images.pexels.com/photos/66869/green-leaf-natural-wallpaper-royalty-free-66869.jpeg?cs=srgb&dl=green-green-leaf-nature-66869.jpg&fm=jpg" alt="green" width="250" height="250" onClick={this.loadLesson.bind(this, mod)}/>
                    <div key={index} className="titles"> Module {index+1} {mod.title}  </div>
                    </div>
                    </div>
                
                    
                    )}
                {this.state.currentlessons.map((abc,index) => <div className="LessonTitle"><div className="abc"> <button onClick={this.loadCards.bind(this,abc)} className='buttons'type="button" key={index}> Lesson {index+1}{abc.title} </button></div> </div>)}
               {this.state.LessonClicked === undefined ? <div> </div> : <Cardsm selcards={this.state.LessonClicked}/>}
            </div>    
        )
    }
}

export default Modules
