import { FC } from "react";
import { Layout, Menu } from "antd";

import ErrorBoundary from "./ErrorBoundary";
import useStyles from "./index.jss";

const { Header, Content } = Layout;

const LayoutComponent: FC = ({ children }) => {
    const classes = useStyles();

    return (
        <Layout className={classes.layout}>
            <Header>
                <div className={classes.logo} />
                <Menu theme="dark" mode="horizontal">
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>
            <Content className={classes.content}>
                <ErrorBoundary>
                    {children}
                </ErrorBoundary>
            </Content>
        </Layout>
    );
};

export default LayoutComponent;
