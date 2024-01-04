'use client'
import { useEffect, useState } from 'react'

const Nav = () => {

    //localStorage.setItem('isLogin', 'true')

    const [isLogin, setIsLogin] = useState<boolean>(false)
    //const [checkLogin, setCheckLogin] = useState<string | null>('')

    useEffect(() => { isLogin }, [])

    // Set isLogin
    const setLoginTolocalStorage: string = 'Logined'

    //useEffect(() => {
        // Get is login
        localStorage.getItem('Logined')
    //}, [])

    // Get is login
    //const checkLogin: string | null | undefined = localStorage.getItem('Logined')
    //console.log(localStorage.getItem('Logined'))
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl text-[#000000]">ข้อมูลกำลังพล กพ.ทบ.</a>
            </div>
            <div className="flex-none">

                {localStorage.getItem('Logined') === 'Logined' ? (

                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    ดูข้อมูล
                                    <span className="badge">ตรวจสอบ</span>
                                </a>
                            </li>
                            <li>
                                <a onClick={() => {
                                    setIsLogin(!isLogin);
                                    localStorage.removeItem('Logined')
                                }}>Logout</a>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <div>
                        <button
                            className="btn btn-primary rounded-full"
                            onClick={() => {
                                setIsLogin(!isLogin);
                                localStorage.setItem('Logined', setLoginTolocalStorage);

                            }}
                        >
                            เข้าสู่ระบบ
                        </button>
                    </div>
                )}
            </div>
        </div>

    )
}

export default Nav

