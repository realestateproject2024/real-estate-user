export const BASE_URL = "http://165.232.184.106/api";

export const getOtpApi = async (dataToSend) => {
  try {
    const response = await fetch(`${BASE_URL}/user/signUp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    });

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};
export const signUpApi = async (dataToSend) => {
  try {
    const response = await fetch(`${BASE_URL}/user/signUp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    });

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};
export const registerApi = async (dataToSend) => {
  try {
    const response = await fetch(`${BASE_URL}/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    });

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

export const userLoginApi = async (dataToSend) => {
  try {
    const response = await fetch(`${BASE_URL}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    });

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

export const loginApi = async (dataToSend) => {
  try {
    const response = await fetch(`${BASE_URL}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    });

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

export const getPropertyApi = async ({ page, count }) => {
  try {
    const response = await fetch(
      `${BASE_URL}/property?page=${page}&count=${count}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify(dataToSend),
      }
    );

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};
