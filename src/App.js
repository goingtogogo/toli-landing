import Header from './Components/Header/Header';
import Preview from './Components/Preview/Preview';
import Features from './Components/Features/Features';
import Footer from './Components/Footer/Footer';

import { inject } from '@vercel/analytics';

import './App.scss';

inject();

function App() {
  return (
    <div className="imageWrapper">
      <div className="headerBackground">
        <div className="container">
          <Header />
          <Preview />
          <Features />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
