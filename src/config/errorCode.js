const ERROR_CODE = {
  ERR001: 'ERROO1',
  ERR002: 'ERROO2',
};

const ERROR_MESSAGE = {
  [ERROR_CODE.ERR001]: 'Invalid email!',
  [ERROR_CODE.ERR002]: 'Password must contain at least one letter and one number!',
};

module.exports = {
  ERROR_CODE,
  ERROR_MESSAGE,
};
