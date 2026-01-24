import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div> 
      <h1>My Application</h1>
    </div>
  )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },

//     //object

//     childern: 'Click me to go to Google'
// }

const AnotherElement = (
    <a href="https://google.com" target="_blank">
        Click me to go to Google
    </a>
)

const anotherUser = "Khare"

const reactElement = React.createElement(
    'a',
    {
        href: 'https://google.com',
        target: '_blank'
    },
    'Click me to go to Google', anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    reactElement
)
