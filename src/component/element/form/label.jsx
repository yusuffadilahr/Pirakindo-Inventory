import React from 'react'

const LabelCustom = ({ htmlFor, classname = 'font-semibold mb-2', children }) => {
    return (
        <label htmlFor={htmlFor} className={classname}>{children}</label>
    )
}

export default LabelCustom
