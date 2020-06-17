import React, { Component } from 'react'
import { Container, Header, Icon, List } from 'semantic-ui-react'
import '../style/index.scss'

export default class Index extends Component {
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
      <div className='index'>
        <Container className='index-container'>
          <Header>
            <Icon name='file text' />
            <Header.Content>Document Management</Header.Content>
          </Header>
          <hr className='separate-line' />
          <List className='folder-list'>
            {this.state.documents.map((document)=>(
              <List.Item className='folder-list-item'>
                <Icon name='folder' />
                {document.name}
              </List.Item>
            ))}
          </List>
        </Container>
      </div>
    )
  }
}
