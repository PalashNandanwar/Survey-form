/* eslint-disable no-unused-vars */
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import surveyJson from './Components/Questions';
import './App.css';

const App = () => {
  const survey = new Model(surveyJson);

  const generateUniqueId = () => {
    return `survey-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
  };


  survey.onComplete.add((sender, options) => {
    const res = JSON.stringify(sender.data, null, 3);
    const uniqueId = generateUniqueId();
    localStorage.setItem(uniqueId, res);

    console.log(`Survey result saved with ID: ${uniqueId}`);
  });

  return (
    <div className="App">
      <Survey className="w-[100%] h-[100vh]" model={survey} />
    </div>
  );
};

export default App;
