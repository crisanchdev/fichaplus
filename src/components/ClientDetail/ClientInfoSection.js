import React from 'react';
import formatDate from '../../utils/dateFormat';

const ClientInfoSection = ({ client }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Información Personal</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="text-gray-600">Nombre completo</p>
          <p className="font-medium">{client.name}</p>
        </div>
        
        <div>
          <p className="text-gray-600">RUT</p>
          <p className="font-medium">{client.rut}</p>
        </div>
        
        <div>
          <p className="text-gray-600">Fecha de nacimiento</p>
          <p className="font-medium">
            {formatDate(client.birthDate)}
          </p>
        </div>
        
        <div>
          <p className="text-gray-600">Género</p>
          <p className="font-medium">{client.gender}</p>
        </div>
        
        <div>
          <p className="text-gray-600">Teléfono</p>
          <p className="font-medium">{client.phone}</p>
        </div>
        
        <div>
          <p className="text-gray-600">Email</p>
          <p className="font-medium">{client.email}</p>
        </div>
        
        <div className="md:col-span-2">
          <p className="text-gray-600">Dirección</p>
          <p className="font-medium">{client.address}</p>
        </div>
      </div>
    </div>
  );
};

export default ClientInfoSection;