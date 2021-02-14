import { FC } from "react";
import { useQuery, gql } from "@apollo/client";
import { Spin } from "antd";
import CircleLoader from "react-spinners/CircleLoader";

interface QueryViewer {
    viewer: Tibber.Viewer;
}

const USER = gql`
    query GetUser {
        viewer {
            login
            userId
            name
            accountType
        }
    }
`;

const User: FC = () => {
    const { loading, error, data } = useQuery<QueryViewer>(USER);

    if (loading) { return <Spin />; }

    if (error) { return <p>{`Error! ${error?.message}`}</p>; }

    return (
        <div>
            <p>{`Logged in as ${data?.viewer.name}`}</p>
            <CircleLoader color="#BD10E0" />
        </div>
    );
};

export default User;
