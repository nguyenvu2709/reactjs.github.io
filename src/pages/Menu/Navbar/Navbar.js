import React from 'react';
import './Navbar.css';
import Logo from '../img/Logo.png';
import money from '../img/money.png';
import Basicmoney from '../img/Basicmoney.png';
import folder from '../img/folder.png';

function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar-content'>
                <img className='logo' src={Logo}/>
                <div className='navbar-icons'>
                    <img className='navbar-icon navbar-icon--active' src={money}/>
                    <img className='navbar-icon1' src={Basicmoney}/>
                    <img className='navbar-icon2' src={folder}/>
                </div>
            </div>
            <div className='sidebar'>
                <ul className='sidebar-list'>
                    <li className='sidebar-title'>
                        <a href='#'>
                            <span className='title-content'>
                                Quản lý học phí
                                <ul className='title-list'>
                                    <li className='title-item'>
                                        Danh sách lớp học
                                    </li>
                                    <li className='title-item'>Danh sách biểu phí</li>
                                    <li className='title-item'>Danh sách khoản thu</li>
                                    <li className='title-item'>Hình thưc thu</li>
                                    <li className='title-item'>Danh sách chế độ miễn giảm</li>
                                    <li className='title-item'>Thu học phí</li>
                                </ul>
                            </span>
                        </a>
                    </li>
                    <li className='sidebar-title'>
                        <a href='#'>
                            <span className='title-content'>
                                Quản lý lương
                            </span>
                        </a>
                    </li>
                    <li className='sidebar-title'>
                        <a href='#'>
                            <span className='title-content'>
                                Đề xuất và phê duyệt
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );  
        
    
}

export default Navbar;
