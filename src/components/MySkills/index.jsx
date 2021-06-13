import { MDBBtn, MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import React from 'react';

function MySkills(props) {
    return (
        <MDBContainer>
            <MDBRow>
                <h1 className="text-center p-5">My Skills</h1>
            </MDBRow>
            <MDBRow className="px-4 border-bottom py-3">
                <MDBCol md="8"><p style={{ lineHeight: "36px" }} className="m-0">HTML</p></MDBCol>
                <MDBCol md="2" style={{ textAlign: "right" }}><MDBBtn>Demo</MDBBtn></MDBCol>
                <MDBCol md="2" style={{ textAlign: "right" }}><MDBBtn color="dark">GitHub</MDBBtn></MDBCol>
            </MDBRow>
            <MDBRow className="px-4 border-bottom py-3">
                <MDBCol md="8"><p style={{ lineHeight: "36px" }} className="m-0">CSS</p></MDBCol>
                <MDBCol md="2" style={{ textAlign: "right" }}><MDBBtn>Demo</MDBBtn></MDBCol>
                <MDBCol md="2" style={{ textAlign: "right" }}><MDBBtn color="dark">GitHub</MDBBtn></MDBCol>
            </MDBRow>
            <MDBRow className="px-4 border-bottom py-3">
                <MDBCol md="8"><p style={{ lineHeight: "36px" }} className="m-0">BootStrap</p></MDBCol>
                <MDBCol md="2" style={{ textAlign: "right" }}><MDBBtn>Demo</MDBBtn></MDBCol>
                <MDBCol md="2" style={{ textAlign: "right" }}><MDBBtn color="dark">GitHub</MDBBtn></MDBCol>
            </MDBRow>
            <MDBRow className="px-4 border-bottom py-3">
                <MDBCol md="8"><p style={{ lineHeight: "36px" }} className="m-0">JavaScript</p></MDBCol>
                <MDBCol md="2" style={{ textAlign: "right" }}><MDBBtn>Demo</MDBBtn></MDBCol>
                <MDBCol md="2" style={{ textAlign: "right" }}><MDBBtn color="dark">GitHub</MDBBtn></MDBCol>
            </MDBRow>
            <MDBRow className="px-4 py-3">
                <MDBCol md="8"><p>ReactJS</p></MDBCol>
                <MDBCol md="2" style={{ textAlign: "right" }}><MDBBtn>Demo</MDBBtn></MDBCol>
                <MDBCol md="2" style={{ textAlign: "right" }}><MDBBtn color="dark">GitHub</MDBBtn></MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default MySkills;