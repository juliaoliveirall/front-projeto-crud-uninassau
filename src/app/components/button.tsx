"use client"
import React from 'react';

export function Button({ buttonText, onClick, disabled = false, type }: {buttonText: string, onClick?: () => void, disabled?: boolean, type: 'button' | 'submit' | 'reset'}) {
    return (
        <button 
            disabled={disabled} 
            type={type}
            onClick={onClick}  // Associa a função onClick ao botão
            className={`rounded-xl  dark:bg-slate-600  bg-slate-400 px-1 py-2 font-semibold shadow-md mt-4`}
        >
                <span className='w-full h-full rounded-lg px-4 py-1 bg-box dark:bg-boxd transition ease-in-out delay-75 hover:bg-slate-200 dark:hover:bg-slate-800 duration-300'>
                    {buttonText}
                </span>
        </button>
    );
}