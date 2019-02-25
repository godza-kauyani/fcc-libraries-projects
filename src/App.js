import React, { Component } from 'react';
import marked from 'marked';
import MarkdownText from './markdown';
import {Container,Col, Row,Card } from 'reactstrap';
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
                      <Card>
                      <textarea id='editor' 
                          onChange={this.onChange}
                          style={{cols:'30',  rows:'30',width:'40vw',height:'80vh'}}
                      >{this.state.markdown}

                          </textarea>
                        </Card>
                  </Col>
                  <Col>
                      <Card>
                      <div id='preview'
                          dangerouslySetInnerHTML={{__html:marked(this.state.markdown)}}
                      />
                    </Card>
                  </Col>
              </Row>
          </Container>
    );
  }
}

export default App;
