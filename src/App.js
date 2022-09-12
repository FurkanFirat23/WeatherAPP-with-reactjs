import "./App.css";
import Container from "./components/Container";
import Footer from "./components/Footer";
import { WeatherProvider } from "./context/WeatherContext";

function App() {
  return (
    <WeatherProvider>
      <Container />
      <Footer />
    </WeatherProvider>
  );
}

export default App;
