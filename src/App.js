import './App.css';
import {Hero, Subheading, Herobody, Headingbody, Headingbig} from "./components/Typography"
import styled from 'styled-components';

const Wrapper = styled.div`
background-color: red;`
function App() {
  return (
    <div className="App">
      <Wrapper>
        <Hero>h1 with 44px fontsize</Hero>
        <Subheading>h1 with 18px  fontsize</Subheading>
        <Herobody>h1 with 18px  fontsize</Herobody>
        <Headingbody>h1 with 14px fontsize</Headingbody>
        <Headingbig>h1 with 40px  fontsize </Headingbig>
      </Wrapper>
    </div>
  );
}

export default App;
