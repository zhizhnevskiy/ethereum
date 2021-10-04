import React from "react";
import {Menu} from "semantic-ui-react";
import { Link } from '../routes';

const Header = () => {
    return (
        <Menu style={{ marginTop: '16px'}}>
            <Link route="/">
                <a className="item"><b>TahionCoin</b></a>
            </Link>

            <Menu.Menu position='right'>
                <Link route="/">
                    <a className="item"><b>Campaigns</b></a>
                </Link>

                <Link route="/campaigns/new">
                    <a className="item"><b>+</b></a>
                </Link>
            </Menu.Menu>
        </Menu>
    );
};

export default Header;