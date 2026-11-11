export function normalizePriority(priority){return priority==='普通'?'中':['低','中','高','紧急'].includes(priority)?priority:'中'}
export function priorityClass(priority){return `priority-${({低:'low',中:'medium',高:'high',紧急:'urgent'})[normalizePriority(priority)]}`}
