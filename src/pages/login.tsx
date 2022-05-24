import { ToggleThemeButton } from '@src/common/components';
import React from 'react';
import { useTranslation } from 'react-i18next';
import SideBar from '../common/components/generics/SideBar/SideBar';
export default function Login() {
  const { t } = useTranslation();
  return (
    <div>
      {t('login.title')}
      <SideBar/>
    </div>
  );
}
