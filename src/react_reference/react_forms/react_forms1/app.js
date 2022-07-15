import React from 'react'
import { isLiteralTypeNode } from 'typescript'

export default function CustomApp() {
  return (
    <div>
        <MyComponent/>
    </div>
  )
}

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        error: null,
        dataFetched: false,
        data: [],
        isLoaded:true
        };
    }
    
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(
            (response) => {
            this.setState({
                dataFetched: true,
                data: response.data
            });
            },
            (error) => {
            this.setState({
                dataFetched: true,
                error
            });
            }
        )
    }
    
    render() {
        const { error, dataFetched, data,isLoaded } = this.state;
        if (error) {
        return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
        return <div>Loading...</div>;
        } else {
        return (
            <ol>
            {data.map(value => (
                <li key={value.name}>
                {value.title} - {value.body}
                </li>
            ))}
            </ol>
        );
        }
    }
    }
    

// class Example extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             error:null,
//             dataFetched:false,
//             data:[],
//             isLoaded:true
//         }
//     }

//     componentDidMount(){
//         fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(res => res.json())
//         .then((response) => {
//             this.setState({
//                 dataFetched:true,
//                 data:response.data
//             });
//         },
//         (error) => {
//             this.setState({
//                 dataFetched:true,
//                 error
//             })
//         }
//         )
//     }
//     render(){
//         const {error,dataFetched,data,isLoaded} = this.state;
//         if(error){
//             return <div>Error: {error.message}</div>
//         }
//         else if(!isLoaded){
//             return <div>Loading...</div>
//         }
//         else{
//             return(
//                 <>
//                 <ol>
//                     {data.map((val) => {
//                         return(
//                             <li>
//                                 {val.title} - {val.body}
//                             </li>
//                         )
//                     })}
//                 </ol>
//                 </>
//             )
//         }
//     }
// }

// class Example extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             inputValue:''
//         }
//         this.handleChange = this.handleChange.bind(this)
//     }

//     handleChange(e){
//         e.preventDefault()
//         this.setState({
//             inputValue:e.target.value
//         })
//     }
//     render(){
//         return(
//             <>
//              <form>
//                 <label>Enter text</label>
//                 <input type="text" onChange={this.handleChange}/>
//              </form>
//              <br/>
//              <div>
//                 Entered value: {this.state.inputValue}
//              </div>
//             </>
//         )
//     }
// }

// class Example extends React.Component{
//     onInputChange(e){
//         console.log(e.target.value)
//     }
//     render(){
//         return(
//             <>
//             <form>
//                 <label>Enter</label>
//                 <input type="text" onChange={this.onInputChange}/>
//             </form>
//             </>
//         )
//     }
// }