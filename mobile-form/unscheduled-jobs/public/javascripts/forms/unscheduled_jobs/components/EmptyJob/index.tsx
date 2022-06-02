import React from 'react';
//@ts-ignore
import EmptyList from '../../images/empty-list.png';
import "./styles.scss";


const EmptyJob = () => {
  return (
    <div className='empty-list'>
        <img src={EmptyList} alt="EmptyList" />
        <div className='empty-msg'>You don’t have any unscheduled work</div>
    </div>
  )
}

export default EmptyJob