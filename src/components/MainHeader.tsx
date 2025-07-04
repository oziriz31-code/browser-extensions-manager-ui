import {logoIcons, modeIcons} from "../icons.ts";
import {useTheme} from "../Providers/Theme/hooks.ts";

function MainHeader() {
  const {theme, toggleTheme} = useTheme();

  return (
    <header className="card flex justify-between mb-10">
      <img alt='Extension' src={theme === 'light' ? logoIcons.light :  logoIcons.dark}/>
      <button
        role="button"
        className="btn-default"
        onClick={toggleTheme}
      >
        <img alt="Mode" src={theme === 'light' ? modeIcons.light : modeIcons.dark}/>
      </button>

    </header>
  );
}

export default MainHeader;
