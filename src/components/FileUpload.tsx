import React, { useState } from 'react';
import { Upload, FileText, CheckCircle, XCircle } from 'lucide-react';

export default function FileUpload() {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFiles = Array.from(e.dataTransfer.files);
    const validFiles = droppedFiles.filter(file => 
      ['application/pdf', 'text/plain', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
        .includes(file.type)
    );
    
    setFiles(prev => [...prev, ...validFiles]);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`
          border-2 border-dashed rounded-lg p-8
          ${isDragging 
            ? 'border-indigo-500 bg-indigo-50' 
            : 'border-gray-300 hover:border-indigo-400'
          }
          transition-colors duration-200 ease-in-out
        `}
      >
        <div className="flex flex-col items-center text-center">
          <Upload className="h-12 w-12 text-indigo-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Upload Interview Transcripts</h3>
          <p className="text-gray-600 mb-4">
            Drag and drop your files here, or click to select files
          </p>
          <p className="text-sm text-gray-500">
            Supported formats: PDF, DOCX, TXT
          </p>
        </div>
      </div>

      {files.length > 0 && (
        <div className="mt-6 space-y-3">
          {files.map((file, index) => (
            <div key={index} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center space-x-3">
                <FileText className="h-5 w-5 text-indigo-500" />
                <span className="text-gray-700">{file.name}</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <button 
                  onClick={() => setFiles(files.filter((_, i) => i !== index))}
                  className="text-red-500 hover:text-red-600"
                >
                  <XCircle className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}