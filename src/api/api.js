// eslint-disable-next-line import/prefer-default-export
export const apiCall = link => fetch(link).then(response => response.json());
