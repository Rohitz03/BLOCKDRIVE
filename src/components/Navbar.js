import React, { Component } from 'react';
import Identicon from 'identicon.js';
// import box from '../BlockDriveIcon.png';
import './Navbar.css';

class Navbar extends Component {

  render() {
    return (
      <div class="navbar ">
        <a>
          {/* <img src={box} width="30" height="30" /> */}
          <b>BLOCKDRIVE</b>
        </a>
        <ul className="navbar-nav px-10">
          <li>
            <small id="account">
              <a target="_blank"
                 alt=""
                 className="text-white"
                 rel="noopener noreferrer"
                 href={"https://etherscan.io/address/" + this.props.account}>
                {this.props.account.substring(0,6)}...{this.props.account.substring(38,42)}
              </a>
            </small>
            { this.props.account
              ? <img
                  alt=""
                  className='ml-2'
                  width='30'
                  height='30'
                  src={`data:image/png;base64,${new Identicon(this.props.account, 30).toString()}`}
                />
              : <span></span>
            }
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;