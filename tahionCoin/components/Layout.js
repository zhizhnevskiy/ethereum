import React from "react";
import {Container} from "semantic-ui-react";
import Head from 'next/head';
import Header from './Header';

const Layout = (props) => {
    return (
        <Container>
            <Head>
                <link
                    async
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
                />
            </Head>
            <Header/>
            {props.children}
            <h5 style={{
                textAlign: 'center',
                opacity: '0.3',
                marginTop: '160px',
            }}>
                © 2021 TAHION SYSTEMS. All rights reserved.
            </h5>
        </Container>
    );
};

export default Layout;