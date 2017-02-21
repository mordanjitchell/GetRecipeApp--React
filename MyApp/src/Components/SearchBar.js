import React from 'react';
import {
  FormGroup,
  FormControl
} from 'react-bootstrap';

const SearchBar = props => {
  return (
    <form>
      <FormGroup
        controlId="formBasicText">
        <FormControl
          className="searchtext"
          type="text"
          placeholder="Search"
          onChange={props.handleChange}
          />
      </FormGroup>
    </form>
  )
}

export default SearchBar;
