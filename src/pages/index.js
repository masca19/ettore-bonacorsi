import React from "react"

import SEO from "../components/seo"
import { Center, Footer, Tag, Showcase, DisplaySmall, DisplayMedium } from '../components'
import { titleIfy, slugify } from '../../utils/helpers'

import { graphql } from 'gatsby'

const Home = ({ data: gqlData }) => {
  const { inventoryInfo, categoryInfo: { data } } = gqlData
  const categories = data.slice(0, 2)
  const inventory = inventoryInfo.data.slice(0, 4)

  return (
    <>
      <SEO title="Home" />
      <div >
        <div >
          <div >
            <Tag
              year="2020"
              category="SOFAS"
            />
            <Center
              price="200"
              title={inventory[0].name}
              link={slugify(inventory[0].name)}
            />
            <Footer
              designer="Jason Bourne"
            />
          </div>
          <div >
            <Showcase
              imageSrc={inventory[0].image}
            />
            <div />
          </div>
        </div>
      </div>
      <div >
        <DisplayMedium imageSrc={categories[0].image} subtitle={`${categories[0].itemCount} items`} title={titleIfy(categories[0].name)} link={slugify(categories[0].name)} />
        <DisplayMedium imageSrc={categories[0].image} subtitle={`${categories[0].itemCount} items`} title={titleIfy(categories[0].name)} link={slugify(categories[0].name)} />
      </div>
      <div >
        <h2 >Trending Now</h2>
        <p >Find the perfect piece or accessory to finish off your favorite room in the house.</p>
      </div>
      <div >
        <DisplaySmall imageSrc={inventory[0].image} title={inventory[0].name} subtitle={inventory[0].categories[0]} link={slugify(inventory[0].name)} />

        <DisplaySmall imageSrc={inventory[0].image} title={inventory[0].name} subtitle={inventory[0].categories[0]} link={slugify(inventory[0].name)} />

        <DisplaySmall imageSrc={inventory[0].image} title={inventory[0].name} subtitle={inventory[0].categories[0]} link={slugify(inventory[0].name)} />

        <DisplaySmall imageSrc={inventory[0].image} title={inventory[0].name} subtitle={inventory[0].categories[0]} link={slugify(inventory[0].name)} />
      </div>
    </>
  )
}

export const pageQuery = graphql`
  query {
    navInfo {
      data
    }
    categoryInfo {
      data {
        name
        image
        itemCount
      }
    }
    inventoryInfo {
      data {
        image
        name
        categories
        description
        id
      }
    }
  }
`

export default Home
