import React from 'react';
import ReactPaginate from 'react-paginate';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../../redux/actions";

/**
 * Expected parameters:
 * - [int] pagesCount
 */
class Paginate extends ReactPaginate {

    goToPage = (e) => {
        const page = e.selected + 1; // the selected page
        this.props.setSelectedPage(page);
    }

    render() {
        return (
            <ReactPaginate
                pageCount = {this.props.pagesCount}
                pageRangeDisplayed = {3}
                marginPagesDisplayed = {2}
                previousLabel = {<i className="fa fa-step-backward"></i>}
                nextLabel = {<i className="fa fa-step-forward"></i>}
                breakLabel = {'...'}
                breakClassName = {'page-item'}
                breakLinkClassName = {'page-link'}
                containerClassName = {'pagination justify-content-center'}
                pageClassName = {'page-item'}
                pageLinkClassName = {'page-link'}
                activeClassName = {'active'}
                previousClassName = {'page-item'}
                nextClassName = {'page-item'}
                previousLinkClassName = {'page-link'}
                nextLinkClassName = {'page-link'}
                initialPage = {this.props.selectedPage-1}
                
                onPageChange = {this.goToPage}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedPage: state.selectedPage,
    }
};


const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        setSelectedPage: actions.setSelectedPage,
        getSelectedPage: actions.getSelectedPage,
    }, dispatch)
};

export default connect(mapStateToProps, mapStateToDispatch)(Paginate);