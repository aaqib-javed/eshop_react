import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './header.styles.scss'
import { ReactComponent as Logo} from '../../assets/img/crown.svg'

import { auth } from '../../firebase/firebase.utils'

const Header = ({ currentUser }) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link> 
            <div className="options">
                <Link to="/shop" className="option">
                    SHOP
                </Link>
                <Link to="/contact" className="option">
                    CONTACT
                </Link>
                {
                    currentUser ?
                    <div className="option" onClick={() => auth.signOut()}>SIGN OUT {currentUser.displayName}</div>
                    :
                    <Link to="/signIn" className="option">SIGN IN</Link>
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header)
