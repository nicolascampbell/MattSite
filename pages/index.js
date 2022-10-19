import React from "react";
import Image from "next/future/image";
import { useRouter } from 'next/router';
import { Container, Col, Row } from "react-bootstrap";
import { CustomNavbar } from "../components/CustomNavbar";
import { Footer } from "../components/Footer";
export default function Home() {
	const router = useRouter();
	const getLink = (path) => `${router.basePath}${path}`;
	return (
		<React.Fragment>
			<Container style={{ height: "100vh" }} fluid>
				<CustomNavbar />
				<Row>
					<Col lg={{ span: 6, offset: 3 }} className="d-flex justify-content-center">
						<Image
							className="home-gif"
							src={getLink("/home-gif.webp")}
							layout="fill"
							width="600"
							height="600"
							alt="Gif with some photos of Matias"
						></Image>
					</Col>
				</Row>
			</Container>
			<Footer />
		</React.Fragment>
	);
}
