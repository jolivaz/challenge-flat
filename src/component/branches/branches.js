import React, { useContext } from 'react';
import { BranchesContext } from '../../context/branchesContext'
import notAvailable from '../../assets/notfound.png'
import Branch from './branch/branch'
import './branches.scss'

const Branches = () => {
    const {branches} = useContext(BranchesContext)
    return(
        <div className='branches-component'>
            <h2>Lista de branches / commits</h2>
            {
                branches.length > 0 ?
                branches.map(branch => (
                    <Branch branch={branch} key={branch.name}/>
                ))
                : <div className='not-available'>
                    <p>No hay branches disponibles</p>
                    <img src={notAvailable} />
                </div>
            }
        </div>
    )
}

export default Branches