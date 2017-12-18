import React from 'react';

import Container from 'components/Container';
import Flex from 'components/Flex';
import Header from './Header';
import Meta from './Meta';
// import MarkdownHeader from 'components/MarkdownHeader';
// import NavigationFooter from 'templates/components/NavigationFooter';
// import StickyResponsiveSidebar from 'components/StickyResponsiveSidebar';
// import TitleAndMetaTags from 'components/TitleAndMetaTags';
// import findSectionForPath from 'utils/findSectionForPath';
// import toCommaSeparatedList from 'utils/toCommaSeparatedList';
// import {sharedStyles} from 'theme';
// import createOgUrl from 'utils/createOgUrl';

import './index.scss';

// type Props = {
//   authors: Array<string>,
//   createLink: Function, // TODO: Add better flow type once we Flow-type createLink
//   date?: string,
//   enableScrollSync?: boolean,
//   ogDescription: string,
//   location: Location,
//   markdownRemark: Node,
//   sectionList: Array<Object>, // TODO: Add better flow type once we have the Section component
//   titlePostfix: string,
// };

const MarkdownPage = ({
  createLink,
  date,
  enableScrollSync,
  ogDescription,
  location,
  markdownRemark,
  sectionList,
  titlePostfix = '',
}) => (
  <Flex
    direction="column"
    grow="1"
    shrink="0"
    halign="stretch"
    style={{
      width: '100%',
      flex: '1 0 auto',
      position: 'relative',
      zIndex: 0,
    }}
  >
    <div style={{ flex: '1 0 auto' }}>
      <Container>
        <div className="article__container">
          <Flex type="article" direction="column" grow="1" halign="stretch">
            <Header
              title={markdownRemark.frontmatter.title}
              className="article__header"
            />
            <Meta
              date={date}
              className="article__meta"
            />
            <div className="article__content">
              {/* <div
                css={[sharedStyles.markdown]}
                dangerouslySetInnerHTML={{__html: markdownRemark.html}}
              /> */}
            </div>
          </Flex>
          {/* <div css={sharedStyles.articleLayout.sidebar}>
            <StickyResponsiveSidebar
              enableScrollSync={enableScrollSync}
              createLink={createLink}
              defaultActiveSection={findSectionForPath(
                location.pathname,
                sectionList,
              )}
              location={location}
              sectionList={sectionList}
            />
          </div> */}
        </div>
      </Container>
    </div>
  </Flex>
);

export default MarkdownPage;
