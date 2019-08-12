import React, { Component } from "react";
import ArticleList from "./ArticleList";
import { Item, Container, Pagination, Icon } from "semantic-ui-react";
import Text from "./Text";

class ArticleContainer extends Component {
  render() {
    return (
      <session id="article">
        <Container>
          <Text title="Our Projects" reverse />
          <Item.Group divided link>
            <ArticleList {...this.props} />
          </Item.Group>
        </Container>
        <Container textAlign="right" style={{ paddingTop: "5vh" }}>
          <Pagination
            defaultActivePage={2}
            siblingRange={1}
            boundaryRange={0}
            ellipsisItem={{
              content: <Icon name="ellipsis horizontal" />,
              icon: true
            }}
            firstItem={{
              content: <Icon name="angle double left" />,
              icon: true
            }}
            lastItem={{
              content: <Icon name="angle double right" />,
              icon: true
            }}
            pointing
            secondary
            prevItem={null}
            nextItem={null}
            // prevItem={{ content: <Icon name="angle left" />, icon: true }}
            // nextItem={{ content: <Icon name="angle right" />, icon: true }}
            totalPages={10}
          />
        </Container>
      </session>
    );
  }
}

export default ArticleContainer;
