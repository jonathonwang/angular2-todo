// NPM Dependency Imports
import 'whatwg-fetch';
// Env Import
import { env } from '../env';
const baseUrl = env.serverUrl;

// Setup Headers
const headers = new Headers();
headers.set('Content-Type', 'application/json');

const checkResponse = (response, successCb: Function, errorCb: Function) => {
  if (response.ok) {
    response.json()
    .then((data) => successCb(data));
  } else {
    errorCb(response);
  }
};

export const api = {
  fetchTasks(successCb: Function, errorCb: Function) {
    fetch(baseUrl + '/tasks')
    .then((response) => {
      checkResponse(response, successCb, errorCb);
    });
  },
  createTask(newTask, successCb: Function, errorCb: Function) {
    const newTaskJson = JSON.stringify(newTask);
    fetch(baseUrl + '/tasks', { method: 'POST', body: newTaskJson, headers })
    .then((response) => {
      checkResponse(response, successCb, errorCb);
    });
  },
  editTask(editTask, successCb: Function, errorCb: Function) {
    const editTaskJson = JSON.stringify(editTask);
    fetch(baseUrl + '/tasks/' + editTask.id, { method: 'PUT', body: editTaskJson, headers })
    .then((response) => {
      checkResponse(response, successCb, errorCb);
    });
  },
  deleteTask(deleteTaskId: number, successCb: Function, errorCb: Function) {
    fetch(baseUrl + '/tasks/' + deleteTaskId, { method: 'DELETE' })
    .then((response) => {
      checkResponse(response, successCb, errorCb);
    });
  }
};

export default api;
