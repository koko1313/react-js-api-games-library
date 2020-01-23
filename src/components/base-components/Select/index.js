import React, { Component } from "react";

/**
 * Expected parameters:
 * - [String] name
 * - [Array] options
 * - [Function] onChange
 * - [int] selectedValue
 */
class Select extends Component {

    loadAllOptions = () => {
        const options = this.props.options.map((item, index) => {
            return <option key={index} value={item.id}>{item.name}</option>
        });

        return options;
    }

    render() {
        return (
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <label className="input-group-text">{this.props.name}</label>
                </div>
                <select className="custom-select" onChange={this.props.onChange} value={this.props.selectedValue}>
                    <option defaultValue value="0">Всички</option>
                    {this.loadAllOptions()}
                </select>
            </div>
        )
    }

}

export default Select;