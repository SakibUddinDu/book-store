import React from 'react';
import { useDispatch } from 'react-redux';
import { statusChanged } from './../../Redux/filters/actions';

const Filters = () => {
  const dispatch = useDispatch()
  const handleStatusChange = (status) => {
    console.log("handleStatusChange clicked")
    dispatch(statusChanged(status));
};
  
    return (
        <div className="flex items-center justify-between mb-12">
            <h4 className="mt-2 text-xl font-bold">Book List</h4>

            <div className="flex items-center space-x-4">
              <button className="filter-btn active-filter" id="lws-filterAll" onClick={() => handleStatusChange("All")}>
                All
              </button>
              <button className="filter-btn" id="lws-filterFeatured" onClick={() => handleStatusChange("Featured")}>
                Featured
              </button>
            </div>
        </div>
    );
};

export default Filters;