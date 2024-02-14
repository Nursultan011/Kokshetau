export const getImg = (event) => {
  const baseUrl = process.env.VUE_APP_BASE_URL_DEFAULT;
  return `${baseUrl}storage/${event}`;
}

export const getIcon = (event) => {
  const baseUrl = process.env.VUE_APP_BASE_URL_DEFAULT;

  try {
    const parsedArray = JSON.parse(event);

    return parsedArray.map(item => `${baseUrl}storage/${item.download_link}`);
  } catch (e) {
    console.error("Ошибка при разборе JSON: ", e);
    return "";
  }
}

