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
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.menu}>
          <div className={styles.content}>
            <AiFillHome />
            <p>Home</p>
          </div>
          <div className={styles.content}>
            <AiFillDatabase />
            <p>Templates</p>
          </div>
          <div className={styles.content}>
            <AiFillBulb />
            <p>Blog</p>
          </div>
          <div className={styles.content}>
            <AiFillHome />
            <p>Pricing</p>
          </div>
          <div className={styles.content}>
            <AiFillQuestionCircle />
            <p>Help</p>
          </div>
        </div>
        <div className={styles.absoluteBox}>
          <div className={styles.contentActive}>
            <p>Login</p>
          </div>
          <div className={styles.content}>
            <p>Signup</p>
          </div>
        </div>
      </div>
    </div>
  );
}
