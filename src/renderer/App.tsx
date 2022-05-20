import Login from 'pages/login';
import {
  MemoryRouter as Router,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import icon from 'assets/icon.svg';
import './App.css';

const Hello = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="Hello">
        <img width="200px" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">
        <a
          // href="https://electron-react-boilerplate.js.org/"
          // target="_blank"
          onClick={() => navigate('/login')}
          rel="noreferrer noopener"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our doc
          </button>
        </a>
        <a
          onClick={() => navigate('/login')}
          // href="https://github.com/sponsors/electron-react-boilerplate"
          // target="_blank"
          rel="noreferrer noopener"
        >
          <button type="button">
            <span role="img" aria-label="books">
              🙏
            </span>
            Donate
          </button>
        </a>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
