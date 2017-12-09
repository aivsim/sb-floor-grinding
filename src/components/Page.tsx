import * as React from 'react';
import { Link } from 'react-router-dom';

const logo = require('../logo.svg');

export interface Props {
    title: string;
}

class Page extends React.Component<Props> {
    render() {
        const { title } = this.props;

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>{title}</h2>
                </div>
                <p className="App-intro">
                    This is the {title} page.
                </p>
                <p>
                    <Link to="/">Pagrindinis</Link>
                </p>
                <p>
                    <Link to="/about">Apie</Link>
                </p>
                <p>
                    <Link to="/settings">Nustatymai</Link>
                </p>
            </div>
        );
    }
}

export default Page;
