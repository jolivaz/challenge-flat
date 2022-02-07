import React, { useContext } from 'react';
import { RepositoriesContext } from '../../context/repositoriesContext'
import notAvailable from '../../assets/notfound.png'
import Repository from './repository/repository'
import './repositories.scss'

const Repositories = () => {
    const {repositories} = useContext(RepositoriesContext)
    return(
        <div className='repositories-component'>
            {
                repositories.length > 0 ?
                repositories.map(repository => (
                    <Repository repository={repository} key={repository.name}/>
                ))
                : <div className='not-available'>
                    <p>No hay repositorios disponibles</p>
                    <img src={notAvailable} />
                </div>
            }
        </div>
    )
}

export default Repositories