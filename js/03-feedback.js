// const feedbackFormEl = document.querySelector('.js-feedback-form');
// const userData = {};

// const fillFeedbackFormFields = () => {
//   try {
//     const userDataFromLS = JSON.parse(localStorage.getItem('userFeedbackInfo'));

//     if (userDataFromLS === null) {
//       return;
//     }

//     // feedbackFormEl.elements.user_name.value = userDataFromLS.user_name;
//     // feedbackFormEl.elements.user_email.value = userDataFromLS.user_email;
//     // feedbackFormEl.elements.user_message.value = userDataFromLS.user_message;

//     for (const key in userDataFromLS) {
//       feedbackFormEl.elements[key].value = userDataFromLS[key];
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };

// fillFeedbackFormFields();

// const onFeedbackFieldChange = event => {
//   // const feedbackFieldEl = event.target;
//   const { target: feedbackFieldEl } = event;

//   const feedbackFieldName = feedbackFieldEl.name;
//   const feedbackFieldValue = feedbackFieldEl.value;

//   console.log('feedbackFieldName: ', feedbackFieldName);
//   console.log('feedbackFieldValue: ', feedbackFieldValue);

//   userData[feedbackFieldName] = feedbackFieldValue;

//   localStorage.setItem('userFeedbackInfo', JSON.stringify(userData));
// };

// const onFedbackFormSubmit = event => {
//   event.preventDefault();

//   localStorage.removeItem('userFeedbackInfo');
//   feedbackFormEl.reset();
// };

// feedbackFormEl.addEventListener('change', onFeedbackFieldChange);
// feedbackFormEl.addEventListener('submit', onFedbackFormSubmit);