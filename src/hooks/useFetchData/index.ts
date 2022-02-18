import { useEffect, useState } from 'react';

export default function useFetchData(url: string, dependencies: any[]) {
  const [isLoading, isLoadingSet] = useState(false);
  const [data, dataSet] = useState<any>([]);

  useEffect((): any => {
    const cached = window.localStorage.getItem('cached');
    console.log(JSON.parse(String(cached)));

    isLoadingSet(true);
    if ('cached' in window.localStorage) {
      dataSet(JSON.parse(String(cached)));
      isLoadingSet(false);
    }else{
      fetch(url)
      .then((res) => res.json())
      .then((data) => {
        window.localStorage.setItem('cached', JSON.stringify(data));
        dataSet(data);
        isLoadingSet(false);
      })
      .catch((err) => console.log(err));
    }    
  }, dependencies);

  return [data, isLoading];
}
