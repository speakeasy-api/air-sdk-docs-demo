import React, {
  Children,
  ReactElement,
  ReactNode,
  useContext,
  useState,
} from 'react';

import { Columns, RHS } from '@/src/components/Columns';
import {
  Authentication,
  Parameters,
  Response,
} from '@/src/components/Parameters';
import { LanguageContext } from '@/src/utils/contexts/languageContext';
import { LinkableContext } from '@/src/utils/contexts/linkableContext';

export const Languages = ['go', 'typescript', 'curl'];
export type Language = (typeof Languages)[number];

export const LanguageProvider = (props: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('go');
  const context = {
    language,
    setLanguage,
    languages: Languages,
  };

  const childrenArray = Children.toArray(props.children);

  return (
    <LanguageContext.Provider value={context}>
      {childrenArray.map((child) => child)}
    </LanguageContext.Provider>
  );
};

export const LanguageSwitch = (props: {
  langToContent: Partial<Record<Language, JSX.Element>>;
}) => {
  const { language } = useContext(LanguageContext);

  return (
    <LinkableContext.Provider value={false}>
      {props.langToContent[language]}
    </LinkableContext.Provider>
  );
};

export const LanguageOperation = (props: {
  usage: ReactElement;
  authentication?: ReactElement;
  parameters: ReactElement;
  response: ReactElement;
}) => (
  <Columns>
    {props.authentication ? (
      <Authentication>{props.authentication}</Authentication>
    ) : null}
    <Parameters>{props.parameters}</Parameters>
    <Response>{props.response}</Response>
    <RHS>{props.usage}</RHS>
  </Columns>
);
