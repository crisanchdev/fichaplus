export const checkDueDates = (actionPlan) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  return actionPlan.map(task => {
    const dueDate = new Date(task.dueDate);
    dueDate.setHours(0, 0, 0, 0);
    
    const diffTime = dueDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    let status = 'normal';
    if (diffDays < 0) {
      status = 'overdue';
    } else if (diffDays <= 3) {
      status = 'urgent';
    }
    
    return {
      ...task,
      dueStatus: status
    };
  });
};

export const getDueDateAlert = (actionPlan) => {
  const urgentTasks = actionPlan.filter(task => task.dueStatus === 'urgent' && !task.completed);
  const overdueTasks = actionPlan.filter(task => task.dueStatus === 'overdue' && !task.completed);
  
  if (overdueTasks.length > 0) {
    return {
      type: 'error',
      message: `¡Alerta! ${overdueTasks.length} tarea(s) vencida(s)`
    };
  }
  
  if (urgentTasks.length > 0) {
    return {
      type: 'warning',
      message: `¡Atención! ${urgentTasks.length} tarea(s) por vencer en menos de 3 días`
    };
  }
  
  return null;
};