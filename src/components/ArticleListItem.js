import PropTypes from "prop-types";
import _ from "lodash";
import React from "react";
import {
  Button,
  Header,
  Icon,
  Image,
  Modal,
  Item,
  Popup
} from "semantic-ui-react";

const propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  imageLink: PropTypes.string,
  tag: PropTypes.string,
  time: PropTypes.string
};

const defaultProps = {};

const ArticleListItem = ({ id, title, content, imageLink, tag, time }) => (
  <Modal
    trigger={
      <Item>
        <Popup
          content="Hi"
          header="Hello"
          trigger={<Item.Image size="medium" src={imageLink} />}
          position="top center"
        />
        <Item.Content>
          <Item.Header as="a">{title}</Item.Header>
          <Item.Meta>{tag}</Item.Meta>
          <Item.Description>{content}</Item.Description>
          <Item.Extra>
            <Icon name="calendar alternate outline" />
            {new Date(time).toString()}
          </Item.Extra>
        </Item.Content>
      </Item>
    }
    size="large"
  >
    <Modal.Header>Project Info</Modal.Header>
    <Modal.Content image scrolling>
      <Image
        size="medium"
        src="https://react.semantic-ui.com/images/wireframe/image.png"
        wrapped
      />

      <Modal.Description>
        <Header>Project Info</Header>
        <p>This is an example of project info.</p>

        {_.times(8, i => (
          <Image
            key={i}
            src="https://react.semantic-ui.com/images/wireframe/paragraph.png"
            style={{ paddingBottom: 5 }}
          />
        ))}
      </Modal.Description>
    </Modal.Content>
    {/* <Modal.Actions>
      <Button primary>Done</Button>
    </Modal.Actions> */}
  </Modal>
);

ArticleListItem.propTypes = propTypes;
ArticleListItem.defaultProps = defaultProps;

export default ArticleListItem;
