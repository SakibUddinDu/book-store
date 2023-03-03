import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { statusChanged } from './../../Redux/filters/actions';

const Filters = () => {
  const dispatch = useDispatch();
  const [activeFilter, setActiveFilter] = useState('All');

  const handleStatusChange = (status) => {
    console.log("handleStatusChange clicked")
    dispatch(statusChanged(status));
    setActiveFilter(status);
  };

  return (
    <div className="flex items-center justify-between mb-12">
      <h4 className="mt-2 text-xl font-bold">Book List</h4>

      <div className="flex items-center space-x-4">
        <button className={`filter-btn ${activeFilter === 'All' ? 'active-filter' : ''}`} id="lws-filterAll" onClick={() => handleStatusChange("All")}>
          All
        </button>
        <button className={`filter-btn ${activeFilter === 'Featured' ? 'active-filter' : ''}`} id="lws-filterFeatured" onClick={() => handleStatusChange("Featured")}>
          Featured
        </button>
      </div>
    </div>
  );
};

export default Filters;