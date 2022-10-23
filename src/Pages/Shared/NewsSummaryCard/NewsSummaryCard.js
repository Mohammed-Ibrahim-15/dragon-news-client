import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaShareAlt, FaBookmark, FaStar, FaEye } from "react-icons/fa";


const NewsSummaryCard = ({ news }) => {
    const { _id, title, author, details, image_url, total_view, rating } = news
    console.log(news)
    return (
        <Card className="mb-5">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex'>
                    <Image
                        roundedCircle
                        src={author.img}
                        style={{ height: "60px" }}
                    ></Image>
                    <div className='ms-2'>
                        <p className='mb-0'>{author.name}</p>
                        <p>{author.published_date}</p>
                    </div>
                </div>
                <div>
                    <FaShareAlt className='me-2'></FaShareAlt>
                    <FaBookmark></FaBookmark>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                        details.length > 180 ?
                            <p>{details.slice(0, 180) + '...'} <Link to={`/news/${_id}`}>Read More</Link> </p>
                            :
                            <p>{details}</p>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <FaStar className='me-2 text-warning' />
                        {rating.number}

                    </div>
                    <div>
                        <FaEye className='me-2 text-primary' />
                        {total_view}
                    </div>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsSummaryCard;