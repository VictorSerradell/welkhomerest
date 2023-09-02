import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Feature from './components/Feature/Feature';
import FeatureTwo from './components/Feature/FeatureTwo';
import FeatureThree from './components/Feature/FeatureThree';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';


function App() {

	
	
	return (
	
	  <Router>
		  <Hero  />  
		  <Feature  />  
		  <FeatureTwo  />
		  <FeatureThree  />
		<Footer  />
	<GlobalStyle />
  
		</Router>

)};

export default App;