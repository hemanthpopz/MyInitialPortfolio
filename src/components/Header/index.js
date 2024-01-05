import {Component} from 'react'

import {IoMdMenu} from 'react-icons/io'
import {Link} from 'react-router-dom'

import './index.css'

class Header extends Component {
  render() {
    return (
      <nav>
        <h1 className="name-heading">Hemanth Jyothula</h1>
        <ul className="nav-ul">
          <Link className="nav-link" to="/">
            <h1>Home</h1>
          </Link>
          <Link className="nav-link" to="/about">
            <h1>About</h1>
          </Link>
        </ul>
        <ul className="lg-nav-ul">
          <IoMdMenu className="menu-icon" />
        </ul>
      </nav>
    )
  }
}
export default Header
