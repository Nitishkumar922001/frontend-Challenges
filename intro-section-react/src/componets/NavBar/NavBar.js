/* eslint-disable jsx-a11y/anchor-is-valid */


import './NavBar.css'
import arrowUp from '../../images/icon-arrow-up.svg'
import arrowDown from '../../images/icon-arrow-down.svg'
import todo from '../../images/icon-todo.svg'
import calendar from '../../images/icon-calendar.svg'
import Reminder from '../../images/icon-reminders.svg'
import Planning from '../../images/icon-planning.svg'
import menu1 from '../../images/icon-menu.svg'
import menu2 from '../../images/icon-close-menu.svg'
import { useState } from 'react'

function NavBar() {
    let src = arrowDown;
    let src1 = arrowDown;
    const [openFeature, setOpenFeature] = useState(0)
    const [openCompany, setOpenCompany] = useState(0)
    const [openNav, setOpenNav] = useState(1)
    if (openFeature) {
        src = arrowUp;
    }
    if (openCompany) {
        src1 = arrowUp
    }
    function menu() {
        setOpenNav(!openNav);
        if (openNav) {
            document.querySelector('.nav-links').classList.add('disable');

        }
        else {
            document.querySelector('.nav-links').classList.remove('disable')
        }
    }
    return <><nav className="nav-bar">
        <div className="nav-log">
            <p>snap</p>
        </div>
        <div className="nav-links">
            <div className='flex'>
                <div className="features-div">

                    <a onClick={() => setOpenFeature(!openFeature)}>Features<img class='arrow' src={src} /></a>
                    {openFeature ?
                        <div className='feature-list'>
                            <ul>
                                <li><a href='#'><img src={todo} alt="todo-icon" />Todo List</a></li>
                                <li><a href='#'><img src={calendar} alt="todo-icon" />Calendar</a></li>
                                <li><a href='#'><img src={Reminder} alt="todo-icon" />Reminder</a></li>
                                <li><a href='#'><img src={Planning} alt="todo-icon" />planning</a></li>
                            </ul>
                        </div> : ""}
                </div>
                <div className="company-div">
                    <a onClick={() => setOpenCompany(!openCompany)}>Company<img className="arrow" src={src1} alt="down-arrow"></img></a>


                    {openCompany ? <div className='company-list'><ul>
                        <li><a href='#'>Todo List</a></li>
                        <li><a href='#'>Calendar</a></li>
                        <li><a href='#'>Reminder</a></li>

                    </ul></div>
                        : ""
                    }

                </div>
                <div className="careers">
                    <a >Carrers</a>
                </div>
                <div className="about">
                    <a >About</a>
                </div>
            </div>
            <div className="nav-btns">
                <div className="login-btn">
                    <p>Login</p>
                </div>
                <div >
                    <button className="btn">Register</button>
                </div>
            </div>
        </div>
        {openNav ?

            <div className='menu-btn' onClick={() => menu()}>
                <img src={menu2} />
            </div>
            : <div className='menu-btn' onClick={() => menu()}>
                <img src={menu1} />

            </div>
        }
    </nav>

    </>
}
export default NavBar;