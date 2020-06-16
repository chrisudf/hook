import React, {Component} from 'react';
import { Header, Icon, List } from 'semantic-ui-react'
import EmployeeDoc from '../../../src/employee_documents_example.json'
// import './App.css';

class App extends Component{
  state = {
    documents:[]
  }
  componentDidMount(){
    this.setState({
      documents:[{id:1,name:'value 101'},{id:2,name:'value 102'}]
      // documents:EmployeeDoc
    })
  }
  render(){
    return (
      <div className="App">
          <Header as='h2'>
            <Icon name='file text' />
            <Header.Content>Document Management</Header.Content>
          </Header>
          <List>
            {this.state.documents.map((document)=>(
              <List.Item>{document}</List.Item>
            ))}
          </List>
      </div>
    );
  }
}

export default App;
