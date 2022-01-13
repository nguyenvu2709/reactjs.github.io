
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

function LoginForm({ handleOnChange }) {
    
        return (   
            <form action='' method='POST' className='form' id='form-login'>
            <div className="login-form">
                                           
                <h3>Đăng nhập</h3>
              
                <div className="login-user">
                    <label className='label-control' 
                    htmlFor="username">Tên đăng nhập</label>
                    <input className='login-control'
                    id='username'
                    name='username'
                    type="text"
                    onChange={handleOnChange}
                     />
                </div>

                <div className="login-password">
                    <label className='label-control' 
                    htmlFor="password">Mật khẩu</label>
                    <input className='login-control'
                    id='password'
                    name='password' 
                    type="text"
                    onChange={handleOnChange}
                    />
                </div>

                <Link className="forgot-pass" to="/password-retrieval">
                    Quên mật khẩu?
                </Link>

                <div className="form-icons">
                <i className="form-icon1">{<FaUserCircle />}</i>
                
                </div>

                <button className="form-submit.update-password">
                    Đăng nhập
                </button>
              
                               
            </div>
            </form>  
                     
        );
}
export default LoginForm;