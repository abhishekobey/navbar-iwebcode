import React, { useState } from 'react'

const Navbar = () => {

    const [actionDesktop, setActionDesktop] = useState(false)
    const [actionLaptop, setActionLaptop] = useState(false)
    const [actionReview, setActionReview] = useState(false)
    const [actionMore, setActionMore] = useState(false)
    const [sub_gaming, setSub_gaming] = useState(false)
    const [sub_work, setSub_work] = useState(false)
    const [sub_gaming_laptop, setSub_gaming_laptop] = useState(false)
    const [sub_work_laptop, setSub_work_laptop] = useState(false)
    const [sub_gov, setSub_gov] = useState(false)
    const [company, setCompany] = useState(false)
    const [community, setCommunity] = useState(false)
    const [img, setImage] = useState(false)

    const hover = () => {
        cancel_laptop()
        cancel_review()
       setActionDesktop(true)
    }
    const cancel_hover = () => {
        setActionDesktop(false)
    }
    
    const subGhover = () => {
        setSub_gaming(true)
    }
    const cancel_subGhover = () => {
        setSub_gaming(false)
    }
    const subWork = () => {
        setSub_work(true)
    }
    const cancel_subWork = () => {
        setSub_work(false)
    }
    const subGov = () => {
        setSub_gov(true)
    }
    const cancel_subGov = () => {
        setSub_gov(false)
    }
    const image = () => {
        subGhover()
        setImage(true)
    }
    const cancel_image = () => {
        setImage(false)
    }
    // laptop-----------------------------------------
    const hoverLaptop = () => {
        cancel_hover()
        cancel_review()
        setActionLaptop(true)
     }
     const cancel_laptop = () => {
         setActionLaptop(false)
     } 
    const subGlaptop = () => {
        setSub_gaming_laptop(true)
    }
    const cancel_subGlaptop = () => {
        setSub_gaming_laptop(false)
    }
    const subWorkLaptop = () => {
        setSub_work_laptop(true)
    }
    const cancel_subWorkLaptop = () => {
        setSub_work_laptop(false)
    }
    // reviews-----------------------------------------------------------------
    const hoverReview = () => {
        cancel_hover()
        cancel_laptop()
        cancel_more()
        setActionReview(true)
     }
     const cancel_review = () => {
         setActionReview(false)
     } 
    //  more------------------------------------------------------------------
    const hoverMore = () => {
        cancel_hover()
        cancel_laptop()
        cancel_review()
        setActionMore(true)
     }
     const cancel_more = () => {
         setActionMore(false)
     } 
     const hoverCompany = () => {
         setCompany(true)
     }
     const cancel_company = () => {
         setCompany(false)
     }
     const hoverCommunity = () => {
        setCommunity(true)
    }
    const cancel_community = () => {
        setCommunity(false)
    }


    const all_cancel = () => {
        cancel_hover()
        cancel_subGhover()
        cancel_laptop()
        cancel_review()
        cancel_more()
        cancel_image()
    }
    

    return (
        <>
        <header onMouseLeave={all_cancel}>
        <div className="logo">
          <img src="https://cdn.originpc.com/img/origin-logo.svg" alt="logo"></img>
        </div>
        <ul className="navbar">
          <li className="desktop" onMouseEnter={hover}>
            DESKTOPS▾
          </li>
          <li className="laptop" onMouseEnter={hoverLaptop}>
            LAPTOPS▾
          </li>
          <li className="accessories">
            ACCESSORIES
          </li>
          <li className="specialoffers">
            SPECIAL OFFERS
          </li>
          <li className="review" onMouseEnter={hoverReview}>
            REVIEWS▾
          </li>
          <li className="more" onMouseEnter={hoverMore}>
            MORE▾
          </li>
          <li><img className="search" alt="search" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxWWkgFHbOnXulyLrcpBvhQajInfqkScGXOr0a9lpStaRr3dtL8aUudqsIFBQxxwA7eHI&usqp=CAU" /></li>
          <li><img className="user" alt="user" src="http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png" /> Sign In</li>
          <li><img className="cart" alt="cart" src="data:image/png;base64,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" /></li>
        </ul>
        </header>
        <div className="others" onMouseLeave={all_cancel}>
        {actionDesktop ? (
            <ul className="sub-desktop" onMouseEnter={hover}>
              <li onMouseEnter={subGhover} onMouseLeave={cancel_subGhover}>Gaming Desktops<span id="same">▶</span></li>
              <li onMouseEnter={subWork} onMouseLeave={cancel_subWork}>Workstation Desktops<span id="same">▶</span></li>
              <li onMouseEnter={subGov} onMouseLeave={cancel_subGov}>Government & Corporate<span id="same">▶</span></li>
            </ul>
        ):(<></>)}
        {sub_gaming ? (
          <ul className="sub-gaming" onMouseEnter={subGhover} onMouseLeave={cancel_subGhover}>
            <li>Compare All</li>
            <li onMouseEnter={image} onMouseLeave={cancel_image}>CHRONOS<span id="all">▶</span></li>
            <li onMouseEnter={image} onMouseLeave={cancel_image}>NEURON<span id="all">▶</span></li>
            <li onMouseEnter={image} onMouseLeave={cancel_image}>MILLENNIUM<span id="all">▶</span></li>
            <li onMouseEnter={image} onMouseLeave={cancel_image}>GENESIS<span id="all">▶</span></li>
          </ul>
        ):(<></>)}
        {sub_work ? (
          <ul className="sub-workstation" onMouseEnter={subWork} onMouseLeave={cancel_subWork}>
            <li>Compare All</li>
            <li>S-CLASS<span id="all">▶</span></li>
            <li>S-CLASS Cam Link Pro<span id="all">▶</span></li>
            <li>M-CLASS<span id="all">▶</span></li>
            <li>L-CLASS<span id="all">▶</span></li>
            <li>L-CLASS STUDIO<span id="all">▶</span></li>
            <li>R-CLASS<span id="all">▶</span></li>
          </ul>
        ):(<></>)}
        {sub_gov ? (
          <ul className="sub-gov" onMouseEnter={subGov} onMouseLeave={cancel_subGov}>
            <li><img alt="gov" src="https://cdn.originpc.com/img/menu/business-2.png" /></li>   
          </ul>
        ):(<></>)}
        {/* Laptop --------------------------------------------------------------------*/}
        {actionLaptop ? (
            <ul className="sub-laptops" onMouseEnter={hoverLaptop}>
              <li onMouseEnter={subGlaptop} onMouseLeave={cancel_subGlaptop}>Gaming Laptops<span id="same">▶</span></li>
              <li onMouseEnter={subWorkLaptop} onMouseLeave={cancel_subWorkLaptop}>Workstation Laptops<span id="same">▶</span></li>
              <li onMouseEnter={subGov} onMouseLeave={cancel_subGov}>Government & Corporate<span id="same">▶</span></li>
          </ul>
        ):(<></>)}
        {sub_gaming_laptop ? (
          <ul className="sub-gaming" onMouseEnter={subGlaptop} onMouseLeave={cancel_subGlaptop}>
            <li>Compare All</li>
            <li>EV15-S(20-Series)<span id="all">▶</span></li>
            <li>EV15-S(30-Series)<span id="all">▶</span></li>
            <li>EV17-S(30-Series)<span id="all">▶</span></li>
            <li>EV17-X(20-Series)<span id="all">▶</span></li>
            <li>EV17-X(30-Series)<span id="all">▶</span></li>
          </ul>
        ):(<></>)}
        {sub_work_laptop ? (
          <ul className="sub-workstation" onMouseEnter={subWorkLaptop} onMouseLeave={cancel_subWorkLaptop}>
            <li>Compare All</li>
            <li>NT-15i<span id="all">▶</span></li>
            <li>NT-15(20-Series)<span id="all">▶</span></li>
            <li>NT-15(30-Series)<span id="all">▶</span></li>
            <li>NT-17(30-Series)<span id="all">▶</span></li>
            <li>NS-17(20-Series)<span id="all">▶</span></li>
            <li>NS-17(30-Series)<span id="all">▶</span></li>
          </ul>
        ):(<></>)}
        {/* reviews-------------------------------------------------------------------------------- */}
        {actionReview ? (
        <ul className="sub-reviews" onMouseEnter={hoverReview}>
            <li>News</li>
            <li>Testimonials</li>
        </ul>
        ):(<></>)}
        {/* more--------------------------------------------------------------------------------- */}
        {actionMore ? (
        <ul className="sub-more" onMouseEnter={hoverMore}>
            <li>Custom Design</li>
            <li>PCs for Creators</li>
            <li>Support</li>
            <li>Blog</li>
            <li onMouseEnter={hoverCompany} onMouseLeave={cancel_company}>Company<span id="more">▶</span></li>
            <li onMouseEnter={hoverCommunity} onMouseLeave={cancel_community}>Community<span id="more">▶</span></li>
        </ul>
        ):(<></>)}
        {company ? (
        <ul className="sub-company" onMouseEnter={hoverCompany} onMouseLeave={cancel_company}>
            <li>About</li>
            <li>Contact</li>
            <li>Carrers</li>
        </ul>
        ):(<></>)}
        {community ? (
        <ul className="sub-community" onMouseEnter={hoverCommunity} onMouseLeave={cancel_community}>
            <li>Affiliates</li>
            <li>Blog</li>
            <li>ORIGINPC Family</li>
            <li>Twitch</li>
            <li>Prime</li>
        </ul>
        ):(<></>)}
        {img ? (
          <ul className="image" onMouseEnter={image} onMouseLeave={cancel_image}>
            <li><img alt="img" src="https://cdn.originpc.com/img/menu/neuron.png" /></li>   
          </ul>
        ):(<></>)}
        </div>
        </>
    )
}

export default Navbar
