import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import './pagination.css';

let Pagination = () => {
    const { currentPage } = useParams();
    let page = currentPage || 1

    return <div className="pagination">
        {(+page > 1) && <Link to={`/list/${+page - 1}`}>prev</Link>}
        <Link to={`/list/${page}`} className="pagination__current">{page}</Link>
        <Link  to={`/list/${+page + 1}`}>next</Link>
    </div>
}

export default Pagination;