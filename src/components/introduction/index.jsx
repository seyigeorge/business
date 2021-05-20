import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';
import companyOffice2 from '../../assets/pictures/poffice.jpg';
import companyOffice1 from '../../assets/pictures/poffice1.jpg';
import companyOffice from '../../assets/pictures/poffice2.jpg';




// const Introduction = styled.div`
//   width: 100%;
//   height: 100vh;
//   padding: 0;
//   background-image: url(${BackgroundImg});
//   position: relative;n
// `;


const Introduction = (props) => {
    return (
        <div className="Row">
            <div className="col-lg-4" >
                <Card >
                    <CardImg top width="100%" src={companyOffice} alt="Card image cap" />
                    <CardBody>
                        <CardTitle tag="h4">Facility Management Services</CardTitle>
                        <CardText>We employ proactive technology-backed solutions that enhance the long-term performance of your assets and through robust monitoring, maintenance and replacement, we protect the integrity and value in all assets in our care.</CardText>
                    </CardBody>
                </Card>
            </div>
            <div className="col-lg-4">
                <Card >
                    <CardImg top width="100%" src={companyOffice2} alt="Card image cap" />
                    <CardBody>
                        <CardTitle tag="h4" border-bottom border-dark>Construction</CardTitle>
                        <CardText>We employ proactive technology-backed solutions that enhance the long-term performance of your assets and through robust monitoring, maintenance and replacement, we protect the integrity and value in all assets in our care.</CardText>
                    </CardBody>
                </Card>
            </div>
            <div className="col-lg-4">
                <Card>
                    <CardImg top width="100%" src={companyOffice1} alt="Card image cap" />
                    <CardBody>
                        <CardTitle tag="h4">Renovations</CardTitle>
                        <CardText>We employ proactive technology-backed solutions that enhance the long-term performance of your assets and through robust monitoring, maintenance and replacement, we protect the integrity and value in all assets in our care.</CardText>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};

export default Introduction;