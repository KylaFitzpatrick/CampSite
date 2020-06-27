import React from "react";
// import "./style.css";
import SaveBtn from "../SaveBtn";
//import { Col, Row, Container } from "../Grid";
import API from "../../utils/API";
// import { savesCampGrounds } from "../redux/actionCreator";
// import { connect } from "react-redux";
import {
	Button,
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Container,
	Row,
	Col,
	CardImgOverlay,
	Toast,
	ToastHeader,
	ToastBody,
} from "reactstrap";
import "./style.css";
import StarRating from "../StarRating";
import Description from "../Description";

// This file exports both the List and ListItem components

export function CampGroundList({ children }) {
	return (
		<Container>
			<Row>{children}</Row>
		</Container>
	);
}
export function ListItem(props) {
	const saveCampGround = (campGroundData) => {
		API.saveCampGround(campGroundData)

			.then((res) => console.log("save to mongo", res))

			.catch((err) => console.log(err));
	};
	return (
		<div className="card-div">
			<hr style={{ border: "1px solid black" }}></hr>
			<Col lg="5" className="card-image-wrapper">
				<CardImg top width="100%" alt={props.campGround} src={props.imageURL}></CardImg>
				<CardImgOverlay>
					<SaveBtn
						onClick={() =>
							saveCampGround({
								id: props.id,
								username: props.username,
								entityId: props.entityId,
								campGround: props.campGround,
								city: props.city,
								state: props.state,
								distance: props.distance,
								rating: props.rating,
								description: props.description,
								imageURL: props.imageURL,
							})
						}
					></SaveBtn>
				</CardImgOverlay>
			</Col>
			<Col lg="7" className="card-body-wrapper">
				<CardBody style={{ paddingLeft: "0px" }}>
					<CardTitle style={{display:"flex"}}>
						<a
							style={{ color: "black" }}
							target="_blank"
							rel="noopener noreferrer"
							href={"https://www.recreation.gov/camping/campgrounds/" + props.entityId}
						>
							<h3>{props.campGround}</h3>
						</a>
						<StarRating>{props.rating}</StarRating>
						<span style={{ fontSize: "16px", paddingLeft: "5px", marginBottom: "-5px !important" }}>
							{"("}
							{props.number_of_ratings}
							{")"}
						</span>
					</CardTitle>
					<CardSubtitle>
						<h6>
							<span style={{ fontWeight: "bold" }}>
								{props.city}, {props.state}
							</span>{" "}
							({props.distance} miles away)
						</h6>
					</CardSubtitle>
					<hr></hr>-{props.activity_1} -{props.activity_2} -{props.activity_1} -{props.activity_2}
					{props.campsite_equipment_name}
					<hr></hr>
					<div style={{float:"right"}}>
						<a
							style={{ color: "black" }}
							target="_blank"
							rel="noopener noreferrer"
							href={"https://www.recreation.gov/camping/campgrounds/" + props.entityId}
						>
							<h2 style={{ textTransform: "capitalize" }}>{props.availability}</h2>
						</a>
						<h6>
							Price Range: ${props.price_range_min}-{props.price_range_max}
						</h6>
					</div>
					{/*<CardText>{props.description}</CardText>*/}
					{/*	<Button>
						<a
							style={{ color: "white" }}
							target="_blank"
							rel="noopener noreferrer"
							href={"https://www.recreation.gov/camping/campgrounds/" + props.entityId}
						>
							{" "}
							INFO
						</a>
					</Button> */}
					{/* <Button>
						{" "}
						<a
							style={{ color: "white" }}
							target="_blank"
							rel="noopener noreferrer"
							href={
								"https://www.recreation.gov/camping/campgrounds/" + props.entityId + "/availability"
							}
						>
							{" "}
							RESERVE
						</a>
					</Button>*/}
				</CardBody>
			</Col>
		</div>
	);
}
