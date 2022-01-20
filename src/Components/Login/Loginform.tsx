import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import bg from '/Users/Win 10/project-tt1/src/assets/bg.png';
import password from '/Users/Win 10/project-tt1/src/assets/password.png';
import './login.css';

function Loginform() {
  function handleOnChange(e: any){
    if (e.target.value){
        e.target.style.backgroundColor = "#ffffff";
        e.target.style.border = "1px solid rgba(55, 56, 57, 0.5)";
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
                
                <input className='login-control'
                id='password'
                name='password' 
                type="password"
                onChange={handleOnChange}
                />
            </div>

            <div className='pass'>
            <Link className='form-option' to="/loginforget">
              <span>Quên mật khẩu?</span>
            </Link>
            </div>

            <div className="form-icons">
            <i className="form-icon1">{<FaUserCircle />}</i>  
            <img src={password} className='form-icon3'/>
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

export default Loginform;
