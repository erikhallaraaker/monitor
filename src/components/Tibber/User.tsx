import { FC } from "react";
import { useQuery, gql } from "@apollo/client";

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

    if (loading) { return <p>Loading user...</p>; }

    if (error) { return <p>Error getting user :(</p>; }

    return (
        <div>
            <p>{`Logged in as ${data?.viewer.name}`}</p>
        </div>
    );
};

export default User;
