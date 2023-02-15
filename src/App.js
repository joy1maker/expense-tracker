import { AppConainer } from './App.styles.jsx';
import MainWindow from './components/main-window/main-window.component';
import SecondryWindow from './components/secondry-window/secondry-window.component';
import { useContext } from 'react';
import { UserContext } from './context/user.context.jsx';
import SignInForm from './components/sign-in-form/sign-in-form.component.jsx';
function App() {
  const { currentUser } = useContext(UserContext)
  console.log(currentUser);
  return (
    <>
      {
        !currentUser
          ?
          <SignInForm />
          :
          <AppConainer>
            <SecondryWindow type={"expense"} />
            <MainWindow />
            <SecondryWindow type={"income"} />
          </AppConainer>
      }
    </>

  );
}

export default App;
