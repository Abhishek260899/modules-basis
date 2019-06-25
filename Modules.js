import React from 'react'
import Lesson from './Lesson'
class Modules extends React.Component{
    
    render () {
        const { modules } = this.props
        
        const les=modules.map((mod,index) => <Lesson key={index} lessons={mod.lessons} />)
        
        return(
            <div>
                { modules.map((mod,index) => <p key={index}> {mod.title} {les} </p>)}
                     
            </div>    
        )
    }

}
export default Modules