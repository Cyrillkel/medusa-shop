import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-[url('https://gologram-print.ru/thumb/2/VsDY10GcEA9skErpmPWoKA/r/d/top_pic4.jpg')] bg-no-repeat bg-cover">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-ui-fg-base font-normal"
          >
            Изготовим голограммы за 1 день
          </Heading>
          <Heading
            level="h2"
            className="text-3xl leading-10 text-ui-fg-subtle font-normal"
          >
            Разработка макета и доставка - бесплатно
          </Heading>
        </span>
      </div>
    </div>
  )
}

export default Hero
