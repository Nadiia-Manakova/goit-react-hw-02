import css from './Feedback.module.css';

export const Feedback = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={css.cardbody}>
      <ul className={css.statisticsList}>
        <li className={css.statisticItem}>
          <p className={css.category}>
            <strong>Good:</strong> {good}
          </p>
        </li>
        <li>
          <p className={css.category}>
            <strong>Neutral:</strong> {neutral}
          </p>
        </li>
        <li>
          <p className={css.category}>
            <strong>Bad:</strong> {bad}
          </p>
        </li>
        <li>
          <p className={css.category}>
            <strong>Total:</strong> {total}
          </p>
        </li>
      </ul>
      <div className={css.positivePercentage}>
        <div className={css.positiveFeedback}>
          <p className={css.percentage}>{positivePercentage}</p>
        </div>
        <p className={css.category}>
          <strong>Positive feedback, %</strong>
        </p>
      </div>
    </div>
  );
};
