import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addLeft, addRight} from '../store/actions';
import './Comp3.css';

export class Comp3 extends Component {

    constructor(props) {
        super(props);
        this.handleChangeLeft = this.handleChangeLeft.bind(this);
        this.handleChangeRight = this.handleChangeRight.bind(this);
    }

    handleChangeLeft() {
        const { addLeft } = this.props;
        addLeft();
    }

    handleChangeRight() {
        const { addRight } = this.props;
        addRight();
    }

    render() {
        return(
            <div className="comp_three_container">
                <h1>Here is Component 3</h1>
                <input type="checkbox" onChange={this.handleChangeLeft} />
                <input type="checkbox" onChange={this.handleChangeRight} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
            addLeft: () => {
            dispatch(addLeft());
},
    addRight: () => {
        dispatch(addRight());
    }
}
}

export default connect(null, mapDispatchToProps)(Comp3);