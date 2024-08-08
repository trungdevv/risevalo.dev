import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
async function FAQ({}) {
  return (
    <div className="container py-12 lg:py-24">
      <h2 className="text-2xl font-bold text-center md:text-5xl  font-title uppercase mb-6 md:mb-10">
        <span className="">Frequently </span>
        <span className="text-stroke text-stroke-accent text-stroke-fill-transparent">
          asked
        </span>
        <span> questions</span>
      </h2>
      <div className="flex flex-col gap-6 max-w-6xl mx-auto">
        <Accordion
          className="bg-[#161616] rounded-md"
          type="single"
          collapsible
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>Why should you choose us?</AccordionTrigger>
            <AccordionContent>
              At Rise, we offer high tier customer support like no other place,
              and we value customers over everything. Purchasing from us comes
              with reliability. All of our products are affordable and come with
              quality. We care about our customers and understand both
              perspectives, being the buyer and the seller. Overall you will
              just have a better experience buying from us.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion
          className="bg-[#161616] rounded-md"
          type="single"
          collapsible
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>Are your products safe?</AccordionTrigger>
            <AccordionContent>
              Yes, all of our products are safe. However, since Vanguard is one
              of the best anti cheats, there is always risk of bans if you play
              blatantly.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default FAQ;
