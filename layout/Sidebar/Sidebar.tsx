import styles from './Layout.module.css';
import cn from 'classnames';
import {LayoutProps} from "./Layout.props";

export const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <>
            <Header />
            <div>
                <Sidebar/>
                <div>
                    {children}
                </div>
            </div>
            <Footer/>
        </>
    );
};