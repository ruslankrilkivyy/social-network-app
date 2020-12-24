import React from 'react';

const Paginator = ({ totalUsersCount, pageSize, onChangedPage, currentPage }) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className="users__menu">
      {pages.map((page, index) => {
        return (
          <span
            key={index}
            onClick={() => onChangedPage(page)}
            className={currentPage === page ? 'users__menu-item active' : 'users__menu-item'}>
            {page}
          </span>
        );
      })}
    </div>
  );
};

export default Paginator;
