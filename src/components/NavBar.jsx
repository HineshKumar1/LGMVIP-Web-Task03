import React from 'react'

export default function NavBar() {
  return (
    <>
        <nav className="navbar navbar-dark bg-primary">
    <a className="navbar-brand" href="#">Student Registration Form</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
      <a className="nav-item nav-link" href="#">Features</a>
    </div>
  </div>
</nav>
    </>
  )
}
