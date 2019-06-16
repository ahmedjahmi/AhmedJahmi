import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from './Button';

export default class Navbar extends Component {
    render() {
        return (
          <NavWrapper className="navbar navbar-expand-sm px-sm-5">
            <div className="container">
              <Link
                to="/"
                className="navbar-brand "
                style={{ color: "var(--mainWhite)" }}
              >
                Home
              </Link>

              <ul className="navbar-nav align-items-center text-capitalize">
                <li className="nav-item ml-5">
                  <Link
                    to="/projectlist"
                    className="nav-link"
                  >
                    projects
                  </Link>
                </li>
              </ul>

              <Link to="/contact" className="ml-auto">
                <ButtonContainer>
                  <i className="far fa-comment-dots" />
                </ButtonContainer>
              </Link>
            </div>

            {/* <button
              className="ml-auto"
              style={{ backgroundColor: "var(--mainVanilla)" }}
            >
              <i
                className="fas fa-bars"
                style={{ color: "var(--mainWhite)"}}
              />
            </button> */}
          </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
  background: var(--mainVanilla);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.2rem;
    text-transform: capitalize;
  }
  .navbar-brand {
    color: var(--mainWhite) !important;
    font-size: 1.4rem;
    text-transform: capitalize;
    padding: none !important;
  }
`;