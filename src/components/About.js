import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';


const About = () => {
    return(
        <React.Fragment>
            <div className="col-md-5">
                <Card>
                    <CardImg top width="100%" className="" src='./images/museum-alt.jpg' />
                </Card>
            </div>
            <div className="col-md-7">
                <Card>
                    <CardBody>
                        <CardTitle>The City Museum</CardTitle>
                        <CardText>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        </React.Fragment>
    )
}

export default About;