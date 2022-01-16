import React from 'react'

import ResidentInfo from './ResidentInfo'

const ResidenList = ({data}) => {
    return (
        <div className='list-card'>
            {
                data.residents?.map((character) => <ResidentInfo key={character} character={character}/>)
            }
            
        </div>
    )
}

export default ResidenList
