import React, { Component } from 'react';
import styled from 'styled-components';
import './Modal.css';

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
  color: #dbb13b;
  font-size: 18px;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-weight: bold;
  font-style: italic;
  background-color: #2d325a;
  padding: 10px 20px;
  border-radius: 10px;
`;
const CloseButton = styled.button`
 
margin-left: 20px;
  background-color: #56bda2;
border: none;
  color: #dbb13b;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 15px;
  width: 30px;
  height: 30px;
  `
const ModalContent = styled.div`
  background-color: #1c1f47;`

const Text = styled.p`
  color: #dbb13b;
  font-size: 16px;
  text-align: center;
  font-style: italic;
  text-transform: uppercase;
  font-weight: bold;`
export default class Modal extends Component {
  state = {
    
    duration: null,
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentDidUpdate(prevProps) {
    const { isOpen } = this.props;

    if (!prevProps.isOpen && isOpen) {
      this.setState({ openedAt: Date.now() });
    
    }

    if (prevProps.isOpen && !isOpen) {
      const now = Date.now();
      const durationMs = now - this.state.openedAt;
      const seconds = (durationMs / 1000).toFixed(2);

      this.setState({ duration: seconds });
      console.log(`Modal was open for ${seconds} seconds`);

    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);

  }

  handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const { isOpen, onClose } = this.props;
    const { duration } = this.state;

    if (!isOpen) return null;

    return (
      <div  onClick={onClose}>
        <ModalContent  onClick={(e) => e.stopPropagation()}>
          <Title>Modal title
          <CloseButton  onClick={onClose}>×</CloseButton>


          </Title>

     

          {duration && (
            <Text>
              Last open duration: {duration} seconds
            </Text>
          )}
        </ModalContent>
      </div>
    );
  }
}
