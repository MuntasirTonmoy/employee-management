import "./themeSwitcher";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <h2>E-Manage</h2>
          </li>
        </ul>
        <ul>
          {" "}
          <li>
            <details role="list" dir="rtl">
              <summary aria-haspopup="listbox" role="link">
                Theme
              </summary>
              <ul role="listbox">
                <li>
                  <a href="#" data-theme-switcher="auto">
                    Auto
                  </a>
                </li>
                <li>
                  <a href="#" data-theme-switcher="light">
                    Light
                  </a>
                </li>
                <li>
                  <a href="#" data-theme-switcher="dark">
                    Dark
                  </a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
