import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';

function About(props) {
    return (
        <MDBContainer>
            <MDBRow className="text-center py-5">
                <h1>About Me</h1>
            </MDBRow>
            <MDBRow>
                <MDBCol size='md-8'>
                    <div style={{ textAlign: "justify" }} className="px-4">
                        <h2>I'm Nguyen Tan Duc, a Frontend Web Developer.</h2>
                        <p>Full stack developer with hands on experience of designing, developing and maintaining web. Adept at understanding the requirement of the clients and delivering projects accordingly. Highly skilled at collaborating with team members to ship beautiful products within deadlines.</p>
                        <p>My name is Suhail, an Afghan Web Developer & Designer. I was born in Kabul,the capital of Afghanistan, I always dreamed to be a person who changes the world, therefore I started coding and developing cause now-a-days coding and developing is the one of successful way to change the world and develop it.</p>
                    </div>
                </MDBCol>
                <MDBCol size='md-4' className="px-4">
                    <p className="py-3 m-0">Name: Nguyen Tan Duc</p><hr className="m-0" />
                    <p className="py-3 m-0">Email: ntanduc94@gmail.com</p><hr className="m-0" />
                    <p className="py-3 m-0">From: Binh Chanh, HCM</p>
                    <MDBBtn>Download CV</MDBBtn>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default About;