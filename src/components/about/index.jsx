import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import companyLogo from '../../assets/pictures/company_team.jpg';

const SSS = styled(Element)`
height: 700px;
display: flex;
flex-direction: column;
align-items: center;
`;

export function AboutSection(props) {
    return (
        <SSS>
            <div class="card" style={{ backgroundColor: '#5271ff' }}>
                <div class="row no-gutters">
                    <div class="col-lg-6">
                        <img src={companyLogo} class="img-fluid" alt="" style={{ width: 700, height: 600 }} />
                    </div>
                    <div class="col-lg-6" >
                        <div class="card" style={{ margin: 60 }}>
                            <h4 class="card-title" style={{ color: 'white' }}>Your Javascript needs syntax</h4>
                            <p class="card-text" style={{ color: 'white' }}>Since the inline CSS is written in a JavaScript object,
                            properties with two names, like background-color, must be written with camel case syntax:This information is for applicants to the Provincial Nominee Program (PNP) who are applying through Express Entry.
                            If a province or territory nominates you through an Express Entry stream, it will be listed on your nomination certificate. </p>
                            <h4 class="card-title" style={{ color: 'white' }}>Your Javascript needs syntax</h4>
                            <p class="card-text" style={{ color: 'white' }}>Since the inline CSS is written in a JavaScript object,
                            properties with two names, like background-color, must be written with camel case syntax:This information is for applicants to the Provincial Nominee Program (PNP) who are applying through Express Entry.
                            If a province or territory nominates you through an Express Entry stream, it will be listed on your nomination certificate. </p>
                            <h4 class="card-title" style={{ color: 'white' }}>Your Javascript needs syntax</h4>
                            <p class="card-text" style={{ color: 'white' }}>Since the inline CSS is written in a JavaScript object,
                            properties with two names, like background-color, must be written with camel case syntax:This information is for applicants to the Provincial Nominee Program (PNP) who are applying through Express Entry.
                            If a province or territory nominates you through an Express Entry stream, it will be listed on your nomination certificate. </p>
                        </div>
                    </div>
                </div>

            </div>

        </SSS>

    );
}
