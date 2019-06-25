import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import SearchForm from "../components/SearchForm";
import { List, ListItem } from "../components/List";
import API from "../utils/API";
import SaveBtn from "../components/SaveBtn";
import ViewBtn from "../components/ViewBtn";


class Search extends Component {
    state = {
        search: "",
        results: []
    };

    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        //alert(this.state.search);
        API.getBookFromGoogle(this.state.search)
            .then(res => {
                this.setState({
                results: res.data.items
                });
                //console.log(this.state.results);
        })
            .catch(err => console.log(err));
    }
    // function to handle clicking on a specific result to redirect to google page
    handleViewClick = link => {
        
       window.location = link;
        
    }
    // function to handle saving a book 
    handleSaveClick = item => {
        if (!item.imageLinks) {
            API.saveBook({
                title: item.title,
                author: item.authors,
                synopsis: item.description,
                image: "blank",
                link: item.previewLink
            })
                .then(res => console.log("SAVED ITEM... "))
                .catch(err => console.log(err));
        }
        else {
            API.saveBook({
                title: item.title,
                author: item.authors,
                synopsis: item.description,
                image: item.imageLinks.smallThumbnail,
                link: item.previewLink
            })
                .then(res => console.log("SAVED ITEM... "))
                .catch(err => console.log(err));
        }     
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
                <Row>
                    <Col size="md-12">
                        {this.state.results.length ? (
                            <List>
                                {this.state.results.map(book => (
                                    <ListItem key={book.id}>
                                        <h2><strong>{book.volumeInfo.title}</strong></h2>
                                        <Container>
                                            <h5>{"Authors: "}</h5>
                                            <h2>{book.volumeInfo.authors.join(', ')}</h2>
                                        </Container>
                                        <p>
                                            <img alt="bookCover" src={book.volumeInfo.imageLinks ? (book.volumeInfo.imageLinks.smallThumbnail):("")}/>
                                            {book.volumeInfo.description ? (book.volumeInfo.description) : ("No Description Available") }
                                        </p>
                                        <SaveBtn onClick={() => this.handleSaveClick(book.volumeInfo)}/>
                                        <ViewBtn onClick={() => this.handleViewClick(book.volumeInfo.previewLink)}/>
                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                                <h3>Search for a book</h3>
                            )}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Search;