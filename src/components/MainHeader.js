import { Link } from 'react-router-dom';
import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/welcome">Welcome</Link>
          </li>
          <li>
            <Link to="/products">Welcome</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
