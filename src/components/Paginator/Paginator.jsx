import React from 'react';

const Paginator = ({ totalItemsCount, pageSize, onChangedPage, currentPage, portionSize = 5 }) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = React.useState(1);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className="users__menu">
      {portionNumber > 1 && (
        <button onClick={() => setPortionNumber(portionNumber - 1)}>Prev</button>
      )}
      {pages
        .filter((p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map((page, index) => {
          return (
            <span
              key={index}
              onClick={() => onChangedPage(page)}
              className={currentPage === page ? 'users__menu-item active' : 'users__menu-item'}>
              {page}
            </span>
          );
        })}
      {portionCount > portionNumber && (
        <button onClick={() => setPortionNumber(portionNumber + 1)}>Next</button>
      )}
    </div>
  );
};

export default Paginator;
