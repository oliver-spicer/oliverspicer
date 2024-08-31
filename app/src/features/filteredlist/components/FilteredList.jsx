import { useState, useEffect } from 'react';

export default function FilteredList({
  data,
  filter,
  renderFilter,
  renderList,
}) {
  const [filteredItems, setFilteredItems] = useState([]);
  const [currentFilter, setCurrentFilter] = useState('');
  const filters = ['All', ...new Set(data.map((e) => e[filter]))];
  const filterItems = (criteria) => {
    setCurrentFilter(criteria);
    setFilteredItems(() => {
      if (criteria === 'All') return data;

      return data.filter((item) => item[filter] === criteria);
    });
  };

  useEffect(() => {
    setFilteredItems(data || []);
    setCurrentFilter('All');
  }, []);

  if (!Array.isArray(data) || data?.length === 0 || !data[0][filter]) {
    return 'error';
  }
  if (typeof renderFilter !== 'function') {
    renderFilter = (filter, isActive, action) => (
      <div key={Math.random() * 10000} onClick={() => action(filter)}>
        {filter}
      </div>
    );
  }
  if (typeof renderList !== 'function') {
    renderList = (items) => (
      <div>
        {items.map((item) => (
          <div key={Math.random() * 10000}>{item.label}</div>
        ))}
      </div>
    );
  }

  return (
    <div className="">
      <div className="flex justify-evenly">
        {filters.map((filter) =>
          renderFilter(filter, currentFilter === filter, filterItems)
        )}
      </div>
      <div className="">{renderList(filteredItems)}</div>
    </div>
  );
}
