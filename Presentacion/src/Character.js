import React from 'react'

export class Character extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name: "",
            height: "",
            mass:"",
        }
    
    }
    componentDidMount(){
        this.setState({
            name:this.props.name,
            height:this.props.height,
            mass:this.props.mass,

        })
    }
    render(){
        return<tr>
            <td>{this.state.name}</td>
            <td>{this.state.height}</td>
            <td>{this.state.mass}</td>
        </tr>
    }

}
