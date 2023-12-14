export const passwordValidator = (password: string): string => {
  const minLengthRegex = /.{5,}/;
  const containsNumberRegex = /\d/;
  const containsLetterRegex = /[a-zA-Z]/;
  const allowedCharsRegex = /^[0-9a-zA-Z!@#^&*()_+\-=.;:"<>,.?~`]+$/;

  if (!minLengthRegex.test(password))
    return 'Password needs to have at least 5 digits.';
  if (!containsNumberRegex.test(password))
    return 'Password needs to have at least one number digit.';
  if (!containsLetterRegex.test(password))
    return 'Password needs to have at least one letter.';
  if (!allowedCharsRegex.test(password))
    return 'Password can only contain the following special characters besides numbers and letters: !@#$%^&*()_+-=.;:\'"<>,.?~`';
  return '';
};

export const emailValidator = (email: string): string => {
  if (email.length < 5) {
    return 'Email must be at least 5 characters long.';
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(email)) return '';
  return 'Need to be a valid email address.';
};
