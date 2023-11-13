import { Children, FC, ReactNode, isValidElement, useState } from 'react';

import styles from './styles.module.scss';

export const TabbedSection: FC<{ tabLabel: string; children: ReactNode }> = ({
  tabLabel,
  children,
}) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabs = Children.toArray(children)
    .map((child) => (isValidElement<TabProps>(child) ? [child] : []))
    .flat();

  return (
    <div className={styles.tabbedSection}>
      <div className={styles.tabbedSection_heading}>
        {tabLabel ? (
          <span className={styles.tabbedSection_tabLabel}>{tabLabel}</span>
        ) : null}
        {tabs.map((tab, index) => (
          <button
            className={[
              styles.tabbedSection_tabButton,
              index == selectedTab
                ? styles.tabbedSection_tabButton_selected
                : null,
            ]
              .filter((c) => c)
              .join(' ')}
            key={index}
            onClick={() => setSelectedTab(index)}
          >
            {typeof tab.props.title === 'string' ? (
              <span className={styles.tabbedSection_tabButton_title}>
                tab.props.title
              </span>
            ) : (
              tab.props.title
            )}
          </button>
        ))}
        <div className={styles.tabbedSection_headerFill} />
      </div>
      <div className={styles.tabbedSection_body}>{tabs[selectedTab]}</div>
    </div>
  );
};

export type TabProps = {
  title: string | ReactNode;
  children: ReactNode;
};
export const Tab: FC<TabProps> = ({ children }) => <div>{children}</div>;
