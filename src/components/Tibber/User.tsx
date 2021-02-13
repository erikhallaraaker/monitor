import { FC } from "react";
import { useQuery, gql } from "@apollo/client";

interface IUser {
    viewer: {
        name: string;
    };
}

const USER = gql`
    query GetUser {
        viewer {
            name
        }
    }
`;

const User: FC = () => {
    const { loading, error, data } = useQuery<IUser>(USER);

    if (loading) { return <p>Loading user...</p>; }

    if (error) { return <p>Error getting user :(</p>; }

    return (
        <div>
            {`Logged in as ${data?.viewer.name}`}
        </div>
    );
};

export default User;
