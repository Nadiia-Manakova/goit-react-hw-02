import React from 'react';
import css from './Options.module.css';

export const Options = ({
  options,
  onLeaveFeedback,
  resetFeedback,
  showReset,
}) => {
  return (
    <ul className={css.list}>
      {options.map(option => (
        <li className={css.item} key={option}>
          <button className={css.btn} onClick={() => onLeaveFeedback(option)}>
            {option}
          </button>
        </li>
      ))}
      {showReset && (
        <li>
          <button className={css.reset} onClick={resetFeedback}>
            reset
          </button>
        </li>
      )}
    </ul>
  );
};
