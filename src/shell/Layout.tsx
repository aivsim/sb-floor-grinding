import * as React from 'react';
import '../assets/scss/main.css';
import Header from './Header';
import Contact from './Contact';
import Footer from './Footer';
import Menu from './Menu';

interface OwnProps {
}

interface OwnState {
    isMenuVisible: boolean;
    // loading: string;
}

class Layout extends React.Component<OwnProps, OwnState> {
    constructor(props: OwnProps) {
        super(props);
        this.state = {
            isMenuVisible: false,
            // loading: 'is-loading'
        };
    }

    handleToggleMenu = () => {
        this.setState(() => ({isMenuVisible: !this.state.isMenuVisible}));
    }

    render() {
        const { children } = this.props;
        return (
            <div className={`body ${this.state.isMenuVisible ? 'is-menu-visible' : ''}`}>
                <div id="wrapper">
                    <Header onToggleMenu={this.handleToggleMenu} />
                    {children}
                    <Contact />
                    <Footer />
                </div>
                <Menu onToggleMenu={this.handleToggleMenu} />
            </div>
        );
    }
}

export default Layout;
