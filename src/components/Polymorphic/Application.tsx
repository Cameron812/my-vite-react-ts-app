import * as React from 'react';

type ButtonOwnProps<T extends React.ElementType = React.ElementType> = {
  children: string;
  primary?: boolean;
  secondary?: boolean;
  destructive?: boolean;
  as?: T;
};
type ButtonProps<T extends React.ElementType> = ButtonOwnProps<T> &
  Omit<React.ComponentProps<T>, keyof ButtonOwnProps>;

const createClassNames = (classes: { [key: string]: boolean }): string => {
  let classNames = '';
  for (const [key, value] of Object.entries(classes)) {
    if (value) classNames += key + ' ';
  }
  return classNames.trim();
};

function Button<T extends React.ElementType = 'button'>({
  children,
  primary = false,
  secondary = false,
  destructive = false,
  as
}: ButtonProps<T>) {
  const classNames = createClassNames({ primary, secondary, destructive });
  const TagName = as || 'button';
  return <TagName className={classNames}>{children}</TagName>;
}

type TextOwnProps<E extends React.ElementType = React.ElementType> = {
  children: string;
  as?: E;
};

type TextProps<E extends React.ElementType> = TextOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TextOwnProps>;

const exampleText =
  'when i was young, i would listen to the radio, waiting for my favorite song.Mapped types work well with other features in this type manipulation section, for example here is a mapped type using a conditional type which returns either a true or false depending on whether an object has the property pii set to the literal true. When you don’t want to repeat yourself, sometimes a type needs to be based on another type. Mapped types build on the syntax for index signatures, which are used to declare the types of properties which have not been declared ahead of time';

function Text<E extends React.ElementType = 'div'>({
  children,
  as,
  ...rest
}: TextProps<E>) {
  const TagName = as || 'div';
  return <TagName {...rest}>{children}</TagName>;
}

const Application = () => {
  return (
    <main>
      <Button id="sss" as="a" href="/" primary>
        Primary
      </Button>
      <Button secondary>Secondary</Button>
      <Button destructive>Destructive</Button>
      <Text as="label" id="main" htmlFor="id">
        {exampleText}
      </Text>
    </main>
  );
};

export default Application;
