import React,{useState} from 'react'

export default function app() {
  return (
    <div>
        <Component/>
    </div>
  )
}

class ClassComponent extends React.Component{
    state = {
        count:0
    }
    increaseCount(){
        this.setState({
            count:this.state.count + 1
        })
    }
    render(){
        return(
            <div>
                <span>the current count is {this.state.count}</span>
                <button onClick={this.increaseCount}>Add one</button>
            </div>
        )
    }
}

function Component(){
    const [count,setCount] = useState(0);

    const increaseCount = () => {
        setCount(c => c + 1)
    }
    return(
        <>
         <span>The current count is: {count}</span>
         <button onClick={increaseCount}>Add one</button>
        </>
    )
}
