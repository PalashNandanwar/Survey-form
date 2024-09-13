/* eslint-disable no-unused-vars */
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import surveyJson from './Components/Questions';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [thankYouScreen, setThankYouScreen] = useState(false);
  const survey = new Model(surveyJson);

  const generateUniqueId = () => {
    return `survey-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
  };

  survey.onComplete.add((sender, options) => {
    const res = JSON.stringify(sender.data, null, 3);
    const uniqueId = generateUniqueId();
    localStorage.setItem(uniqueId, res);

    console.log(`Survey result saved with ID: ${uniqueId}`);
    setThankYouScreen(true);
    setTimeout(() => {
      setThankYouScreen(false);
    }, 5000);
  });

  return (
    <div className="App">
      {!thankYouScreen ? (
        <Survey className="w-[100%] h-[100vh]" model={survey} />
      ) : (
        <div className="thank-you-message w-[100%] h-[100vh] flex items-center justify-center">
          <h2>Thank you for your feedback!</h2>
        </div>
      )}
    </div>
  );
};

export default App;
