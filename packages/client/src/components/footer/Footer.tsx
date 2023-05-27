import React from 'react'
import { Segment, Icon, Image, Grid } from 'semantic-ui-react'
import './styles/footer.css';

export default function Footer() {

    return (
        <div>
            <footer className="footer">
                <Segment inverted color='green'>
                    <Grid stackable columns={2}>
                        <Grid.Column width={6}>
                            <Segment inverted color='green'>
                                <Image src="../images/footer/sdf-logo-vit.png" size="medium" centered outline="true" className="sdf-logo-vit" />
                            </Segment>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <Segment inverted color='green'>
                                <div className="footer-basic">
                                    <div className="list color">
                                        <div className="footer-social">
                                            <a href="https://www.facebook.com/Djurparksforeningen/?locale=sv_SE" target="_blank"><Icon name="facebook" className="footer-icon icon ion-social-instagram" /></a>
                                            <a href="https://se.linkedin.com/company/djurparksf%C3%B6reningen" target="_blank"><Icon name="linkedin" className="footer-icon ion-social-facebook" /></a>
                                            <a href="https://djurparksforeningen.se" target="_blank"><Icon name="globe" className="footer-icon ion-social-twitter" /></a>
                                        </div>
                                        <ul className="footer-list-inline">
                                            <li className="footer-list-inline-item"><a href='/login'>Log In</a></li>
                                            <li className="footer-list-inline-item"><a href='/signup'>Sign Up</a></li>
                                            <li className="footer-list-inline-item"><a href='/about_us'>About Us</a></li>
                                            <li className="footer-list-inline-item"><a href='/developers'>Developers</a></li>
                                            <li className="footer-list-inline-item"><a href='/terms'>Terms</a></li>
                                        </ul>
                                    </div>
                                </div >
                            </Segment>
                        </Grid.Column>
                    </Grid>
                    <div className="footer-basic">
                        <p className="copyright">Snoutbook © 2023</p>
                    </div>
                </Segment>
            </footer >
            <div className="this-is-the-bottom">
                I am a bottom
            </div>
        </div>
    )
}