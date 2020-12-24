import React from 'react';

const ProfileStatus = ({ status, updateStatus }) => {
  const [inputValue, setInputValue] = React.useState(status);
  const [visibleInput, setVisibleInput] = React.useState(false);

  const onVisibleInput = () => {
    setVisibleInput(!visibleInput);
    updateStatus(inputValue);
  };

  const onChangeInputValue = (e) => {
    setInputValue(e.target.value);
  };

  React.useEffect(() => {
    if (inputValue === null) {
      setVisibleInput(true);
    }
    setInputValue(inputValue);
  }, [inputValue]);

  return (
    <div className="status">
      {!visibleInput && (
        <div className="status-text">
          <p onDoubleClick={onVisibleInput}>{status}</p>
        </div>
      )}
      {visibleInput && (
        <div className="status-input">
          <input
            type="text"
            autoFocus={true}
            onBlur={onVisibleInput}
            onChange={(e) => onChangeInputValue(e)}
            value={inputValue}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;
