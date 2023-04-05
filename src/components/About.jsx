import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Grid,Col,Image,Button, Row} from 'react-bootstrap';
import '../Styles/about.css'

export default class About extends Component{
    render(){
        return(
            <div>
                
                <div className="content-wrapper">    
                    <Image src="/assets/b1.avif" />
                    <h2 className="heading">About Us </h2>
                    
                </div>
                <Grid>
            <Col xs={12} sm={8} smOffset={2}    >
            <Image src="/assets/img/travel.jpg" className="about-pc" rounded />
            <h3>Traveling... Tours... Adventure...</h3>

            <p>We are committed to offering travel services of the highest quality, 
                combining our energy and enthusiasm, with our years of experience. 
                Our greatest satisfaction comes in serving large numbers of satisfied 
                clients who have experienced the joys and inspiration of travel.</p>
            
            <p>Travelling tours adventure can be an exciting way to explore new destinations and experience different cultures. Adventure tours typically involve activities such as trekking, hiking, rafting, cycling, or safari drives, and they can offer a unique perspective on the natural beauty and cultural heritage of a place. These tours often provide opportunities to connect with like-minded travelers and share experiences and stories, fostering a sense of community and camaraderie. However, adventure tours can also be physically demanding and require a certain level of fitness and stamina. If you are looking to push your boundaries and embark on a thrilling adventure, then a traveling tour adventure might be just what you need.
            </p>
            <p> Adventure tours can also be a great way to step out of your comfort zone and challenge yourself. They offer opportunities to learn new skills, overcome fears, and push past limits, helping you to build confidence and resilience. Adventure tours can also be a sustainable way to travel, as many operators prioritize eco-tourism and responsible travel practices. By supporting local communities and conservation efforts, adventure tours can help to preserve the natural and cultural heritage of the destinations they visit. Overall, traveling tours adventure can be an unforgettable way to explore the world, create memories, and broaden your horizons.</p>

        
                  </Col>
            </Grid>
            </div>
        )
    }
}