import React from "react";
import Select from "../base-components/Select";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../redux/actions";

class PlatformSelect extends Select {

    getAllPlatforms = () => {
        this.props.getPlatforms();
    }

    selectPlatform = (e) => {
        this.props.setSelectedPlatform(e.target.value);
    }

    render() {
        // if platforms are not loaded, load them
        if(this.props.platforms.length === 0) {
            this.getAllPlatforms();
        }

        const platforms = this.props.platforms;
        return (
            <Select name="Платформа" options={platforms} onChange={this.selectPlatform} selectedValue={this.props.selectedPlatform} />
        );
    }

}

const mapStateToProps = state => {
    return {
        // в props.platforms ще се запише резултата
        // state.platforms е функцията от reducers, която извикваме
        platforms: state.platforms,
        selectedPlatform: state.selectedPlatform,
    }
};


const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        setPlatforms: actions.setPlatforms,
        getPlatforms: actions.getPlatforms,
        setSelectedPlatform: actions.setSelectedPlatform,
    }, dispatch)
};

export default connect(mapStateToProps, mapStateToDispatch)(PlatformSelect);