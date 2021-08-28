import React from 'react';

const PhanTrang = ({ postPerPage, totalPosts, paginate }) => {

    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumbers.push(i);
    }
    return (

        <ul className="pagination">
            {pageNumbers.map(number => (
                <li key={number} className='page-item' onClick={() => paginate(number)}>
                    <span style={{ cursor: "pointer" }} className="page-link">{number}</span>
                </li>
            ))}
        </ul>


    )
}

export default PhanTrang