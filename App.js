import React, {Component} from "react"
import './App.css';
import Make1 from './Make1';

class App extends Component {
  constructor() {
      super()
      this.state = {}
  }
  
  render() {
    return (
        <div>
          
          <Make1/>
        </div>
    )
  }
}

export default  App;
