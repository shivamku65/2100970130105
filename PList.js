import React,{ useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const PList =() => {
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState({
        category: '',
        company: '',
        rating: '',
        priceRange: '',
        avilability:''
    });

   
    
      return (
        <div>
          <h1>Product List</h1>
          <div>
            <label>
              Category:
              <input type="text" name="category" value={filters.category} onChange={handleFilterChange} />
            </label>
            <label>
              Company:
              <input type="text" name="company" value={filters.company} onChange={handleFilterChange} />
            </label>
            <label>
              Rating:
              <input type="number" name="rating" value={filters.rating} onChange={handleFilterChange} />
            </label>
            <label>
              Price Range:
              <input type="number" name="priceRange" value={filters.priceRange} onChange={handleFilterChange} />
            </label>
            <label>
              Availability:
              <input type="text" name="availability" value={filters.availability} onChange={handleFilterChange} />
            </label>
          </div>
        </div>
      );
    };
    
    export default PList;
