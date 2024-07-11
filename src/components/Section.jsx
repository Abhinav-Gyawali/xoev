import React,{ useState, useEffect} from 'react'
import axios from 'axios'
import '../styling/Section.css'

export default function Section({ title, endpoint }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(endpoint)
      .then(response => {
        setItems(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data", error);
        setLoading(true);
      });
  }, [endpoint]);

  return (
    <div className="section">
      <h2>{title}</h2>
      <div className="items">
        {loading ? (
          Array(4).fill().map((_, index) => (
            <div className="item skeleton" key={index}>
              <div className="skeleton-image" />
              <div className="skeleton-text skeleton-text-title" />
              <div className="skeleton-text skeleton-text-price" />
            </div>
          ))
        ) : (
          items.map(item => (
            <div className="item" key={item.id}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>${item.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}