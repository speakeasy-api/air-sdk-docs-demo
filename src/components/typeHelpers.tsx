import React from 'react';
import { partition } from 'lodash';

// Needs to support both arrays of children and MDXContent nodes (whose children first need to be extracted)
export const splitByType = (
  node: React.ReactNode,
  type: (props: { children: React.ReactNode }) => React.JSX.Element,
): [React.ReactNode[], React.ReactNode[]] => {
  if (Array.isArray(node)) {
    return splitElementsByType(node, type);
  } else {
    return splitMDXContentChildrenByType(node, type);
  }
};

// Assumes the parent is an MDXContent node
export const splitMDXContentChildrenByType = (
  parent: React.ReactNode,
  type: (props: { children: React.ReactNode }) => React.JSX.Element,
): [React.ReactNode[], React.ReactNode[]] => {
  let children = (parent as any).props?.children;

  if (!children) {
    if (
      'type' in (parent as any) &&
      typeof (parent as any).type === 'function'
    ) {
      children = (parent as any).type().props.children;
    } else {
      return [[], []];
    }
  }

  return splitElementsByType(children, type);
};

export const splitElementsByType = (
  elements: React.ReactElement[],
  type: (props: { children: React.ReactNode }) => React.JSX.Element,
): [React.ReactElement[], React.ReactElement[]] =>
  partition(elements, (e: any) => e?.type === type);

export const typeMatches = (
  e: React.ReactNode,
  type: () => React.JSX.Element,
): boolean => 'type' in (e as any) && (e as any).type === type;

export const splitAround = <T,>(a: T[], fn: (e: T) => boolean): [T[], T[]] => {
  const breakIndex = a.findIndex(fn);

  if (breakIndex === -1) {
    return [a, []];
  }

  return [a.slice(0, breakIndex), a.slice(breakIndex + 1)];
};

export const separateHeadingsAndOthers = (elements: any) => {
  const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
  const headingsArray = [];
  const othersArray = [];
  let isHeading = true;

  for (let i = 0; i < elements.length; i++) {
    // Check if the element is a React element
    if (elements[i]?.['$$typeof'] === Symbol.for('react.element')) {
      const elementType = elements[i].type?.name?.toLowerCase();

      // Check if the element type is one of the headings
      if (headings.includes(elementType)) {
        // If isHeading is true, add to headingsArray, else to othersArray
        if (isHeading) {
          headingsArray.push(elements[i]);
        } else {
          othersArray.push(elements[i]);
        }
      } else {
        // Non-heading element, so subsequent heading tags should go to othersArray
        othersArray.push(elements[i]);
        isHeading = false;
      }
    } else {
      // Non-React element (like '\n'), just add to othersArray
      othersArray.push(elements[i]);
    }
  }

  return [headingsArray, othersArray];
};
