import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './header.css'

export default function Header() {
  return (
    <header className="">
        <div className="container-header">
            <Link className="anchor-link" rel="stylesheet" to="/" >  
                <div className="autor">
                    <h1 className="font-header">Aldo<code>Code</code></h1>
                </div>
            </Link>
          
            <nav className="items-section">
                <ul>
                    <li className="item">
                       <Link rel="stylesheet" to="/ciclodevida" > Ciclo de vida </Link>
                    </li>
                    <li className="item">
                    <Link rel="stylesheet" to="/hooks" >Hooks</Link>
                    </li>
                    <li className="item">
                    <Link rel="stylesheet" to="/customsHooks" >Customs Hooks</Link>
                    </li>
                    <li className="item">
                    <Link rel="stylesheet" to="/HoC" >HoC</Link>
                    </li>
                    <li className="item">
                    <Link rel="stylesheet" to="/evenLoop" >Even Loop JS</Link>
                    </li>
                    <li className="item">
                        <Link rel="stylesheet" to="/closures" >Closures</Link>
                    </li>
                    <li className="item">
                        <Link rel="stylesheet" to="/context" >Context</Link>
                    </li>
                    <li className="item">
                        <Link rel="stylesheet" to="/iffe" >IFFE</Link>
                    </li>
                    <li className="item">
                        <Link rel="stylesheet" to="/const-let-var" >Const-let-var</Link>
                    </li>
                    <li className="item">
                        <Link rel="stylesheet" to="/tdz-js" >TDZ-js</Link>
                    </li>
                </ul>
            </nav>


        </div>
    </header>
  )
}
