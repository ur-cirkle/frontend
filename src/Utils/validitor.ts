export const isEmail = (testEmail: string): boolean => {
  if (/\w{1,}@\w{1,}\.(\w{1,})+/.test(testEmail)) return true;
  return false;
};
export const isUserName = (
  testUsername: string
): { syntax: Boolean; length: Boolean } => {
  return { syntax: true, length: true };
};

export const isLengthen = (
  testLengthen: string,
  requiredLengthen: number
): boolean => {
  const leghtRegex = new RegExp(`.{${requiredLengthen},}`);
  if (leghtRegex.test(testLengthen)) return true;
  return false;
};
