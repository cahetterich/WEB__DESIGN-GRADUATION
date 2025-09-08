// src/components/ui/Button.tsx
'use client';
import clsx from 'clsx';


type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
variant?: 'primary' | 'secondary' | 'ghost';
};


export default function Button({ variant = 'primary', className, ...props }: ButtonProps){
const base = 'inline-flex items-center justify-center rounded-md px-4 py-2 font-medium focus:outline-none';
const styles = clsx(base, {
'bg-reuse-green-500 text-white hover:bg-reuse-green-700': variant === 'primary',
'border border-gray-200 text-gray-700 bg-white': variant === 'secondary',
'bg-transparent text-reuse-green-700': variant === 'ghost',
}, className);


return <button className={styles} {...props} />;
}


