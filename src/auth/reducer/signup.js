const init = {
    // logo:require('../../assets/logo.png'),
    email:'',
    password:'',
    username:'',
    confirmPassword:'',
  };

  export default (state=init,action)=>{
    switch (action.type) {
        case'SIGNUP':
          return  { ...state, [action.key]:action.value};
        default:
          return state;
      }
  }