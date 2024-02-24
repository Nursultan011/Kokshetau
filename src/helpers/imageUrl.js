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

export const parseFile = (event, name) => {
  try {
    const parsedArray = JSON.parse(event);

    if(name == 'link'){
      return `${baseUrl}storage/${parsedArray[0].download_link}`;
      // return parsedArray.map(item => `${baseUrl}storage/${item.download_link}`);
    }else if(name == 'name'){
      return parsedArray[0].original_name;
      // return parsedArray.map(item => `${item.original_name}`);
    }
  } catch (e) {
    console.log("Ошибка при разборе JSON: ", e);
    return "";
  }
}

