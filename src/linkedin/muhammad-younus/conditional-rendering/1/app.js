import React from 'react'

export default function CustomApp() {
  return (
    <div>
        <ConditionalRendering/>
    </div>
  )
}


function ConditionalRendering(){
    let renderTab = {
        profile:<Profile/>,
        setting:<Setting/>,
        service:<Security/>,
        schedule:<Schedule/>,
    }

    let currentTab = 'profile';

    return renderTab(currentTab);
}


function Profile(){
    return(
        <>
            Profile
        </>
    )
}

function Setting(){
    return(
        <>
            Profile
        </>
    )
}

function Security(){
    return(
        <>
            Profile
        </>
    )
}

function Schedule(){
    return(
        <>
            Schedule
        </>
    )
}