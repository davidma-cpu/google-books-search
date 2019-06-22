import React from "react";
import "./style.css";

function SearchForm(props) {
    return (
        <form className="search">
            <div className="form-group">
                <h2>Book Search</h2>
                <label htmlFor="title">Book:</label>
                <input
                    value={props.search}
                    onChange={props.handleInputChange}
                    name="title"
                    type="text"
                    placeholder="type title to search..."
                />
                <button className="btn btn-success" type="submit" onClick={props.handleFormSubmit}>Submit</button>
            </div>
        </form>
    )
}

export default SearchForm;