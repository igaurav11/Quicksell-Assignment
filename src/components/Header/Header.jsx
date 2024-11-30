import React from 'react'
import './Header.css'
import Filter  from '../../ui/Filter/Filter.jsx'

const Header = ({ grouping, ordering, setGrouping, setOrdering }) => {
    return (
        <header className=''>
            <Filter grouping={grouping} ordering={ordering} setGrouping={setGrouping} setOrdering={setOrdering} />
        </header>
    )
}

export default Header


