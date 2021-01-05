import './App.css';
import 'fullpage.js/vendors/scrolloverflow';
import ReactFullpage from '@fullpage/react-fullpage';
import Page from './components/Page/Page';
import Fireflies from './components/Fireflies/Fireflies';
import AboutMe from './components/AboutMe/AboutMe';
import AboutSection from './pages/AboutSection/AboutSection';
import UmojaOutreach from './pages/Projects/Umoja';

function App() {
  return (
    <ReactFullpage
      anchors={['home','about','umoja','ugames']}
      // navigation={true}
      navigationPosition='right'
      // normalScrollElements='#aboutSection'
      scrollOverflow={true}

      render={({state, fullpageApi}) => {
        return (
          <>
            <Page>
              <Fireflies overlay={() => <AboutMe/>}/>
            </Page>
            <AboutSection/>
            {/* <UmojaOutreach/> */}
          </>
        );
      }}
    ></ReactFullpage>
  );
}

export default App;
