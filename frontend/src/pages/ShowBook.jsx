import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:5555/books/${id}`);
        setBook(response.data);
      } catch (error) {
        console.error('Error fetching book:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);
  const formatDate = (dateString) => {
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      fractionalSecondDigits: 3,
      timeZoneName: 'short',
    };
  
    return new Date(dateString).toLocaleString('en-US', options);
  };
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
          <BookDetail label="ID :" value={book._id} />
          <BookDetail label="Title :" value={book.title} />
          <BookDetail label="Author :" value={book.author} />
          <BookDetail label="Publish Year :" value={book.publishYear} />
          <BookDetail label="Create Time :" value={formatDate(book.createdAt)} />
          <BookDetail label="Last Update Time :" value={formatDate(book.updatedAt)} />
        </div>
      )}
    </div>
  );
};

const BookDetail = ({ label, value }) => (
  <div className='my-4'>
    <span className='text-xl mr-4 text-gray-500'>{label}</span>
    <span>{value}</span>
  </div>
);

export default ShowBook;
