import React from 'react'
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs'

function SideBar({openSidebarToggle , openSidebar}) {
    return (
        <aside id='sidebar' className={openSidebarToggle ? "sidebar-responsive":""}>
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    <BsCart3 className='icon' /> SHOP
                </div>
                <span className='icon close-icon' onClick={openSidebar}>X</span>
            </div>

            <ul className='sidebar-list'>
                <li className='sidebar-list-items'>
                    <a href="">
                        <BsGrid1X2Fill className='icon'/> Dashboard
                    </a>
                </li>

                <li className='sidebar-list-items'>
                    <a href="">
                        <BsFillArchiveFill className='icon'/> Products
                    </a>
                </li>

                <li className='sidebar-list-items'>
                    <a href="">
                        <BsFillGrid3X3GapFill className='icon'/> Category
                    </a>
                </li>

                <li className='sidebar-list-items'>
                    <a href="">
                        <BsPeopleFill className='icon'/> Customers
                    </a>
                </li>

                <li className='sidebar-list-items'>
                    <a href="">
                        <BsListCheck className='icon'/> Inventory
                    </a>
                </li>

                <li className='sidebar-list-items'>
                    <a href="">
                        <BsMenuButtonWideFill className='icon'/> Reports
                    </a>
                </li>

                <li className='sidebar-list-items'>
                    <a href="">
                        <BsFillGearFill className='icon'/> Setting
                    </a>
                </li>
            </ul>
        </aside>
    )
}

export default SideBar
