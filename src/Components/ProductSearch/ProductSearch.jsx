import React, { useState } from 'react';
import './ProductSearch.css'; 
const ProductSearch = ({ products, onSelect }) => {
  const [search, setSearch] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (value.trim() === '') {
      setSuggestions([]);
    } else {
      const filtered = products.filter(p =>
        p.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5));
    }
  };

  return (
    <div className="NavSearch" style={{ position: 'relative', margin: '0 24px' }}>
      <input
        type="text"
        placeholder="Product Search..."
        value={search}
        onChange={handleChange}
        style={{ padding: '6px 12px', borderRadius: 6, border: '1px solid #ccc', minWidth: 200 }}
      />
      {suggestions.length > 0 && (
        <ul className="NavSearchSuggestions" style={{
          position: 'absolute',
          background: '#fff',
          border: '1px solid #eee',
          borderRadius: 6,
          marginTop: 2,
          zIndex: 10,
          width: '220px',
          listStyle: 'none',
          padding: 0
        }}>
          {suggestions.map(item => (
            <li
              key={item.id}
              style={{ padding: '8px 12px', cursor: 'pointer' }}
              onClick={() => {
                setSearch('');
                setSuggestions([]);
                onSelect(item.id);
              }}
            >
                {item.image && (
              <img src={item.image} alt={item.name} style={{ width: 30, height: 30, marginRight: 8, borderRadius: '30%' }} />
            )}
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductSearch;