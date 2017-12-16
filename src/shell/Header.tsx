import * as React from 'react';
import { Link } from 'react-router-dom';

interface OwnProps {
    onToggleMenu(): void;
}

class Header extends React.Component<OwnProps> {
    handleToggleMenu(e: React.MouseEvent<{}>) {
        e.preventDefault();
        this.props.onToggleMenu();
    }

    render() {
        const { onToggleMenu } = this.props;
        return (
            <header id="header" className="alt">
                <Link to="/" className="logo"><strong>Forty</strong> <span>by HTML5 UP</span></Link>
                <nav>
                    <a className="menu-link" onClick={onToggleMenu} href="#">Menu</a>
                </nav>
            </header>
        );
    }
}

export default Header;
