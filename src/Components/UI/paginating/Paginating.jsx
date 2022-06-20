import React from 'react';
import {getPagesArray} from "../../../utils/pages";

const Paginating = (totalPage, page,totalCount) => {
    let pageArray = getPagesArray(totalCount);
    return (
        <div className="page__wrapper">

            {pageArray.map(p =>
                <span onClick={() => page(p)} key={p}
                      className={page === p ? 'page page__current' : 'page'}>{p}</span>)}
        </div>
    );
};

export default Paginating;