import { Table, Card, Container } from 'react-bootstrap';

import { useState, useEffect } from 'react';

import axios from 'axios';

import ReactPaginate from 'react-paginate';

// import './BookComment.css'


export default function Comments(){

    const [items, setItems] = useState([]);
    const [perPage, setPerPage] = useState(5);
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);

    useEffect(() => {
        const getComments = async () => {
            
            try {
                const response = await axios.get(`https://findwork-backend.herokuapp.com/comment`);
                const event = await response.data;
                const total = response.data.length;
                setPage(0);
                setPerPage(Math.ceil(5 * 1));
                setPageCount(Math.ceil(total / perPage))

                // console.log(perPage);
                setItems(event);
                
            } catch (error) {
                console.error(error);
            }
        }
        getComments();
    }, [])

    const fetchComments = async () => {
        try {
            const response = await axios.get(`https://findwork-backend.herokuapp.com/comment`);
            const event = await response.data;
            setItems(event);
            return event; 
            
        } catch (error) {
            console.error(error);
        }
    }

    

    const handlePageClick = async (event) =>{
        let page = event.selected;
        setPage(page)
        console.log(page);
    } 

    let item = items.slice(page * perPage, (page + 1) * perPage);
    return(
        <div>
            <Container className="d-flex justify-content-center my-5">
                <Card className="col-8 shadow-lg border-0 rounded">
                    <Card.Title className="text-center p-4"><h2>Comments</h2></Card.Title>
                    <Card.Body>
                        
                        <Table borderless responsive hover>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name of Book </th>
                                    <th>Comment</th>
                                    <th>Date Created</th>
                                </tr>
                            </thead>
                            <tbody>
                                {item.map((book, i) => {
                                    return (
                                    <tr key={i}>
                                        <td>{book.Id}</td>
                                        <td>{book.BookName}</td>
                                        <td>{book.CommentText}</td>
                                        <td>
                                            {book.DateCreated} 
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
