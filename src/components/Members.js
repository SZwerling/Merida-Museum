import React from 'react';
import  CommentForm  from './AddComment';
import { Card, CardImg } from 'reactstrap'
import { connect } from 'react-redux';


class Members extends React.Component {
    constructor(props){
        super(props);
        this.state = {
         
        }
    }


    render(){
        const commentsList = this.props.comments.map(comment => {
            return(
                <div className={comment.length}>
                   <p>
                            {comment.text}<br />
                            -- {comment.author}
                        
                    </p>
                   
                </div>
            )
        })
        return(
            <div className="container mb-5 mt-4">
                <div className="row">
                    <div className="col-md-5 m-1">
                        {commentsList}
                        <CommentForm />
                    </div>
                    <div className="col-md-5">
                        <Card>
                            <CardImg top width="100%" className="" src="./images/insideMuseum-alt.jpeg" />
                        </Card>
                    </div>
                </div>
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return { comments: state.comments};
}

export default connect(mapStateToProps, null)(Members);
