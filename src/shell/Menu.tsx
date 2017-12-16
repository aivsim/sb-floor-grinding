import * as React from 'react';
import { Link } from 'react-router-dom';

interface OwnState {
    onToggleMenu(): void;
}

class Menu extends React.Component<OwnState> {
    render() {
        const { onToggleMenu } = this.props;
        return (
            <nav id="menu">
                <div className="inner">
                    <ul className="links">
                        <li><Link onClick={onToggleMenu} to="/">Home</Link></li>
                        <li><Link onClick={onToggleMenu} to="/landing">Landing</Link></li>
                        <li><Link onClick={onToggleMenu} to="/generic">Generic</Link></li>
                        <li><Link onClick={onToggleMenu} to="/elements">Elements</Link></li>
                    </ul>
                    <ul className="actions vertical">
                        <li><a href="#" className="button special fit">Get Started</a></li>
                        <li><a href="#" className="button fit">Log In</a></li>
                    </ul>
                </div>
                <a className="close" onClick={onToggleMenu} href="#">Close</a>
            </nav>
        );
    }
}

export default Menu;
