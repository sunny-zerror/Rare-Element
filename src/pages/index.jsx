import React from 'react'
import SeoHeader from '@/components/seo/SeoHeader'
import Hero from '@/components/home/Hero'
import Category from '@/components/home/Category'
import FeaturedCollection from '@/components/home/FeaturedCollection'
import LookBook from '@/components/home/LookBook'
import SocialReels from '@/components/home/SocialReels'
import { GET_PRODUCTS, GET_CLIENT_SIDE_CATEGORIES } from '@/graphql'
import { createApolloClient } from '@/lib/apolloClient'
import { ProductStatus } from '@/utils/Constant'

const Home = ({ meta, categories, products }) => {
  return (
    <>
      <SeoHeader meta={meta} />
      <Hero />
      <Category data={categories} />
      <FeaturedCollection data={products} />
      <LookBook data={products} />
      <SocialReels />
    </>
  )
}

export default Home

export async function getServerSideProps() {
  const meta = {
    title: "Nahara – Luxury Fine Jewellery Crafted for Modern Elegance",
    description: "Discover handcrafted fine jewellery at Nahara featuring diamonds, gold, sterling silver, and contemporary designs made for modern women. Shop rings, earrings, bracelets, necklaces, and more.",
    keywords: [
      "Nahara jewellery",
      "fine jewellery India",
      "diamond jewellery online",
      "gold jewellery",
      "925 silver jewellery",
      "women's jewellery"
    ],
    primaryKeywords: ["Nahara jewellery", "fine jewellery India"],
    author: "Nahara",
    robots: "index, follow",
    og: {
      title: "Nahara – Luxury Fine Jewellery Crafted for Modern Elegance",
      description: "Handcrafted fine jewellery in gold, diamonds, and silver made for modern elegance.",
    },
    twitte: {
      card: "summary_large_image",
      title: "Nahara – Luxury Fine Jewellery Crafted for Modern Elegance",
      description: "Explore premium handcrafted jewellery at Nahara.",
    }
  };
  
  try {
    const client = createApolloClient();
    const queries = [
      client.query({
        query: GET_CLIENT_SIDE_CATEGORIES,
        variables: {
          offset: 0,
          limit: 5,
        },
      }),
      client.query({
        query: GET_PRODUCTS,
        variables: {
          offset: 0,
          limit: 10,
          filters: {
            status: ProductStatus.PUBLISHED,
          },
        },
      }),
    ].filter(Boolean);

    const [categoriesRes, productRes] = await Promise.all(queries);
    return {
      props: {
        meta,
        categories: categoriesRes?.data?.getClientSideCategories?.categories || [],
        products: productRes?.data?.getClientSideProducts?.products || [],
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return {
      props: {
        meta,
        catgories: [],
        products: [],
      },
    };
  }
}