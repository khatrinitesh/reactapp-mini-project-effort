import React from 'react'

export default function CustomApp() {
    const activities = [
        {
        timestamp: new Date().getTime(),
        text: "Ate lunch",
        user: {
        id: 1, name: 'Nate',
        avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
        },
        comments: [{ from: 'Ari', text: 'Me too!' }]
        },
        {
        timestamp: new Date().getTime(),
        text: "Woke up early for a beautiful run",
        user: {
        id: 2, name: 'Ari',
        avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
        },
        comments: [{ from: 'Nate', text: 'I am so jealous' }]
        },
       ]
  return (
    <div>
        <Content name='nitesh khatri' />
        
    </div>
  )
}

class Content extends React.Component{
    render(){
        return(
            <>
            <div className="content">
                <h1>Welcome {this.props.name}</h1>    

            </div>
            </>
        )
    }
}