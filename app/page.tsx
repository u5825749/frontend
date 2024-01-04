'use client'

import { useEffect, useState } from "react"
import Login from "./login/page"

// import { useDispatch, useSelector } from 'react-redux'
// import { add, appSelector, remove, reset } from './store/slices/appSlice';

export default function Home() {

  //const appReducer = useSelector(appSelector);
  // OR {store.getState().appReducer.count1}

  //const dispatch = useDispatch();

  const [checkLogin, setCheckLogin] = useState<string | null>('')

  useEffect(() => {
    return setCheckLogin(localStorage.getItem('Logined'))
  }, [])

  return (
    <>
      {checkLogin !== 'Logined' ? <Login /> : `Logined`}

      {/* <div>
        <div className="count">
          index: {appReducer.count1}
        </div>
        <div className="remove-btn">
          <button type="button" onClick={() => dispatch(remove())}>-</button>
        </div>
        <div className="add-btn">
          <button type="button" onClick={() => dispatch(add())}>+</button>
        </div>
        <div className="reset-btn">
          <button type="button" onClick={() => dispatch(reset())}>reset</button>
        </div>
      </div> */}
    </>
  )
}
