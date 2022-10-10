import React from "react";
import { CustomNavbar } from "../components/CustomNavbar";
import { Container, Col, Row } from "react-bootstrap";
import { Footer } from "../components/Footer";

const about = () => {
	return (
		<React.Fragment>
			<CustomNavbar />
			<Container>
				<Row>
					<Col>
						<h5>
							Hi there
						</h5>
						<pre style={{ whiteSpace: "pre-line" }}>
							Endeavor bachelor but add eat pleasure doubtful sociable. <br />
							Age forming covered you entered the examine. <br />
							Blessing scarcely confined her contempt wondered shy. <br />
							Dashwoods contented sportsmen at up no convinced cordially affection. <br />
							Am so continued resembled frankness disposing engrossed dashwoods.
							Earnest greater on no observe fortune norland.
							Hunted mrs ham wishes stairs.
							Continued he as so breakfast shameless.
							All men drew its post knew.
							Of talking of calling however civilly wishing resolve.
						</pre>
					</Col>
				</Row>
			</Container>
			<Footer />

		</React.Fragment>
	);
};
export default about;
