import { Col, Container, Button, Row } from 'reactstrap';

import './LearnMore.css';

export const LearnMore: React.FC = (): JSX.Element => {
    return (
        <div className="learn-background">
            <Container >
                <Col style={{paddingTop:"100px"}} className="header-for-testimonials">
                    Learn More
                </Col>
                    <div className="master-learn">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="video" src="https://www.youtube.com/embed/8rWgTm-CRO4" allow="autoplay; encrypted-media"></iframe>
                        </div>
                        <Col xs="auto" className="teach-text">Teaching Assistive <br/>Techonology</Col>
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="video" src="https://www.youtube.com/embed/1PnkZ5BUsP8" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                        </div>
                        <Col xs="auto" className="teach-text">Check us out on Facebook and Instagram!</Col>
                        <div className='button-flex'>
                            <Button className="button-stuff" href='https://www.facebook.com/aquaticnwritingrehab/'>Go to our Facebook!</Button>
                            <Button className="button-stuff" href='https://www.instagram.com/aquaticnwritingrehab/?igshid=YmMyMTA2M2Y%3D'>Go to our Instagram!</Button>
                        </div>
                    </div>
                        <Col style={{marginTop:"25px"}}>
                            <Row>
                                <img className="img-fluid" src='https://drive.google.com/thumbnail?id=1YUyyysqWZoNOHVEMLJkRb2gKXxpNh-Gv&sz=w1000' style={{marginBottom:"25px"}}/>
                            </Row>
                            <Row>
                                <img className="img-fluid" src='https://drive.google.com/thumbnail?id=1Q-FVAKNfZXdo7LnRv9t3fxWbEykMfbBY&sz=w1000'/>
                            </Row>
                            <p className="mag">Check out our article from Uptown and So Scottsdale Magazine</p>
                            <Row className="row-button">
                                <Button href='https://issuu.com/richmanmediagroup/docs/ut-0620?fr=sMTg4MjQ2MjMzNw'>Click here for the full edition!</Button>
                            </Row>
                        </Col>
            </Container>
        </div>   
    );   
}

