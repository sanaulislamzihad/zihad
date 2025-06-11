import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const AcademicProject = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={`min-h-screen transition-all duration-300`}> 
      {/* Top area to match navbar background, now always #000000 */}
      <div className="w-full fixed left-0 right-0 top-0 h-20 z-0" style={{ background: '#000000' }}></div>
      <div className={`relative mt-16 pt-4 pb-8 px-1 sm:px-2 lg:px-4 ${darkMode ? 'bg-black text-white' : 'bg-gray-100 text-gray-900'}`}> 
        <h2 className={`text-2xl sm:text-3xl font-bold text-center mb-4 mt-2 transition-all duration-300 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>Academic Project</h2>
        <div className="w-full mx-auto">
          <div className={`rounded-lg shadow-md p-3 sm:p-4 transition-all duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}> 
            <div className="overflow-x-auto">
              <table className={`min-w-full divide-y transition-all duration-300 ${darkMode ? 'divide-gray-700' : 'divide-gray-200'}`}>
                <thead className={darkMode ? 'bg-gray-800 text-gray-100' : 'bg-gray-50 text-gray-700'}>
                  <tr>
                    <th className="px-3 py-2 text-left text-xs font-medium uppercase tracking-wider">Course Name</th>
                    <th className="px-3 py-2 text-left text-xs font-medium uppercase tracking-wider">Course Code</th>
                    <th className="px-3 py-2 text-left text-xs font-medium uppercase tracking-wider">Project Name</th>
                    <th className="px-3 py-2 text-left text-xs font-medium uppercase tracking-wider">View Project</th>
                  </tr>
                </thead>
                <tbody className={darkMode ? 'bg-gray-900 text-white divide-y divide-gray-700' : 'bg-white text-gray-900 divide-y divide-gray-200'}>
                  <tr>
                    <td className="px-3 py-2 whitespace-nowrap text-sm">C</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm">CSE115</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm">Library Management</td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      <a href="https://github.com/your-github-link" target="_blank" rel="noopener noreferrer" className={`underline transition-colors duration-200 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}>GitHub</a>
                    </td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicProject; 