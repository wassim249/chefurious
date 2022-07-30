const Cookies = require("js-cookie");

export const getCookie = (key: string): string => {  
  return Cookies.get(key);
};

export const setCookie = (key: string, value: string): string | null => {
  try {
    Cookies.set(key, value);
    return value;
  } catch (error) {

    return null;
  }
};
