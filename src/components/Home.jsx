import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron,Grid,Col,Image,Button,Row} from 'react-bootstrap';
import TourPlace from "./TourPlace";
import '../Styles/home.css'
export default class Home extends Component{
    render(){
        return(
            <div>
                <div className="header">
               
               <Grid>
                <Jumbotron>
                    <h1>Enjoy Your Dream Vacation</h1>
                    <h3>Travel to the any corner of the world, without going around in circles.</h3>
                    <Link to="/services">
                    <Button bsStyle="primary">More</Button></Link>
                </Jumbotron>
                </Grid>
                </div>                 
                <Grid>             


                <div className="banner text-center">
                    <h2 >The best agency you can choose</h2>
                    <p>We are committed to offering travel services of the highest quality, combining our energy and enthusiasm with years of experience.</p>
                </div>
                
                <TourPlace/>

                
            </Grid>
            </div>
        )
    }
}