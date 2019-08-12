import React, { PureComponent } from "react";
import { css, before } from "glamor";
import { Icon, Menu } from "semantic-ui-react";
import Item from "./Item";

const styles = {
  container: css({
    background: "black",
    color: "white",
    width: "100%",
    flexDirection: "column",
    "@media(min-width: 720px)": {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }),

  wrapper: css({
    width: "80%",
    maxWidth: 1000,
    display: "flex",
    padding: 20,
    flexDirection: "column",
    justifyContent: "space-between",
    "@media(min-width: 720px)": {
      width: "100%",
      justifyContent: "space-between",
      display: "flex",
      flexDirection: "row"
    }
  }),

  link: css({
    color: "#00A9FF",
    textDecoration: "none"
  }),

  linkWithoutColor: css({
    color: "white",
    textDecoration: "none",
    backgroundColor: "none",
    ":hover": {
      color: "gray"
    }
  }),

  before: before({
    content: '""',
    position: "absolute",
    left: "0",
    bottom: "100%",
    height: "0",
    width: "0"
  })
};

class Footer extends PureComponent {
  render() {
    return (
      <div {...styles.container} {...styles.before}>
        <div {...styles.wrapper}>
          <Item title="ML4U">
            <p>
              E-mail:{" "}
              <a {...styles.link} href="">
                <u>
                  <i>abc@gmail.com</i>
                </u>
              </a>
            </p>
            <p>Visit our network</p>
            <Menu.Item
              href="https://slack.com"
              target="_blank"
              {...styles.linkWithoutColor}
            >
              <Icon name="slack" size="big" link />
            </Menu.Item>
            <Menu.Item
              href="https://github.com"
              target="_blank"
              {...styles.linkWithoutColor}
            >
              <Icon name="github" size="big" link />
            </Menu.Item>
            <Menu.Item
              href="https://twitter.com"
              target="_blank"
              {...styles.linkWithoutColor}
            >
              <Icon name="twitter" size="big" link />
            </Menu.Item>
            <Menu.Item
              href="https://facebook.com"
              target="_blank"
              {...styles.linkWithoutColor}
            >
              <Icon name="facebook" size="big" link />
            </Menu.Item>
          </Item>
          <br />
          <Item title="COMMITMENT">
            <p>
              <a
                {...styles.link}
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                Code of conduct
              </a>
            </p>
          </Item>
          <br />
          <Item title="ORGANIZER">
            <p>
              Copyright by:{" "}
              <a {...styles.link} href="">
                BK University
              </a>
            </p>
            <p>
              Created with:{" "}
              <a {...styles.link} href="">
                create-react-app
              </a>
            </p>
            <p>
              {" "}
              <a {...styles.link} href="">
                {Date().toString()}
              </a>
            </p>
          </Item>
          <br />
        </div>
      </div>
    );
  }
}

export default Footer;
