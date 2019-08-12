import React from "react";
import {
  Form,
  Input,
  TextArea,
  Button,
  Icon,
  Grid,
  Container
} from "semantic-ui-react";
import { FacebookProvider, Page } from "react-facebook";

const Contact = () => {
  return (
    <section
      id="contact"
      style={{
        paddingTop: "5vh",
        paddingBottom: "5vh",
        backgroundColor: "#cdcdcd",
        textAlign: "center",
        color: "white"
      }}
    >
      <Container fluid>
        <Grid columns={2} stackable padded centered verticalAlign="middle">
          <Grid.Column textAlign="center" verticalAlign="middle" widescreen="5">
            <Form size="big">
              <Form.Field
                id="form-icon"
                control={Icon}
                name="mail outline"
                size="huge"
                color="black"
              />
              <Form.Field
                id="form-input-control-name"
                control={Input}
                icon="tags"
                iconPosition="left"
                label="Name"
              />
              <Form.Field
                id="form-input-control-email"
                control={Input}
                icon="address book outline"
                iconPosition="left"
                label="Email"
              />
              <Form.Field
                id="form-textarea-control-opinion"
                control={TextArea}
                label="Opinion"
                style={{ minHeight: 200 }}
              />
              <Form.Field
                id="form-button-control-public"
                control={Button}
                content="Confirm"
                size="big"
                color="black"
              />
            </Form>
          </Grid.Column>
          <Grid.Column verticalAlign="middle" width="5">
            <FacebookProvider appId="307311049732291">
              <Page
                href="https://www.facebook.com/MachineLearningMastery/"
                tabs="timeline"
              />
            </FacebookProvider>
          </Grid.Column>
        </Grid>
      </Container>
    </section>
  );
};

export default Contact;
