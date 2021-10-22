import React from 'react';
import { connect } from 'react-redux';



const ExhibitDetail = ({ exhibit }) => {
    if(!exhibit){
        return (
        <div className="col-md-7 text-center">
            All Images From Unsplash
        </div>
        )
    }
    return (
        <div className="col-md-7">
            <img className="photo" src={exhibit.source} />
            <p>
                Title: {exhibit.title} 
            <br/>
            Artist: {exhibit.artist}
            </p>
        </div>
    )
}

const mapStateToProps = state => {
    return { exhibit: state.selectedExhibit }
}

export default connect(mapStateToProps)(ExhibitDetail);