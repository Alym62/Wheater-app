/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
import propTypes from 'prop-types';
// eslint-disable-next-line linebreak-style
import React from 'react';

function Card({ data }) {
  const { location, current } = data;

  return (

    <div className="bg-white p-6 mt-10 rounded-lg shadow-lg min-w-[250px]">
      <div className="text-center">
        <span className="block text-xl font-bold text-slate-800">{location.name}</span>
        <span className="text-slate-500 text-sm font-medium">{`${location.region}, ${location.country}`}</span>
      </div>

      <div className="font-bold flex mt-5 mb-2 justify-center">
        <span className="text-6xl text-slate-800">{current.temp_c}</span>
        <span className="text-xl text-slate-800 mt-2">°C</span>
      </div>

      <div className="flex justify-center flex-col items-center">
        <img src={current.condition.icon} alt="icone" />
        <span className="text-slate-800 font-medium">{current.condition.text}</span>
      </div>

    </div>

  );
}

export default Card;

Card.propTypes = {
  data: propTypes.object,
}.isRequired;
