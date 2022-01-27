import React from "react";
import Group from "../../Assets/group.svg";

const ContentNav = () => {
  return (
    <>
      {/* small screen */}
      <div className='container mobileNav'>
        <div className='mobile-content'>
          <div className='d-grid d-flex justify-content-end py-3'>
            <h6 className='me-auto my-auto'>Post(368)</h6>
            <span
              className='ms-auto me-3'
              role='group'
              aria-label='Basic example'
            >
              <button
                type='button'
                className='post-btn btn dropdown-toggle'
                id='btnGroupDrop1'
              >
                Filter: All
              </button>
            </span>
          </div>
        </div>
      </div>

      {/* large screen */}
      <div className='container mt-5 lgScreenNav'>
        <ul className='nav navTabs'>
          <li className='nav-item navItem navTabActive'>
            <a className='nav-link navLink  ' aria-current='page'>
              All Posts(32)
            </a>
          </li>
          <li className='nav-item navItem'>
            <a className='nav-link navLink'>Article</a>
          </li>
          <li className='nav-item navItem'>
            <a className='nav-link navLink'>Event</a>
          </li>
          <li className='nav-item navItem'>
            <a className='nav-link navLink'>Education</a>
          </li>
          <li className='nav-item navItem'>
            <a className='nav-link navLink'>Job</a>
          </li>
          <li
            className='navItem ms-auto me-3'
            role='group'
            aria-label='Basic example'
          >
            <button
              type='button'
              className='post-btn btn dropdown-toggle'
              id='btnGroupDrop1'
            >
              Write a Post
            </button>
          </li>
          <li className='navItem' role='group' aria-label='Basic example'>
            <button type='button' className='group-btn btn' id='btnGroupDrop1'>
              <img src={Group} alt='group' className='me-2' />
              Join Group
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ContentNav;
