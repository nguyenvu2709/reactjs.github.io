import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import bg from '../img/bg.png';
import password from '../img/password.png';
import './Style.css';

function Login() {
    function handleOnChange(e){
            if (e.target.value){
                e.target.style.background = "#fff";
                e.target.style.outline = "1px solid #37383980";
            } else{
                e.target.backgroundColor = "#f2f2f2";
                e.target.outline = "none";
            }
        }
    return ( 
        <div className="login">    
            <img src={bg} className="bg"/>  
            <form action='' method='POST' className='form' id='form-login'>                    
                <h3>Đăng nhập</h3>
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
                            Mật khẩu
                        </label>
                        <img src={password} className='form-icon3'/>
                        <input className='login-control'
                        id='password'
                        name='password' 
                        type="password"
                        onChange={handleOnChange}
                        />
                    </div>

                    <div className='pass'>
                    <Link className='form-option' to="/password-reset">
                        Quên mật khẩu?
                    </Link>
                    </div>

                    <div className="form-icons">
                    <i className="form-icon1">{<FaUserCircle />}</i>  
                    </div>

                    <div className='Btn'>
                    <button className="form-submit.update-password">
                        Đăng nhập
                    </button>  
                    </div>  
        </form>  
        </div>
                     
    );
}

export default Login;