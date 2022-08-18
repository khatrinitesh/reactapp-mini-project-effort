import React,{useContext} from 'react';
import HookDemo from './context';

function HookUseContext() {
  const { count, setCount } = useContext(HookDemo);

  const handleSubstract = () => {
    setCount((prev) => {
      return {
        ...prev,
        num: prev.num - 1,
      };
    });
  };

  const handleAdd = () => {
    setCount((prev) => {
      return {
        ...prev,
        num: prev.num + 1,
      };
    });
  };

  

  return (
    <>
      <button onClick={handleSubstract}>-</button>
      <span>{count.num}</span>
      <span>{count.id}</span>
      <button onClick={handleAdd}>+</button>
    </>
  );
}

export default HookUseContext;