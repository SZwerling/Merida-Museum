import React from 'react';
import { Card, CardTitle, CardBody, CardText } from 'reactstrap';


const OperationsCard = () => {
    return(
        <div className="col-sm-6 mt-3 mb-5 mr-3">
            <Card>
                <CardBody>
                    <CardTitle>
                        Hours Of Operation
                    </CardTitle>
                    <CardText>
                        Monday - Friday 9:00 a.m. thru 5:00 p.m. <br/>
                        Satruday        9:00 a.m. thru 8:00 p.m. <br/>
                        Sunday          10:00 a.m. thru 4:00 p.m. <br/>
                        <br/>
                        Calle 56 529A, Centro, 97000 Mérida, Yuc., Mexico
                    </CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default OperationsCard;