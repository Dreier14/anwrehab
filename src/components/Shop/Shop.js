import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import { Col } from 'reactstrap';
import { Button } from 'reactstrap';
import Nav from '../Nav/Nav';
import 'bootstrap';

export default class extends Component {
    render() {
        window.scrollTo(0, 0)
        return (
            <div>
                <Nav/>
                <div className="store-background">
                    <div style={{paddingTop:"100px"}}>
                        <div className="header-for-testimonials">Check out our merch!</div>
                        <br/>
                        <div className="master-learn">
                            <Col>
                                <img src='https://i0.wp.com/newsroom.poshmark.com/wp-content/uploads/2024/04/logo.png?w=810&ssl=1' style={{ marginLeft:'25%',  width:'50%'}}/>
                            </Col>
                            <br/>
                            <Button className="button-stuff" href='https://posh.mk/4w1P3wRe7Jb'>Poshmark Store</Button>
                            <br/>
                            <Col>
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBAoGNlcPFjsytnfmev28eBF3I7FJV5nm7xA&usqp=CAU' style={{ marginLeft:'25%',  width:'50%'}}/>
                            </Col>
                            <br/>
                            <Button className="button-stuff" href='https://www.mercari.com/u/user645946680?sv=0'>Mercari Store</Button>
                        </div>
                    </div>
                    <br/>
                  </div>
                <Footer/>
            </div>
        )  
    }
}