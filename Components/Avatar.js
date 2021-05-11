import React from 'react'

function Avatar({url}) {
    return (<img
        loading="lazy"
        src={url}
        className="h-9 rounded-full cursor-pointer translation duration-150 transform hover:scale-110 "
        alt="User Avatar"
        />)
}

export default Avatar;
