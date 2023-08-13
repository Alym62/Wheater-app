/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-first-prop-new-line */
import React, { useState } from 'react';
import Card from './components/Card';
import initialData from './halpers/initialData';
import fetchData from './services/api';

function App() {
  const [city, setCity] = useState('');
  const [data, setData] = useState(initialData);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData(city).then((response) => {
      setData(response);
    });
  };

  return (
    <div className="bg-slate-800 flex flex-col w-full h-screen items-center sm:justify-center p-4">
      <form onSubmit={handleSubmit} className="fixed bottom-0 w-full flex p-4 sm:relative justify-center">
        <input type="text"
          placeholder="Search City"
          className="p-3 rounded-lg outline-none w-5 sm:max-w-[300px] flex-1"
          onChange={({ target: { value } }) => setCity(value)}
          value={city}
        />
        <button type="submit"
          className="bg-blue-700 p-3 rounded-lg ml-3 text-white font-bold"
        >
          Search
        </button>
      </form>

      <Card data={data} />
    </div>

  );
}

export default App;
