import React, { useState } from 'react';
import { HStack, Link, Button } from '@chakra-ui/react';
import { SelectLanguage, ToggleThemeButton } from '@common/components';
import { useTranslation } from 'react-i18next';
import {
  AiFillHome,
  AiFillDatabase,
  AiFillBulb,
  AiFillDollarCircle,
  AiFillQuestionCircle,
} from 'react-icons/ai';
import styles from './SideBar.module.scss';
export default function SideBar() {
  const { t } = useTranslation();
  const [boxDecor, setBoxDecor] = useState(false);
  const [menuActive, setMenuActive] = useState(0);
  const buttonDecoration = () => (
    <>
      <div className={styles.decorationTop}>
        <div className={styles.shape} />
      </div>
      <div className={styles.decorationBottom}>
        <div className={styles.shape} />
      </div>
    </>
  );
  const menuTrigger = (id: number) => {
    setMenuActive(id);
  }
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* <div className={styles.decoration}>
          <div className={styles.shape}/>
        </div> */}
        <div className={styles.menu}>
          <div className={menuActive === 0 ? `${styles.content} ${styles.contentActive}` : styles.content} onClick={() => menuTrigger(0)}>
            <AiFillHome />
            <p>Home</p>
          </div>
          <div className={menuActive === 1 ? `${styles.content} ${styles.contentActive}` : styles.content} onClick={() => menuTrigger(1)}>
            <AiFillDatabase />
            <p>Templates</p>
          </div>
          <div className={menuActive === 2 ? `${styles.content} ${styles.contentActive}` : styles.content} onClick={() => menuTrigger(2)}>
            <AiFillBulb />
            <p>Blog</p>
          </div>
          <div className={menuActive === 3 ? `${styles.content} ${styles.contentActive}` : styles.content} onClick={() => menuTrigger(3)}>
            <AiFillHome />
            <p>Pricing</p>
          </div>
          <div className={menuActive === 4 ? `${styles.content} ${styles.contentActive}` : styles.content} onClick={() => menuTrigger(4)}>
            <AiFillQuestionCircle />
            <p>Help</p>
          </div>
        </div>
        <div className={styles.absoluteBox}>
          <div
            className={boxDecor ? styles.contentActive : styles.content}
            onClick={() => {
              if (!boxDecor) {
                setBoxDecor(true);
              }
            }}
          >
            {buttonDecoration()}
            <p>Login</p>
          </div>
          <div
            className={!boxDecor ? styles.contentActive : styles.content}
            onClick={() => {
              boxDecor ? setBoxDecor(false) : null;
            }}
          >
            {buttonDecoration()}
            <p>Signup</p>
          </div>
        </div>
      </div>
    </div>
  );
}
