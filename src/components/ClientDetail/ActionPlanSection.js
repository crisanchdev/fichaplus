import React from 'react';
import formatDate from '../../utils/dateFormat';

const getResponsibleColor = (responsible) => {
  switch(responsible) {
    case 'Trabajadora Social':
      return 'bg-purple-100 text-purple-800';
    case 'Cliente':
      return 'bg-green-100 text-green-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getDueStatusColor = (status) => {
  switch(status) {
    case 'urgent':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'overdue':
      return 'bg-red-100 text-red-800 border-red-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

const ActionPlanSection = ({ actionPlan }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Plan de Acción</h2>
      
      <div className="space-y-4">
        {actionPlan.map((item, index) => (
          <div 
            key={index} 
            className={`p-4 border rounded-lg ${item.completed ? 'border-green-200 bg-green-50' : getDueStatusColor(item.dueStatus)}`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-gray-800">{item.task}</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Fecha límite: {formatDate(item.dueDate)}
                </p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className={`px-2 py-1 text-xs rounded-full ${item.completed ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                  {item.completed ? 'Completado' : 'Pendiente'}
                </span>
                <span className={`px-2 py-1 text-xs rounded-full ${getResponsibleColor(item.responsible)}`}>
                  {item.responsible}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActionPlanSection;