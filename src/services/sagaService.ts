interface NoteRequest {
  payload: { id: number; title?: string };
  type: string;
}
interface IdRequest {
  payload: number;
  type: string;
}

type RequestId = number;

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getAllNotes = async () => {
  const API_ENDPOINT = BASE_URL + `/posts`;

  try {
    let response = await fetch(API_ENDPOINT);
    return await response.json();
  } catch (err) {
    throw err;
  }
};

export const retrieveNote = async (request: IdRequest) => {
  const noteId = request.payload;
  const API_ENDPOINT = BASE_URL + `/posts/${noteId}`;
  const parameters = {
    method: "GET",
  };

  try {
    let response = await fetch(API_ENDPOINT, parameters);
    return await response.json();
  } catch (err) {
    throw err;
  }
};

export const uploadNote = async (request: NoteRequest) => {
  const API_ENDPOINT = BASE_URL + `/posts`;
  const parameters = {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(request.payload),
  };

  try {
    let response = await fetch(API_ENDPOINT, parameters);
    return await response.json();
  } catch (err) {
    throw err;
  }
};

export const updateNote = async (request: NoteRequest) => {
  const noteId: RequestId = request.payload.id;
  const API_ENDPOINT = BASE_URL + `/posts/${noteId}`;
  const parameters = {
    method: "PUT",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(request.payload),
  };

  try {
    let response = await fetch(API_ENDPOINT, parameters);
    return await response.json();
  } catch (err) {
    throw err;
  }
};

export const deleteNote = async (request: IdRequest) => {
  const noteId = request.payload;
  const API_ENDPOINT = BASE_URL + `/posts/${noteId}`;
  const parameters = {
    method: "DELETE",
  };

  try {
    let response = await fetch(API_ENDPOINT, parameters);
    return await response.json();
  } catch (err) {
    throw err;
  }
};
