import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import RightArrow from '@/src/icons/RightArrow';

import styles from './styles.module.scss';

export type Props = {
  openLabel: string;
  closeLabel: string;
  children: ReactNode[];
  defaultOpen?: boolean;
  content?: () => Promise<any>;
};

const CollapsibleContext = createContext({
  isOpen: true,
});

const Collapsible = (props: Props) => {
  const headerDefaultHeight = 36;

  const [isOpen, setIsOpen] = useState(props.defaultOpen ?? false);
  const [height, setHeight] = useState(headerDefaultHeight);
  const [ContentComponent, setContentComponent] = useState<any>(null);
  const [shouldTransitionHeight, setShouldTransitionHeight] = useState(false);

  const parentContext = useContext(CollapsibleContext);

  const [headerRef, headerHeight] = useRefWithHeight();
  const [bodyRef, bodyHeight] = useRefWithHeight();

  const heading = headingText(props.openLabel, props.closeLabel, isOpen);

  const updateOpenHeight = (shouldTransition: boolean) => {
    setHeight((headerHeight || headerDefaultHeight) + (bodyHeight || 0));
    setShouldTransitionHeight(shouldTransition);
  };

  const open = () => {
    if (!isOpen) {
      updateOpenHeight(true);
    } else {
      setShouldTransitionHeight(true);
      setHeight(headerHeight);
    }

    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen) {
      updateOpenHeight(false);
    }
  }, [bodyHeight]);

  /*
   * Pre-load dynamic content when the parent is opened
   */
  useEffect(() => {
    if (parentContext.isOpen && props.content && !ContentComponent) {
      props
        .content()
        .then((module) => {
          setContentComponent(() => module.default);
        })
        .catch((error) => {
          console.error('Failed to load the content component', error);
        });
    }
  }, [parentContext.isOpen, props.content, ContentComponent]);

  const dynamicChildren = useMemo(
    () =>
      ContentComponent
        ? [<ContentComponent key='dynamicContentComponent' />]
        : [],
    [ContentComponent],
  );

  const existingChildren = props.children ? props.children : [];

  const children =
    dynamicChildren.length > 0
      ? [...existingChildren, ...dynamicChildren]
      : existingChildren;

  return (
    <CollapsibleContext.Provider value={{ isOpen }}>
      <div
        className={styles.collapsible}
        style={{
          height,
          ...(shouldTransitionHeight && { transition: 'height 0.5s ease' }),
        }}
      >
        <div
          ref={headerRef}
          onClick={open}
          className={styles.collapsible_heading}
        >
          <RightArrow activeClass={isOpen ? 'active' : ''} />
          <h5>{heading}</h5>
        </div>
        <div ref={bodyRef} className={styles.collapsible_body}>
          {children}
        </div>
      </div>
    </CollapsibleContext.Provider>
  );
};

const useRefWithHeight = (): [(ref: HTMLDivElement) => void, number] => {
  const [height, setHeight] = useState(0);
  const ref = useCallback((node: HTMLDivElement) => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);

      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          setHeight(entry.target.getBoundingClientRect().height);
        }
      });

      resizeObserver.observe(node);
    }
  }, []);

  return [ref, height];
};

const headingText = (openLabel: string, closeLabel: string, isOpen: boolean) =>
  isOpen ? closeLabel : openLabel;

export default Collapsible;
