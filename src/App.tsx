import { Outlet } from "react-router-dom";
import Header from './components/Header';
import { Content, ContentWrapper } from './styles';

function App() {
  return (
    <div>
      <Header />
      <div css={Content}>
        <div css={ContentWrapper}>
          <Outlet />
        </div>
      </div>
    </div>

  );
}

export default App;
