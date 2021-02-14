import './App.css';
import ImgComponent2 from './Img2';
import ImgComponent1 from './Img1';

function App() {
  return (
    <div className="App">
      <ImgComponent2 />
      <h3>Above one is implementation of react-avatar</h3>
      <br />
      <ImgComponent1 />
      <h3>Above one is implementation of react-avatar with react dropzone</h3>
    </div>
  );
}

export default App;
