import React, {
  createElement,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { RouteContext, ScrollContext } from '@/src/components/scrollManager';
import { toRouteFormat } from '@/src/utils/routesHelpers';

import styles from './styles.module.scss';

type textHeader = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface IHeaderProps {
  headingType: textHeader;
  children: ReactNode;
}

const TextHeaderWrapper: FC<IHeaderProps> = ({
  headingType,
  children = '',
}) => {
  const route = useContext(RouteContext);
  const scrollContext = useContext(ScrollContext);

  const [isMouseOver, setIsMouseOver] = useState(false);

  // Need both of these so we can fade before we switch the icon back
  const [veryRecentlyCopied, setVeryRecentlyCopied] = useState(false);
  const [recentlyCopied, setRecentlyCopied] = useState(false);

  const headingValue = toRouteFormat(children?.toString());

  const inputRef = useRef<HTMLHeadingElement>(null);

  const pagePos = useMemo(
    () =>
      inputRef.current
        ? inputRef.current?.getBoundingClientRect().top + window.scrollY
        : 0,
    [inputRef.current?.getBoundingClientRect().top],
  );

  useEffect(() => {
    if (inputRef.current && (headingType === 'h1' || headingType === 'h2')) {
      scrollContext.upsertHeading(
        route,
        headingValue,
        inputRef.current,
        pagePos,
      );
    }
  }, [pagePos]);

  const heading = createElement(
    headingType,
    {
      ref: inputRef,
      id: route,
    },
    children,
  );

  const headingsToGiveAnchors = ['h1', 'h2', 'h3'];
  const headingsToNestAnchors = ['h3'];

  const link = useMemo(() => {
    const origin =
      typeof window !== 'undefined' && window.location.origin
        ? window.location.origin
        : '';

    return headingsToNestAnchors.includes(headingType)
      ? `${origin}${route}#${headingValue}`
      : `${origin}${route}`;
  }, [route]);

  const handleAnchorClick = () => {
    navigator.clipboard.writeText(link);
    setRecentlyCopied(true);
  };

  useEffect(() => {
    if (recentlyCopied) {
      setVeryRecentlyCopied(true);
      setTimeout(() => setVeryRecentlyCopied(false), 750);
      setTimeout(() => setRecentlyCopied(false), 1000);
    }
  }, [recentlyCopied]);

  const anchorButton = (
    <button className={styles.anchor} onClick={handleAnchorClick}>
      {recentlyCopied ? '✓' : '#'}
    </button>
  );

  return headingsToGiveAnchors.includes(headingType) ? (
    <div
      style={{ position: 'relative' }}
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      {heading}
      <div
        style={{
          position: 'absolute',
          left: '-25px',
          top: '50%',
          transform: 'translateY(-50%)',
          opacity: isMouseOver || veryRecentlyCopied ? 1 : 0,
          transition: 'opacity 0.2s ease',
        }}
      >
        {anchorButton}
      </div>
    </div>
  ) : (
    heading
  );
};

export const H3 = ({ children }: { children: ReactNode }) => (
  <TextHeaderWrapper headingType='h3'>{children}</TextHeaderWrapper>
);

export default TextHeaderWrapper;
