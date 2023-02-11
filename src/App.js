import { AppConainer } from './App.styles.jsx';
import MainWindow from './components/main-window/main-window.component';
import SecondryWindow from './components/secondry-window/secondry-window.component';
function App() {
  return (
    <AppConainer>
      <SecondryWindow type={"expense"} />
      <MainWindow />
      <SecondryWindow type={"income"} />
    </AppConainer>
  );
}

export default App;
