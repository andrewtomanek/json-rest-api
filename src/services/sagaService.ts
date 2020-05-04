interface NoteRequest {
  payload: { id: number; title?: string };
  type: string;
}
interface IdRequest {
  payload: number;
  type: string;
}

type RequestId = number;

const BASE_URL = "https://private-anon-1248a7e5c8-note10.apiary-mock.com";

export const getAllNotes = async () => {
  const API_ENDPOINT = BASE_URL + `/notes`;

  try {
    let response = await fetch(API_ENDPOINT);
    return await response.json();
  } catch (err) {
    throw err;
  }
};

export const retrieveNote = async (request: IdRequest) => {
  const noteId = request.payload;
  const API_ENDPOINT = BASE_URL + `/notes/${noteId}`;
  const parameters = {
    method: "GET"
  };

  try {
    let response = await fetch(API_ENDPOINT, parameters);
    return await response.json();
  } catch (err) {
    throw err;
  }
};

export const uploadNote = async (request: NoteRequest) => {
  const API_ENDPOINT = BASE_URL + `/notes`;
  const parameters = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(request.payload)
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
  const API_ENDPOINT = BASE_URL + `/notes/${noteId}`;
  const parameters = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(request.payload.title)
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
  const API_ENDPOINT = BASE_URL + `/notes/${noteId}`;
  const parameters = {
    method: "DELETE"
  };

  try {
    let response = await fetch(API_ENDPOINT, parameters);
    return await response.json();
  } catch (err) {
    throw err;
  }
};
