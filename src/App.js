import LandingPage from './components/LandingPage/LandingPage';
import Navbar from './components/Navbar/Navbar';
import CustomDropdown from './components/CustomDropdown/CustomDropdown';
import InputSection from './components/InputSection/InputSection';

function App() {
  return (
    <div>
      <Navbar />
      <CustomDropdown />
      <InputSection />
        <LandingPage />
    </div>
  );
}

export default App;
