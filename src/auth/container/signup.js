import SignupComponent from '../component/signup';
import { connect } from 'react-redux';
import { getUserInputFields,signupData } from '../action/signup'; 


const mapStateToProps = state => ({
    // title: state.SignupState.title,
    // // logo:state.SignupState.logo,
    username:state.SignupState.username,
    email:state.SignupState.email,
    password:state.SignupState.password,
  
    confirmPassword:state.SignupState.confirmPassword,
  });
  
  const mapDispatchToProps = dispatch => ({
    getUserInputFields:(key,value)=> dispatch(getUserInputFields(key,value)),
   signupData:(state) => dispatch(signupData(state)),
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(SignupComponent);