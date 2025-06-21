import React, { useState } from 'react';
import ClientInfoSection from './ClientInfoSection';
import ActionPlanSection from './ActionPlanSection';
import AttachmentsSection from './AttachmentsSection';
import EditClientForm from './EditClientForm';
import EditActionPlan from './EditActionPlan';
import ExportPDFButton from '../ExportPDFButton';

const ClientDetail = ({ client, onBack, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingPlan, setIsEditingPlan] = useState(false);
  const [currentClient, setCurrentClient] = useState(client);

  const handleSaveClient = (updatedClient) => {
    setCurrentClient(updatedClient);
    onSave(updatedClient);
    setIsEditing(false);
  };

  const handleSavePlan = (updatedPlan) => {
    const updatedClient = {
      ...currentClient,
      actionPlan: updatedPlan
    };
    setCurrentClient(updatedClient);
    onSave(updatedClient);
    setIsEditingPlan(false);
  };

  const handleAddAttachment = (newAttachment) => {
    const updatedClient = {
      ...currentClient,
      attachments: [...currentClient.attachments, newAttachment]
    };
    setCurrentClient(updatedClient);
    onSave(updatedClient);
  };

  const handleExportPDF = () => {
    alert(`Exportando ficha de ${currentClient.name} a PDF (simulación)`);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <button 
          onClick={onBack}
          className="flex items-center text-blue-600 hover:text-blue-800"
        >
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Volver al listado
        </button>
        
        {!isEditing && !isEditingPlan && (
          <div className="flex gap-3">
            <ExportPDFButton onClick={handleExportPDF} />
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Editar Ficha
            </button>
          </div>
        )}
      </div>
      
      {isEditing ? (
        <EditClientForm 
          client={currentClient} 
          onSave={handleSaveClient} 
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <>
          <ClientInfoSection client={currentClient} />
          
          {isEditingPlan ? (
            <EditActionPlan 
              actionPlan={currentClient.actionPlan} 
              onSave={handleSavePlan}
            />
          ) : (
            <>
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800">Plan de Acción</h2>
                <button
                  onClick={() => setIsEditingPlan(true)}
                  className="px-3 py-1 bg-blue-100 text-blue-600 rounded-md hover:bg-blue-200"
                >
                  Editar Plan
                </button>
              </div>
              <ActionPlanSection actionPlan={currentClient.actionPlan} />
            </>
          )}
          
          <AttachmentsSection 
            attachments={currentClient.attachments} 
            onAddAttachment={handleAddAttachment}
          />
        </>
      )}
    </div>
  );
};

export default ClientDetail;

// DONE