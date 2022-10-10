import React from "react";
import { CustomNavbar } from "../components/CustomNavbar";
import ImageList from '../components/ImageList'
import { Footer } from "../components/Footer";

const photos = () => {
	return (
		<React.Fragment>
			<CustomNavbar />
			<ImageList />
			<Footer />

		</React.Fragment>
	);
};
export default photos;
