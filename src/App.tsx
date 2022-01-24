
import { FaUserCircle, FaChevronLeft } from 'react-icons/fa';
import bg from './assets/bg.png';
import password from './assets/password.png';
import './Components/Login/login.css'

function App() {
    function handleOnChange(e: any){
        const formUpdatePassword:  Element | null = document.querySelector("#form-update-password");
        if(formUpdatePassword){
            const btnUpdatePassword: Element | null = formUpdatePassword.querySelector(
                ".form-submit.update-password"
            );
            const usernameInput: Element | null = formUpdatePassword.querySelector(
                'input[name= "username"]'
            );
            const confirmCodeInput: Element | null = formUpdatePassword.querySelector(
                'input[name= "verification-codes"]'
            );
    
            if (usernameInput != null && confirmCodeInput != null && btnUpdatePassword != null) {
              if((usernameInput as HTMLInputElement).value && (confirmCodeInput as HTMLInputElement).value){
                (btnUpdatePassword as HTMLInputElement).style.background =
                  "linear-gradient(270deg, #ff5400 0%, #f17f21 80.56%)";     
              } else{
                (btnUpdatePassword as HTMLInputElement).style.background =
                  "#c9c4c0"
                }
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
        <div className="login-forget">
            <img src={bg} className="bg"/>    
            <form action="" method='POST' className='form' id='form-update-password'> 
                <h3>Cấp lại mật khẩu</h3>
            
                <div className="login-user">
                    <label className='label-control' htmlFor="username">
                        Tên đăng nhập
                    </label>
                    <input className='login-control'
                    id='username'
                    name='username'
                    type="text"
                    onChange={handleOnChange}
                    />
                </div>
    
                <div className="login-password">
                    <label className='label-control' htmlFor="password">
                        Mã xác thực
                    </label>
                    <input className='login-control'
                    id='verification-codes'
                    name='verification-codes' 
                    type="text"
                    onChange={handleOnChange}
                    />
                </div>
    
                <a href='#'>
                    <span>Quay lại trang chủ</span>
                </a>
    
                <div className="form-icons">
                <i className="form-icon1">{<FaUserCircle />}</i>
                <i className="form-icon2">{<FaChevronLeft />}</i>
                </div>
    
                <div className='Btn'>
                <button className="form-submit.update-password">
                    Cấp lại mật khẩu
                </button>
                </div>
                                           
            </form>  
        </div>
                 
    );
}

export default App;
