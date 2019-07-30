import React from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Grid, Header } from "semantic-ui-react";
import Heading from "../implementations/Layout/Heading";
import Desktop from "../implementations/Layout/Desktop";
import Divider from "../implementations/Layout/Divider";
import Paragraph from "../implementations/Layout/Paragraph";

const HomepageHeading = () => (
  <Heading
    h1="Created by students for students"
    h2="You've never used note-taking like this before."
    misc={
      <Link to="/signup">
        <Button primary size="huge">
          Get Started
          <Icon name="right arrow" />
        </Button>
      </Link>
    }
  />
);

const LandingPageLayout = () => (
  <Desktop activeItem="Home" heading={<HomepageHeading />}>
    <Paragraph headerText="How It Works">
      <Grid columns="equal">
        <Grid.Column>
          <Header>Create it</Header>
        </Grid.Column>
        <Grid.Column>
          <Header>Tag it</Header>
        </Grid.Column>
        <Grid.Column>
          <Header>Search it</Header>
        </Grid.Column>
      </Grid>
    </Paragraph>
    <Divider />

    <Paragraph headerText="Multi-Tag Search" text="It's really cool" />
    <Divider />

    <Paragraph headerText="Auto-Colored Notes" text="It's super cool" />
    <Divider />
  </Desktop>
);
export default LandingPageLayout;
