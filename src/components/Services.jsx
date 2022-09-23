import React from 'react'
import "../css/services.css"
import {BsCheckLg} from "react-icons/bs"
function Services() {
  return (
    <div id='services'>
      <p>What I Offer</p>
      <h2>Services</h2>
      <div className="services">
      <div className="container services__container">
      <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
          <li>
              <BsCheckLg className='service__list__icon'/>
              <p>Lorem ipsum dolor sit amet cetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckLg className='service__list__icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckLg className='service__list__icon'/>
              <p>Lorem ipsum dolor sit amet contur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckLg className='service__list__icon'/>
              <p>Lorem ipsum dolor sit amet conetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
          <li>
              <BsCheckLg className='service__list__icon'/>
              <p>Lorem ipsum dolor sit amet conseur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckLg className='service__list__icon'/>
              <p>Lorem ipsum dolor sit amet contetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckLg className='service__list__icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckLg className='service__list__icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckLg className='service__list__icon'/>
              <p>Lorem ipsum dolor sit amet coctetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service__head">
            <h3>Android Development</h3>
          </div>
          <ul className='service__list'>
          <li>
              <BsCheckLg className='service__list__icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckLg className='service__list__icon'/>
              <p>Lorem ipsum dolor sit amet consectr adipisicing elit.</p>
            </li>
            <li>
              <BsCheckLg className='service__list__icon'/>
              <p>Lorem ipsum dolor sit amet conur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckLg className='service__list__icon'/>
              <p>Lorem ipsum dolor sit amet contur adipisicing elit.</p>
            </li>
          </ul>
        </article>
      </div>
      </div>
    </div>
  )
}

export default Services
