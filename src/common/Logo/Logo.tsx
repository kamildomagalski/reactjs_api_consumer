import './logo.module.scss';

import logo from '../../assets/logo.jpg';

const Logo = (): JSX.Element => <img data-testid='logo' src={logo} alt='logo' />;

export default Logo;
