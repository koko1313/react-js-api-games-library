import React from "react";
import Select from "../base-components/Select";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../redux/actions";

class PlatformSelect extends Select {

    componentDidMount(){
        this.props.getPlatforms();
    }

    render() {
        const platforms = this.props.platforms;
        return (
            <Select name="Платформа" options={platforms}/>
        );
    }

}

const mapStateToProps = state => {
    return {
        // в props.platforms ще се запише резултата
        // state.platforms е функцията от reducers, която извикваме
        platforms: state.platforms,
    }
};


const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        setPlatforms: actions.setPlatforms,
        getPlatforms: actions.getPlatforms,
    }, dispatch)
};

export default connect(mapStateToProps, mapStateToDispatch)(PlatformSelect);