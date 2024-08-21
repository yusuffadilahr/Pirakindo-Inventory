import React from 'react'

const ButtonCustom = (props) => {
    const { children = 'Submit',
        color = 'bg-white hover:bg-black',
        text = 'text-black hover:text-white text-sm',
        lingkar='rounded-sm border',
        type,
        onClick,
        disabled
    } = props
    return (
        <button disabled={disabled} onClick={onClick} className={`py-1 px-2 ${color} ${text} ${lingkar}`} type={type}>
            {children}
        </button>
    )
}

export default ButtonCustom
