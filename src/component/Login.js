import { Routes, Route, Link } from 'react-router-dom'
import LoginForm from './LoginForm/LoginForm';
import LoginForget from './LoginForget/Loginforget';
import "./style.css"


function Login () {
    function handleOnChange(e){
        const formUpdatePassword = document.querySelector("#form-update-password");
        if(formUpdatePassword){
            const btnUpdatePassword = formUpdatePassword.querySelector(
                ".form-submit.update-password"
            );
            const usernameInput = formUpdatePassword.querySelector(
                'input[name= "username"]'
            );
            const confirmCodeInput = formUpdatePassword.querySelector(
                'input[name= "verification-codes"]'
            );

            if (usernameInput.value && confirmCodeInput.value){
                "linear-gradient(270deg, #ff5400 0%, #f17f21 80.56%)";
            } else{
                btnUpdatePassword.style.background = "#c9c4c0"
            }
        }
        if (e.target.value){
            e.target.style.background = "#fff";
            e.target.style.outline = "1px solid #37383980";
        } else{
            e.target.backgroundColor = "#f2f2f2";
            e.target.outline = "none";
        }
    }
    
        return (  
            <div className='login'>
                <Routes>
                    <Route path="/login" element={<LoginForm handleOnChange={handleOnchange} />} />
                    <Route path="/password-retrieval" element={<LoginForget handleOnChange={handleOnChange}/>} />
                </Routes>
            </div>            
        );
}
export default Login;