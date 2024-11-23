import React from "react"

const Hero = () => {
    return (
       <div>
         <section className="hero" style={{backgroundImage: 'url(HeroSection.jpg)'}}>
           <div>
             <h1 className="fade-in">Welcome To Rolex Watches.</h1>
             <p>The Rolex collection offers a wide range of 
                <br />prestigious,high-precision timepieces,
                <br /> from Professional to Classic models to suit any wrist.</p>
              <button>Shop Now</button>
           </div>
         </section>
       </div> 
    )
}

export default Hero