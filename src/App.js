import React from 'react'

const App = () => {
  return (
    <div>
          <div className="App">
<nav class="navbar navbar-expand-sm navbar-dark bg fixed-top transparent">
<a href="#home" className="navbar-brand "><img  className="img-fluid " style={{marginLeft:'8px'}} src={logogig} width="35px" alt=""/></a>
    <button className="navbar-toggler" type="button"  data-bs-toggle="collapse"  data-bs-target="#navmenu">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" style={{marginLeft:'8px'}} id="navmenu">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item ">
          <a className="nav-link" href="#home">Home</a>
        </li> 
        <li className="nav-item ">
          <a className="nav-link" href="#about">About Us</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link" href="#services">Services</a>
        </li>    
        <li className="nav-item ">
          <a className="nav-link "  href="#contact">Contact Us</a>
        </li>   
        <li className="nav-item ">
        <a href="https://app.gigleji.com/" className="btn btn-primary btn-sm" role="button">Log in</a>
        <span style={{ marginRight: '10px' }}></span>
    <a href="https://app.gigleji.com/register" className="btn btn-success btn-sm" role="button">Signup</a>

</li>  
</ul>
</div>
</nav>

    </div>
    </div>
  )
}

export default App
