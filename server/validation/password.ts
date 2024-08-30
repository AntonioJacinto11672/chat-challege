type PasswordValidationResult = {
  isValid: boolean;
  messages: string[];
};

export function validatePassword(password: string): PasswordValidationResult {
  const messages: string[] = [];

  if (!/(?=.*\d)/.test(password)) {
    messages.push("The password must contain at least one digit.");
  }
  if (!/(?=.*[a-z])/.test(password)) {
    messages.push("The password must contain at least one lowercase letter.");
  }
  if (!/(?=.*[A-Z])/.test(password)) {
    messages.push("The password must contain at least one uppercase letter.");
  }
  if (!/[0-9a-zA-Z$*&@#]{8,}/.test(password)) {
    messages.push("The password must be at least 8 characters long.");
  }

  if (messages.length === 0) {
    return { isValid: true, messages: ["The password is valid."] };
  }

  return { isValid: false, messages };
}
