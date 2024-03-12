import React from "react";
import { Row,  Form } from "react-bootstrap";

class MyInputSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        searchTerm: "",
        };
    }

    handleSearch = (event) => {
        const searchTerm = event.target.value;
        this.setState({ searchTerm }, () => {
        this.props.onChange(searchTerm);
        });
    };

    render() {
        return (
        <Row className="justify-content-center mb-2">
            <Form.Control
            placeholder="Search by Title , Author or Genre..."
            onChange={this.handleSearch}
            />
        </Row>
        );
    }
}

export default MyInputSearch;