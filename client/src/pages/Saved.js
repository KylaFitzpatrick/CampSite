//@ts-check
/**@module */
import React, { Component } from "react";
import {
  Col,
  Row,
  Container,
} from "reactstrap";
import Jumbotron from "../components/Jumbotron";
import { CampGroundList, ListItem } from "../components/SaveCampGroundList";
import API from "../utils/API";
import { savesCampGrounds, updateFavoritesCount } from "../redux/actionCreator";
import { connect } from "react-redux";

/**@class */
class Saved extends Component {
  constructor(props){
    super(props)
  }
  state = {
    savedCampGrounds: []
  };

  /**
   * @function componentDidMount
   */
  componentDidMount() {
    this.getCampGround(this.props.username);
  }


  /**
   * @function getCampGround
   * @param {*} campGroundData 
   */
  getCampGround = (campGroundData) => {
    console.log("this.props.campGrounds", this.props.campGrounds);
    API.getCampGround(campGroundData)
      .then(res => {
        this.props.dispatch(savesCampGrounds(res.data));
        this.props.dispatch(updateFavoritesCount(res.data.length.toString()));
      })
      .catch((err => console.log(err)));
    console.log("this.props.campGrounds", this.props.campGrounds);
  }


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 style={{ fontSize: "60px" }}>
              <span style={{ fontWeight: "bold", fontSize: "120px" }}>favorites</span>
              </h1>
              <hr></hr>
            </Jumbotron>
            {(this.props.campGrounds && this.props.campGrounds.length > 0) ?
              <CampGroundList>
                {this.props.campGrounds.map((campGround, index) => {
                  return (
                    <Col xs={12} key={index}>
                    <ListItem
                      props={this.props}
                      key={campGround.id}
                      id={campGround._id}
                      username={campGround.username}
                      entityId={campGround.entityId}
                      campGround={campGround.campGround}
                      city={campGround.city}
                      state={campGround.state}
                      distance={campGround.distance}
                      rating={campGround.rating}
                      description={campGround.description}
                      imageURL={campGround.imageURL}
                      campsite_equipment_name={campGround.campsite_equipment_name}
						          price_range_max={campGround.price_range_max}
								      price_range_min={campGround.price_range_min}
								      availability={campGround.availability}
								      number_of_ratings={campGround.number_of_ratings}
                    />
                                          </Col>

                  )
                })}
              </CampGroundList>
              :
              ""
            }

          </Col>

        </Row>
      </Container>
    );
  }
}

/**
 * @function mapStateToProps
 * @param {@} state 
 */
function mapStateToProps(state) {
  return {
    campGrounds: state.campGrounds,
    username: state.username,
  }
}
export default connect(mapStateToProps)(Saved);
