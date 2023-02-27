import {  useEffect ,useCallback} from 'react';

export default function CustomApp(props) {

    const {onClick} = props;

    const handleClick = useCallback(() => {
        console.log('Button clicked');
        onClick();
      }, [onClick]);

    useEffect(() => {
        console.log('component mounted');
        return () => {
            console.log('component unmounted');
        }
        
    },[handleClick])


  
  return (
    <div>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}
