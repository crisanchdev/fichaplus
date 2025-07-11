import React from 'react';
import UploadButton from '../UploadButton';

const AttachmentsSection = ({ attachments, onAddAttachment }) => {
  const getFileIcon = (type) => {
    switch(type) {
      case 'pdf':
        return (
          <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        );
      case 'image':
        return (
          <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      default:
        return (
          <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
    }
  };

  const handleUpload = (file) => {
    const newAttachment = {
      name: file.name,
      type: file.type.split('/')[1] === 'pdf' ? 'pdf' : 
            file.type.startsWith('image/') ? 'image' : 'file',
      date: new Date().toISOString().split('T')[0]
    };
    onAddAttachment(newAttachment);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Documentos Adjuntos</h2>
        <UploadButton onUpload={handleUpload} />
      </div>
      
      {attachments.length === 0 ? (
        <p className="text-gray-500">No hay documentos adjuntos</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {attachments.map((file, index) => (
            <div key={index} className="flex flex-col items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
              {getFileIcon(file.type)}
              <p className="mt-2 text-sm text-center text-gray-700 truncate w-full">{file.name}</p>
              <p className="text-xs text-gray-500">{file.date}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AttachmentsSection;