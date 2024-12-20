import React from 'react'
import './scrollup.css'

const Scrollup = ({setActiveLink}) => {
    window.addEventListener("scroll", function(){
        const scrollUp = this.document.querySelector(".scrollup");
        if(this.scrollY >= 560) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll");
    })
  return (
    <>
    <a href="#home" className="scrollup" onClick={()=>setActiveLink("#home")}>
        <i className="uil uil-arrow-up scrollup-icon"></i>
    </a>
    </>
  )
}

export default Scrollup