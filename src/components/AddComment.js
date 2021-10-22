import React from 'react';
import { connect } from 'react-redux';
import { Label, Button, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { Control, LocalForm } from 'react-redux-form';
import { addComment } from '../actions/index';




class CommentForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isModalOpen: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values){
        this.toggleModal();
        console.log(values.text, values.author)
        this.props.addComment(values.text, values.author);
    }

    render(){
        return(
            <div>
                <Button outline onClick={this.toggleModal}>
                    <i className="fa fa-pencil fa-lg"/> Submit Comment
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={values => this.handleSubmit(values)}>
                            <div className="form-group">
                                <Label htmlFor="text" md={2}>text</Label>
                                <Control.text model=".text" id="text" name="text"
                                    placeholder="text"
                                    className="form-control"
                                    />
                            </div>  
                            <div className="form-group">
                                <Label htmlFor="author" md={2}>Your Name</Label>
                                <Control.text model=".author" id="author" name="author"
                                        placeholder="author"
                                        className="form-control"
                                    />
                            </div> 
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        )
    }

}


const mapDispatchToProps = {
    addComment: (text, author) => (addComment(text, author))
};






export default connect(null, mapDispatchToProps)(CommentForm);
