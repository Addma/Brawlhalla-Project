import { useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Logo from './images/Brawlhalla_Logo.webp';
const App = () => {
    const [search, setSearch] = useState('');
    const [legend, setLegend] = useState(null);
    const [region, setRegion] = useState('US-E');
    console.log(region);
    const handleClick = (e) => {

    }
    return (
        <div>
            <Nav/>
            <div className="flex-col">
                <img alt="Brawlhalla Logo" src={Logo}/>
                <div id="nav-bar" className='flex-row'>
                    <select name="region" id="region" onChange={e => setRegion(e.target.value)}>
                        <option value="US-E">US-E</option>
                        <option value="US-W">US-W</option>
                    </select>
                    <input placeholder="Enter Steam ID or Brawlhalla ID" id="search" value={search} onChange={(e) => setSearch(e.target.value)}></input>
                    <Link className='bg-blue-400 px-4 py-2' to={`/profile/${search}`}>Search</Link>
                </div>
            </div>
        </div>
    )
}
export default App;