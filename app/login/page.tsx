'use client'

import React from 'react'

import LogoDOP from '../../public/assets/images/logo.png'
import Image from 'next/image'

const Login = () => {

    const onClikForm = () => window.location.reload();


    return (
        <div className="flex flex-col justify-center centre">
            <div className='w-full p-6 m-auto'>
                <Image src={LogoDOP} alt="alt" width={200} height={200} />
            </div>
            <div className="w-full p-6 m-auto bg-blue-200 rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-lg">

                <form className="space-y-4">
                    <div>
                        <input type="text" placeholder="ชื่อเข้าสู่ระบบ" className="w-full input input-bordered bg-sky-900" />
                    </div>
                    <div>
                        <input type="password" placeholder="รหัสผ่าน"
                            className="w-full input input-bordered bg-sky-900 " />
                    </div>
                    <div>
                        <button className="btn btn-block bg-blue-400" onClick={onClikForm} >เข้าสู่ระบบ</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login