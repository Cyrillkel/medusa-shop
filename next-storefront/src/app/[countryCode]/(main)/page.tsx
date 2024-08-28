import { Product } from "@medusajs/medusa"
import { Metadata } from "next"

import { getCategoriesList, getCollectionsList, getProductsList, getRegion } from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { ProductCategoryWithPreviews } from "types/global"
import { cache } from "react"

export const metadata: Metadata = {
  title: "Medusa Next.js Starter Template",
  description:
    "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
}

const getCategoriesWithProducts = cache(
  async (
    countryCode: string
  ): Promise<ProductCategoryWithPreviews[] | null> => {
    const { product_categories } = await getCategoriesList(0, 3)

    if (!product_categories) {
      return null
    }

    const catIds = product_categories.map((cat) => cat.id)

    await Promise.all(
      catIds.map((id) =>
        getProductsList({
          queryParams: { category_id: [id] },
          countryCode,
        })
      )
    ).then((responses) =>
      responses.forEach(({ response, queryParams }) => {
        let cat

        if (product_categories) {
          cat = product_categories.find(
            (cat) => cat.id === queryParams?.category_id?.[0]
          )
        }

        if (!cat) {
          return
        }

        cat.products = response.products as unknown as Product[]
      })
    )

    return product_categories as unknown as ProductCategoryWithPreviews[]
  }
)

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const categories = await getCategoriesWithProducts(countryCode)
  const region = await getRegion(countryCode)

  if (!categories || !region) {
    return null
  }

  return (
    <>
      <Hero />
      <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts categories={categories} region={region} />
        </ul>
      </div>
    </>
  )
}
