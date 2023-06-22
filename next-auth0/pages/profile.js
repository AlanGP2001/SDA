import LoginLogout from "../src/components/LoginLogout";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export const getServerSideProps = withPageAuthRequired();

export default function Profile(props) {
    const { user } = props;
    return (
        <div>
            <h1>Profile</h1>
            <p>{user.name}</p>
            <LoginLogout />
        </div>
    )
}