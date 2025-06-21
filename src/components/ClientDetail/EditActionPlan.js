import React, { useState } from 'react';

const EditActionPlan = ({ actionPlan, onSave }) => {
  const [tasks, setTasks] = useState(actionPlan);
  
  const handleTaskChange = (index, field, value) => {
    const newTasks = [...tasks];
    newTasks[index][field] = value;
    setTasks(newTasks);
  };

  const addTask = () => {
    setTasks([...tasks, {
      task: '',
      dueDate: '',
      completed: false,
      responsible: 'Cliente'
    }]);
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const saveChanges = () => {
    onSave(tasks);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Plan de Acción</h2>
        <div className="flex gap-2">
          <button
            onClick={addTask}
            className="px-3 py-1 bg-blue-100 text-blue-600 rounded-md hover:bg-blue-200"
          >
            + Añadir tarea
          </button>
          <button
            onClick={saveChanges}
            className="px-3 py-1 bg-green-100 text-green-600 rounded-md hover:bg-green-200"
          >
            Guardar
          </button>
        </div>
      </div>
      
      <div className="space-y-4">
        {tasks.map((task, index) => (
          <div key={index} className="p-4 border border-gray-200 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
              <div className="md:col-span-2">
                <label className="block text-sm text-gray-600 mb-1">Tarea</label>
                <input
                  type="text"
                  value={task.task}
                  onChange={(e) => handleTaskChange(index, 'task', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Fecha límite</label>
                <input
                  type="date"
                  value={task.dueDate}
                  onChange={(e) => handleTaskChange(index, 'dueDate', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Responsable</label>
                <select
                  value={task.responsible}
                  onChange={(e) => handleTaskChange(index, 'responsible', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="Cliente">Cliente</option>
                  <option value="Trabajadora Social">Trabajadora Social</option>
                </select>
              </div>
              <div className="flex items-center justify-end md:justify-start">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={(e) => handleTaskChange(index, 'completed', e.target.checked)}
                    className="rounded text-blue-600"
                  />
                  <span className="ml-2 text-sm text-gray-600">Completado</span>
                </label>
              </div>
            </div>
            
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => removeTask(index)}
                className="text-sm text-red-600 hover:text-red-800"
              >
                Eliminar tarea
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditActionPlan;

// DONE