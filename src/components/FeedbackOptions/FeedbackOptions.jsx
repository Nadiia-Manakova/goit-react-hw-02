import React from 'react';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.list}>
      {options.map(option => (
        <li className={css.item} key={option}>
          <button className={css.btn} onClick={() => onLeaveFeedback(option)}>{option}</button>
        </li>
      ))}
    </ul>
  );
};