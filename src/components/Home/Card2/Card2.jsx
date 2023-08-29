

import styles from '../Card/Card.module.scss'
import clsx from "clsx";
import Icon from '@mdi/react';
import { mdiArrowDown, mdiArrowUp, mdiCheck, mdiHelpCircle } from '@mdi/js';

function Card2({ data, index }) {

  const sub = [
    {
      id: null,
      text: 'Chưa xác định ',
      icon: mdiHelpCircle
    },
    {
      id: 2,
      text: 'Ổn định',
      icon:mdiCheck
    },
    {
      id: 3,
      text: 'Giảm dần',
      icon: mdiArrowDown
    },
    {
      id: 4,
      text: 'Tăng dần',
      icon: mdiArrowUp
    }
  ]
return (
  <div className={clsx("card col-3 p-0 m-3", styles.w_30)} key={index}>
    <div className={clsx(styles.card_img)}>
      <img src='http://wlp.howizbiz.com/static/img/image3.2ffc6960.png' className={clsx("card-img-top")} alt="..." />
    </div>

    <div className={clsx(styles.content)}>
      <div
        className={clsx(
          "card-body text-start d-flex justify-content-between p-0"
        )}
      >
        <div className={clsx(styles.left)}>
          <p className={clsx("card-text m-0", styles.title)}>
            {data.kingdom.ten} - {data.phylumn.ten}
          </p>
          <h4 className={clsx("py-1 m-0", styles.card_name)}>{data.ten}</h4>
          <i>{data.ten_khoa_hoc}</i>
        </div>
        <div className={clsx(styles.right)}>
          <img
            src="https://digitalrelativity.com/wp-content/uploads/2011/09/Interactive_QR_Codes_Blog_Post.png"
            alt=""
          />
        </div>
      </div>

      <div className={clsx(styles.sub_Check)}>
        <div className={clsx(styles.sub_left)}>
        {sub.map((item, index) => {
              if(item.id === data.loai_hien_trang_id)
               {
                 return <Icon key={index} path={item.icon} size={1.5} />

               }
              
              })}
            {sub.map(item => {
              if(item.id === data.loai_hien_trang_id)
               {
                 return item.text

               }
              
              })}
        </div>
        <div className={clsx(styles.sub_right)}>
          <span>CN</span>
        </div>
      </div>
    </div>
  </div>
);
}


export default Card2;