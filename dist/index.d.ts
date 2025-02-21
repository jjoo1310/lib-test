import React, { JSX } from 'react';

interface Props {
    children: JSX.Element;
}
declare const Button: ({ children }: Props) => JSX.Element;

declare const TextInput: (props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => React.JSX.Element;

export { Button, TextInput };
