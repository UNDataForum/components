import React from 'react';
import { Flex, Heading, Text } from 'rebass';
import { postType, responsiveNumberType } from '../../types';
import SmartLink from '../SmartLink';

const UnlinkedPostPreview = ({ post, fontSize, ...props }) => {
  const mb = post.lead ? 3 : 0;
  return (
    <Flex {...props} flexDirection="column">
      <Heading
        as="h1"
        color="text"
        fontFamily="sans"
        fontSize={fontSize}
        lineHeight="title"
        mt={0}
        mb={3}
      >
        {post.title}
      </Heading>
      {post.authors()}
      <Text
        as="time"
        color="text"
        css="display: block;"
        fontFamily="sans"
        mb={mb}
      >
        {post.date}
      </Text>
      {post.lead && (
        <Text as="p" color="text" fontFamily="serif" lineHeight="copy" my={0}>
          {post.lead}
        </Text>
      )}
    </Flex>
  );
};

UnlinkedPostPreview.propTypes = {
  post: postType.isRequired,
  fontSize: responsiveNumberType.isRequired,
};

const PostPreview = ({ post, fontSize = [3, 4], ...props }) => {
  if (post.href) {
    return (
      <SmartLink css="display: block;" {...props} href={post.href}>
        <UnlinkedPostPreview post={post} fontSize={fontSize} />
      </SmartLink>
    );
  }
  return <UnlinkedPostPreview {...props} post={post} fontSize={fontSize} />;
};

PostPreview.propTypes = {
  post: postType.isRequired,
  fontSize: responsiveNumberType,
};

export default PostPreview;
