#!/usr/bin/env node
/**
 * Refresh Kahana Help CMS (data/docs/*.json) for Library naming and new topics.
 * Run from kahana-homepage-public root: node scripts/write-help-center-2026-08.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const DOCS = path.join(ROOT, 'data/docs');
const DATE = '2026-08-14';
const APP = 'https://app.kahana.io';
const LIBRARY = `${APP}/library`;
const CLUBS = `${APP}/clubs`;
const SAVED = `${APP}/saved`;
const MESSAGES = `${APP}/messages`;
const BILLING = `${APP}/billing`;
const ACTIVITY = `${APP}/activity`;
const COMMS = `${APP}/settings/communication`;
const DANGER = `${APP}/settings/danger`;
const INTERESTS = `${APP}/settings/interests`;

function article({ title, description, slug, category, content }) {
  return {
    title,
    description,
    slug,
    category,
    product: 'kahana',
    date: DATE,
    authors: ['Adam Kershner'],
    content,
  };
}

function stripEmDashes(text) {
  if (!text || typeof text !== 'string') return text;
  return text.replace(/ — /g, ': ').replace(/—/g, ': ');
}

function writeDoc(doc) {
  const next = {
    ...doc,
    title: stripEmDashes(doc.title),
    description: stripEmDashes(doc.description),
    content: stripEmDashes(doc.content),
  };
  const file = path.join(DOCS, `${next.slug}.json`);
  fs.writeFileSync(file, `${JSON.stringify(next, null, 2)}\n`);
  return next.slug;
}

function rewriteExploreCopy(text) {
  if (!text || typeof text !== 'string') return text;
  let s = text;
  s = s.replace(/\/help\/list-hub-on-explore/g, '___LIST_SLUG___');
  s = s.replace(/\/help\/explore/g, '___EXPLORE_SLUG___');
  s = s.replace(/https:\/\/app\.kahana\.io\/explore/g, LIBRARY);
  s = s.replace(/app\.kahana\.io\/explore/g, 'app.kahana.io/library');
  s = s.replace(/\?tab=creators/g, '?tab=authors');
  s = s.replace(/Hubs vs Creators/g, 'Library vs Authors');
  s = s.replace(/the Creators tab/g, 'the Authors tab');
  s = s.replace(/Creators tab/g, 'Authors tab');
  s = s.replace(/Open Explore/g, 'Open Library');
  s = s.replace(/Browse Explore/g, 'Browse Library');
  s = s.replace(/Give Aura on Explore/g, 'Give Aura on Library');
  s = s.replace(/List a hub on Explore/g, 'List a hub on Library');
  s = s.replace(/list a hub on Explore/g, 'list a hub on Library');
  s = s.replace(/list on Explore/g, 'list on Library');
  s = s.replace(/listed on Explore/g, 'listed on Library');
  s = s.replace(/Listing on Explore/g, 'Listing on Library');
  s = s.replace(/list it on Explore/g, 'list it on Library');
  s = s.replace(/Explore listing/g, 'Library listing');
  s = s.replace(/Explore-listed/g, 'Library-listed');
  s = s.replace(/on Explore/g, 'on Library');
  s = s.replace(/Explore defaults/g, 'Library defaults');
  s = s.replace(/Explore behavior/g, 'Library behavior');
  s = s.replace(/Explore ranking/g, 'Library ranking');
  s = s.replace(/Explore rank/g, 'Library rank');
  s = s.replace(/Explore adult/g, 'Library adult');
  s = s.replace(/Explore filter/g, 'Library filter');
  s = s.replace(/Explore surface/g, 'Library surface');
  s = s.replace(/Explore and/g, 'Library and');
  s = s.replace(/Explore is/g, 'Library is');
  s = s.replace(/Explore,/g, 'Library,');
  s = s.replace(/Explore\./g, 'Library.');
  s = s.replace(/Explore /g, 'Library ');
  s = s.replace(/ Explore/g, ' Library');
  s = s.replace(/Step (\d+) —/g, 'Step $1.');
  s = s.replace(/ — /g, '. ');
  s = s.replace(/—/g, '. ');
  s = s.replace(/___LIST_SLUG___/g, '/help/list-hub-on-explore');
  s = s.replace(/___EXPLORE_SLUG___/g, '/help/explore');
  return s;
}

const written = [];

written.push(writeDoc(article({
  slug: 'explore',
  title: 'Browse Library',
  category: 'discovery',
  description:
    'Public discovery of hubs, authors, For You, and clubs: search, filters, listing rules, guest vs adult browsing, and mobile limits.',
  content: `<p class="lead">Library is Kahana’s public catalog. Search and filter hubs, authors, and clubs. It is discovery, not a social feed.</p>

<p><strong>Primary action:</strong> <a href="${LIBRARY}" target="_blank" rel="noopener noreferrer">Open Library</a></p>

<h2>How discovery works</h2>
<ol>
<li><strong>Search.</strong> Type what you need. Results sort by relevance when you search, or by popular when you browse.</li>
<li><strong>Filter.</strong> Narrow by category, free or paid, price range, tags, and adult visibility.</li>
<li><strong>Open.</strong> Open a card to land in the hub, an author’s profile, or a club.</li>
</ol>

<h2>Library tabs</h2>
<ul>
<li><strong>Library</strong> (default, no <code>tab</code> in the URL) — public hubs listed in the catalog.</li>
<li><strong>For You</strong> (<code>?tab=for-you</code>) — a personalized feed from your Aura, saves, follows, and taste marks. Details: <a href="/help/for-you-and-taste">For You and taste</a>.</li>
<li><strong>Authors</strong> (<code>?tab=authors</code>) — people who contribute. Open a profile to see their listed hubs. Older <code>?tab=creators</code> links still work.</li>
<li><strong>Clubs</strong> — opens the Clubs directory. Create, join, and browse clubs: <a href="/help/clubs">Clubs</a>.</li>
</ul>

<h2>Filters you can use</h2>
<ul>
<li>Text search</li>
<li>Categories</li>
<li>Free vs monetized</li>
<li>Price range</li>
<li>Custom tags</li>
<li>Adult modes (hide by default)</li>
<li>Sort: popular when browsing, relevance when searching</li>
</ul>

<h2>What gets listed</h2>
<ul>
<li>A hub appears in Library when it is public, active, and listed, with the basics ready: title, cover, description, category, profile pic, adult yes/no, and public access.</li>
<li>Unlisted public hubs stay link-only. They do not show in Library search and stay out of SEO indexing.</li>
<li>Listing helps people find you. It is not a ranking promise or guaranteed traffic.</li>
</ul>
<p>Step-by-step for creators: <a href="/help/list-hub-on-explore">List a hub on Library</a>.</p>

<h2>Guests and adult content</h2>
<ul>
<li>Guests can browse most public, non-adult listings in Library.</li>
<li>Adult hubs can be listed, but they stay hidden by default. You need the adult filter, login, and age verification to see them.</li>
</ul>
<p>Details: <a href="/help/adult-content-and-age-verification">Adult content &amp; age verification</a> · Topic: <a href="/help/trust">Trust</a>.</p>

<h2>Phones</h2>
<p>On small phones, full Library browse may be unavailable for now (Home and Search stay available). Desktop and larger screens keep the full Library grid. This is a temporary performance limit, not a plan restriction.</p>

<h2>What’s next</h2>
<ul>
<li><a href="/help/get-started-learners">Get started (learners)</a> — first-time browsing path.</li>
<li><a href="/help/for-you-and-taste">For You and taste</a> — personalize the feed.</li>
<li><a href="/help/clubs">Clubs</a> — reading groups and lists.</li>
<li><a href="/help/buying-and-access">Buying &amp; access</a> — paid hubs.</li>
<li><a href="/help/how-aura-works">How Aura works</a> — endorse hubs and files.</li>
</ul>

<p><a href="${LIBRARY}" target="_blank" rel="noopener noreferrer"><strong>Open Library →</strong></a></p>
`,
})));

written.push(writeDoc(article({
  slug: 'get-started-learners',
  title: 'Get started (learners)',
  category: 'guides',
  description:
    'Find and use hubs on Kahana: open Library, search and filter, save or follow, and give Aura, without creating a hub yet.',
  content: `<p class="lead">This guide gets you from “what is this?” to browsing Library, opening a hub, saving or following, and optionally giving Aura.</p>

<p><strong>Primary action:</strong> <a href="${LIBRARY}" target="_blank" rel="noopener noreferrer">Open Library</a></p>

<h2>What you’ll do</h2>
<p>Discover curated hubs → open what looks useful → save or follow → give Aura when something deserves it.</p>

<h2>Step 1. Open Library</h2>
<ol>
<li>Go to <a href="${LIBRARY}" target="_blank" rel="noopener noreferrer">app.kahana.io/library</a>.</li>
<li>Browse most non-adult public hubs without an account.</li>
<li>Use the tabs: <strong>Library</strong> (hubs), <strong>For You</strong> (<code>?tab=for-you</code>), and <strong>Authors</strong> (<code>?tab=authors</code>).</li>
</ol>
<p>On small phones, Library browse may be limited. Use Search or a larger screen for the full catalog. Overview: <a href="/help/explore">Browse Library</a>.</p>

<h2>Step 2. Search and filter</h2>
<ol>
<li>Search by keywords for what you want to learn.</li>
<li>Filter by category, free vs paid, tags, and sort (popular when browsing; relevance when searching).</li>
<li>Start with a niche you care about so the catalog feels small and useful.</li>
</ol>

<h2>Step 3. Open a hub</h2>
<ol>
<li>Open a card to land on the hub page (or an author’s profile from the Authors tab).</li>
<li><strong>Free hubs:</strong> open the content (adult hubs follow the note below).</li>
<li><strong>Paid hubs:</strong> you’ll see a paywall if you don’t have access yet. Purchase unlocks through Stripe. See <a href="/help/buying-and-access">Buying &amp; access</a>.</li>
</ol>

<h2>Step 4. Make it sticky (account)</h2>
<p>After you sign up or sign in:</p>
<ul>
<li><strong>Save</strong> hubs, files, and authors you want to reopen. Collections live at <a href="${SAVED}" target="_blank" rel="noopener noreferrer">/saved</a>. Guide: <a href="/help/saving-and-collections">Saving and collections</a>.</li>
<li><strong>Follow</strong> authors you trust.</li>
<li>Mark hubs, files, authors, or clubs <strong>For you</strong> or <strong>Not for you</strong> so For You can learn. Guide: <a href="/help/for-you-and-taste">For You and taste</a>.</li>
</ul>

<h2>Step 5. Give Aura (optional but core)</h2>
<ul>
<li>You must be logged in.</li>
<li>You get up to <strong>5 Aura per day</strong> (resets at midnight UTC).</li>
<li>Give Aura to <strong>hubs and files</strong>. Not to people or profiles.</li>
<li>You can’t give Aura to your own hubs or files.</li>
<li>Aura is scarce on purpose. It is not money and not a paywall currency.</li>
</ul>
<p>Rules: <a href="/help/how-aura-works">How Aura works</a>. Longer philosophy: the <a href="/aura">Aura guide</a>.</p>

<h2>Adult content note</h2>
<ul>
<li>Adult hubs can be listed but often stay hidden by default on Library.</li>
<li>Access needs login and age verification (date of birth, 18+). There is no anonymous “I’m 18” unlock.</li>
</ul>
<p>How-to: <a href="/help/adult-content-and-age-verification">Adult content &amp; age verification</a>. Overview: <a href="/help/trust">Trust</a>.</p>

<h2>Quick facts</h2>
<ul>
<li><strong>Guest browse:</strong> yes for most non-adult public Library listings.</li>
<li><strong>Save / follow:</strong> needs an account.</li>
<li><strong>Aura:</strong> 5/day, hubs and files, no self-Aura, not money.</li>
<li><strong>Paid hubs:</strong> unlock via Stripe purchase.</li>
</ul>

<h2>What’s next</h2>
<ul>
<li><a href="/help/buying-and-access">Buying &amp; access</a></li>
<li><a href="/help/clubs">Clubs</a></li>
<li><a href="/help/how-aura-works">How Aura works</a></li>
<li>Want to contribute? <a href="/help/get-started-creators">Get started (creators)</a>.</li>
<li>How discovery works: <a href="/help/explore">Browse Library</a>.</li>
</ul>

<p><a href="${LIBRARY}" target="_blank" rel="noopener noreferrer"><strong>Open Library →</strong></a></p>
`,
})));

written.push(writeDoc(article({
  slug: 'hubs',
  title: 'Hubs',
  category: 'knowledge',
  description:
    'What a hub is: digital artifacts, visibility rows, collaborators, settings, SEO, and Free vs Growth limits.',
  content: `<p class="lead">A hub is a curated place for digital artifacts and collaborators. It starts private. You choose who can see it. Monetization is optional and separate from sharing.</p>

<p><strong>Primary action:</strong> <a href="${APP}" target="_blank" rel="noopener noreferrer">Open the app → create a hub</a></p>

<h2>What’s inside a hub</h2>
<p>Hubs hold digital artifacts such as:</p>
<ul>
<li>Images, video (MP4, MOV, WebM), audio, PDFs, Office docs, and ZIP files</li>
<li>Folders and notes</li>
<li>YouTube and webpage embeds</li>
<li>Internet Archive ebooks (PDF import)</li>
</ul>
<p>Short upload line: JPG · PNG · PDF · Word · Excel · MP4 · MP3 · ZIP. How-to: <a href="/help/adding-files-and-embeds">Adding files and embeds</a> · <a href="/help/import-from-internet-archive">Import from Internet Archive</a>.</p>

<h2>Visibility (sharing vs paid access)</h2>
<p>Hub settings use these rows. Paid access is orthogonal. You can monetize at any sharing level once Stripe and pricing are ready.</p>
<table>
<thead>
<tr><th>Row</th><th>What it means</th></tr>
</thead>
<tbody>
<tr><td>Private</td><td>Default. Only you. No public link or collaborators.</td></tr>
<tr><td>Invite-only shared</td><td>Private hub with collaborators you invite.</td></tr>
<tr><td>Unlisted</td><td>Anyone with the link. Not in Library search results.</td></tr>
<tr><td>Visible on Library</td><td>Appears in Library search results.</td></tr>
<tr><td>Monetized</td><td>Paid access. Stripe and pricing. Not tied to Library listing.</td></tr>
</tbody>
</table>
<p>Listing checklist: <a href="/help/list-hub-on-explore">List a hub on Library</a>. Creators path: <a href="/help/get-started-creators">Get started (creators)</a>.</p>

<h2>Collaborators and roles</h2>
<table>
<thead>
<tr><th>Role</th><th>What it means</th></tr>
</thead>
<tbody>
<tr><td>OWNER</td><td>Full control of the hub, including ownership decisions.</td></tr>
<tr><td>ADMIN</td><td>Manage settings and collaborators without transferring ownership.</td></tr>
<tr><td>WRITE</td><td>Add and edit artifacts alongside the team.</td></tr>
<tr><td>COMMENT</td><td>Leave feedback without changing the contents.</td></tr>
<tr><td>READ</td><td>View access for people who only need to look.</td></tr>
</tbody>
</table>
<p>Collaborators are not the same as paywall buyers. How-to: <a href="/help/collaborators-and-roles">Collaborators &amp; roles</a>.</p>

<h2>Hub settings areas</h2>
<ul>
<li>General</li>
<li>Access</li>
<li>Monetization</li>
<li>Storefront</li>
<li>Analytics</li>
</ul>
<p>Analytics: <a href="/help/creator-analytics">Analytics for creators</a>. Paid access: <a href="/help/turn-on-paid-access">Turn on paid access</a>.</p>

<h2>SEO and listing</h2>
<ul>
<li>Library-listed public non-adult hubs get bot HTML and sitemap inclusion.</li>
<li>Public-but-unlisted hubs stay shareable by link, but stay noindex.</li>
</ul>

<h2>Plan limits</h2>
<p>Confirm current numbers on <a href="/pricing">Pricing</a> and in-app Billing.</p>
<table>
<thead>
<tr><th>Plan</th><th>Hubs</th><th>Uploads</th><th>File size</th></tr>
</thead>
<tbody>
<tr><td>Free</td><td>3 hubs</td><td>10 counted uploads per hub</td><td>Files up to 5 MB</td></tr>
<tr><td>Growth</td><td>Unlimited hubs</td><td>Unlimited uploads</td><td>Files up to 5 GB (100 GB storage)</td></tr>
</tbody>
</table>
<p>Links, notes, and some embeds generally do not count toward the upload quota. When to upgrade: <a href="/help/when-to-upgrade">Plans: when to upgrade</a>.</p>

<h2>What’s next</h2>
<ul>
<li><a href="/help/explore">Browse Library</a></li>
<li><a href="/help/adding-files-and-embeds">Adding files and embeds</a></li>
<li><a href="/help/earning">Optional earning</a></li>
<li><a href="/help/profiles">Profiles</a></li>
</ul>

<p><a href="${APP}" target="_blank" rel="noopener noreferrer"><strong>Open the app → create a hub</strong></a></p>
`,
})));

written.push(writeDoc(article({
  slug: 'list-hub-on-explore',
  title: 'List a hub on Library',
  category: 'guides',
  description:
    'Make your hub discoverable on Library: complete the readiness checklist, set public access, turn on Library listing, and confirm it appears in search.',
  content: `<p class="lead">Already have a hub? This page answers “why isn’t my hub on Library?” with a readiness checklist and the toggle steps.</p>

<p><strong>Primary action:</strong> Open the hub → settings → complete the checklist → turn on Visible on Library.</p>

<h2>What Library listing means</h2>
<p>When a hub is <strong>public</strong>, <strong>active</strong>, and <strong>Visible on Library</strong>, it can appear in search and filters on <a href="${LIBRARY}" target="_blank" rel="noopener noreferrer">/library</a>.</p>
<p>There is <strong>no separate listing fee</strong>. Platform and Stripe fees only apply when someone buys a paid hub.</p>
<p>Listing helps people find you. It is not a ranking promise or guaranteed traffic.</p>

<h2>Before you list (checklist)</h2>
<p>Listing requires confirming you have the right to share the hub’s content. Guidance: <a href="/help/content-rights">Content rights</a>.</p>
<table>
<thead>
<tr><th>Requirement</th><th>Done when…</th></tr>
</thead>
<tbody>
<tr><td>Hub title</td><td>Name is set (not blank)</td></tr>
<tr><td>Custom cover</td><td>Non-default cover uploaded</td></tr>
<tr><td>Description</td><td>40+ characters</td></tr>
<tr><td>Category</td><td>At least one standard category</td></tr>
<tr><td>Profile picture</td><td>Creator profile has a photo</td></tr>
<tr><td>18+ setting</td><td>Adult yes or no explicitly set</td></tr>
<tr><td>Public access</td><td>Hub visibility is Unlisted or Visible on Library</td></tr>
</tbody>
</table>
<p>Adult hubs can list but sit behind Library adult filters by default and are not SEO-indexed like general listed hubs. See <a href="/help/adult-content-and-age-verification">Adult content &amp; age verification</a>.</p>

<h2>How to turn it on</h2>
<ol>
<li>Open the hub → <strong>settings</strong>.</li>
<li><strong>Access</strong> → set visibility to <strong>Visible on Library</strong> (or Unlisted if you only want a shareable link).</li>
<li>Complete every checklist row above.</li>
<li>Confirm: search or filter on Library, or use <strong>View on Library</strong> from hub Analytics if shown.</li>
</ol>
<p>There can be a short delay while the hub indexes. If it still doesn’t appear, re-check the table.</p>

<h2>Public vs listed</h2>
<ul>
<li><strong>Unlisted:</strong> shareable by link; not in Library search; generally <strong>not</strong> SEO-indexed.</li>
<li><strong>Visible on Library:</strong> appears in Library; non-adult hubs are eligible for sitemap / bot HTML indexing.</li>
</ul>
<p>Paid access is separate. You can monetize a private, unlisted, or listed hub. See <a href="/help/turn-on-paid-access">Turn on paid access</a>.</p>

<h2>Adult hubs</h2>
<ul>
<li>Adult hubs <strong>can</strong> list, but default Library browsing hides them until someone turns on the adult filter, logs in, and completes age verification (date of birth, 18+).</li>
<li>Expect a smaller public funnel than non-adult hubs.</li>
</ul>
<p>Details: <a href="/help/trust">Trust</a>.</p>

<h2>After you’re listed</h2>
<ul>
<li>Improve title, tags, and description so cards convert.</li>
<li>Watch Analytics (views, saves, Aura, purchases).</li>
<li>People can give Aura from Library. Ask learners carefully; don’t spam.</li>
<li>Your <a href="/help/profiles">profile</a> link still matters for discovery.</li>
</ul>

<h2>Quick facts</h2>
<ul>
<li><strong>Listing gate:</strong> public + active + Visible on Library (listing fields ready).</li>
<li><strong>Description:</strong> 40+ characters.</li>
<li><strong>Listing fee:</strong> none.</li>
<li><strong>SEO:</strong> listed + non-adult → indexing eligible; adult or unlisted → generally no.</li>
</ul>

<h2>What’s next</h2>
<ul>
<li><a href="/help/content-rights">Content rights</a></li>
<li><a href="/help/turn-on-paid-access">Turn on paid access</a></li>
<li><a href="/help/creator-analytics">Analytics for creators</a></li>
<li><a href="/help/profile-and-sharing">Your profile &amp; sharing</a></li>
<li><a href="/help/explore">Browse Library</a></li>
</ul>

<p><a href="${APP}" target="_blank" rel="noopener noreferrer"><strong>Open the app → hub settings</strong></a></p>
`,
})));

written.push(writeDoc(article({
  slug: 'how-aura-works',
  title: 'How Aura works',
  category: 'quality',
  description:
    'What Aura is, the daily rules, how to give it to hubs and files, what creators see, and common blockers.',
  content: `<p class="lead">Aura is scarce daily recognition you give to hubs and to files inside hubs so stronger work can rise. This page covers the rules, how to give it, what creators see, and why you sometimes can’t.</p>

<p><strong>Primary action:</strong> <a href="${LIBRARY}" target="_blank" rel="noopener noreferrer">Give Aura on Library</a> · Creators: check Analytics on your hub.</p>

<h2>What Aura is</h2>
<p>Aura is community endorsement for hubs and for files inside hubs. Not money, crypto, or a star-rating system. You spend a small daily budget on work you find worth learning from. That signal can help quality show up on Library and in search.</p>
<p>Philosophy and longer answers: the <a href="/aura">full Aura guide</a>.</p>

<h2>The rules</h2>
<ul>
<li><strong>5 Aura per day</strong> — your daily budget to give.</li>
<li><strong>Resets at midnight UTC</strong> — you get 5 again even if you used all 5 already.</li>
<li><strong>Files and hubs</strong> — give Aura to hubs or to files inside hubs. Not to people or profiles. When you give Aura to a file, that hub also receives 1 Aura. Giving Aura to a hub does not add Aura to the files inside it.</li>
<li><strong>No self-Aura</strong> — you can’t give Aura to your own hubs or to files you own in them.</li>
<li><strong>Give and take back</strong> — you can remove Aura you gave (as the product allows) to free budget for somewhere else. Aura already on a hub or file stays until you remove it; daily reset is only a fresh budget to give, not a wipe of past endorsements.</li>
<li><strong>Split or focus</strong> — put all five on one hub or file, or split across a few.</li>
</ul>

<h2>How to give Aura</h2>
<ol>
<li>Sign in at <a href="${APP}" target="_blank" rel="noopener noreferrer">app.kahana.io</a>.</li>
<li>Open <a href="${LIBRARY}" target="_blank" rel="noopener noreferrer">app.kahana.io/library</a>.</li>
<li>Find a hub, or open a hub and pick a file, then use the Aura control on the card, hub, or file surface.</li>
<li>Confirm your remaining daily budget before you leave.</li>
</ol>
<p>Anyone with an account can give Aura. You don’t need a hub of your own first.</p>
<p>File Aura shows on the file inside the hub and helps noteworthy files get exposure in search and ranking. Hub Aura does not roll down to files.</p>

<h2>What creators see</h2>
<ul>
<li>Aura counts and who gave (as shown on marketplace cards and file surfaces).</li>
<li>Aura in hub / creator Analytics.</li>
<li>Signal only. Not Kahana’s official endorsement of the hub or file.</li>
</ul>

<h2>Common blockers</h2>
<table>
<thead>
<tr><th>Symptom</th><th>Likely cause</th></tr>
</thead>
<tbody>
<tr><td>Can’t give</td><td>Not signed in, or no budget left today</td></tr>
<tr><td>Error on your own hub or file</td><td>Self-Aura is blocked</td></tr>
<tr><td>Don’t see Aura on a hub</td><td>Hub isn’t listed, or you’re not on a Library surface that shows Aura</td></tr>
</tbody>
</table>
<p>Listing help: <a href="/help/list-hub-on-explore">List a hub on Library</a>.</p>

<h2>Aura vs paid access</h2>
<p>Aura does <strong>not</strong> unlock paywalls or replace purchases. Paid hubs still need Stripe checkout (or trial rules where offered). Buyers: <a href="/help/buying-and-access">Buying &amp; access</a>. Creators: <a href="/help/turn-on-paid-access">Turn on paid access</a>.</p>

<h2>Quick facts</h2>
<ul>
<li><strong>Daily limit:</strong> 5.</li>
<li><strong>Reset:</strong> midnight UTC.</li>
<li><strong>Auth:</strong> giving requires a logged-in member.</li>
<li><strong>Target:</strong> hubs and files inside hubs; file Aura rolls up +1 to the hub (not the reverse); no self-Aura; not people or profiles.</li>
<li><strong>Not:</strong> money, crypto, star ratings, or guaranteed Library rank.</li>
</ul>

<h2>What’s next</h2>
<ul>
<li>Brand / philosophy → <a href="/aura">/aura</a>.</li>
<li>Learners → <a href="/help/get-started-learners">Get started (learners)</a>.</li>
<li>For You uses Aura as a signal → <a href="/help/for-you-and-taste">For You and taste</a>.</li>
<li>Creators → <a href="/help/creator-analytics">Analytics for creators</a>.</li>
</ul>

<p><a href="${LIBRARY}" target="_blank" rel="noopener noreferrer"><strong>Open Library → give Aura</strong></a></p>
`,
})));

written.push(writeDoc(article({
  slug: 'get-started-creators',
  title: 'Get started (creators)',
  category: 'guides',
  description:
    'Create your first Kahana hub, add digital artifacts, fill listing basics, then list on Library or turn on paid access when you’re ready.',
  content: `<p class="lead">Share what you know. This guide takes you from signup to a private hub with content, then points you to listing and monetization, without every setting on day one.</p>

<p><strong>Primary action:</strong> <a href="${APP}" target="_blank" rel="noopener noreferrer">Create</a> (sign up if needed)</p>

<h2>What you’ll do</h2>
<p>Create a hub → add digital artifacts → make it ready to share → list when you’re ready → optionally charge later.</p>

<h2>Step 1. Create an account</h2>
<ol>
<li>Sign up at <a href="${APP}" target="_blank" rel="noopener noreferrer">app.kahana.io</a>.</li>
<li>Add a <strong>profile picture</strong> early. It’s part of Library listing readiness for your hubs. Profile setup: <a href="/help/profile-and-sharing">Your profile &amp; sharing</a>.</li>
</ol>

<h2>Step 2. Create your first hub</h2>
<ul>
<li>A new hub <strong>starts private</strong>.</li>
<li>Free plan: up to <strong>3 hubs</strong>. See <a href="/pricing">Plans</a> when you need more room.</li>
<li>A hub is a curated place for files, videos, images, PDFs, documents, links, notes, and more, plus collaborators if you want them.</li>
</ul>
<p>More: <a href="/help/hubs">Hubs</a>.</p>

<h2>Step 3. Add content</h2>
<ol>
<li>Upload files, add folders or notes, embed YouTube or a webpage, or import an Archive.org PDF. Guide: <a href="/help/adding-files-and-embeds">Adding files and embeds</a>.</li>
<li>Free limits: <strong>10 counted uploads per hub</strong>, files up to <strong>5 MB</strong>. Links and editor notes generally don’t count toward the upload quota.</li>
<li>Use clear filenames. They help later searchers (and you).</li>
</ol>
<p>Only upload what you have rights to share. Public domain and open-license works are allowed when redistribution is permitted. See <a href="/help/content-rights">Content rights</a> before you unlist, list on Library, or monetize.</p>

<h2>Step 4. Fill the listing basics (even if still private)</h2>
<p>You’ll need these to list on Library later:</p>
<ul>
<li>Title</li>
<li>Custom cover</li>
<li>Description (about 40+ characters)</li>
<li>At least one standard category</li>
<li>Adult yes/no when you list</li>
</ul>
<p>Profile pic and public access settings matter too. Listing is a separate step, not automatic when you create the hub.</p>

<h2>Step 5. Invite collaborators (optional)</h2>
<p>Invite people with roles: OWNER, ADMIN, WRITE, COMMENT, READ. Unlimited collaborators on Free and Growth.</p>
<p>How-to: <a href="/help/collaborators-and-roles">Collaborators &amp; roles</a>.</p>

<h2>Step 6. Share when ready</h2>
<ol>
<li>Choose a visibility row: Invite-only shared, Unlisted, or Visible on Library. Overview: <a href="/help/hubs">Hubs</a>.</li>
<li>To appear in the public catalog, list it. See <a href="/help/list-hub-on-explore">List a hub on Library</a>.</li>
<li><strong>SEO (one line):</strong> Library-listed public non-adult hubs can be indexed. Unlisted hubs stay shareable by link and generally stay out of indexing.</li>
</ol>

<h2>Step 7. Optional earning (later)</h2>
<ul>
<li>Monetization is <strong>not required</strong>. Free knowledge hubs stay first-class. You can sell on Free with Stripe Connect.</li>
<li>When demand shows up: Connect Stripe → set a price → paywall. Walkthrough: <a href="/help/turn-on-paid-access">Turn on paid access</a>.</li>
<li>Kahana’s marketplace fee is <strong>5%</strong> on Free and Growth. Stripe processing fees apply on top.</li>
</ul>

<h2>Quick facts</h2>
<ul>
<li><strong>Default privacy:</strong> hubs start private.</li>
<li><strong>Free capacity:</strong> 3 hubs, 10 uploads/hub, 5 MB files.</li>
<li><strong>Collaborate:</strong> unlimited collaborators even on Free.</li>
<li><strong>Sell on Free:</strong> yes, with Stripe Connect.</li>
<li><strong>Take rate:</strong> 5% (Growth does not waive it).</li>
<li><strong>Library:</strong> separate listing checklist, not automatic.</li>
</ul>

<h2>What’s next</h2>
<ul>
<li><a href="/help/list-hub-on-explore">List a hub on Library</a></li>
<li><a href="/help/adding-files-and-embeds">Adding files and embeds</a></li>
<li><a href="/help/content-rights">Content rights</a></li>
<li><a href="/help/when-to-upgrade">When to upgrade</a></li>
</ul>

<p><a href="${APP}" target="_blank" rel="noopener noreferrer"><strong>Create →</strong></a></p>
`,
})));

written.push(writeDoc(article({
  slug: 'when-to-upgrade',
  title: 'Plans: when to upgrade',
  category: 'guides',
  description:
    'Do you need Growth? Stay on Free until you hit a limit or want live chat. Listing and selling work on Free. Upgrade is capacity and support, not permission to sell.',
  content: `<p class="lead">Do you need Growth? Stay on Free until you hit a limit (or want live chat). You can list on Library and sell with Stripe on Free. Upgrade means capacity and support, not permission to sell.</p>

<p><strong>Primary action:</strong> <a href="/pricing">See pricing</a> · upgrade in <a href="${BILLING}" target="_blank" rel="noopener noreferrer">/billing</a>.</p>

<h2>Short answer</h2>
<p>Free is enough for many creators. Growth unlocks higher hub/upload/file limits and live chat. The marketplace take rate stays <strong>5%</strong> on Free and Growth.</p>

<h2>When Free is enough</h2>
<ul>
<li>Up to 3 hubs</li>
<li>Up to 10 counted uploads per hub</li>
<li>Files within 5 MB</li>
<li>Monetizing with Stripe Connect</li>
<li>Unlimited collaborators</li>
<li>Listing on Library</li>
</ul>

<h2>Upgrade triggers</h2>
<table>
<thead>
<tr><th>You’re trying to…</th><th>Free blocks you?</th><th>Growth</th></tr>
</thead>
<tbody>
<tr><td>Create a 4th hub</td><td>Yes</td><td>Unlimited hubs</td></tr>
<tr><td>Add an 11th counted upload in a hub</td><td>Yes</td><td>Unlimited uploads</td></tr>
<tr><td>Upload a large file (over 5 MB)</td><td>Yes</td><td>Files up to 5 GB, 100 GB storage</td></tr>
<tr><td>Get live chat support</td><td>No</td><td>Included</td></tr>
<tr><td>Sell hubs / keep 5% take rate</td><td>Already allowed</td><td>Same 5%</td></tr>
</tbody>
</table>

<h2>Price snapshot</h2>
<ul>
<li><strong>Growth:</strong> $9.99/mo or $99.99/yr</li>
<li>Full table + Enterprise → <a href="/pricing">Pricing</a></li>
</ul>

<div class="callout">
<p><strong>Fees stay the same.</strong> Kahana’s 5% marketplace fee applies on Free and Growth. Growth does not remove it. Stripe processing fees are separate. Selling walkthrough: <a href="/help/turn-on-paid-access">Turn on paid access</a>.</p>
</div>

<h2>How to upgrade</h2>
<ol>
<li>In-app: open <a href="${BILLING}" target="_blank" rel="noopener noreferrer">/billing</a>, or follow the prompt when you hit a limit.</li>
<li>Complete checkout.</li>
<li>Confirm your plan after purchase.</li>
</ol>

<h2>Myths</h2>
<ul>
<li><strong>“I need Growth to monetize”</strong> → False</li>
<li><strong>“Growth removes the 5% fee”</strong> → False</li>
<li><strong>“Free can’t list on Library”</strong> → False</li>
</ul>

<h2>What’s next</h2>
<ul>
<li><a href="/pricing">Pricing</a></li>
<li><a href="/help/get-started-creators">Get started (creators)</a></li>
<li><a href="/help/turn-on-paid-access">Turn on paid access</a></li>
</ul>

<p><a href="${BILLING}" target="_blank" rel="noopener noreferrer"><strong>Open Billing →</strong></a></p>
`,
})));

written.push(writeDoc(article({
  slug: 'adult-content-and-age-verification',
  title: 'Adult content & age verification',
  category: 'guides',
  description:
    'How Kahana handles 18+ hubs: creator flagging, Library defaults, login + date-of-birth verification, SEO, and how that differs from the verified seller badge.',
  content: `<p class="lead">Adult material on Kahana is intentional: creators declare it, Library defaults protect casual browse, and access is age-gated. This page states the rules plainly. Legal details live under the product legal pages.</p>

<p><strong>Primary action:</strong> Creators: set 18+ correctly when listing · Buyers: verify age when prompted.</p>

<h2>Why this exists</h2>
<p>Keep adult material intentional. Creators declare it; access is age-gated; discovery defaults protect people who are not looking for it.</p>
<p>Overview: <a href="/help/trust">Trust</a>.</p>

<h2>For creators. Flagging</h2>
<ul>
<li>When listing / readiness: explicitly set adult <strong>yes or no</strong>.</li>
<li>Flag hubs that are 18+ as adult content.</li>
<li>Adult hubs <strong>can</strong> list on Library, but they sit behind adult filters by default, so the funnel is smaller.</li>
<li>Adult hubs are <strong>not SEO-indexed</strong> (no sitemap / bot HTML treatment like general listed non-adult hubs).</li>
</ul>
<p>Listing steps: <a href="/help/list-hub-on-explore">List a hub on Library</a>.</p>

<h2>For everyone. Accessing adult hubs</h2>
<ul>
<li>Must be logged in.</li>
<li>Enter date of birth when prompted.</li>
<li>The app verifies 18+. Verification is stored after a successful verify.</li>
<li>No anonymous “I’m 18” checkbox unlock.</li>
<li>Paid adult hubs: age gate <strong>and</strong> purchase as required. Buyer path: <a href="/help/buying-and-access">Buying &amp; access</a>.</li>
</ul>

<h2>Library behavior</h2>
<ul>
<li><strong>Default:</strong> adult content hidden / excluded.</li>
<li><strong>Filters:</strong> include / exclude / only (as the product offers).</li>
<li><strong>Guests:</strong> can’t complete the adult access path.</li>
</ul>

<h2>Verified creators (separate)</h2>
<ul>
<li>Separate from adult gating.</li>
<li>Badge = Stripe Connect charge-ready (<code>charges_enabled</code>).</li>
<li>Not a “safe content” or family-friendly certification.</li>
</ul>
<p>More: <a href="/help/profile-and-sharing">Your profile &amp; sharing</a> · <a href="/help/turn-on-paid-access">Turn on paid access</a>.</p>

<h2>Legal</h2>
<p>App legal pages cover the policies. Don’t treat this help article as the full terms:</p>
<ul>
<li><a href="${APP}/legal/adult-content" target="_blank" rel="noopener noreferrer">/legal/adult-content</a></li>
<li>Related hub access / privacy pages under <code>/legal/…</code> in the app</li>
</ul>

<h2>What’s next</h2>
<ul>
<li><a href="/help/list-hub-on-explore">List a hub on Library</a></li>
<li><a href="/help/buying-and-access">Buying &amp; access</a></li>
<li><a href="/help/trust">Trust</a></li>
</ul>

<p><a href="${APP}" target="_blank" rel="noopener noreferrer"><strong>Open the app → set access correctly</strong></a></p>
`,
})));

written.push(writeDoc(article({
  slug: 'clubs',
  title: 'Clubs',
  category: 'community',
  description:
    'Create or join a club: private by default, join vs request, listed vs unlisted, wish list, feed, events, focus, and hub access from club lists.',
  content: `<p class="lead">Clubs are groups that read, list, and talk together. A new club always starts private. You choose later whether people can find it on the public Clubs page.</p>

<p><strong>Primary action:</strong> <a href="${CLUBS}" target="_blank" rel="noopener noreferrer">Open Clubs</a></p>

<h2>Create a club</h2>
<ol>
<li>Sign in and open <a href="${CLUBS}" target="_blank" rel="noopener noreferrer">app.kahana.io/clubs</a>.</li>
<li>Create a club. Give it a name. A description is required before the invite link activates.</li>
<li>Create always starts <strong>private</strong> (invite link only, not on the public Clubs page).</li>
</ol>

<h2>Visibility</h2>
<table>
<thead>
<tr><th>Mode</th><th>What it means</th></tr>
</thead>
<tbody>
<tr><td>Private (restricted)</td><td>Invite link only. Not shown on the public Clubs page.</td></tr>
<tr><td>Unlisted</td><td>Anyone with the link can preview. Still not on the public Clubs page. Needs age, terms, and content-rights compliance.</td></tr>
<tr><td>Listed</td><td>Appears on the public Clubs page so others can discover it, then join or request to join.</td></tr>
</tbody>
</table>
<p>Adult clubs must declare 18+ so access stays intentional.</p>

<h2>Join vs request</h2>
<ul>
<li><strong>Auto:</strong> anyone with the invite link joins immediately.</li>
<li><strong>Request:</strong> people ask to join. A moderator approves or denies each request.</li>
</ul>
<p>Moderators can also invite people in-app or by email, and copy an invite URL.</p>

<h2>Wish list and hub access</h2>
<ul>
<li>Members save hubs, files, or links (Goodreads, YouTube, Coursera, and others) to a collaborative list.</li>
<li>Members can upvote list items.</li>
<li>If a listed hub is private, members can <strong>request access</strong>. The hub owner grants it from Activity.</li>
<li>Creating a private hub from a club list still belongs to you. Other members request access; they don’t get automatic ownership.</li>
</ul>

<h2>Feed, events, and focus</h2>
<ul>
<li><strong>Feed:</strong> members can post, comment, reply, and react (like, love, insightful).</li>
<li><strong>Events:</strong> moderators schedule, update, or cancel club events. Reminders can email members.</li>
<li><strong>Focus:</strong> moderators can set (or clear) current reading material: a hub or a file.</li>
</ul>

<h2>What’s next</h2>
<ul>
<li><a href="/help/explore">Browse Library</a></li>
<li><a href="/help/hubs">Hubs</a></li>
<li><a href="/help/messages-and-privacy">Messages and privacy</a></li>
</ul>

<p><a href="${CLUBS}" target="_blank" rel="noopener noreferrer"><strong>Open Clubs →</strong></a></p>
`,
})));

written.push(writeDoc(article({
  slug: 'for-you-and-taste',
  title: 'For You and taste',
  category: 'discovery',
  description:
    'How the For You Library tab works, how For you / Not for you marks train it, and how to adjust algorithm weights.',
  content: `<p class="lead">For You is a personalized Library tab. It ranks hubs from what you Aura, save, open, follow, and mark For you or Not for you. You can turn signals up or down.</p>

<p><strong>Primary action:</strong> <a href="${LIBRARY}?tab=for-you" target="_blank" rel="noopener noreferrer">Open For You</a></p>

<h2>Where to find it</h2>
<p>In Library, open the <strong>For You</strong> tab (<code>?tab=for-you</code>). You need an account for a meaningful feed. Guests still use the main Library catalog.</p>

<h2>For you / Not for you</h2>
<p>On hubs, files, authors, and clubs you can mark:</p>
<ul>
<li><strong>For you.</strong> Boost that content and similar topics in For You.</li>
<li><strong>Not for you.</strong> Hide matching hubs and soften similar topics.</li>
</ul>
<p>You can clear a mark later. Taste is yours. It is not a public review and not Aura.</p>

<h2>Signals the feed uses</h2>
<table>
<thead>
<tr><th>Signal</th><th>What it prefers</th></tr>
</thead>
<tbody>
<tr><td>Aura you gave</td><td>Hubs and topics you personally gave Aura to</td></tr>
<tr><td>Aura received</td><td>Hubs and files the community has given Aura</td></tr>
<tr><td>Recently opened</td><td>Hubs you opened recently from Library / search</td></tr>
<tr><td>Saves</td><td>Hubs and topics you have saved</td></tr>
<tr><td>Followed authors</td><td>Hubs from authors you follow</td></tr>
<tr><td>For you</td><td>Items you marked For you, including files, authors, and clubs</td></tr>
<tr><td>Not for you</td><td>Hides matching hubs and softens similar topics</td></tr>
<tr><td>Community Aura</td><td>A light popularity nudge from overall community Aura</td></tr>
</tbody>
</table>

<h2>Adjust the algorithm</h2>
<ol>
<li>Open For You, then algorithm / weights (as shown in the tab).</li>
<li>Enable or disable signals. Raise weights for what should pull harder.</li>
<li>Save. The feed uses your saved weights next time it loads.</li>
</ol>
<p>Interests you set at signup also live under <a href="${INTERESTS}" target="_blank" rel="noopener noreferrer">Settings → Interests</a>.</p>

<h2>What’s next</h2>
<ul>
<li><a href="/help/explore">Browse Library</a></li>
<li><a href="/help/how-aura-works">How Aura works</a></li>
<li><a href="/help/saving-and-collections">Saving and collections</a></li>
</ul>

<p><a href="${LIBRARY}?tab=for-you" target="_blank" rel="noopener noreferrer"><strong>Open For You →</strong></a></p>
`,
})));

written.push(writeDoc(article({
  slug: 'adding-files-and-embeds',
  title: 'Adding files and embeds',
  category: 'knowledge',
  description:
    'What you can add to a hub: uploads, folders, notes, YouTube and webpage embeds, and the in-hub PDF reader. Free size and count limits.',
  content: `<p class="lead">A hub holds the artifacts you curate. Upload files, nest folders, write notes, or embed a YouTube video or webpage. Archive.org PDFs have their own import flow.</p>

<p><strong>Primary action:</strong> Open a hub you own → Add content</p>

<h2>Uploads the picker allows</h2>
<p>Short line: <strong>JPG · PNG · PDF · Word · Excel · MP4 · MP3 · ZIP</strong></p>
<table>
<thead>
<tr><th>Group</th><th>Examples</th></tr>
</thead>
<tbody>
<tr><td>Images</td><td>JPG, PNG, GIF, WebP, SVG, HEIC</td></tr>
<tr><td>Video</td><td>MP4, MOV, WebM</td></tr>
<tr><td>Audio</td><td>MP3, WAV, AAC, OGG, FLAC</td></tr>
<tr><td>Documents</td><td>PDF, Word, Excel, PowerPoint, CSV, TXT</td></tr>
<tr><td>Archives</td><td>ZIP</td></tr>
</tbody>
</table>

<h2>Free vs Growth</h2>
<ul>
<li><strong>Free:</strong> 10 counted uploads per hub, files up to 5 MB.</li>
<li><strong>Growth:</strong> unlimited uploads, files up to 5 GB, 100 GB storage.</li>
</ul>
<p>Links, notes, and some embeds generally do not count toward the upload quota. When you hit a wall: <a href="/help/when-to-upgrade">Plans: when to upgrade</a>.</p>

<h2>Folders, notes, and embeds</h2>
<ul>
<li><strong>Folders</strong> keep a hub readable as it grows.</li>
<li><strong>Notes</strong> are in-hub text, useful for intros and reading guides.</li>
<li><strong>YouTube / webpage</strong> embeds let you point at a URL without uploading the file.</li>
</ul>

<h2>PDFs</h2>
<p>PDFs open in Kahana’s reader inside the hub. You can also import public-domain and openly licensed ebooks from Internet Archive. Guide: <a href="/help/import-from-internet-archive">Import from Internet Archive</a>.</p>

<h2>Rights</h2>
<p>Only add what you have the right to share. Finding a file online is not permission. Confirm rights before a hub is unlisted, listed on Library, or monetized. Guide: <a href="/help/content-rights">Content rights</a>.</p>

<h2>What’s next</h2>
<ul>
<li><a href="/help/hubs">Hubs</a></li>
<li><a href="/help/get-started-creators">Get started (creators)</a></li>
<li><a href="/help/list-hub-on-explore">List a hub on Library</a></li>
</ul>
`,
})));

written.push(writeDoc(article({
  slug: 'import-from-internet-archive',
  title: 'Import from Internet Archive',
  category: 'knowledge',
  description:
    'Paste an Archive.org details or download URL. Kahana fetches the PDF, suggests tags and rights, and adds it as an ebook in your hub.',
  content: `<p class="lead">Import an ebook PDF from archive.org into a hub you own. Kahana fetches the file on the server, suggests tags and a rights status, and adds it as an artifact.</p>

<p><strong>Primary action:</strong> Open a hub → Add content → Import from Internet Archive</p>

<h2>How to import</h2>
<ol>
<li>Open a hub you can edit.</li>
<li>Choose <strong>Import from Internet Archive</strong>.</li>
<li>Paste a details URL (for example <code>https://archive.org/details/…</code>) or a download link.</li>
<li>Look up the item. Confirm title, cover, PDF size, tags, and rights.</li>
<li>Confirm you have the right to share, then import.</li>
</ol>
<p>If that Archive.org item is already in the hub, the dialog tells you instead of duplicating it.</p>

<h2>Rights hints</h2>
<p>The preview may hint that an item looks <strong>likely public domain</strong>, <strong>uncertain</strong>, or <strong>looks copyrighted</strong>. Treat hints as help, not legal advice. You still attest before import.</p>
<ul>
<li>Prefer works you know you may redistribute (public domain or a license that allows it).</li>
<li>Include attribution when a license requires it.</li>
<li>Do not import something that looks copyrighted unless you have a clear right to share it on Kahana.</li>
</ul>
<p>Full rules: <a href="/help/content-rights">Content rights</a>.</p>

<h2>Plan limits</h2>
<p>Imported PDFs count as uploads and must fit your plan’s file-size cap (Free: 5 MB; Growth: up to 5 GB). If the PDF is too large, pick a smaller edition or upgrade.</p>

<h2>After import</h2>
<ul>
<li>The PDF opens in the hub reader.</li>
<li>To help people find the hub, complete listing and turn on Visible on Library. Guide: <a href="/help/list-hub-on-explore">List a hub on Library</a>.</li>
</ul>

<h2>What’s next</h2>
<ul>
<li><a href="/help/adding-files-and-embeds">Adding files and embeds</a></li>
<li><a href="/help/hubs">Hubs</a></li>
</ul>
`,
})));

written.push(writeDoc(article({
  slug: 'saving-and-collections',
  title: 'Saving and collections',
  category: 'discovery',
  description:
    'Save hubs, files, and authors. Use Saved All vs Collections, follow authors, and reopen what matters.',
  content: `<p class="lead">Saving is how you keep hubs, files, and authors close. Following is how you keep up with people. Both need an account.</p>

<p><strong>Primary action:</strong> <a href="${SAVED}" target="_blank" rel="noopener noreferrer">Open Saved</a></p>

<h2>Save from Library or a hub</h2>
<p>Use Save on a hub card, hub page, file, or author. Saved items live at <a href="${SAVED}" target="_blank" rel="noopener noreferrer">app.kahana.io/saved</a>.</p>
<ul>
<li><strong>All</strong> shows everything you’ve saved.</li>
<li><strong>Collections</strong> groups items into lists you create.</li>
<li>Filter by hubs, authors, or files.</li>
</ul>

<h2>Follow authors</h2>
<p>Follow from an author profile. Followed authors can show up more often in <a href="/help/for-you-and-taste">For You</a>. Following is not the same as saving a hub, and it is not Aura.</p>

<h2>Guests</h2>
<p>You can browse most non-adult public Library listings without an account. Save, follow, collections, and For You marks need sign-in.</p>

<h2>What’s next</h2>
<ul>
<li><a href="/help/explore">Browse Library</a></li>
<li><a href="/help/for-you-and-taste">For You and taste</a></li>
<li><a href="/help/get-started-learners">Get started (learners)</a></li>
</ul>

<p><a href="${SAVED}" target="_blank" rel="noopener noreferrer"><strong>Open Saved →</strong></a></p>
`,
})));

written.push(writeDoc(article({
  slug: 'messages-and-privacy',
  title: 'Messages and privacy',
  category: 'community',
  description:
    'Direct messages on Kahana: allow messages on your profile, Off / Open / Followers privacy, and the founder welcome thread.',
  content: `<p class="lead">Messages let people write you from your profile. They are off until you allow them. You choose who can start a conversation.</p>

<p><strong>Primary action:</strong> <a href="${MESSAGES}" target="_blank" rel="noopener noreferrer">Open Messages</a> · Settings: <a href="${COMMS}" target="_blank" rel="noopener noreferrer">Communication</a></p>

<h2>Allow messages to you</h2>
<p>Turn on <strong>Allow messages to you</strong> in Messages or Communication settings. A Message button appears on your profile so people who discover you can write to you. You also need this on to send.</p>

<h2>Who can message you</h2>
<table>
<thead>
<tr><th>Mode</th><th>Who can start a DM</th></tr>
</thead>
<tbody>
<tr><td>Off</td><td>Nobody</td></tr>
<tr><td>Open</td><td>Anyone</td></tr>
<tr><td>Followers only</td><td>People who follow you</td></tr>
</tbody>
</table>
<p>There is no separate “message request” inbox. Choose Open or Followers if you want inbound mail.</p>

<h2>Welcome from Adam</h2>
<p>New accounts may see an automatic welcome thread from Adam (the founder). It is not a live chat. You can’t reply there. Use <a href="${APP}/support" target="_blank" rel="noopener noreferrer">Support</a> if you need a human.</p>

<h2>What’s next</h2>
<ul>
<li><a href="/help/notifications">Notifications</a></li>
<li><a href="/help/profile-and-sharing">Your profile &amp; sharing</a></li>
<li><a href="/help/clubs">Clubs</a></li>
</ul>

<p><a href="${MESSAGES}" target="_blank" rel="noopener noreferrer"><strong>Open Messages →</strong></a></p>
`,
})));

written.push(writeDoc(article({
  slug: 'notifications',
  title: 'Notifications',
  category: 'community',
  description:
    'Activity in the app, email and badge prefs for messages and hub events, and where to change them.',
  content: `<p class="lead">Kahana notifies you in Activity and, if you opt in, by email. You control message badges, message email, and activity email from Communication settings.</p>

<p><strong>Primary action:</strong> <a href="${ACTIVITY}" target="_blank" rel="noopener noreferrer">Open Activity</a> · Prefs: <a href="${COMMS}" target="_blank" rel="noopener noreferrer">Communication</a></p>

<h2>Activity</h2>
<p><a href="${ACTIVITY}" target="_blank" rel="noopener noreferrer">/activity</a> is the in-app inbox for things like hub access requests, club join requests, and other account events. Open an item to act on it (for example, grant hub access from a club list request).</p>

<h2>What you can tune</h2>
<ul>
<li>Message badges in the app chrome</li>
<li>Email when someone messages you</li>
<li>Email for activity events</li>
<li>Aura streak reminder email (hours before midnight UTC), from the Aura streak modal</li>
</ul>
<p>Older <code>/settings/notifications</code> links redirect to Communication.</p>

<h2>What’s next</h2>
<ul>
<li><a href="/help/messages-and-privacy">Messages and privacy</a></li>
<li><a href="/help/clubs">Clubs</a></li>
<li><a href="/help/how-aura-works">How Aura works</a></li>
</ul>
`,
})));

written.push(writeDoc(article({
  slug: 'delete-my-account',
  title: 'Delete my account',
  category: 'trust',
  description:
    'How to start Kahana account deletion from Settings → Danger Zone, what happens in 30 days, and how to cancel.',
  content: `<p class="lead">You can deactivate your Kahana account from Settings. Permanent deletion follows in 30 days unless you sign in and cancel.</p>

<p><strong>Primary action:</strong> <a href="${DANGER}" target="_blank" rel="noopener noreferrer">Open Danger Zone</a></p>

<h2>How to start deletion</h2>
<ol>
<li>Sign in and open <a href="${DANGER}" target="_blank" rel="noopener noreferrer">app.kahana.io/settings/danger</a>.</li>
<li>Read the facts. Type <strong>DELETE</strong> to confirm.</li>
<li>If your account uses a password, enter it. Google-only accounts follow the on-screen confirm path.</li>
</ol>

<h2>What happens</h2>
<ul>
<li>Your account is deactivated immediately (hidden from Library and public profiles).</li>
<li>Subscriptions are cancelled now so you are not charged during the waiting period.</li>
<li>After 30 days, hubs you own and account data are permanently deleted.</li>
<li>Sign in anytime before then to cancel deletion. You’ll land on an account-deletion status page with a cancel control.</li>
</ul>

<h2>What this is not</h2>
<p>This is Kahana product account deletion. It is not a browser-data wipe and not an Oasis / Firefox account flow.</p>

<h2>What’s next</h2>
<ul>
<li><a href="/help/trust">Trust</a></li>
<li><a href="/help/profile-and-sharing">Your profile &amp; sharing</a></li>
<li>Need a human first? <a href="${APP}/support" target="_blank" rel="noopener noreferrer">Support</a></li>
</ul>
`,
})));

const PATCH_SLUGS = [
  'buying-and-access',
  'collaborators-and-roles',
  'content-rights',
  'creator-analytics',
  'earning',
  'profiles',
  'profile-and-sharing',
  'trust',
  'turn-on-paid-access',
];

for (const slug of PATCH_SLUGS) {
  const file = path.join(DOCS, `${slug}.json`);
  const doc = JSON.parse(fs.readFileSync(file, 'utf8'));
  doc.date = DATE;
  doc.title = rewriteExploreCopy(doc.title);
  doc.description = rewriteExploreCopy(doc.description);
  doc.content = rewriteExploreCopy(doc.content);
  writeDoc(doc);
  written.push(slug);
}

console.log(`Wrote ${written.length} help articles:`);
for (const slug of written) console.log(`  ${slug}`);
