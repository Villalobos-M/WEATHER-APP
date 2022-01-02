import React, {useEffect, useState} from 'react'
//axios
import axios from 'axios'
//components
import WheatherCard from './components/WheatherCard';
//Styles
import "./styles/App.css"

function App() {

  const [dataWeather, setDataWeather] = useState(null)
  const apiKey='4abb570c60e4167ac556375c4dfa56a2'

  const error = () =>{
    console.log("No se pudo acceder a la hubicacion");
  }
  
  useEffect(() => {
    const succes = position => {
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
    .then(result => setDataWeather(result.data))
  }
    navigator.geolocation.getCurrentPosition(succes, error)
  }, [])

    const temp = dataWeather?.main?.temp
    const KtoC = temp - 273.15
    const CtoF = (KtoC * 1.8) + 32

    const tempMax = dataWeather?.main?.temp_max
    const KtoCtempMax = tempMax - 273.15
    const CtoFtempMax = (KtoCtempMax * 1.8) + 32

    const tempMin = dataWeather?.main?.temp_min
    const KtoCtempMin = tempMin - 273.15
    const CtoFtempMin = (KtoCtempMin * 1.8) + 32

    const msForkh = (dataWeather?.wind?.speed) * 3.6
  
  return (
    <div className={KtoC >= 13?  "sunny App" : KtoC>=4?  "cloudy App" : KtoC<=3? "cold App": null}>
      
      {
        dataWeather? (<>
            <h1>WEATHER APP</h1>
            <WheatherCard 
            name={dataWeather?.name}
            count={dataWeather?.sys?.country}
            celcius={KtoC.toFixed(2)}
            fahr={CtoF.toFixed(2)}
            maxCelius={KtoCtempMax.toFixed(2)}
            maxFahr={CtoFtempMax.toFixed(2)}
            minCelcius={KtoCtempMin.toFixed(2)}
            minFahr={CtoFtempMin.toFixed(2)}
            icon={dataWeather?.weather[0]?.icon}
            descr={dataWeather?.weather[0]?.description}
            pressure={dataWeather?.main?.pressure}
            humidity={dataWeather?.main?.humidity}
            speed={msForkh.toFixed(2)}
            />
        </> ) :
        ( 
          <section className='container-loader' >
            <div className='loader' ></div>
          </section>
        )
      }
    </div>
  );
}

export default App;
