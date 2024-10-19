import React,{Component} from "react";


export default class First extends Component{
    constructor(){
        super()
        this.state = {
            name : "Pratham"
        }
   

}
change=()=>{
    this.setState({name : "Sannu"})
    
}
previous=()=>{
    this.setState({name : "Pratham"})
}


    render(){
        return(
            <div>
                <h1>Hello {this.state.name} </h1>


                {/* <button onClick={() => this.setState({name : "Sannu"})}>Click</button> */}
            
                 <button onClick ={this.change}>Click</button>

                              
            </div>

        )
    }

}
  