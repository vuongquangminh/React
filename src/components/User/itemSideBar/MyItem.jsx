import { mdiViewDashboard } from "@mdi/js";
import Icon from "@mdi/react";
import clsx from "clsx";
import styles from "./MyItem.module.scss";


function MyItem({myicon, title}) {

    const handleActive = (e) => {
        const item = document.querySelector('.MyItem_item__N3dvp.MyItem_active__ru2Gw')
        item && item.classList.remove(styles.active)
        e.target.parentNode.classList.add(styles.active)
    }

    return ( 
        <>
            <div className={clsx(styles.item)} onClick={handleActive}>
                <Icon path={myicon} size={1} />
                <p>{title}</p>
            </div>
        
        </>
     );
}

export default MyItem;