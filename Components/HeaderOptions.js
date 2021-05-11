import React from 'react'

function HeaderOptions({title,Icon,selected}) {
    return (
        <div className={`flex pl-1 pb-1 bg-transparent items-center border-b-4 border-transparent cursor-pointer hover:border-blue-500 hover:text-blue-500 ${selected&&'text-blue-500 border-blue-500'}`}>
            <Icon className="h-5 pr-1"/>
            <div className="">{title}</div>
        </div>
    )
}

export default HeaderOptions;
