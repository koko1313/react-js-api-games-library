import React, { Component } from "react";

class PlatformSelect extends Component {

    getAllPlatforms = () => {
        const platforms = [];
        for(let i=0; i<10; i++) {
            platforms.push("Platform " + i);
        }
        return platforms;
    }

    loadAllPlatforms = () => {
        const platformOptions = this.getAllPlatforms().map((item, index) => {
            return <option key={index} value={index}>{item}</option>
        });
        return platformOptions;
    }

    selectPlatformOnChange = (e) => {
        alert(e.target.value);
    }

    render () {
        return (
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="platformSelect">Платформа</label>
                </div>
                <select className="custom-select" id="platformSelect" onChange={this.selectPlatformOnChange}>
                    <option defaultValue value="0">Всички</option>
                    {this.loadAllPlatforms()}
                </select>
            </div>
        );
    }

}

export default PlatformSelect;