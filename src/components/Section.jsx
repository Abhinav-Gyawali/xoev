import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import '../styling/Section.css';
import { useNavigate } from 'react-router-dom';

export default function Section({ title, endpoint }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigator = useNavigate();
  const skeleton = [1, 2, 3];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(endpoint, {
          headers: {
            'Accept': 'application/json, text/plain, */*',
          },
        });
        setItems(response.data); // Assuming response.data is an array of products
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, [endpoint]);

  
  if (loading) {
    return (
      <div className="skeleton section">
        <h2>{title}</h2>
        <div className="items">
          {skeleton.map((item, index) => (
            <div className="item" key={index}>
              <div className="image" />
              <h3></h3>
              <p></p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="section">
      <h2>{title}</h2>
      <div className="items">
        {items.map((item, index) => (
          <div
            className="item"
            onClick={() => navigator(item.url)}
            key={item.id}
          >
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}