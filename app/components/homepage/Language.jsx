"use client"

import React from 'react'

export default function Language({ title, bg }) {
    const click = (e) => {
        e.preventDefault()
        
    }
    return (
        <button
            className={`${bg || 'bg-greens-300'} text-white py-5 px-3 w-[151px] text-center rounded-lg font-arimo text-xl font-bold`}
            onClick={click}
        >
            {title}
        </button>
    )
}
