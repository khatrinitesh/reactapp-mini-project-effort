import React,{useState} from 'react'

export default function CustomApp() {


    const Home = () => {return <>Home page</>}
    const About = () => {return <>About page</>}

    const TopContent = (props) => {
        const ClickOne = () => {
            props.setAddFund(true);
            props.setWithdraw(false);
        }

        const ClickTwo = () => {
            props.setWithdraw(true);
            props.setAddFund(false);
        }

        return(
            <>
                <a onClick={ClickOne}>Add Fund</a>
                <a onClick={ClickTwo}>Add WithDraw</a>
            </>
        )
    }

    const Components = () => {
        const [addFund,setAddFund] = useState(false);
        const [withdraw,setWithdraw] = useState(false);

        return(
            <>
             <TopContent setAddFund={setAddFund} setWithdraw={setWithdraw}/>
             <h1 style={{color:'red'}}>{addFund && <Home/>} {withdraw && <About/>}</h1>
            </>
        )
    }
    
  return (
    <>
     <Components/>
    </>
  )
}


