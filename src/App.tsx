import React from 'react';
import Header from './components/Header';
import FileUpload from './components/FileUpload';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Transform Your Interview Process
          </h2>
          <p className="text-lg text-gray-600">
            Upload interview transcripts and let our AI-powered platform extract valuable insights
            to make informed hiring decisions.
          </p>
        </div>

        <Dashboard />

        <div className="mt-12">
          <FileUpload />
        </div>
      </main>

      <footer className="bg-gray-900 text-white mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Continuity Interview Support (CIS). All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;