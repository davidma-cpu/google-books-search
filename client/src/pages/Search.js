import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import SearchForm from "../components/SearchForm";


class Search extends Component {
    state = {
        search: "",
        results: [],
        error: ""
    };

    handleInputChange = event => {
        this.setState({ search: event.target.value});
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(event.target);
        
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>(React) Google Books Search</h1>
                            <h2>Search for and Save Books of Interest</h2>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-6">
                        <SearchForm
                            search={this.state.search}
                            handleFormSubmit={this.handleFormSubmit} 
                            handleInputChange={this.handleInputChange}
                        />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Search;