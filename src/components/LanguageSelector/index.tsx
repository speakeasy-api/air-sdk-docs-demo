import React, { FC, useContext, useState } from 'react';
import { ClickEvent, Menu, MenuButton, MenuItem } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import cn from 'classnames';

import { LanguageContext } from '@/src/utils/contexts/languageContext';

import { languageData } from './data';
import styles from './styles.module.scss';

interface ILanguageSelector {
  style?: 'icon' | 'small' | 'large';
}

const Index: FC<ILanguageSelector> = ({ style = 'large' }) => {
  const { language, setLanguage, languages } = useContext(LanguageContext);

  const handleChange = (e: ClickEvent) => setLanguage(e.value);

  const [isOpen, setIsOpen] = useState(false);

  const button = (
    <MenuButton className={cn(styles.select, { [styles.active]: isOpen })}>
      <div style={{ maxWidth: '100%' }}>{languageData[language].Icon({})}</div>
    </MenuButton>
  );

  return (
    <Menu
      transition={false}
      onItemClick={handleChange}
      menuButton={button}
      menuClassName={styles.menu}
      onMenuChange={(e) => setIsOpen(e.open)}
    >
      {...languages.map((langItem) => (
        <MenuItem
          key={langItem}
          value={langItem}
          className={cn(styles.menuItem, {
            [styles.active]: langItem === language,
          })}
        >
          {languageData[langItem].title}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default Index;
