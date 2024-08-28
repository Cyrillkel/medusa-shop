import { Region } from "@medusajs/medusa"

import ProductRail from "@modules/home/components/featured-products/product-rail"
import { ProductCategoryWithPreviews } from "types/global"

export default async function FeaturedProducts({
  categories,
  region,
}: {
  categories: ProductCategoryWithPreviews[]
  region: Region
}) {
  return categories.map((category) => (
    <li key={category.id}>
      <ProductRail category={category} region={region} />
    </li>
  ))
}
