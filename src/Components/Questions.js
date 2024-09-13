

const surveyJson = {
    pages: [
        {
            elements: [
                {
                    type: 'html',
                    html: `
            <div>
              <h2>Welcome to our Kiosk!</h2>
              <p>
                We value your feedback and would like to ask you 5 brief questions to improve our services. Your responses will help us enhance your experience in our shop. Thank you for taking a moment to share your thoughts with us!
              </p>
            </div>
          `
                }
            ]
        },
        {
            elements: [
                {
                    name: 'satisfied-products',
                    title: 'How satisfied are you with our products?',
                    type: 'rating',
                    rateMin: 1,
                    rateMax: 5,
                    isRequired: false
                }
            ]
        },
        {
            elements: [
                {
                    name: 'prices-compared',
                    title: 'How fair are the prices compared to similar retailers?',
                    type: 'rating',
                    rateMin: 1,
                    rateMax: 5,
                    isRequired: false
                }
            ]
        },
        {
            elements: [
                {
                    name: 'value-money',
                    title: 'How satisfied are you with the value for money of your purchase?',
                    type: 'rating',
                    rateMin: 1,
                    rateMax: 5,
                    isRequired: false
                }
            ]
        },
        {
            elements: [
                {
                    name: 'friends-family',
                    title: 'On a scale of 1-10 how would you recommend us to your friends and family?',
                    type: 'rating',
                    rateMin: 1,
                    rateMax: 10,
                    isRequired: false
                }
            ]
        },
        {
            elements: [
                {
                    name: 'improve-services',
                    title: 'What could we do to improve our service?',
                    type: 'comment'
                }
            ]
        }
    ],
    showQuestionNumbers: 'off',
    pageNextText: 'Next',
    completeText: 'Submit',
    showPrevButton: true,
    firstPageIsStarted: true,
    startSurveyText: 'Start Survey',
    showPreviewBeforeComplete: 'showAnsweredQuestions',
    showCompletedPage: false
};

export default surveyJson;