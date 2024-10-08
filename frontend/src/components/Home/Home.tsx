import { Link } from 'react-router-dom';
import './Home.css';
import Aqua from "./Aqua.jpg";
import Therapists from "./Therapists.jpg";
import Writing from "./Writing.jpg";
import Testimonials from "./Testimonials.jpg"
import Learn from "./Learn.jpg"
import logo from "./logo.png";

import { 
    Card, 
    CardImg, 
    CardText, 
    CardBody,
    CardTitle, 
    Button 
} from 'reactstrap';

export const Home: React.FC = (): JSX.Element => {
    return (
        <>
            <div className ="home-background">
            <div  className="master" style={{paddingTop:"95px"}}>
           <div className="lead-container">
                <img className="child" src="//nebula.wsimg.com/99c0f18d164056a37b38857e04c11921?AccessKeyId=0F9D1A4ACFCC9D22904E&amp;disposition=0&amp;alloworigin=1" width="100%"/>
                    <div className="text-block"> 
                        <p className="unleashed">Unleash Your Child's Potential</p>
                    </div>
                </div>
                <br/>
                <Card >
                    <CardImg top width="100%" src={Learn}/>
                     <CardBody className="chalkboard" >
                        <img className="crayon" src={logo}/>
                        <CardTitle style={{color: "color: rgba(0, 55, 255, 0.51)", paddingTop:"5%", fontSize:"2.4em" }}>Child-Centered Therapy </CardTitle>
                            <CardText style={{fontSize: "127%", padding:"5%"}}>We believe that every child is unique and will grow at his or her own pace. Our highly-qualified providers spend time nurturing each child’s strengths and encouraging them to reach new heights.</CardText>
                        <Button><Link to="/LearnMore">Learn More</Link></Button>
                    </CardBody>
                </Card>
                <br/>
                <Card>
                    <CardImg top width="100%" src={Aqua} alt="Card image cap" />
                     <CardBody className="chalkboard" style={{background:"#add8e6a6"}} >
                        <CardTitle>Aquatics</CardTitle>
                            <CardText>Aquatic Therapy could be just what you've been looking for. Our team specializes in this unique therapeutic technique. We’ve seen major breakthroughs when we get kids in the water and they usually have fun doing it! </CardText>
                    </CardBody>
                </Card>
                <br/>
                <Card>
                    <CardImg top width="100%" src={Writing} alt="Card image cap" />
                     <CardBody className="chalkboard" style={{background:"rgba(255, 200, 0, 0.6)"}}>
                        <CardTitle>Handwriting</CardTitle>
                            <CardText>We offer a full range of handwriting services that foster your child’s fine motor growth.​</CardText>
                    </CardBody>
                </Card>
                <br/>
                <Card>
                    <CardImg top width="100%" src={Therapists} alt="Card image cap" />
                     <CardBody className="chalkboard" style={{background:"rgba(17, 187, 22, 0.51)"}}>
                        <CardTitle>Therapists</CardTitle>
                                <CardText>Our staff members are extremely good at what they do. Click to check out the ANW Rehab team.</CardText>
                            <Button><Link to="/Therapists">Meet Our Team</Link></Button>
                    </CardBody>
                </Card>
                <br/>
                <Card>
                    <CardImg top width="100%" src={Testimonials} alt="Card image cap" />
                     <CardBody className="chalkboard" style={{background: "rgba(255, 248, 25, 0.81)"}}>
                        <CardTitle>Testimonials</CardTitle>
                                <CardText>Click below to read to read some Testimonials from our families.</CardText>
                            <Button><Link to="/Testimonials">Testimonials</Link></Button>
                    </CardBody>
                </Card>
                <br/>
                </div>
            </div>
        </>
    );
}