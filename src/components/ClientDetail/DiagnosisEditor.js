import React, { useState, useEffect } from 'react';

const DiagnosisEditor = ({ diagnosis, onSave }) => {
  const [content, setContent] = useState(diagnosis || '');
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    onSave(content);
    setIsEditing(false);
  };

  const handleTextChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Diagnóstico Social</h2>
        {isEditing ? (
          <div className="flex gap-2">
            <button
              onClick={() => setIsEditing(false)}
              className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Cancelar
            </button>
            <button
              onClick={handleSave}
              className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Guardar
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="px-3 py-1 bg-blue-100 text-blue-600 rounded-md hover:bg-blue-200"
          >
            Editar
          </button>
        )}
      </div>

      {isEditing ? (
        <div className="space-y-4">
          <textarea
            value={content}
            onChange={handleTextChange}
            className="w-full h-64 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Escribe el diagnóstico aquí..."
          />
          <div className="flex gap-2">
            <button
              className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
              onClick={() => document.execCommand('bold', false, null)}
            >
              <strong>B</strong>
            </button>
            <button
              className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
              onClick={() => document.execCommand('italic', false, null)}
            >
              <em>I</em>
            </button>
            <button
              className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
              onClick={() => document.execCommand('underline', false, null)}
            >
              <u>U</u>
            </button>
          </div>
        </div>
      ) : (
        <div 
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: content || '<p class="text-gray-500">No hay diagnóstico registrado</p>' }}
        />
      )}
    </div>
  );
};

export default DiagnosisEditor;