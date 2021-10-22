import React from 'react';
import EXHIBITS from '../exhibits'
import { connect } from 'react-redux'
import { selectedExhibit } from '../actions/index'
import { ListGroup, ListGroupItem, Button } from 'reactstrap';


class ExhibitionList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            exhibits: EXHIBITS
        };
    }


    render() {
        const directory = this.state.exhibits.map(exhibit => {
        
            return (
                <ListGroupItem className="list-group-item d-flex justify-content-between align-items-center" key={exhibit.id}>
                    {exhibit.title} 
                    <Button color="info"
                    onClick={() => this.props.selectedExhibit(exhibit)}
                    >info
                    </Button>
                </ListGroupItem>
            );
        });

        return (
            
                    <div className="col-md-5">
                        <ListGroup>
                            {directory}
                        </ListGroup>
                    </div>
                
        );
    }
}

const mapDispatchToProps = {
    selectedExhibit: (exhibit) => (selectedExhibit(exhibit))
};



export default connect(null, mapDispatchToProps)(ExhibitionList);