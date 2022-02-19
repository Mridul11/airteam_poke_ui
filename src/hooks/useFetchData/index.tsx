import { useEffect, useState } from 'react';
import fetchDataService  from '../../helpers/api';

export default function useFetchData(url: string, dependencies: Array<any>) {
  const [isLoading, isLoadingSet] = useState(false);
  const [data, dataSet] = useState<any>([]);

  useEffect((): any => {
    fetchDataService(url, isLoadingSet, dataSet);
  }, dependencies);

  return [data, isLoading];
}
