import * as React from "react";

type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
};

export const Button = ({onClick}: Props) => {
  return <button onClick={onClick}>Click ME!</button>;
};
