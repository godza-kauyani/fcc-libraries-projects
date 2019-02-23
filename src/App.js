import React, { Component } from 'react';
import marked from 'marked';
import MarkdownText from './markdown';
import {Container,Col, Row } from 'reactstrap';
class App extends Component {
    constructor(props){
        super(props);
        marked.setOptions({
            breaks:true
        })
        this.state={markdown:MarkdownText}
    }
    onChange = e=>this.setState({markdown:e.target.value})
  render() {
      return (
          <Container>
              <Row>
                  <Col>
                      <textarea id='editor' 
                          onChange={this.onChange}
                      >{this.state.markdown}
                          </textarea>
                  </Col>
                  <Col>
                      <div id='preview'
                          dangerouslySetInnerHTML={{__html:marked(this.state.markdown)}}
                      />
                  </Col>
              </Row>
          </Container>
    );
  }
}

export default App;
