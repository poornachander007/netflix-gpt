export const checkValidUserData = (email, password, name = null) => {
  const isValidName =
    /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(
      name
    );
  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isValidPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  // if (name !== null && !isValidName) return "Invalid Name";
  if (!isValidEmail) return "Invalid email address";
  if (!isValidPassword)
    return "Password must contain at least 8 characters, including uppercase, lowercase, numbers, and special characters";
  return null;
};
