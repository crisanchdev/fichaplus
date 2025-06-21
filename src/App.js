import React, { useState } from 'react';
import ClientList from './components/ClientList/ClientList';
import ClientDetail from './components/ClientDetail/ClientDetail';
import ExportButton from './components/ExportButton';
import AddClientButton from './components/AddClientButton';
import NewClientForm from './components/ClientDetail/NewClientForm';
import clientsData from './mock/clients';
import { checkDueDates } from './utils/dateUtils';

const App = () => {
  const [selectedClient, setSelectedClient] = useState(null);
  const [clients, setClients] = useState(clientsData.map(client => ({
    ...client,
    actionPlan: checkDueDates(client.actionPlan)
  })));
  const [isAddingNewClient, setIsAddingNewClient] = useState(false);

  const handleExport = () => {
    console.log('Exportando datos a Excel:', clients);
    alert('Datos exportados a Excel (simulación)');
  };

  const handleSaveClient = (updatedClient) => {
    setClients(clients.map(client => 
      client.id === updatedClient.id ? {
        ...updatedClient,
        actionPlan: checkDueDates(updatedClient.actionPlan)
      } : client
    ));
  };

  const handleAddNewClient = (newClient) => {
    setClients(prevClients => [
      {
        ...newClient,
        actionPlan: checkDueDates(newClient.actionPlan)
      },
      ...prevClients
    ]);
    setIsAddingNewClient(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {!selectedClient && !isAddingNewClient ? (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold text-gray-900">Gestor de Fichas Sociales</h1>
              <div className="flex gap-3">
                <ExportButton onClick={handleExport} />
                <AddClientButton onClick={() => setIsAddingNewClient(true)} />
              </div>
            </div>
            <ClientList 
              onSelectClient={setSelectedClient} 
            />
          </div>
        ) : selectedClient ? (
          <ClientDetail 
            client={selectedClient} 
            onBack={() => setSelectedClient(null)}
            onSave={handleSaveClient}
          />
        ) : (
          <NewClientForm 
            onSave={handleAddNewClient} 
            onCancel={() => setIsAddingNewClient(false)} 
          />
        )}
      </div>
    </div>
  );
};

export default App;

// DONE