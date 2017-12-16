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
                <Link to="/" className="logo"><span>Roberto</span> <strong>Grindų šlifavimas</strong></Link>
                <nav>
                    <a className="menu-link" onClick={onToggleMenu} href="#">Meniu</a>
                </nav>
            </header>
        );
    }
}

export default Header;
