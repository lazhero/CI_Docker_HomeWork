import logo from './logo.svg';
import React from 'react'
import './App.css';
import { Table } from './Table';


export default class App extends React.Component{

  constructor(props){
      super(props)
  }

  getData() {


    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", 'https://swapi.dev/api/people/', false ); // false for synchronous request
    xmlHttp.send( null );
    var json=JSON.parse(xmlHttp.responseText)
    console.log(json)
    console.log(json.results)
    return json.results
    
  
  }
  render(){
    return <div>
      <Table data={this.getData()}></Table>
    </div>
  }
  

}


