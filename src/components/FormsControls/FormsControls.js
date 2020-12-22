import React from 'react';

import './FormsControls.css';

export const Element = (Element) => ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;

  return (
    <div className={hasError ? 'formControl error' : 'formControl'}>
      <div>
        <Element {...input} {...props} />
      </div>
      {hasError && <span> {meta.error} </span>}
    </div>
  );
};
