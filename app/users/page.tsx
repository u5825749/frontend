'use client'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add, appSelector, remove } from '../store/slices/appSlice';
import { notFound } from 'next/navigation';

const Users = () => {
    const appReducer = useSelector(appSelector);
    // OR {store.getState().appReducer.count1}

    const dispatch = useDispatch();

    const isNotFound: boolean = false;

    if (isNotFound) {
        return notFound();
    }

    return (
        <div className="users">
            <div className="count">
                index: {appReducer.count1}
            </div>
            <div className="remove-btn">
                <button type="button" onClick={() => dispatch(remove())}>-</button>
            </div>
            <div className="add-btn">
                <button type="button" onClick={() => dispatch(add())}>+</button>
            </div>
        </div>

    )
}

export default Users