"use client";

type Props = {
  name: string;
  number: number;
};

export function Button({ name, number }: Props) {
  const onClick = () => console.log("Clicked");

  return <button onClick={onClick}>{number}</button>;
}
