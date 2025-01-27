// src/components/Flyer.tsx
import React from 'react';
import { Container, Row,  } from 'reactstrap';
import './Services.css'; // Import the custom CSS for the flyer

export const Services: React.FC = () => {
  return (
    <div style={{background: 'rgb(20, 201, 224)'}}>
        <Container style={{marginTop: '70px'}}>
            <Row>
                <img src={'https://drive.google.com/thumbnail?id=1g18QpdoUGrKqK4AKgygTpQizh5bFhm5a&sz=w800'}/>
            </Row>
        </Container>
    </div>
  );
};