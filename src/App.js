import './App.css';
import ReactFullpage from '@fullpage/react-fullpage';
import Page from './components/Page/Page';
import Fireflies from './components/Fireflies/Fireflies';
import AboutMe from './components/AboutMe/AboutMe';
import AboutSection from './pages/AboutSection/AboutSection';

function App() {
  return (
    <ReactFullpage
      anchors={['home','about','umoja','ugames']}
      // navigation={true}
      navigationPosition='right'

      render={({state, fullpageApi}) => {
        return (
          <>
            <Page>
              <Fireflies overlay={() => <AboutMe/>}/>
            </Page>
            <AboutSection/>
          </>
        );
      }}
    ></ReactFullpage>
  );
}

export default App;
