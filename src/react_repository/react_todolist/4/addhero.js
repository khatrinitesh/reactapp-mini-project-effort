import React,{useState} from 'react';

export default function AddHero({allHeroes,setAllHeroes}) {
    const [heroname,setHeroname] = useState('')
    
    const handleChange = (e) => {
        console.log(e)
        setHeroname(e.target.value)
    }

    const addHero = () => {
        setHeroname('') 
        // let tmpHeroes = allHeroes;
        // tmpHeroes.push(heroname);
        // setAllHeroes(tmpHeroes);
        setAllHeroes([...allHeroes,heroname]); //#2
    }
  return (
    <div>
        <input type='text' value={heroname} onChange={handleChange} />
        <button disabled={!heroname} onClick={addHero}>Add Hero</button>
    </div>
  )
}
