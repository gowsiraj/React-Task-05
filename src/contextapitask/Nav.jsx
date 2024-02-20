import React from 'react'

function Nav() {
  return (
   <>
   <div className="bgcolor">
   <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand  bgcolor" href="#">Moblie Shop</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link disabled bgcolor" aria-current="page" href="#">Home</a>
        <a className="nav-link disabled  bgcolor" href="#">Offer Products</a>
        <a className="nav-link bgcolor " aria-disabled="true">Cart</a>
      </div>
    </div>
  </div>
</nav>
</div>

   </>
  )
}

export default Nav