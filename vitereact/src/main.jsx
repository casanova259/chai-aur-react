import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function MyApp()
{
  return (
    <div>
      <h1>CUSTOM App !!</h1>
    </div>
  )
}
// const reactElement={
//     type:'a',
//     props:{
//         href:'https://google.com',
//         target:'_blank'
//     },
//     children:'click me to visit google'
// }

const anotherElement=(<a href='https://youtube.com' target='_blank'>visit youtube</a>)

const anotherUser="filter cofffeWE"
const reactElement=React.createElement(
  'a',
 { href:'https://google.com',target:'_blank'},
  'click me magr aaram se',
  anotherUser
)
createRoot(document.getElementById('root')).render(
 //<App/>
 reactElement
)
