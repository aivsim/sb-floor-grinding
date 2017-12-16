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
    loading: string;
}

class Layout extends React.Component<OwnProps, OwnState> {
    private timeoutId: NodeJS.Timer | number;

    constructor(props: OwnProps) {
        super(props);
        this.state = {
            isMenuVisible: false,
            loading: 'is-loading'
        };
    }

    componentDidMount () {
        this.timeoutId = setTimeout(() => {
            this.setState({loading: ''});
        },                          100);
    }

    componentWillUnmount () {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId as NodeJS.Timer);
        }
    }

    handleToggleMenu = () => {
        this.setState(() => ({isMenuVisible: !this.state.isMenuVisible}));
    }

    render() {
        const { children } = this.props;
        return (
            <div className={`body ${this.state.loading} ${this.state.isMenuVisible ? 'is-menu-visible' : ''}`}>
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
