
import { useState } from "react";

import styles from './Option.module.scss'
import clsx from "clsx";


function Option({ option, check_option}) {
    const [show, setShow] = useState(false)

    const handleSetShow = () => {
        setShow((prev) => !prev)
    }
    

    return ( 
        <div className={clsx(styles.my_title)} id={option.id}>
            <h5 onClick={handleSetShow}>{option.title}</h5>
            <div className={clsx(styles.mini_option)}>
                {show && option.option2.map((item, index) => 
                <div className={clsx(styles.wrap_item)} key={index}>
                    <input type="checkbox" nameId={option.id2[index]} name={option.id} onClick={check_option}/>

                    <div className={clsx(styles.item)}>{item}</div>
                </div>
                )}
            </div>
        </div>
     );
}

export default Option;