import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
  const base =
    'inline-block rounded-full text-sm bg-red-500 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-200 hover:bg-red-400 focus:bg-red-400 disabled:cursor-not-allowed';

  const styles = {
    primary: base + ' px-4 py-2 md:px-6 md:py-2',
    small: base + ' px-4 py-2 md:px-4 md:py-2 text-xs',
    round: base + ' px-2.5 py-1 text-sm',
    secondary:
      'inline-block text-sm px-4 py-2 rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-200 hover:bg-stone-300 focus:bg-stone-300 hover:text-stone-800 disabled:cursor-not-allowed',
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
