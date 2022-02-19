interface LoadingCallback{ (isLoading: boolean): void}
interface DataCallback{ (data: []): void}

export const fetchDataService = (url: string, isLoadingSet: LoadingCallback, dataSet: DataCallback) => {
    let fetchedData = {};
    const cached = window.localStorage.getItem(`cached-${url}`);
    console.log(JSON.parse(String(cached)));
    // isLoadingSet(true);
    if (`cached-${url}` in window.localStorage) {
      dataSet(JSON.parse(String(cached)));
      isLoadingSet(false);
    } else {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          window.localStorage.setItem(`cached-${url}`, JSON.stringify(data));
          dataSet(data);
          fetchedData = data;
          isLoadingSet(false);
        })
        .catch((err) => console.log(err));
    }
    return fetchedData;
  };