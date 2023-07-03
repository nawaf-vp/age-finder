import { useState } from 'react';
import PropTypes from 'prop-types';

const AgeCalculatorForm = ({ calculateAge }) => {
  const [birthDate, setBirthDate] = useState('');

  const handleChangeDate = (e) => {
    setBirthDate(e.target.value);
  };
  const handleSubmit = (e) => {
      e.preventDefault();
      calculateAge(birthDate);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4'
    >
      <input
        className='bg-orange-300 border border-orange-400 text-gray-900 text-sm shadow-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-orange-400 dark:border-orange-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        value={birthDate}
        type='date'
        onChange={handleChangeDate}
      />
      <button
        className='disabled:bg-slate-400 disabled:cursor-not-allowed text-white  shadow-2xl bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-950 dark:hover:bg-blue-950 focus:outline-none dark:focus:ring-blue-950'
        disabled={!birthDate}
        type='submit'
      >
        Calculate Age
      </button>
    </form>
  );
};

AgeCalculatorForm.propTypes = {
  calculateAge: PropTypes.func.isRequired,
};

export default AgeCalculatorForm;