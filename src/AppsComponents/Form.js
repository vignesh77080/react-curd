import React from 'react';
import styles from './form.module.css';

const form = (props)=>{

    if(props.state.upState){
        const {arr, index} = props.state
        return (
            <div className={styles['whole_form']}>
                <form onSubmit={props.onupdate}>
                    <div className={styles['input_wrap']}>
                        <label htmlFor='in-name' > Name </label>
                        <input id='in-name' 
                            name='name' 
                            onChange={(e)=>props.onupdatechange(e, index)} 
                            value={arr[index].name} 
                            autoComplete = 'off'
                        />
                    </div>
                    <div className={styles['input_wrap']}>
                        <label htmlFor='in-job' > Job </label>
                        <input id='in-job' 
                            name='job' 
                            onChange={(e)=> props.onupdatechange(e, index)} 
                            value={arr[index].job} 
                            autoComplete = 'off'
                        />
                    </div>
                    <input type='submit' value='update'/>
                </form>
            </div>
        )
    }

    return(
        <div className={styles['whole_form']}>
            <form onSubmit={props.onsubmit}>
                <div className={styles['input_wrap']}>
                    <label htmlFor='in-name' > Name </label>
                    <input id='in-name' 
                        name='name' 
                        onChange={props.onchange} 
                        value={props.state.name} 
                        autoComplete = 'off'
                    />
                </div>
                <div className={styles['input_wrap']}>
                    <label htmlFor='in-job' > Job </label>
                    <input id='in-job' 
                        name='job' 
                        onChange={props.onchange} 
                        value={props.state.job} 
                        autoComplete = 'off'
                    />
                </div>
                <input type='submit' value='submit'/>
            </form>
        </div>
    )
}

export default form;