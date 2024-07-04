import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const {dispatch } = useContext(AppContext);

    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    
  return (
        <div className='alert alert-secondary'> Currency {
            <select name="Currency" id="Currency" onChange={event=>changeCurrency(event.target.value)}>
                <option value="£">Pound(£)</option>
                <option value="₹">Rupee(₹)</option>
                <option value="€">Euro(€)</option>
                <option value="CAD">Canada(CAD)</option>
            </select>	
        }	
        </div>
    );
};

export default Currency;