import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Button, useColorModeValue } from "@chakra-ui/react";
import netlifyIdentity, { User } from "netlify-identity-widget";
import { useNavigate } from "react-router-dom";
import { useGlobal, useMemo } from "reactn";

// example created from: https://github.com/netlify/netlify-identity-widget/tree/master/example/react
// and here: https://github.com/netlify/netlify-identity-widget
export const AuthButton = () => {
  const [authenticated, setAuthenticated] = useGlobal("authenticated");
  const [, setUser] = useGlobal("user");

  const buttonHighlightColor = useColorModeValue("pink.800", "pink.400");

  const netlifyAuth = useMemo(() => {
    return {
      authenticate(callback: (user?: User) => void) {
        setAuthenticated(true);
        netlifyIdentity.open();
        netlifyIdentity.on("login", (authenticatedUser) => {
          setUser(authenticatedUser);
          callback(authenticatedUser);
        });
      },
      signout(callback: (authenticatedUser?: User) => void) {
        setAuthenticated(false);
        netlifyIdentity.logout();
        netlifyIdentity.on("logout", () => {
          setUser(undefined);
          callback();
        });
      },
    };
  }, [setAuthenticated, setUser]);

  const navigate = useNavigate();

  // BUG: not updating properly. need to setup state for the `user`... globally?
  return (
    <Button
      leftIcon={authenticated ? <ArrowBackIcon /> : undefined}
      rightIcon={authenticated ? <ArrowForwardIcon /> : undefined}
      _hover={{
        bg: buttonHighlightColor,
      }}
      onClick={() => {
        authenticated
          ? netlifyAuth.signout(() => navigate("/"))
          : netlifyAuth.authenticate((user) => {
              console.log({ user });
              console.log("user email", user?.email);
            });
      }}
    >
      {authenticated ? "Sign Out" : "Sign In/Up"}
    </Button>
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
