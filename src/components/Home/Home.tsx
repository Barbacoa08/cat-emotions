import { Box, Heading, Text } from "@chakra-ui/react";
import netlifyIdentity, { User } from "netlify-identity-widget";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  return (
    <Box data-testid="Home-root">
      <Heading>Cat Emotions</Heading>

      <Text>A tracker for your emotional journey via cat pics</Text>

      <AuthButton />
    </Box>
  );
};

// example created from: https://github.com/netlify/netlify-identity-widget/tree/master/example/react
// and here: https://github.com/netlify/netlify-identity-widget
const AuthButton = () => {
  const netlifyAuth = {
    isAuthenticated: false,
    user: null as User | null,
    authenticate(callback: (user?: User) => void) {
      this.isAuthenticated = true;
      netlifyIdentity.open();
      netlifyIdentity.on("login", (user) => {
        this.user = user;
        callback(user);
      });
    },
    signout(callback: (user?: User) => void) {
      this.isAuthenticated = false;
      netlifyIdentity.logout();
      netlifyIdentity.on("logout", () => {
        this.user = null;
        callback();
      });
    },
  };

  const navigate = useNavigate();

  const login = () => {
    netlifyAuth.authenticate((user) => {
      console.log({ user });
      // this.setState({ redirectToReferrer: true });
    });
  };

  return netlifyAuth.isAuthenticated ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          // netlifyAuth.signout(() => navigate("/", { replace: true }));
          netlifyAuth.signout(() => navigate("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <div>
      <p>You are not logged in.</p>
      <div>
        {/* <p>You must log in to view the page at {from.pathname}</p> */}
        <button onClick={login}>Log in</button>
      </div>
    </div>
  );
};

/**
 * user data example
 *
 * {
    "id":"9a82dee6-c29f-48cf-beb5-086585531563",
    "aud":"",
    "role":"",
    "email":"sabe12070@gmail.com",
    "confirmed_at":"2022-03-13T23:43:41Z",
    "app_metadata":{
        "provider":"google"
    },
    "user_metadata":{
        "avatar_url":"https://lh3.googleusercontent.com/a-/AOh14GjPNB-cvqTu_9zG-ppJZJQGKUblwJp6FTrUHYDy=s96-c",
        "full_name":"Joseph Sebast"
    },
    "created_at":"2022-03-13T23:43:41Z",
    "updated_at":"2022-03-13T23:43:41Z"
  }

  * {
   "id":"5fefd637352e13d74ae6bfd0",
   "uid":null,
   "full_name":"barbijoe",
   "avatar":"https://avatars2.githubusercontent.com/u/13157284?v=4",
   "avatar_url":"https://avatars2.githubusercontent.com/u/13157284?v=4",
   "email":"sabe12070@gmail.com",
   "affiliate_id":"",
   "site_count":3,
   "created_at":"2021-01-02T02:11:03.360Z",
   "last_login":"2022-03-12T17:22:31.326Z",
   "login_providers":[
      "github"
   ],
   "onboarding_progress":{
      "slides":"closed",
      "notifications_read_at":"2021-12-13T14:30:00Z"
   },
   "slug":"Barbacoa08",
   "sandbox":false,
   "connected_accounts":{
      "github":"Barbacoa08"
   },
   "pending_email":null,
   "has_pending_email_verification":false,
   "mfa_enabled":false,
   "saml_account_id":"",
   "saml_slug":null,
   "preferred_account_id":"",
   "command_bar_signed_user_id":"3887fe693c204b4759b2ce796ace9212b0489faddff7a3f5f7a6b29832b506ba",
   "tracking_id":"5fefd637352e13d74ae6bfd0"
}
 */
