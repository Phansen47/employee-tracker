// inputValidators.js

// Function to validate that the input is not empty
const notEmpty = (input) => {
    if (input.trim() === '') {
      return 'This field cannot be empty';
    }
    return true;
  };
  
  // Function to validate that the input is a valid number
  const isValidNumber = (input) => {
    if (isNaN(input) || Number(input) <= 0) {
      return 'Please enter a valid number greater than 0';
    }
    return true;
  };
  
  // Function to validate that the input is a positive integer
  const isPositiveInteger = (input) => {
    if (!/^\d+$/.test(input)) {
      return 'Please enter a positive integer';
    }
    return true;
  };
  
  module.exports = {
    notEmpty,
    isValidNumber,
    isPositiveInteger,
  };
  