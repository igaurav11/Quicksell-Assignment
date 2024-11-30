import React, {useMemo} from 'react'
import Section from '../Section/Section.jsx';
import "./Grid.css";

const Grid = ({ gridData,grouping,userData }) => {
    const data = useMemo(()=>Object.keys(gridData), [gridData]);
    return (
      <div className='grid-container'>
          {  
              data.map((col) => (
                  <Section key={col} tickets={gridData[col]} grouping={grouping} userData={userData} groupBy={col}/>
              ))
          }
      </div>
    )
}

export default Grid
