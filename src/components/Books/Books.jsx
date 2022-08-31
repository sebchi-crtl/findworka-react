import { Table, Card, Container } from 'react-bootstrap';

import { useState, useEffect } from 'react';

import axios from 'axios';

import ReactPaginate from 'react-paginate';

import './BookComment.css'


export default function Books(){

    const [items, setItems] = useState([]);
    const [perPage, setPerPage] = useState(5);
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);

    useEffect(() => {
        const getBooks = async () => {
            try {
                const response = await axios.get(`https://anapioficeandfire.com/api/books?page=1&pageSize=1000`);
                const event = await response.data;
                const total = response.data.length;
                setPage(0);
                setPerPage(Math.ceil(5 * 1));
                setPageCount(Math.ceil(total / perPage))

                console.log(perPage);
                setItems(event);
                
            } catch (error) {
                console.error(error);
            }
        }
        getBooks();
    }, [])

    const fetchBooks = async (page) => {
        try {
            const response = await axios.get(`https://anapioficeandfire.com/api/books?page=${page}&pageSize=${perPage}`);
            const event = await response.data;
            // setItems(event);
            return event; 
            
        } catch (error) {
            console.error(error);
        }
    }

    

    const handlePageClick = async (event) =>{
        let page = event.selected + 1;
        const booksFromServer = await fetchBooks(page)
        setItems(booksFromServer)
        console.log(event.selected);
    } 

    let item = items.slice(page * perPage, (page + 1) * perPage);
    return(
        <div>
            <Container className="d-flex justify-content-center my-5">
                <Card className="col-8 shadow-lg border-0 rounded">
                    <Card.Title className="text-center p-4"><h2>Books</h2></Card.Title>
                    <Card.Body>
                        
                        <Table borderless responsive hover>
                            <thead>
                                <tr>
                                    <th>Url</th>
                                    <th>Name of Book </th>
                                    <th>Author</th>
                                    <th>Media Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {item.map((book, i) => {
                                    return (
                                    <tr key={i}>
                                        <td>{book.url}</td>
                                        <td>{book.name}</td>
                                        <td>{book.authors}</td>
                                        <td>
                                            {book.mediaType} 
                                        </td>    
                                    </tr>
                                    )
                                    })

                                } 
                            </tbody>
                        </Table> 
                        <div className="float-end">
                            <ReactPaginate
                                previousLabel={'pre'}
                                nextLabel={'next'}
                                breakLabel={'...'}
                                pageCount={pageCount}
                                onPageChange={handlePageClick}
                                containerClassName={'pagination'}
                                activeClassName={'active'}
                            />
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </div>
          
    );
}