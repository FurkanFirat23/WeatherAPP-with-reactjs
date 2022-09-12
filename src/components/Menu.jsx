import { useWeather } from "../context/WeatherContext";

function Menu() {
  const { city, setCity, JSONData } = useWeather();

  const handleCity = (event) => {
    JSONData.filter((item) => {
      return item.name === event.target.value && setCity(item);
    });
  };

  // const handleMode = () => {
  //   return setDarkMode(darkMode === "" ? "dark" : "");
  // };

  return (
    <div className="menu-bar">
      <select name="city" id="city" value={city.name} onChange={handleCity}>
        {JSONData.map((item) => (
          <option key={item.id} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
      {/* <span className="toggle" onClick={handleMode}>
        {darkMode ? <FaRegMoon /> : <FaSun />}
      </span> */}
    </div>
  );
}

export default Menu;
