import React, {useState, useEffect} from 'react';
import Weather from "./components/Weather";
import axios from 'axios'


function App() {
    const [weather, setWeather] = useState({})
    const [city, setCity] = useState('')
    const [notfound, setNotfound] = useState(false)

    const getWeather = () => {
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${city || 'Dubai'}&units=metric&appid=772323f9f150cf5a58c472fd39832bec`)
            .then(res => {
                setWeather(res.data)
                setNotfound(false)
            })
            .catch(() => setNotfound(true))
    }


    const handleClick = () => {
        getWeather()
        setCity('')
    }


    useEffect(() => {
        getWeather()
    }, [])


// if (weather.main === undefined){
//     return 'Loading...'
// }
    return (
  <section className='hero'>
      <div className='container '>
          <div className='row  mt-5'>
              <div className='d-flex justify-content-center flex-direction: column'>
                  <div className='box'>
                      <h1 className='title'>Погода</h1>
                      {weather.main === undefined ? 'Loading' :
                          <div>
                              <div className='form d-flex justify-content-center'>
                                  <input  className=' border border-success' type="text" value={city}
                                          onChange={(e) => setCity(e.target.value)}/>
                                  <button className='bg-success text-white' onClick={handleClick}>View</button>
                              </div>
                              {notfound &&
                              <div className='box d-flex align-items-center justify-content-center  mt-5 und'>Такой страны
                                  нет</div>}
                              {!notfound && <Weather weather={weather}/>}
                          </div>
                      }
                      <div className="card-group">
                          <div className="card">
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfgPIa_xpTtGfigv5litgf5Asgl2F2w33DaK7XDrUtjArE1t3NayL_-QfXvQdvOrUY-6E&usqp=CAU" className="card-img-top" alt="..."/>
                                  <div className="card-body">
                                      <h5 className="card-title">Понедельник</h5>
                                      <p className="card-text">21°/13°</p>

                                  </div>
                          </div>
                          <div className="card">
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS74rxxqatwSldfLspwnZrsa2Kan9Bw0rBUbw&usqp=CAU" className="card-img-top" alt="..."/>
                                  <div className="card-body">
                                      <h5 className="card-title">Вторник</h5>
                                      <p className="card-text">25°/18°</p>
                                  </div>
                          </div>
                          <div className="card">
                              <img src="data:image/png;base64,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" className="card-img-top" alt="..."/>
                                  <div className="card-body">
                                      <h5 className="card-title">Среда</h5>
                                      <p className="card-text">33°/19°</p>
                                  </div>
                          </div>
                      </div>
                  </div>
              </div>

          </div>
      </div>
  </section>
    );
}

export default App;