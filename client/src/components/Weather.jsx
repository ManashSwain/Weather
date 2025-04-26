import React, { useEffect, useRef, useState} from "react";

const Weather = () => {

    const [weatherData , setWeatherData] = useState(false);
    const [cityname , setCityName] = useState("");
    const refElement = useRef();

    // search functionality 
  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_WEATHER_API
      }`;
      const response = await fetch(url);
      const data = await response.json();
      setWeatherData({
        temperature : data.main.temp 
      })
      setCityName("");
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    search("london");
  }, []);

  
  return (
    <div className="p-5 rounded-lg border-spacing-8">
      {/* search component  */}

      <form class="max-w-md mx-auto">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            ref={refElement}
            onChange={(e)=>setCityName(e.target.value)}
            value={cityname}
            
            id="default-search"
            class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search city"
            required
          />
          <button
          onClick={()=>{search(cityname)}}
            type="button"
            class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
      {/* weather information  */}
      <div className="h-4/5 w-full border-1 border-red-50 bg-red-700 mt-4 flex">
        {/* data container  */}
        <div className="basis-1/2">
          <img src="" alt="" />
          <div className="">
            <h1>London UK</h1>
            <h2>28 °C</h2>
          </div>
        </div>
        {/* information 1  */}
        <div className=" flex basis-1/2 p-5">
          <div className="w-44 h-44 bg-purple-700 rounded-lg m-2">dfgdf</div>
          {/* information 2  */}
          <div className="w-44 h-44 bg-purple-700 rounded-lg m-2">dfgdf</div>
        </div>
      </div>

      {/* Highlights component  */}
      <div>
        <h1>Today's Highlights</h1>
        <div>
          <div>
            <img src="" alt="" />
            <h2>Feels Like</h2>
            <h2>{weatherData.temperature}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
