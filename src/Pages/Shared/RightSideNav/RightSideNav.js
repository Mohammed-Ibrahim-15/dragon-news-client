import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaTwitch, FaWhatsapp } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarosel from '../BrandCarosel/BrandCarosel';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const RightSideNav = () => {
    const { googleLogIn } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()

    const clickGoogleLogIn = () => {
        googleLogIn(googleProvider)
            .then((result) => {
                const user = result.user
                console.log(user)
            })
            .catch((error) => {
                console.error('Error:', error)
            })
    }

    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={clickGoogleLogIn} className='mb-2' variant="outline-primary"> <FaGoogle /> Login with Google</Button>
                <Button variant="outline-dark"><FaGithub /> Login with Github</Button>
            </ButtonGroup>
            <div className='mt-2'>
                <h5>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook /> FaceBook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'> <FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'> <FaTwitch /> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-2'> <FaWhatsapp></FaWhatsapp> Whatsapp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'> Terms and Conditions</ListGroup.Item>
                </ListGroup>

            </div>
            <div>
                <BrandCarosel></BrandCarosel>
            </div>
        </div>
    );
};

export default RightSideNav;