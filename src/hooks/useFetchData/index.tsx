import {useEffect, useState} from 'react';
import fetchDataService from '../../helpers/api';

export default function useFetchData(url: string, dependencies: Array<any>) {
  const [isLoading, isLoadingSet] = useState(false);
  const [data, dataSet] = useState<any>([]);

  useEffect((): any => {
    let isApiSubscribed = true;
    if (isApiSubscribed) {
      fetchDataService(url, isLoadingSet, dataSet);
    }

    return () => {
      isApiSubscribed = false;
    };
  }, dependencies);

  return [data, isLoading];
}
