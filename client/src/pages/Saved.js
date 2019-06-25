import React, { Component } from "react";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import ViewBtn from "../components/ViewBtn";
import { Col, Row, Container } from "../components/Grid";
import DeleteBtn from "../components/DeleteBtn";

class Saved extends Component {
    state = {
        books: []
    }
    componentDidMount() {
        this.loadBooks();
    }
    loadBooks = () => {
        API.getBooks()
            .then(res => {
                this.setState({ books: res.data });
            })
    }
    handleViewClick = link => {
        
        window.location = link;
         
    }
    handleDeleteClick = id => {
        API.deleteBook(id)
            .then(res => {
                console.log("deleted book");
                this.loadBooks();
            })
            .catch(err => console.log(err));
    }
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <h3>Saved Books</h3>
                        {this.state.books.length ? (
                            <List>
                                {this.state.books.map(book => (
                                    <ListItem key={book._id}>
                                        <h2><strong>{book.title}</strong></h2>
                                        <Container>
                                            <h5>{"Authors: "}</h5>
                                            <h2>{book.author.join(', ')}</h2>
                                        </Container>

                                        <p><img alt="bookCover" src={book.image ? (book.image) : ("")} />{book.synopsis ? (book.synopsis) : ("No Description Available")}</p>        
                                        <DeleteBtn onClick={() => this.handleDeleteClick(book._id)}/>
                                        <ViewBtn onClick={() => this.handleViewClick(book.link)} />
                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                                <h5>No Saved Books</h5>
                            )}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Saved;