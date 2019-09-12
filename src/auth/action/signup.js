import axios from 'axios';

export const getUserInputFields=(key,value)=>({
    type:'SIGNUP',
    key,
    value

})
export const signupData =(state) => dispatch =>  {
    axios
    .post("http://192.168.1.164:3000/signup",state)
    .then(response => {
      alert("Successfully............!");
    })
    .catch(error => {
        // console.log(Error);
        console.log(JSON.stringify(error));
        
        console.log(error.response.status);
    });
  
  };