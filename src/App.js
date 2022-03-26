//import logo from './logo.svg';
import './App.css';
import './style.css'
import srcimg from './logo512.png'

function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1px black", maxWidth: "100vw"}}>

        <h1 class="title red">JSX-Projects</h1>

        <br />

          <img src={srcimg}/>

            <br />

              <img src="/logo192.png" />

              </div>
              <div>

              
              <video width="320" height="240" controls>

                <source src="video.mp4" type="video/mp4" />

              </video>
              </div>
            </div>
            );
}

            export default App;
