import React, { FC, useEffect, useState } from 'react';
import Switch from 'react-switch';
import { useTheme } from 'next-themes';

import Moon from '@/src/icons/Moon';
import Sun from '@/src/icons/Sun';
import LanguageSelector from '@/src/components/LanguageSelector';

import styles from './styles.module.scss';

const DARK = 'dark';
const LIGHT = 'light';
const SYSTEM = 'system';

const ThemeToggle: FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    if (theme === SYSTEM) {
      setTheme(DARK);
    }
  }, []);

  const isDark = theme === DARK || (theme === SYSTEM && resolvedTheme === DARK);

  const onChangeTheme = () => {
    setTheme(isDark ? LIGHT : DARK);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <LanguageSelector style={'icon'} />
      <div className={styles.toggle}>
        <label htmlFor='switch'>
          <span>Light</span>
          <Switch
            id='switch'
            className='react-switch'
            onChange={onChangeTheme}
            checked={isDark}
            uncheckedIcon={false}
            checkedIcon={false}
            height={31}
            width={51}
            handleDiameter={26}
            onColor='#2a2a2a'
            offColor='#EFEFF1'
            onHandleColor='#171717'
            activeBoxShadow='0px 0px 1px 1px rgba(0, 0, 0, 0.2)'
            offHandleColor='#FFF'
            checkedHandleIcon={
              <div className={styles.checkedIcon}>
                <Moon />
              </div>
            }
            uncheckedHandleIcon={
              <div className={styles.checkedIcon}>
                <Sun />
              </div>
            }
          />
          <span>Dark</span>
        </label>
      </div>
    </>
  );
};

export default ThemeToggle;
