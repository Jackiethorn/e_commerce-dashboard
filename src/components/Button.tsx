import classNames from 'classnames';

type ButtonProps = {
  children: React.ReactNode;
  variation?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
  outline?: boolean;
  rounded?: boolean;
  phil_shaped?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  variation,
  outline,
  rounded,
  phil_shaped,
  ...rest
}: ButtonProps) => {
  const classes = classNames(
    rest.className,
    'flex items-center gap-3 px-3 py-1.5 border',
    {
      'border-secondary bg-secondary hover:opacity-70': variation === 'primary',
      'border-gray-900 bg-gray-900': variation === 'secondary',
      'border-green-500 bg-green-500': variation === 'success',
      'border-destructive/25 bg-destructive/75': variation === 'danger',
      'border-yellow-400 bg-yellow-400': variation === 'warning',
      'rounded-md': rounded,
      'rounded-full': phil_shaped,
      'text-white': !outline && !!variation,
      'bg-transparent': outline,
      'text-blue-500': outline && variation === 'primary',
      'text-gray-900': outline && variation === 'secondary',
      'text-green-500': outline && variation === 'success',
      'text-red-500': outline && variation === 'danger',
      'text-yellow-400': outline && variation === 'warning',
    }
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

export default Button;
