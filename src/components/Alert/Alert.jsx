import React from "react"
import clsx from "clsx"

export const Alert = ({ children, variant, isOutlined, isElevated}) => {


    return (
        //klasy z tailwind dodane dynamicznie do elementow przy pomocy clsx
        <p className={clsx("m-2 px-4 py-3 rounded text-white", {
            'bg-green-400': variant === 'success',
            'bg-orange-400': variant ==='warning',
            'bg-red-400': variant ==='error',
            'bg-blue-400': variant ==='info',
            'border border-black': isOutlined,
            'shadow-md': isElevated
        })}>
            { children }
        </p>
    )
}