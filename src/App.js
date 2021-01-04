import './App.css';
import ReactFullpage from '@fullpage/react-fullpage';
import Page from './components/Page/Page';
import Fireflies from './components/Fireflies/Fireflies';

function App() {
  return (
    <ReactFullpage
      render={({state, fullpageApi}) => {
        return (
          <>
            <Page>
              <Fireflies
                overlay={() => {
                  return <h1>Hi!</h1>
                }}
              />
            </Page>
            <Page>Hey 2</Page>
          </>
        );
      }}
    ></ReactFullpage>
  );
}

export default App;
