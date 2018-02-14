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
                        <li><Link onClick={onToggleMenu} to="/">Pagrindinis</Link></li>
                        <li><Link onClick={onToggleMenu} to="/iranga">Įranga</Link></li>
                        <li><Link onClick={onToggleMenu} to="/galerija">Galerija</Link></li>
                        <li><Link onClick={onToggleMenu} to="/kainorastis">Kainoraštis</Link></li>
                    </ul>
                    <ul className="actions vertical">
                        {/* <li>
                            <Link onClick={onToggleMenu} className="button fit" to="/susipazinkime">
                                Susipažinkime
                            </Link>
                        </li> */}
                        <li>
                            {/* <a href="#one" className="button special fit">Susisiekime</a> */}
                            <Link onClick={onToggleMenu} className="button special fit" to="/susisiekime">
                                Susisiekime
                            </Link>
                        </li>
                    </ul>
                </div>
                <a className="close" onClick={onToggleMenu} href="#">Uždaryti</a>
            </nav>
        );
    }
}

export default Menu;
