const getBase64FromUrl = async (url: string) => {
  let data;
  if (!Object.keys(localStorage).includes(url)) {
    data = await fetch(url);
  }else{
    data = await fetch(localStorage.getItem(url)+'');
  }
  const blob = await data?.blob();
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      const base64data = reader.result;
      resolve(base64data);
    };
  });
};

export default getBase64FromUrl;
