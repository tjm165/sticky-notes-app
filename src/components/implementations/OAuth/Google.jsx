import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Auth } from "aws-amplify";
import { googleSignIn } from "../../../API";

import GoogleButton from "react-google-button";

function GooglePostSignIn(props) {
  useEffect(() => {
    Auth.currentAuthenticatedUser().then(user => {
      props.history.push("/dashboard");
    });
  });

  return (
    <div>
      Please wait while authenticating with Google. If this page lasts for more
      than 10 seconds then please reload.
    </div>
  );
}

export default withRouter(GooglePostSignIn);

export function GoogleOAuthButton() {
  const handleGoogleSubmit = () => {
    googleSignIn();
  };

  return <GoogleButton onClick={() => handleGoogleSubmit()} />;
}