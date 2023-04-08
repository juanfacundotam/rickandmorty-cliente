const validation = (userData) => {
  // const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/; //Esta me cuelga todo al poner varios caracteres!
  const regexEmail =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const regexPass = new RegExp("[0-9]");
  // const regexPass = new RegExp("^(?=.[a-z])(?=.[A-Z])(?=.*[0-9])(?=.{6,10})");
  const errors = {};

  if (!userData.username) {
    errors.username = ">> UserName: No puede quedar vacío";
  } else if (!regexEmail.test(userData.username)) {
    errors.username = ">> UserName: Debe que ser un email";
  } else if (userData.username.length > 35) {
    errors.username = ">> UserName: Máximo 35 caracteres";
  } else {
    errors.username = "";
  }

  //esta regex testea si hay numero. tambien con includes podriamos hacerlo, pero sin la regex
  if (!regexPass.test(userData.password)) {
    errors.password = ">> Password: Al menos un número";
  } else if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password = ">> Password: Entre 6 y 10 caracteres";
  } else if (!userData.password) {
    errors.password = ">> Password: No puede quedar vacía";
  } else {
    errors.password = "";
  }
  return errors;

  //User
  //   if(!userData.username) setErrors({...errors, username: 'Ingrese usuario...'});
  //   else {
  //       if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.username))
  //         setErrors({ ...errors, username: "" });
  //       else setErrors({ ...errors, username: "Usuario inválido" });
  //   }

  //   Password
  //   if(!userData.password) setErrors({...errors, password: 'Ingrese password...'});
  //   else setErrors({...errors, password: ''});
};

export default validation;
