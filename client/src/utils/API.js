import axios from "axios";

export default {
    getBooks: function() {
        return axios.get("/api/books");
    },
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    },
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    },
    getBookFromGoogle: function(title) {
        var query = title.split(' ').join('+');
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query + "&key=AIzaSyBJ9yNdcp3LTfsLd3aqWkdV6JMOn6ivrpc");        
    }
}