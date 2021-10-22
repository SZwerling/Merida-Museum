import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import EVENTS from '../events';


class Events extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            events: EVENTS
        }
    }

    

    render(){
        console.log(this.state.events)
        const eventList = this.state.events.map(event => {
            return(
                    <div className="col-sm-4 my-1" key={event.id}>
                        <Card>
                            <CardBody>
                                <CardTitle tag="h5">{event.title}</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">{event.subtitle}</CardSubtitle>
                            </CardBody>
                            <img width="100%" src={event.img} ald="something" />
                            <CardBody>
                                <CardText>
                                    {event.text}
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
            );
        });

        return(

            <div className="container mb-5 mt-2">
                <div className="row">
                    {eventList}
                </div>
            </div>

        );
    }
}

export default Events;