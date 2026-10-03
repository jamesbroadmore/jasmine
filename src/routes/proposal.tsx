import { createFileRoute, Link } from "@tanstack/react-router";
import { currentOffers, quietQuarter, recommended } from "@/data/proposal";

export const Route = createFileRoute("/proposal")({
  component: ProposalPage,
});

function ProposalPage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="border-b border-line">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4 sm:px-6">
          <Link to="/" className="font-display text-xl">
            Mindshift
          </Link>
          <Link to="/" className="text-sm font-medium text-muted">
            Back to the site
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="text-xs font-semibold tracking-widest text-muted uppercase">
          Proposal · October 2026
        </p>
        <h1 className="mt-3 font-display text-5xl leading-[0.95] sm:text-6xl">
          A plan that pays.
        </h1>
        <p className="mt-6 text-lg text-muted">
          For Jasmine, founder of The Mindshift Movement. The public work is
          already real: a free guide, two meditations, a journal, and the
          Affirmagnets. The prices are not yet a business. This is the pricing
          and the next ninety days.
        </p>

        <section className="mt-14">
          <h2 className="font-display text-3xl">What is already on the table</h2>
          <p className="mt-3 text-muted">
            Checkout is Gumroad, on your own links. A direct sale costs 10% +
            US$0.50, then card processing of 2.9% + US$0.30 on top — about 13%
            plus under A$1.50. A sale that starts inside Gumroad Discover is
            30%. Share only your own links.
          </p>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {currentOffers.map((offer) => (
              <li key={offer.name} className="grid gap-1 py-4 sm:grid-cols-[1fr_auto]">
                <div>
                  <p className="font-medium">{offer.name}</p>
                  <p className="text-sm text-muted">{offer.note}</p>
                </div>
                <p className="font-display text-2xl sm:text-right">{offer.price}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-3xl">Where the money leaks</h2>
          <div className="mt-6 space-y-4 text-muted">
            <p>
              Australia Post’s Parcel Post prepaid satchel is A$10.55 for extra
              small and A$12.05 for small, anywhere in the country, packaging
              included. A pack of raised-letter magnets posted in that satchel
              spends about half of a A$22 price before it is made, and before
              Gumroad. If the sticker price includes postage, a single pack can
              lose money. The figures below assume about A$8 to make one pack.
              That is a planning assumption, not a supplier quote — replace it
              with your real cost before you reorder.
            </p>
            <p>
              The collection is priced at A$60 against 3 × A$22 = A$66. Six
              dollars is not a reason to buy the set. One parcel is. The saving
              you should sell is two satchels you do not post, not a token
              discount.
            </p>
            <p>
              Volume 1 and the full magnet set wear the same A$60. One is a
              file with almost no cost. The other is stock, packing, and a
              satchel. They should not cost the same, and the journal should
              not be asked to feel like a magnet deal.
            </p>
            <p>
              Comparable nervous-system work in Australia runs from about
              A$37–47 a month for a live group room, through roughly A$150–260
              a session, up to four-figure private containers. You do not need
              the top of that range. You do need something between a A$22
              magnet and a someday coaching practice.
            </p>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-3xl">The ladder</h2>
          <p className="mt-3 text-muted">
            “Keep” is what is left after Gumroad on a direct sale, and — for
            magnets — one satchel plus the A$8 make-cost assumption. It is not
            a promise of sales.
          </p>
          <ol className="mt-6 space-y-4">
            {recommended.map((item, index) => (
              <li key={item.name} className="rounded-card border border-line bg-cream p-5">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-sm font-semibold tracking-widest text-clay uppercase">
                    0{index + 1}
                  </p>
                  <p className="font-display text-3xl">{item.price}</p>
                </div>
                <h3 className="mt-2 font-display text-2xl leading-tight">{item.name}</h3>
                <p className="mt-2 text-sm font-medium">Keep {item.keep}</p>
                <p className="mt-2 text-sm text-muted">{item.why}</p>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-sm text-muted">
            If you are registered for GST, these prices are the price the buyer
            pays. Under the A$75,000 turnover threshold, registration is
            optional. Do not add GST on top of a price you have already shown.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-3xl">A quiet quarter, in numbers</h2>
          <p className="mt-3 text-muted">
            Two hundred people take the free guide. Nothing viral is required.
            Net of the costs above, the stack below is about A$3,270 across
            ninety days. The journal and the Method carry it. Magnets do not.
          </p>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {quietQuarter.map((row) => (
              <li key={row.move} className="grid gap-1 py-4 sm:grid-cols-[1.4fr_0.8fr_auto] sm:items-baseline">
                <p>{row.move}</p>
                <p className="text-sm text-muted">{row.count}</p>
                <p className="font-medium sm:text-right">{row.money}</p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-muted">
            Six Method sales matter more than thirty magnet packs. A live group
            of eight at A$497 is about A$3,400 kept, and it waits until the
            guide list can actually fill the room. A A$37 monthly room can
            wait until there are four practices in the library and a reason to
            come back each month.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-3xl">Ninety days</h2>
          <ol className="mt-6 space-y-6">
            <li>
              <h3 className="font-display text-2xl">Week 1 — fix the prices</h3>
              <p className="mt-2 text-muted">
                Move Volume 1 to A$79. Put the collection at A$89 with postage
                in the price for one Australian parcel, and a single pack at
                A$36 the same way. Charge extra only for express or overseas.
                Take the shop off any second storefront that is not selling.
                Turn off Discover, or do not feature those links.
              </p>
            </li>
            <li>
              <h3 className="font-display text-2xl">Weeks 2–4 — the guide has to sell</h3>
              <p className="mt-2 text-muted">
                Four emails, then stop. Day 0: the guide. Day 2: one pattern,
                in your voice. Day 4: Volume 1. Day 7: the collection as the
                thing they can see on the fridge, not a discount code. One
                short video a day for thirty days, and every one ends at the
                guide. Not the shop.
              </p>
            </li>
            <li>
              <h3 className="font-display text-2xl">Days 30–60 — the A$27 and the A$247</h3>
              <p className="mt-2 text-muted">
                Write the field notes only if the guide is being read. Record
                the six-week Method from practices you already know how to
                lead. Open it when fifteen people have paid for the journal.
                That number is the proof the list will pay. Before that, more
                content is just more free work.
              </p>
            </li>
            <li>
              <h3 className="font-display text-2xl">Days 60–90 — one room, or none</h3>
              <p className="mt-2 text-muted">
                If the Method has buyers, invite them into one live group of
                eight at A$497. If it does not, do not invent a membership to
                hide the gap. Change the emails, not the calendar.
              </p>
            </li>
          </ol>
        </section>

        <section className="mt-14 rounded-card bg-deep px-6 py-8 text-cream sm:px-8">
          <h2 className="font-display text-3xl">The ask</h2>
          <p className="mt-4 text-sand">
            Keep the voice. Change the ladder. Free guide, a small digital, the
            journal at a method price, magnets only as one posted set, then a
            six-week Method. Profit sits in the journal and the Method.
            Everything else is there so those two get bought.
          </p>
        </section>
      </main>
    </div>
  );
}
