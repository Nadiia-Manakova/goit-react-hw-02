import { useState, useEffect } from 'react';
import { Description } from './Description/Description';
import { Section } from './Section/Section';
import { Feedback } from './Feedback/Feedback';
import { Options } from './Options/Options';
import { Notification } from './Notification/Notification';
import './App.css';

export const App = () => {
  const options = ['good', 'neutral', 'bad'];
  const [values, setValues] = useState(() => {
    const savedValues = localStorage.getItem('saved-option');
    return savedValues
      ? JSON.parse(savedValues)
      : { good: 0, neutral: 0, bad: 0 };
  });

  // useEffect(() => {
  //   const savedOption = JSON.parse(localStorage.getItem('saved-option'));
  //   if (savedOption) {
  //     setValues(savedOption);
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem('saved-option', JSON.stringify(values));
  }, [values]);

  const onLeaveFeedback = option => {
    setValues(prevValues => ({
      ...prevValues,
      [option]: prevValues[option] + 1,
    }));
  };

  const resetFeedback = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const total = values.good + values.neutral + values.bad;
  const positivePercentage = total
    ? Math.round((values.good / total) * 100)
    : 0;

  return (
    <>
      <Description title="Sip Happens Café">
        <p>
          Please leave your feedback about our service by selecting one of the
          options below.
        </p>
      </Description>
      <Section title="Please leave feedback">
        <Options
          options={options}
          onLeaveFeedback={onLeaveFeedback}
          showReset={total > 0}
          resetFeedback={resetFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Feedback
            good={values.good}
            neutral={values.neutral}
            bad={values.bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification />
        )}
      </Section>
    </>
  );
};

export default App;
