

import React from 'react'
import './Hero.css'
import TRANSISTOR from './image/transistor.svg'
import TUPLE from './image/tuple.svg'
import STATICKIT from './image/statickit.svg'
import MIRAGE from './image/mirage.svg'
import LARAVEL from './image/laravel.svg'
import STATAMIC from './image/statamic.svg'

export default function Hero() {
  return (
    <div>
        
        <section id="hero">
        <div className="hero__wrapper">
            <div>
                <h1>Accounting <span>made simple</span> for small businesses.</h1>
                <p className="booking">Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited.</p>
                <div className="hero__btns">
                    <a className="hero__btn first" href="#">Get 6 months free</a>
                    <a className="hero__btn second" href="#"> <i className='bx bx-play'></i> Watch video </a>
                </div>
                <p className="Trusted__companies">Trusted by these six companies so far</p>         
                <div className="companies">
                    <img src={TRANSISTOR} alt=""></img>
                    <img src={TUPLE} alt=""></img>
                    <img src={STATICKIT} alt=""></img>
                    <img src={MIRAGE} alt=""></img>
                    <img src={LARAVEL} alt="laravel"></img>
                    <img src={STATAMIC} alt=""></img>
                </div>      
            </div>
        </div>
    </section>
        
      
    </div>
  )
}

