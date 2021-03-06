import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import JobList from './Base';
import { Typography } from '@crocoder-dev/components';

export const ArchivedJobList = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          sort: { fields: frontmatter___timestamp, order: DESC }
          filter: { frontmatter: { archived: { eq: "true" } } }
        ) {
          nodes {
            id
            fields {
              slug
            }
            frontmatter {
              title
              location
              hashtags
              logoUrl
              companyName
              summary
            }
          }
        }
      }
    `}
    render={(data) => {
      const count = data.allMarkdownRemark.nodes.length || 0;
      return (
        <>
          <Typography color="gray_2" fontSize={16}>
            Found {count} archived job{count !== 1 && 's'}
          </Typography>
          <JobList
            jobs={data.allMarkdownRemark.nodes.map((node) => ({
              title: node.frontmatter.title,
              location: node.frontmatter.location,
              jobUrl: node.fields.slug,
              tags: node.frontmatter.hashtags,
              companyLogo: node.frontmatter.logoUrl,
              companyName: node.frontmatter.companyName,
              summary: node.frontmatter.summary,
            }))}
          />
        </>
      );
    }}
  />
);
