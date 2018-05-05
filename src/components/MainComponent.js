import React, { Component } from 'react';
import {connect} from 'react-redux';
import Comp1 from './Comp1';
import Comp2 from './Comp2';
import Comp3 from './Comp3';


class MainComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
            {
                this.props.itemList.map((item, index) => {
                    if(item.type == 'comp1') {
                        return (
                            <Comp1 />
                        )
                    } else if(item.type == 'comp2') {
                        return (
                            <Comp2 />
                        )
                    } else {
                        return (
                            <Comp3 />
                        )
                    }
                })
            }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        itemList: state.itemList
    }
}

export default connect(
    mapStateToProps,
    null
)(MainComponent);