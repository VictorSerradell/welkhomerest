import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Products from './components/Products/Products';
import { GlobalStyle } from './globalStyles';
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Feature/Feature';
import FeatureTwo from './components/Feature/FeatureTwo';
import FeatureThree from './components/Feature/FeatureThree';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import { gsap } from 'gsap/gsap-core';
import { ScrollTrigger } from 'gsap/ScrollTrigger';




function App() {
	return (
		
		<Router>
			<GlobalStyle />
			<Hero/>
			<Feature />
			<FeatureTwo />
			<FeatureThree />
			<Footer />
		</Router>
	);
}

export default App;