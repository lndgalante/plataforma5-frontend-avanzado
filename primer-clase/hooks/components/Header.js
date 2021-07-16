import { useTheme } from '../context/theme';

function Header() {
  const theme = useTheme();

  return (
    <header>
      <h1>Context class</h1>

      <p>Theme is {theme.themeMode}</p>
      <button onClick={theme.toggleTheme}>Change theme</button>
    </header>
  );
}

export { Header };
