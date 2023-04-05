import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Thumbnail ,Grid,Col,Image,Button,Row} from 'react-bootstrap';
import '../Styles/home.css'
export default class TourPlace extends Component{
    render(){
        return(

            <Grid>

                <Row className= "show-grid text-center">
                    <Col xs={12} sm={4} className="place">
                    <Thumbnail src="assets/Raj.jpg" alt="242x200">
                        <h3>Jaisalmer</h3>
                        <p>Rajasthan,India • 7 days Jaisalmer known as the Land of the Golden Sand, Jaisalmer in Rajasthan is a beautiful city known for its rich cultural heritage and tales of brave Rajput rulers. This popular tourist destination is flanked by the expansive Thar Desert. Jaisalmer offers an authentic experience of Rajasthani culture, traditions, and heritage with its magnificent Sonar Quila or the Jaisalmer Fort, havelis, delectable food, and camel safari opportunity in the desert.</p>
                        <p>
                        <Link to="/services">
                    <Button bsStyle="primary">Book Tickets</Button></Link><br></br>
                        </p>
                    </Thumbnail>                   
                    </Col>

                    <Col xs={12} sm={4} className="place">
                    <Thumbnail src="assets/goa.avif"  alt="242x200">
                        <h3>Goa Beach</h3>
                        <p>Goa, India • 4 days Goa is a popular destination for domestic and international tourists, offering a unique blend of Indian and Western cultures. Visitors to Goa can enjoy a variety of activities such as sunbathing, water sports, and sightseeing. The state is also known for its delicious cuisine, which features a fusion of Indian and Portuguese flavors. A trip to Goa is a great way to experience the laid-back vibe of coastal India and enjoy a beach vacation .</p>
                        <p>
                        <Link to="/services">
                    <Button bsStyle="primary">Book Tickets</Button></Link>
                        </p>
                    </Thumbnail>                   
                    </Col>

                    <Col xs={12} sm={4} className="place">
                    <Thumbnail src="assets/ala.avif" alt="242x200">
                        <h3>Alappuzha</h3>
                        <p>Kerala, India • 8 days Alappuzha, also known as Alleppey, is a beautiful coastal town located in the southern Indian state of Kerala. It is famous for its backwaters, a network of lagoons, canals, and lakes that are a major tourist attraction in the region. Visitors can enjoy a leisurely boat ride through the backwaters and witness the local way of life, including fishing,  and agriculture. Alappuzha is also known for its beautiful beaches, historical landmarks.</p>
                        <p>
                        <Link to="/services">
                    <Button bsStyle="primary">Book Tickets</Button></Link>
                        </p>
                    </Thumbnail>                   
                    </Col>

                    <Col xs={12} sm={4} className="place">
                    <Thumbnail src="assets/andaman.avif" alt="242x200">
                        <h3>Andaman and Nicobar Islands</h3>
                        <p>Andaman Islands • 8 days The Andaman Islands are a group of islands located in the Bay of Bengal, off the east coast of India. The islands are known for their beautiful beaches, crystal-clear waters, and diverse marine life, making them a popular destination for scuba diving enthusiasts. In addition to its natural beauty, the Andaman Islands also offer a unique cultural experience, with  a rich history of colonialism. </p>
                        <p>
                        <Link to="/services">
                    <Button bsStyle="primary">Book Tickets</Button></Link>
                        </p>
                    </Thumbnail>                   
                    </Col>

                    <Col xs={12} sm={4} className="place">
                    <Thumbnail src="assets/varanasi.jpg" alt="242x200">
                        <h3>Ancient Enclaves of Varanasi</h3>
                        <p>Lahori Tola, Varanasi, Uttar Pradesh • 6 days Presumably the oldest living city on earth, Varanasi has a definitive religious tenor. Hindus believe that getting cremated here helps in the smooth transition to life on the other side. Apart from exposure to this, Varanasi is a major hub for classical music and silk weaving. Its stepped ghats along the Ganga and life around are the main draw. This is one of the essential destinations in India, that one must visit. </p>
                        <p>
                        <Link to="/services">
                    <Button bsStyle="primary">Book Tickets</Button></Link>
                        </p>
                    </Thumbnail>                   
                    </Col>

                    <Col xs={12} sm={4} className="place">
                    <Thumbnail src="assets/taj.avif" alt="242x200">
                        <h3>Taj Mahal</h3>
                        <p>Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh• 8 days The Taj Mahal is one of the most iconic landmarks in the world. The monument was built by Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, and it is renowned for its beautiful white marble architecture, intricate carvings, and stunning gardens.  </p><br></br>
                        <p>
                        <Link to="/services">
                    <Button bsStyle="primary">Book Tickets</Button></Link>
                        </p>
                    </Thumbnail>                   
                    </Col>
                </Row>
                       </Grid>
        )}}