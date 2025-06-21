import React from 'react';

const ClientListHeader = ({ onSearch, onFilterChange }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
      <h1 className="text-2xl font-bold text-gray-900">Fichas de Clientes</h1>
      <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
        <input
          type="text"
          placeholder="Buscar cliente..."
          onChange={(e) => onSearch(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <select
          onChange={(e) => onFilterChange(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Todos</option>
          <option value="Vivienda">Vivienda</option>
          <option value="Salud">Salud</option>
          <option value="Empleo">Empleo</option>
          <option value="Educación">Educación</option>
        </select>
      </div>
    </div>
  );
};

export default ClientListHeader;