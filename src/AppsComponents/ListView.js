import React from 'react';
import styles from './listview.module.css';

const ListView = ({listitems, ondelete, onclickupdate}) => {
    return (
        <div className={styles['list_wrap']}>
            <ul className={styles['ul_wrap']}>
                {listitems.length > 0 && 
                    <li> 
                        <span> Name </span>
                        <span> Job </span>
                        <span> Update </span>
                        <span> Remove </span>
                    </li>
                }
                {listitems.map((items) => {
                    return <li key={items.id} > 
                        <span> {items.name} </span>
                        <span> {items.job} </span>
                        <span> <input type='button' value='UPDATE' onClick={() => onclickupdate(items)}/> </span>
                        <span> <input type='button' value='DELETE' onClick={() => ondelete(items)}/> </span>
                    </li>
                } )}
            </ul>
        </div>
    )
}

export default ListView;