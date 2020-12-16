import React from 'react'
import './Table.css'
import { Character } from './Character'
export class Table extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[]
        }

    }
    componentDidMount(){
        this.setState({
            data:this.props.data
            
        })
        

    }
    getRows(){
        return this.state.data.map((item)=>{
            console.log(item)
            return <Character name={item.name} height={item.height} mass={item.mass}></Character>
            })
    }
    render(){
        return<div class="container">
            <table>
            <tr>
                <td><b>Name</b></td>
                <td><b>Height</b></td>
                <td><b>Mass</b></td>
            </tr>
            <tbody>
                {this.getRows()}
            </tbody>
        </table>

        </div>
        
    }



}