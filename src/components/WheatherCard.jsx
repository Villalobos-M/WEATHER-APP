import React, {useState, useEffect} from 'react'
import "../styles/wheatherCard.styles.css"

const WheatherCard = ({name, count, celcius, fahr, maxCelius, maxFahr, minCelcius, 
                         minFahr, descr, pressure, humidity, speed, icon, }) => {

    const [ gradees, setGradees ] = useState(<p>{celcius}</p>);
    const [maxGradees, setMaxGradees] = useState(maxCelius)
    const [minGradees, setMinGradees] = useState(minCelcius)
    const [type, setType] = useState(true);
    
     useEffect(() => {
         switch (type) {
             case true:
                 setGradees(<p>{celcius}</p>)
                 setMaxGradees(maxCelius)
                 setMinGradees(minCelcius)
                 break;
         
             default:
                 setGradees(<p>{fahr}</p>)
                 setMaxGradees(maxFahr)
                 setMinGradees(minFahr)
                 break;
         }
        console.log(type);
     }, [celcius, fahr, type, maxFahr, minFahr, minCelcius, maxCelius])

     const handleFtoC = () => {
        setType(!type)
     }
    
     //
    
    return (
        <div className='card' >
            <section className='first-section' >
                <p>{name}, {count}</p>
            </section>
                
            <section className='second-section' >
                <article className='icon-weather' >
                    
                    <div className='max-min-gadees' >
                        <p><i className="fas fa-long-arrow-alt-up"></i>{maxGradees}°</p>
                        <p><i className="fas fa-long-arrow-alt-down"></i>{minGradees}°</p>
                    </div>
                    <div className='degrees' >
                        {gradees}<h4>{type? "°C" : "°F"}</h4>
                    </div>
                    <div className='icon' >
                        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt=""/>
                    </div>
                </article>
                <article className='info-weather' >
                    <p><i className="fas fa-cloud"></i>"{descr}"</p>
                    <section className='details-container' >
                        <div className='details' >
                        <p>Details</p>
                        <p>Pressure: {pressure} hPa</p>
                        <p>Humidity: {humidity}%</p>
                        <p>Speed: {speed} km/hr </p>
                    </div>
                    </section>
                    
                </article>
            </section>

            <section className='three-section' >
                <button onClick={handleFtoC} >Degrees °F/°C</button>
            </section>
            
        </div>
    )
}

export default WheatherCard
