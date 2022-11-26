import React,{useState} from 'react'

export default function CustomApp() {
  return (
    <div>
        <Tabbed/>
    </div>
  )
}

const Tabbed = () => {
    const Tab1 = () => {
        return(
            <>tab1</>
        )
    }
    const Tab2 = () => {
        return(
            <>tab2</>
        )
    }
    const Tab3 = () => {
        return(
            <>tab3</>
        )
    }
    let tabs = 'tab3'

    const [isActiveTab,setIsActiveTab] = useState(tabs)


    const handleTab1 = () => {
        setIsActiveTab('tab1')
    }
    const handleTab2 = () => {
        setIsActiveTab('tab2')
    }
    const handleTab3 = () => {
        setIsActiveTab('tab3')
    }
    return(
        <>
         <button className={isActiveTab === 'tab1' ? 'link link-active' : 'link'} onClick={handleTab1}>Tab1</button>
         <button className={isActiveTab === 'tab2' ? 'link link-active' : 'link'} onClick={handleTab2}>Tab2</button>
         <button className={isActiveTab === 'tab3' ? 'link link-active' : 'link'} onClick={handleTab3}>Tab3</button>
         {isActiveTab === 'tab1' ? <Tab1/> : <Tab2/> && isActiveTab === 'tab3' ? <Tab3/> : <Tab2/>}
        </>
    )
}