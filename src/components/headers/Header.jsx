import React from 'react';

function Header(props) {
  return (
    <div className="sticky top-0 z-50">
      <header className="bg-darkgreen py-4">
        <nav className="container mx-auto flex justify-between items-center">
          <a className="text-white text-2xl font-bold" href="#">
            Logo
          </a>
          <ul className="flex">
            <li className="mr-6">
              <a className="text-white hover:text-brightpink" href="#">
                Link 1
              </a>
            </li>
            <li className="mr-6">
              <a className="text-white hover:text-brightpink" href="#">
                Link 2
              </a>
            </li>
            <li>
              <a className="text-white hover:text-brightpink" href="#">
                Link 3
              </a>
            </li>
          </ul>
        </nav>
      </header>
      {props.children}
    </div>
  );
}

export default Header;
