import React,{useContext,useState} from 'react';
import MainContent from './maincontext';


export default function CustomContext() {

    const [visible,setVisible] = useState(4);
    const context = useContext(MainContent);
    console.log("profile",context);

    const loadmore = () => {
        setVisible(visible + 4);
    }
  return (
    <div>
        {
            context.slice(0,visible).map((pro) => {
                return(
                    <>
                     <h1 style={{color:'purple'}}>
                        {pro.title}
                     </h1>
                     <p>{pro.desc}</p>
                    </>
                )
            })
        }

        {visible < context.length && <button onClick={loadmore}>Loadmore</button>}
    </div>
  )
}
