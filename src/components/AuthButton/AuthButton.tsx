import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Button, useColorModeValue, useToast } from "@chakra-ui/react";
import netlifyIdentity from "netlify-identity-widget";
import { useEffect, useGlobal } from "reactn";

// example created from: https://github.com/netlify/netlify-identity-widget
export const AuthButton = () => {
  const [authenticated, setAuthenticated] = useGlobal("authenticated");
  const [, setUser] = useGlobal("user");

  const toast = useToast();

  useEffect(() => {
    netlifyIdentity.on("login", (signInUser) => {
      netlifyIdentity.close();

      setAuthenticated(true);
      setUser(signInUser);

      const name = signInUser?.user_metadata?.full_name || signInUser.email;

      toast({
        title: "Signed In!",
        description: `Hello there, ${name}!`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      // TODO: `useNavigate` to go to... history?
    });
    netlifyIdentity.on("logout", () => {
      setAuthenticated(false);
      setUser(undefined);
    });

    return () => {
      netlifyIdentity.off("login");
      netlifyIdentity.off("logout");
    };
  }, [setAuthenticated, setUser, toast]);

  const buttonHighlightColor = useColorModeValue("pink.800", "pink.400");

  return (
    <Button
      leftIcon={authenticated ? <ArrowBackIcon /> : undefined}
      rightIcon={!authenticated ? <ArrowForwardIcon /> : undefined}
      _hover={{
        bg: buttonHighlightColor,
      }}
      onClick={() => {
        authenticated ? netlifyIdentity.logout() : netlifyIdentity.open();
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
