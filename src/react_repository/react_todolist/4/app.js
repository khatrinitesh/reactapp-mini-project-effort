import Reac,{useState} from 'react';
import HeroList from './herolist';
import AddHero from './addhero';

export default function CustomApp() {

    const [allHeroes,setAllHeroes] = useState([]);

  return (
    <>
    <div style={{float:'left',width:'49%',borderRight:'1px solid red',padding:20}}>
        <HeroList allHeroes={allHeroes}/>
    </div>
    <div style={{float:'left',width:'50%',padding:20}}>
        <AddHero allHeroes={allHeroes} setAllHeroes={setAllHeroes}/>
    </div>
    </>
  )
}
