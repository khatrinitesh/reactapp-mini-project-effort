import React from 'react'

const Country = ({name,population,capital,flagImg,map}) =>  {
  return (
    <div className='country'>
        <div className="flag_container">
            <img src={flagImg} alt={name}/>
        </div>
        <h2 className="name">{name}</h2>
        <div className="country_details">
            <p>
                <span className="bold">Capital: </span> {capital}
            </p>
            <p>
                <span className="bold">Population:</span> {population}
            </p>

            <form action={map}>
                <input type="submit" value="Google maps" formTarget="_blank" className="button"/>
            </form>
        </div>
    </div>
  )
}

export default Country;