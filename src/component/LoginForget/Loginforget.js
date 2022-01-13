
import { Link } from 'react-router-dom';
import { FaUserCircle, FaChevronLeft} from 'react-icons/fa';

function LoginForget({ handleOnChange }) {
    return (   
        <form action="" method='POST' className='form' id='form-update-password'>
            <div className="login-form">
            <h3>Cấp lại mật khẩu</h3>
          
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
                htmlFor="password">Mã xác thực</label>
                <input className='login-control'
                id='verification-codes'
                name='verification-codes' 
                type="text"
                onChange={handleOnChange}
                />
            </div>

            <Link className="forgot-pass" to="/login">
                Quay lại trang chủ
            </Link>

            <div className="form-icons">
            <i className="form-icon1">{<FaUserCircle />}</i>
            <i className="form-icon2">{<FaChevronLeft />}</i>
            
            </div>

            <button className="form-submit.update-password">
                Cấp lại mật khẩu
            </button>
          
                           
            </div>
                                           
        </form>  
                 
    );
}
export default LoginForget