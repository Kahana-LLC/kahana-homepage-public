# Compare discovery charter

> **Purpose:** Source of truth for making Kahana show up when people compare creator and library platforms in Google and AI search.
> **Audience:** Marketing site (`kahana-homepage-public`).
> **Last updated:** 2026-09-30
> **Status:** Charter locked. First page shell shipped. Essay retirement and quality passes not started.
> **Index:** https://about.kahana.io/compare
> **Page pattern:** `https://about.kahana.io/compare/[platform-id]`
> **Related:** [`WEBSITE_LIBRARY_VISION_CHARTER.md`](WEBSITE_LIBRARY_VISION_CHARTER.md), data-room Company Landscape (108 companies; public pages are the subset in section 4)

---

## 1. Goal

People researching a platform type another product's name plus "alternative," "vs," or "which should I use." Google and AI answers cite the page that states the comparison in plain facts.

Kahana should be that page for the platforms a creator or learner might actually weigh next to Kahana.

**North star:** One public URL per included platform, titled like the query. Creator tools say keep the other product and list the same work on Kahana. Streaming pages say the Library is a free, ad-free evening alternative you can use while keeping the subscription.

## 2. Stance

1. **Use both.** Kahana sits next to the other tool. Leaving it is not the pitch.
2. **Free hosting is the offer.** The Free plan hosts work the creator already has and lists it in the Library. The cost is the time to upload.
3. **Paid peers are still tandem.** Stan Store, Kajabi, Skool, Teachable, Podia, Gumroad, Patreon, and Nas.io overlap Kahana on creator-business jobs and charge for that. Kahana is the accessible way to host and get listed. Someone already paying for those tools can link a Kahana hub from their site, store, or course so Library search can find the same pack.
4. **Real UI, not screenshots.** Pages show live components in the style of the product (Library card, and later tool-specific blocks). No pasted screenshots, no generated essay voice.
5. **Streaming is an evening alternative.** Netflix, Disney+, Hulu, Max, Prime Video, Apple TV+, Paramount+, Peacock, Crunchyroll, and CuriosityStream can be comparison pages. Kahana does not carry those shows. The page says the Library is an ad-free, free place for books, creator videos, and uploaded files on a night you might otherwise open another streaming subscription. People can keep the streaming service.
6. **Adult section, not an adult-first network.** OnlyFans and Fansly are in scope because people upload work there and sell premium access. Kahana is a general library. Adult hubs are allowed when the creator marks them adult. They stay out of the default Library and are not indexed like other listed hubs. Opening one requires sign-in, a date of birth showing 18+, and acceptance of the adult-content terms. The compare page says that plainly and does not pitch Kahana as an OnlyFans clone.
7. **No thin pages.** Every included company gets the same page shape. Duplicate surfaces of one company (YouTube Shorts, YouTube Podcasts, TikTok Music) do not get a separate page. Names with no honest comparison sentence stay off the index.
8. **No em dashes** in this copy.

## 3. Information architecture

| Surface | Job |
|---|---|
| `/compare` | Searchable index. Filters by category and audience. Each card links to `/compare/[id]`. |
| `/compare/[id]` | Evergreen vendor page. Title `Kahana vs [Name]`. Short tandem copy, live Library card, visible FAQ, FAQ schema. |
| `/blog/kahana-vs-*` | Retire. Redirect to the matching compare page, or to `/compare` when there is no public platform page. Do not paste essay text onto compare pages. |

Blog posts are the wrong shape. They age, and the generated set competes with the URL we want cited.

Three older essays (Linktree, Gumroad/Stan, Notion/Drive) may be mined for a fact in a later pass. Their public URLs still redirect.

## 4. Public set

Start from the data-room landscape. Give a page to each company where one of these sentences is true:

- Keep that tool and list the same work on Kahana.
- Kahana is a free, ad-free evening library beside a streaming subscription.
- Kahana is a general library where adult work can be marked, gated, and sold, beside a platform built around premium uploads.

Already live as shells: the 33 in `data/platform-compare.js`.

Still to add: the rest of the creator, reading, and community tools in the landscape; the streaming catalogs in section 2; OnlyFans and Fansly.

Do not add a separate page for a surface of a company that already has one (YouTube Shorts, YouTube Podcasts, TikTok Music). Google Search and Wikipedia stay off this index unless a later pass finds a comparison sentence that is true.

## 5. Page template (good enough)

Each `/compare/[id]` page includes:

- Title and meta description that contain `Kahana vs [Name]`.
- Opening matched to the comparison type: tandem (keep the tool, Free plan, time to upload), evening library (streaming), or gated adult section (OnlyFans, Fansly).
- Paid-peer paragraph when the platform charges for courses, memberships, or a store and Kahana's Free plan can host the same pack.
- `TandemLibraryCard`: a listed hub with "On Kahana Library" and "Linked from [Name]". Streaming pages use the same card as "what you open instead," not as a TV episode.
- Three visible questions. Creator tools: use together, do I have to leave, free alternative or what Kahana adds. Streaming: does Kahana have these shows (no), is it free and ad-free, can I keep the subscription. OnlyFans and Fansly: can I upload and charge, can I mark a hub adult, how the 18+ gate works.
- Adult-section facts, when that question is on the page: creator marks the hub adult; it is hidden from the default Library; it is not indexed like other listed hubs; opening it requires sign-in, a date of birth showing 18+, and acceptance of the adult-content terms.
- Links to the other product's site, `/pricing`, and `/creators`. Adult pages also link the adult-content help guide.

Later passes replace the shared card with closer UI per platform and tighten facts. Quality can improve in multiple passes. The first shell is allowed to be shared.

## 6. Already shipped (2026-09-30)

- `/compare/[slug]` for all 33, generated from `COMPARE_PLATFORMS`.
- Compare index cards link to those pages instead of blog essays.
- Shared `TandemLibraryCard`.

Essay 301s, blog-index removal, sitemap skip, and fee-table links shipped 2026-09-30. Stan Store, Kajabi, and Skool have their own UI blocks. The public set is expanded past the original 33. Each `/compare/[id]` URL is in `/sitemap.xml` and on the HTML sitemap. Not done: Search Console check after deploy, and richer UI beyond Stan Store, Kajabi, and Skool.

## 7. Next passes

1. Redirect `/blog/kahana-vs-*` as in section 3. Point fee table and deep dives at `/compare`.
2. Richer components for Stan Store, Kajabi, and Skool first (link row, site block, course row).
3. Add the remaining public-set pages: other creator, reading, and community tools; streaming catalogs; OnlyFans and Fansly. Fact pass so each page uses the right comparison type.
4. Confirm those URLs are in the sitemap and that essay URLs 301.

## 8. Out of scope

- Oasis browser comparisons.
- Rewriting philosophy, Aura, or library-vision essays for search.
- Claiming Kahana replaces a TV catalog, YouTube, Spotify, Kindle, or a full LMS.
- Pitching Kahana as an adult-first network. Adult hubs are a gated section of a general library.

## 9. Done when

- `/compare` is the only public index for these platforms.
- Each company in the public set has one indexable page with a query-shaped title, tandem or evening-alternative stance, live UI, and a visible FAQ.
- Old `kahana-vs` blog URLs redirect and are not the pages AI results quote.
- Paid-peer pages state Free-plan hosting and "link the hub from the tool you already pay for."
- Streaming pages say Kahana does not carry those shows, and that the Library is a free, ad-free evening alternative beside the subscription.
- OnlyFans and Fansly pages state the adult-section gate and do not pitch Kahana as an adult-first network.
