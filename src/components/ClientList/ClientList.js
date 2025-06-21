import React, { useState, useEffect } from 'react';
import clientsData from '../../mock/clients';
import ClientCard from './ClientCard';
import ClientListHeader from './ClientListHeader';

const ClientList = ({ onSelectClient }) => {
  const [clients, setClients] = useState(clientsData);
  const [filteredClients, setFilteredClients] = useState(clientsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    let results = clients;
    
    if (searchTerm) {
      results = results.filter(client =>
        client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.rut.includes(searchTerm)
      );
    }
    
    if (filter) {
      results = results.filter(client =>
        client.points.some(point => point.includes(filter))
      );
    }
    
    setFilteredClients(results);
  }, [searchTerm, filter, clients]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  return (
    <div className="space-y-6">
      <ClientListHeader 
        onSearch={handleSearch} 
        onFilterChange={handleFilterChange} 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClients.map(client => (
          <ClientCard 
            key={client.id} 
            client={client} 
            onSelect={onSelectClient}
          />
        ))}
      </div>
    </div>
  );
};

export default ClientList;