import './App.css';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <h1>Welcome To Local Offer App</h1>
      </div>
      <Footer />
    </div>
  );
}

export default App;
