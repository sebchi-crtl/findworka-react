import { Table, Card, Container } from 'react-bootstrap';

import { Component } from 'react';

import axios from 'axios';

import ReactPaginate from 'react-paginate';

import './BookComment.css'



export class BooksComment extends Component {
   
    constructor(props) {
        super(props);

        this.state = {
            books: [],
            Loading: true,
            perPage: 5,
            page: 0,
            pageCount: 0
        };
    }
    
    componentDidMount() {
       
        axios.get('https://findwork-backend.herokuapp.com/books')
        .then(response => {
            // handle success
            const books = response.data;
            this.setState({ books });
            this.setState({
                pageCount: Math.ceil(this.state.books.length / this.state.perPage)
            });
            this.setState({
                Loading: false
            });
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });axios.get();
        
        
    }
    
    handlePageClick = (event) => {
        let page = event.selected;
        this.setState({page})
    }

    render() {
        const {page, perPage, pageCount, Loading} = this.state;
        let items = this.state.books.slice(page * perPage, (page + 1) * perPage);
        
        console.log(pageCount)
    return (
        <Container className="d-flex justify-content-center my-5" >
            <Card className="col-8 shadow-lg border-0 rounded">
                <Card.Title className="text-center p-4"><h2>Books, Authors and Comment Count</h2></Card.Title>
                <Card.Body>
                    <Table striped bordered responsive hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Url</th>
                                <th>Name of Book </th>
                                <th>Author</th>
                                <th>Comment Count</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((book, i) => {
                                return (
                                <tr key={i}>
                                    <td>{book.ID}</td>
                                    <td>{book.url}</td>
                                    <td>{book.Name}</td>
                                    <td>{book.authors}</td>
                                    <td>
                                        {book.CommentCount} 
                                    </td>    
                                </tr>
                                )
                                })

                            } 
                            {Loading && <div>
                                <tr>
                                    <td class="loading">
                                        <div class="bar"></div>
                                    </td>
                                    <td class="loading">
                                        <div class="bar"></div>
                                    </td>
                                    <td class="loading">
                                        <div class="bar"></div>
                                    </td>
                                    <td class="loading">
                                        <div class="bar"></div>
                                    </td>
                                    <td class="loading">
                                        <div class="bar"></div>
                                    </td>    
                                </tr>
                                <tr>
                                    <td class="loading">
                                        <div class="bar"></div>
                                    </td>
                                    <td class="loading">
                                        <div class="bar"></div>
                                    </td>
                                    <td class="loading">
                                        <div class="bar"></div>
                                    </td>
                                    <td class="loading">
                                        <div class="bar"></div>
                                    </td>
                                    <td class="loading">
                                        <div class="bar"></div>
                                    </td>    
                                </tr>
                                <tr>
                                    <td class="loading">
                                        <div class="bar"></div>
                                    </td>
                                    <td class="loading">
                                        <div class="bar"></div>
                                    </td>
                                    <td class="loading">
                                        <div class="bar"></div>
                                    </td>
                                    <td class="loading">
                                        <div class="bar"></div>
                                    </td>
                                    <td class="loading">
                                        <div class="bar"></div>
                                    </td>    
                                </tr>
                                </div>
                                }
                        </tbody>
                    </Table>
                    <div className="pagination-txt">Display {this.state.perPage} of {this.state.books.length} relevant
                      books
                    </div>
                    <div className="float-end">
                        <ReactPaginate
                            previousLabel={'pre'}
                            nextLabel={'next'}
                            breakLabel={'...'}
                            pageCount={5}
                            onPageChange={this.handlePageClick}
                            containerClassName={'pagination'}
                            activeClassName={'active'}
                        />

                    </div>
                </Card.Body>
            </Card>
        </Container>
    )
  }
}

export default BooksComment
