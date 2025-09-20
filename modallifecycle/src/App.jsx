
import React, { Component } from 'react';
import Modal from './components/Modal';
import styled from 'styled-components'


const Title = styled.h1`
  color: #dbb13b;
  font-size: 48px;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-weight: bold;
  font-style: italic;
  background-color: #2d325a;
  padding: 30px 60px;
  border-radius: 15px;
`;

const OpenButton = styled.button`
width: 100px;
height: 40px;
background-color: #2494a2;
color: #dbb13b;
border: none;
border-radius: 5px;
font-size: 16px;
text-transform: uppercase;
cursor: pointer;
font-weight: bold;
font-style: italic;


`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #0a0e29;
  
  `

export default class App extends Component {
  state = { showModal: false };

  openModal = () => this.setState({ showModal: true });
  closeModal = () => this.setState({ showModal: false });

  render() {
    
    return (
      <Container >
        <Title>Modal Below</Title>
        <OpenButton onClick={this.openModal}>open</OpenButton>
        <Modal isOpen={this.state.showModal} onClose={this.closeModal}>
          <p>text</p>
        </Modal>
      </Container>
    );
  }
}
