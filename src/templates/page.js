import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"

import Hero from "../blocks/hero"
import Testimonials from "../blocks/testimonials"
import Intro from "../blocks/intro"
import GalleryGrid from "../blocks/galleryGrid"
import ImageLinks from "../blocks/imageLinks"
import PriceTable from "../blocks/priceTable"
import ContactForm from "../blocks/contactForm"
import ContactInfoBlock from "../blocks/contactInfoBlock"
import Text from "../blocks/text"
import Title from "../blocks/title"
import Video from "../blocks/video"
import WeddingPackages from "../blocks/weddingPackages"
import VillaDetails from "../blocks/villaDetails"
import SingleImage from "../blocks/singleImage"
import Amenities from "../blocks/amenities"

export default ({ data }) => {
  const page = data.allWordpressPage.edges[0].node
  const options = data.allWordpressAcfOptions.edges[0].node
  let title = page.title
  title = title.replace(/&#038;/g, "&")

  return (
    <Layout>
      <SEO title={title} />

      {page.acf.layout_page &&
        page.acf.layout_page.map((child, index) => {
          if (child.__typename === "WordPressAcf_hero")
            return <Hero key={index} data={child} />

          if (child.__typename === "WordPressAcf_title")
            return <Title key={index} data={child}></Title>

          if (child.__typename === "WordPressAcf_contact_form")
            return <ContactForm key={index}></ContactForm>

          if (child.__typename === "WordPressAcf_contact_info_block")
            return (
              <ContactInfoBlock key={index} data={child}></ContactInfoBlock>
            )

          if (child.__typename === "WordPressAcf_text")
            return <Text key={index} data={child}></Text>

          if (child.__typename === "WordPressAcf_hero")
            return <Hero key={index} data={child} />

          if (child.__typename === "WordPressAcf_intro")
            return <Intro key={index} data={child}></Intro>

          if (child.__typename === "WordPressAcf_gallery_grid")
            return <GalleryGrid key={index} data={child}></GalleryGrid>

          if (child.__typename === "WordPressAcf_image_links")
            return <ImageLinks key={index} data={child}></ImageLinks>

          // if (child.__typename === "WordPressAcf_testimonials")
          // return <Testimonials key={index} data={options}></Testimonials>

          if (child.__typename === "WordPressAcf_youtube_video")
            return <Video key={index} data={child}></Video>

          if (child.__typename === "WordPressAcf_wedding_packages")
            return <WeddingPackages key={index} data={child}></WeddingPackages>

          if (child.__typename === "WordPressAcf_villa_details")
            return <VillaDetails key={index} data={child}></VillaDetails>

          if (child.__typename === "WordPressAcf_single_image")
            return <SingleImage key={index} data={child}></SingleImage>

          if (child.__typename === "WordPressAcf_amenities")
            return <Amenities key={index} data={child}></Amenities>

          if (child.__typename === "WordPressAcf_price_table")
            return <PriceTable key={index} data={child}></PriceTable>
          else return null
        })}
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    allWordpressPage(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          acf {
            layout_page {
              ... on WordPressAcf_title {
                title
              }
              ... on WordPressAcf_text {
                text
              }
              ... on WordPressAcf_hero {
                title
                subtitle
                small_hero
                image {
                  caption
                  localFile {
                    childImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                      }
                    }
                  }
                }
              }
              ... on WordPressAcf_contact_info_block {
                text
              }
              ... on WordPressAcf_contact_form {
                id
              }
              ... on WordPressAcf_gallery_grid {
                images {
                  caption
                  localFile {
                    childImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                      }
                      fixed(width: 180, height: 180) {
                        ...GatsbyImageSharpFixed_withWebp_tracedSVG
                      }
                    }
                  }
                }
              }
              ... on WordPressAcf_image_links {
                image_link {
                  link {
                    target
                    title
                    url
                  }
                  image {
                    localFile {
                      childImageSharp {
                        fluid {
                          ...GatsbyImageSharpFluid_withWebp_tracedSVG
                        }
                      }
                    }
                    alt_text
                  }
                }
              }
              ... on WordPressAcf_intro {
                title
                text
                images {
                  caption
                  localFile {
                    childImageSharp {
                      fixed(width: 200, height: 250) {
                        ...GatsbyImageSharpFixed_withWebp_tracedSVG
                      }
                    }
                  }
                }
              }
              ... on WordPressAcf_price_table {
                category {
                  title
                  notes
                  type {
                    title
                    subtitle
                    prices {
                      price
                      note
                    }
                  }
                }
                notes
              }
              ... on WordPressAcf_testimonials {
                id
              }
              ... on WordPressAcf_youtube_video {
                video_id
              }
              ... on WordPressAcf_wedding_packages {
                package {
                  title
                  description
                  price
                  image {
                    caption
                    localFile {
                      childImageSharp {
                        fluid {
                          ...GatsbyImageSharpFluid_withWebp_tracedSVG
                        }
                      }
                    }
                  }
                }
              }
              ... on WordPressAcf_villa_details {
                title
                info {
                  title
                  items {
                    icon
                    item
                  }
                }
                images {
                  caption
                  localFile {
                    childImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                      }
                    }
                  }
                }
              }
              ... on WordPressAcf_single_image {
                image {
                  caption
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 750) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                      }
                    }
                  }
                }
              }
              ... on WordPressAcf_amenities {
                items {
                  title
                  icon
                  text
                }
              }
            }
          }
          title
        }
      }
    }
    allWordpressAcfOptions {
      edges {
        node {
          options {
            testimonial {
              quote
              name
              title
            }
            background_image {
              localFile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
