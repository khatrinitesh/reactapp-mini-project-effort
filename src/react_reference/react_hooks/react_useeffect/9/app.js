import {  useEffect ,useMemo } from 'react';

export default function CustomApp(props) {

    const { data } = props;
    const expensiveValue = useMemo(() => {
      console.log('Computing expensive value');
      // Compute an expensive value based on the data prop
      return data * 2;
    }, [data]);
    useEffect(() => {
      console.log('Component mounted');
      return () => {
        console.log('Component unmounted');
      };
    }, [expensiveValue]);


  
  return (
    <div>
       {expensiveValue}
    </div>
  )
}
