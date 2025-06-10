import React from "react";

const AcademicProject = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Courses Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">Academic Courses</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <span className="text-sm font-semibold text-gray-600">Course Code:</span>
                  <span className="ml-2 text-lg font-medium text-gray-800">CSE115</span>
                </div>
                <div className="mt-2 sm:mt-0">
                  <span className="text-sm font-semibold text-gray-600">Course Name:</span>
                  <span className="ml-2 text-lg font-medium text-gray-800">C Language</span>
                </div>
              </div>
            </div>
            {/* Add more courses following the same structure */}
          </div>
        </div>

        {/* Projects Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">Academic Projects</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex flex-col">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Project Title</h3>
                <p className="text-gray-600 mb-3">Project description goes here. This can be a brief overview of what the project entails.</p>
                <div className="flex items-center space-x-4">
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    View Project
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            {/* Add more projects following the same structure */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicProject; 