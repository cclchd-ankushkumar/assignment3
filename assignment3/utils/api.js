export const apiCalling = async (url, method, headers, body) => {
  try {
    const requestOptions = {
      method: method,
      headers: headers,
      body: body,
    };

    const response = await fetch(url, requestOptions);
    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
};

