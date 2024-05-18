import React, { useState, useEffect } from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { problemsAtom } from './atoms';
import { Link as LinkIcon } from 'react-feather';
import { Typography } from '@mui/material';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Correct import path for Font Awesome
import logo from './assets/logo.png'; // Import the logo
import 'tailwindcss/tailwind.css'
import './index.css';

const Search = () => {
  const problemsLoadable = useRecoilValueLoadable(problemsAtom);
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  const [sortAscending, setSortAscending] = useState(true);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300); // 300ms debounce delay

    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  const handleSearch = (event) => {
    setQuery(event.target.value);
  };

  const handleSort = () => {
    setSortAscending(!sortAscending);
  };

  const sortedProblems = (problems) => {
    return problems
      .filter((problem) => problem.name.toLowerCase().includes(debouncedQuery.toLowerCase()))
      .sort((a, b) => sortAscending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
  };

  return (
    // <div className=" h-screen bg-dark-blue-300 ">
    <div className="absolute inset-0 -z-10 h-full w-full items-center  [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">

      {/* Top bar */}
      <div className=" text-white py-4 px-2 text-center flex justify-center items-center dark: bg-gradient-to-l from-[#130e4a] via-black to-[#130e4a]  rounded-3xl ">
        {/* <Typography variant="h6">Code Saviour</Typography> */}
        <img src={logo} alt="Code Saviour Logo" className="h-12" />
      </div>

      <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
        <div className="md:flex">
          <div className="w-full p-3">
            <div className="relative mt-3">
              <i className="absolute fa fa-search text-gray-400 top-5 left-4"></i>
              <input
                type="text"
                className="bg-[#130e4a] text-white h-14 w-full px-12 rounded-lg hover:cursor-pointer focus:outline-none "
                placeholder="What's Your Problem?"
                value={query}
                onChange={handleSearch}
              />
              
            </div>
          </div>
        </div>
      </div>
      {debouncedQuery && (
        // <div className="relative max-h-[calc(100vh-240px)] overflow-y-auto shadow-md sm:rounded-lg mt-4">
        <div className="relative max-h-[calc(100vh-240px)] overflow-y-auto shadow-md rounded-lg mt-4 scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-gray-800 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">

          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 " >
            <thead className="py-2 sticky top-0 text-xs text-gray-700 uppercase bg-gray-50  dark:bg-[#07062e]  dark:text-gray-400 ">
              <tr>
                <th scope="col" className="px-6 py-5 cursor-pointer" onClick={handleSort}>
                  <div className="flex items-center">
                    Problem Name
                    <svg className="w-3 h-3 ml-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg>
                  </div>
                </th>
                <th scope="col" className="px-6 py-5">Rating</th>
                <th scope="col" className="px-6 py-5">Link</th>
              </tr>
            </thead>
            <tbody>
              {problemsLoadable.state === 'loading' && <tr><td colSpan="3" className="text-center px-2 py-4 "><Typography color="textSecondary">Loading problems...</Typography></td></tr>}
              {problemsLoadable.state === 'hasError' && <tr><td colSpan="3" className="text-center px-2 py-4 "><Typography color="error">Error loading problems.</Typography></td></tr>}
              {problemsLoadable.state === 'hasValue' && sortedProblems(problemsLoadable.contents).length === 0 && (
                <tr className='dark:bg-opacity-30 dark:bg-gray-800 '>
                  <td colSpan="3" className="text-center px-2 py-4 ">
                    No problems found.
                  </td>
                </tr>
              )}
              {problemsLoadable.state === 'hasValue' && sortedProblems(problemsLoadable.contents).map((problem) => (
                <tr key={problem.contestId + problem.index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 dark:bg-opacity-30">
                  <th scope="row" className="pl-2 py-4 w-1/2 font-medium text-gray-900 whitespace-nowrap dark:text-gray-300 ">
                    {problem.name}
                  </th>
                  <td className="px-6 py-4 w-1/3">{problem.rating || '-'}</td>
                  <td className="px-6 py-4 w-1/3">
                    <a
                      href={`https://codeforces.com/problemset/problem/${problem.contestId}/${problem.index}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      <LinkIcon />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      )}
      <div className="absolute inset-x-0 bottom-0 bg-black text-white py-2 px-2 text-center bg-opacity-20 bg-gradient-to-r from-[#130e4a] from-30% via-gray-500 to-70% to-[#130e4a] rounded-md ">
        <Typography variant="body2">Developed by Smit Jogani</Typography>
      </div>
    </div>
  );
};

export default Search;
