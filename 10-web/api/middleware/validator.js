const validateUser = (req, res, next) => {
  const { name, email, username, password, passwordConfirmation } = req.body;
  const errors = [];
  const regExpEmail = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
  const regExpPassword = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);

  if(name && email && username && password && passwordConfirmation) {
    if(name.length < 3) {
      errors.push('invalid name');
    };
    if(username.length < 6) {
      errors.push('invalid username');
    };
    if(!regExpEmail.test(email)) {
      errors.push('invalid email');
    };
    if (!regExpPassword.test(password)) {
      errors.push('invalid password');
    };
    if(password !== passwordConfirmation) {
      errors.push(`Passwords don't match.`);
    };
  } else {
    errors.push('empty data');
  };

  //validation:
  if(errors.length === 0) {
    next(); //permite continuar con el siguiente middleware
  } else {
    res.json({ message : errors }); //como no aparece next() muere la petición
  }
};

const validateLogin = (req, res, next) => {
  const { username, password } = req.body;
  const errors = [];

  if(username && password) {
    if (username.length < 6) {
      errors.push('invalid username');
    };
  } else {
    errors.push('empty data');
  }

  if (errors.length === 0) {
    next();
  } else {
    res.json( {message : errors} )
  };
};

module.exports = { validateUser, validateLogin }