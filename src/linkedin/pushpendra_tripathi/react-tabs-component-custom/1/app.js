import React,{useState} from 'react'

export default function CustomApp() {
  return (
    <div>
        <Tabbed/>
    </div>
  )
}

const Tabbed = () => {
    const FirstTab = () => {
        return (
            <div>FirstTab</div>
        )
    }
    const SecondTab = () => {
        return (
            <div>SecondTab</div>
        )
    }

    let tabs = "tab2"

    const [activeTab,setActiveTab] = useState(tabs)

    const handleTab1 = () => {
        setActiveTab('tab1')
    }
    const handleTab2 = () => {
        setActiveTab('tab2')
    }
    
    return(
        <>
         <button onClick={handleTab1} className={activeTab === 'tab1' ? 'link-active link' : 'link'}>ClickOne</button>
         <button onClick={handleTab2} className={activeTab === 'tab2' ? 'link-active link' : 'link'}>ClickTwo</button>
         {activeTab === 'tab1' ? <FirstTab/> : <SecondTab/>}
        </>
    )
}


