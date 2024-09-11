import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import surveyJson from './Components/Questions';
import './App.css';

const App = () => {
  const survey = new Model(surveyJson);

  survey.onComplete.add(function (sender, options) {
    // Display the "Saving..." message (pass a string value to display a custom message)
    options.showSaveInProgress();

    fetch('http://localhost:4000/submit-survey', { // Use fetch instead of XMLHttpRequest
      method: 'POST',
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(sender.data)
    })
      .then(response => response.json()) // Parse response as JSON
      .then(data => {
        if (data.success) { // Check for success message from backend
          options.showSaveSuccess();
        } else {
          options.showSaveError(data.error || 'Error saving survey data'); // Display specific error
        }
      })
      .catch(error => {
        console.error('Error submitting survey:', error);
        options.showSaveError('Error saving survey data'); // Display generic error
      });
  });

  return (
    <div className="App">
      <Survey className="w-[100%] h-[100vh]" model={survey} />
    </div>
  );
};

export default App;