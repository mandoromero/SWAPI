import { StoreProvider } from "../store/appContext";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import Home from "./views/home";
import injectContext from "./store/appContext";
import { Navbar } from "./component/Navbar";
import { Footer } from "./component/footer";

// Retrieve the BASENAME from the environment variable or default to "/"
const basename = process.env.REACT_APP_BASENAME || "/";

const Layout = () => {
	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
