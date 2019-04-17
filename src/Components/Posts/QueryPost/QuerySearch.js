import React, { Component } from 'react';
import {Button} from "react-bootstrap";
import Octicon,{getIconByName} from '@githubprimer/octicons-react';
///TODO:implement search functionality
export default class QuerySearch extends Component {
  render() {
    return (
      <div>
        <form>
        <div className="form-group mh1 w-70" style={{float:"left"}}>
        <input type="text" name="search" placeholder="search for queries" className="form-control ph2 mh2" />
        </div>
        <Button type="submit" className="btn_col mh2">
        <Octicon icon={getIconByName("search")} />
        </Button>
        </form>
      </div>
    )
  }
}
