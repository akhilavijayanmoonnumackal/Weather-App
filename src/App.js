import hotBg from './assets/hot.jpg';
import coldBg from './assets/cold.jpg';
import './assets/sun_cloud.png';
import Description from './components/Description';
import { useEffect } from 'react';
import { getFormattedWeatherData } from './weatherService';

function App() {
  const styles = {
    width:'30px',
  }
  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData('kochi');
      console.log(data);
    };
    fetchWeatherData()
  },[])

  return (
    <div className="App" style={{backgroundImage: `url(${coldBg})`}}>
      <div className='overlay'>
        <div className='container'>
          <div className='section section__inputs'>
            <input type='text' name='city' placeholder='Enter city...'/>
            <button>°F</button>
          </div>

          <div className='section section__temperature'>
            <div className='icon'>
              <h3>London, GB</h3>
              <img src="https://o.remove.bg/downloads/156f487f-8f98-4591-bb27-7539e080b9fd/sun_cloud-removebg-preview.png" style={styles} 
              alt="weatherIcon" 
              />
              <h3>Cloudy</h3>
            </div>
            <div className='temperature'>
              <h1>34 °C</h1>
            </div>
          </div>

          {/* bottom description */}

          <Description />


        </div>

      </div>
    </div>
  );
}

export default App;
