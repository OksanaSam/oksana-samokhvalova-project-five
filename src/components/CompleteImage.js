import React, { Component } from 'react';

class CompleteImage  extends Component {
    handleClick = () => {
        this.props.removeImages(this.props.numBox);
    };
    
    render() {
        return (
            <div className="imagePlace imageEmpty">
                <button className="closeButton" onClick={this.handleClick}><i className="fas fa-times"></i></button>
                <img src={this.props.url} alt={this.props.altTag}/>
            </div>
        );
    }
};

export default CompleteImage;