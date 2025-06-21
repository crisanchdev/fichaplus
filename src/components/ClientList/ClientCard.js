import React from 'react';
import formatDate from '../../utils/dateFormat';

const ClientCard = ({ client, onSelect }) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => onSelect(client)}
    >
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">{client.name}</h2>
            <p className="text-gray-600">{client.rut}</p>
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
            {client.gender}
          </span>
        </div>
        
        <div className="mt-4">
          <p className="text-gray-700">
            <span className="font-medium">Contacto:</span> {client.phone} | {client.email}
          </p>
          <p className="text-gray-700 mt-1">
            <span className="font-medium">Dirección:</span> {client.address}
          </p>
        </div>
        
        <div className="mt-4">
          <h3 className="font-medium text-gray-800">Temas tratados:</h3>
          <div className="flex flex-wrap gap-2 mt-1">
            {client.points.map((point, index) => (
              <span key={index} className="bg-gray-100 text-gray-800 text-sm px-2 py-1 rounded">
                {point}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mt-4">
          <p className="text-sm text-gray-500">
            Creado: {formatDate(client.createdAt)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;

// DONE