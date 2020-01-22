import React from 'react';
import ReactPaginate from 'react-paginate';

/**
 * Expected parameters:
 * - [int] pagesCount
 * - [function] onPageChange
 */
class Paginate extends ReactPaginate {
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
                
                onPageChange = {this.props.onPageChange}
            />
        )
    }
}

export default Paginate;