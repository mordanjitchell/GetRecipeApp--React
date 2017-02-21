import React from 'react';
// import RecipeListItem from './RecipeListItem';
import {
  Grid,
  Col,
  Row,
  Image
} from 'react-bootstrap';

const RecipeList = props => {
    return (
    <Grid>
    <Row>
      <ul>
        <h3>Try also</h3>
          {props.recipies.map(item => {
            return(
              <Col xs={12} md={3}>
              <div key={item.recipe.label}>
              <li>
                <h4>{item.recipe.label}</h4>
                <Image src={item.recipe.image} circle responsive/>
              </li>
              </div>
            </Col>
            )
          }
        )}
      </ul>
    </Row>
    </Grid>
    )
};

export default RecipeList;
