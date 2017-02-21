import React from 'react';
import {
  Grid,
  Col,
  Row,
  Image,
  Button
} from 'react-bootstrap';

const Recipe  = props => {
  return (
    <Grid>
    <Row>
      <Col xs={12} md={8} className="align">
          <h2>{props.recipe}</h2>
          <Image src={props.image} />
          <Row className="show-grid">
          <Col xs={12} md={4} >
          <ul>
            <h3>Ingredients</h3>
            <hr/>
              {props.ingredientLines.map((food) => {
                return(
                  <li key={food}>{food}</li>
                      )
              }
            )}
          </ul>
        </Col>
        <Col xs={12} md={4} className="align">
          <ul>
            <h3>Health Information</h3>
            <hr/>
              {props.healthLabels.map((food) => {
                return(
                  <li key={food}>{food}</li>
                      )
              }
            )}
          </ul>
        </Col>
        <Col xs={12} md={4} className="align">
          <h3>Preparation</h3>
          <hr/>
        <Button
          bsStyle="primary"
          bsSize="large"
          src={props.url}
          href={props.url} target="_blank"
          >
           Instructions
        </Button>
        <h4>calories</h4>
        <p>{props.calories}</p>
      </Col>

      </Row>
      </Col>
    </Row>
  </Grid>
  )
}
export default Recipe;
