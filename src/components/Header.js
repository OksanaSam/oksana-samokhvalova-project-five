import React, { Component } from 'react';

class Header extends Component {

    handlePrint = () => {
        window.print();
    }

    toggleClass = () => {
        // const oldStyle = document.getElementById('mainGrid').className;
        // const newClassName = oldStyle === 'mainGrid' ? 'mainGridBlue' : 'mainGrid'
        // document.getElementById('mainGrid').className =  newClassName;

        // const oldStyleHeader = document.getElementById('header').className;
        // const newClassNameHeader = oldStyleHeader === 'headerPink' ? 'headerBlue' : 'headerPink'
        // document.getElementById('header').className =  newClassNameHeader;

        // const oldStyleFooter = document.getElementById('footer').className;
        // const newClassNameFooter = oldStyleFooter === 'footerPink' ? 'footerBlue' : 'footerPink'
        // document.getElementById('footer').className =  newClassNameFooter;

    }

    render() {
        return (
            <div className={`header ${this.props.newColor}`}  id="header">
                <div className="wrapper">
                    <nav className="navBar">
                        <div className="logo">
                            <h1>MOODY</h1>
                        <div className="palette">
                            <div className={`colorOne ${this.props.newColor}`}></div>
                            <div className={`colorTwo ${this.props.newColor}`}></div>
                            <div className={`colorThree ${this.props.newColor}`}></div>
                        </div>
                        </div>
                        
                        
                        
                        <button className="toggleColor" onClick={this.props.handleToggle}>Toggle</button>
                        <button className="print" onClick={this.handlePrint}><i className="fas fa-print"></i></button>
                    </nav>
                </div>
            </div>
        )
    };
};

export default Header;