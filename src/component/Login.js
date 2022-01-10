import React from "react";
import "./style.css"

function Login () {
        return (             
            <div className="login-form">
            <h1>Đăng nhập</h1>
            <div className="login-control">
               <div className="login-user">
                   <h6>Tên đăng nhập</h6>
                   <label htmlFor="username"></label>
                   <input type="text"/>
               </div>

               <div className="login-password">
                   <h6>Mật khẩu</h6>
                   <label htmlFor="login-password"></label>
                   <input type="password"/>
               </div>

               <div className="Btn">
               <button className="btn1" type="click">Đăng nhập</button>
               </div>               
           
            </div>
            </div>
        )
}

export default Login