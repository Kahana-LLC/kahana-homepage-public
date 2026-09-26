'use client';

import {
  ArrowDownIcon,
  ArrowUpIcon,
  BellAlertIcon,
  ChatBubbleLeftIcon,
  EllipsisHorizontalIcon,
  PlusCircleIcon,
} from '@heroicons/react/24/outline';
import { HandThumbUpIcon, HeartIcon, LightBulbIcon } from '@heroicons/react/24/solid';

const VOTE_UP = '#FF4500';
const VOTE_DOWN = '#7193FF';

const THREAD = [
  {
    id: 'c1',
    author: 'Maya Chen',
    initials: 'M',
    age: '2h',
    score: 12,
    myVote: 'up',
    body: (
      <>
        <p>
          Where should I start if I only have an hour this week? The hub has a lot of files and I
          do not want to bounce around.
        </p>
      </>
    ),
    reactions: { like: 2, insightful: 1 },
    replies: [
      {
        id: 'c2',
        author: 'Jordan Lee',
        initials: 'J',
        age: '1h',
        score: 8,
        myVote: null,
        body: (
          <>
            <p>
              Open the <strong>Start here</strong> note, then the first PDF. Skip the appendix until
              you need it.
            </p>
            <p>
              If you get stuck on the templates, jump to{' '}
              <a href="#mock-link" className="underline underline-offset-2">
                Section 3 · Resume kit
              </a>
              .
            </p>
          </>
        ),
        reactions: { like: 3, love: 1 },
        replies: [
          {
            id: 'c3',
            author: 'Maya Chen',
            initials: 'M',
            age: '40m',
            score: 4,
            myVote: null,
            watching: true,
            body: (
              <>
                <p>
                  That path worked. Watching this thread for the next file drop.
                </p>
                <ul className="mt-1 list-disc pl-4">
                  <li>Start here → PDF 1</li>
                  <li>Templates only if needed</li>
                </ul>
              </>
            ),
            reactions: { like: 1 },
            replies: [],
          },
        ],
      },
      {
        id: 'c4',
        author: 'Sam Ortiz',
        initials: 'S',
        age: '55m',
        score: 3,
        myVote: null,
        body: (
          <>
            <p>
              Same advice. I bookmark hubs with a clear <strong>Start here</strong> path — this one
              is solid.
            </p>
          </>
        ),
        reactions: { insightful: 2 },
        replies: [],
      },
    ],
  },
  {
    id: 'c5',
    author: 'Priya Nair',
    initials: 'P',
    age: '5h',
    score: 6,
    myVote: null,
    body: (
      <>
        <p>
          Has anyone used the interview FAQ alongside the research email templates? Wondering if
          they should be read in order.
        </p>
      </>
    ),
    reactions: { like: 1 },
    replies: [],
  },
];

function Avatar({ initials, nested }) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-full bg-[#EDE6D2] font-semibold text-[#5C4520] ${
        nested ? 'h-7 w-7 text-[0.7rem]' : 'h-8 w-8 text-xs'
      }`}
      aria-hidden
    >
      {initials}
    </span>
  );
}

function VoteActions({ score, myVote }) {
  const scoreColor =
    myVote === 'up' ? VOTE_UP : myVote === 'down' ? VOTE_DOWN : '#666666';
  return (
    <span className="inline-flex items-center gap-0.5">
      <span
        className="inline-flex p-0.5"
        style={{ color: myVote === 'up' ? VOTE_UP : '#8A8A8A' }}
        aria-hidden
      >
        <ArrowUpIcon className="h-4 w-4 stroke-[2.25]" />
      </span>
      <span
        className="min-w-[0.625rem] text-center text-xs font-bold"
        style={{ color: scoreColor }}
      >
        {score}
      </span>
      <span
        className="inline-flex p-0.5"
        style={{ color: myVote === 'down' ? VOTE_DOWN : '#8A8A8A' }}
        aria-hidden
      >
        <ArrowDownIcon className="h-4 w-4 stroke-[2.25]" />
      </span>
    </span>
  );
}

function ReactionPills({ reactions }) {
  if (!reactions) return null;
  const items = [
    reactions.like ? { key: 'like', count: reactions.like, Icon: HandThumbUpIcon, color: '#8A6622' } : null,
    reactions.love ? { key: 'love', count: reactions.love, Icon: HeartIcon, color: '#C45C5C' } : null,
    reactions.insightful
      ? { key: 'insightful', count: reactions.insightful, Icon: LightBulbIcon, color: '#8A6622' }
      : null,
  ].filter(Boolean);
  if (!items.length) return null;
  return (
    <span className="inline-flex items-center gap-1">
      {items.map(({ key, count, Icon, color }) => (
        <span
          key={key}
          className="inline-flex items-center gap-0.5 rounded-full bg-[#F7F3EA] px-1.5 py-0.5 text-[0.65rem] font-semibold text-[#5C4520]"
        >
          <Icon className="h-3 w-3" style={{ color }} aria-hidden />
          {count}
        </span>
      ))}
    </span>
  );
}

function CommentRow({ comment, depth = 0 }) {
  const nested = depth > 0;
  const replies = comment.replies || [];
  const preview = replies.slice(0, 2);
  const hidden = replies.length - preview.length;

  return (
    <article
      className={`${nested ? 'mt-2.5 border-l-2 border-[#E8E0D0] pl-3.5' : 'mt-4'} ${
        comment.watching ? 'rounded-[10px] bg-[#EDE6D2]/55 py-2 pr-2' : ''
      }`}
    >
      <div className="flex items-start gap-2.5">
        <Avatar initials={comment.initials} nested={nested} />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-1.5">
            <span className="text-sm font-semibold text-[#3B2F1A]">{comment.author}</span>
            <span className="text-xs text-[#888888]">·</span>
            <span className="text-xs text-[#888888]">{comment.age}</span>
            {comment.watching ? (
              <span className="text-xs font-semibold text-[#8A6622]">watching</span>
            ) : null}
          </div>
          <div className="mt-0.5 text-sm leading-relaxed text-[#3B2F1A] [&_p]:mb-2 [&_p:last-child]:mb-0 [&_a]:text-[#8A6622] [&_ul]:mb-0">
            {comment.body}
          </div>
          <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1">
            <VoteActions score={comment.score} myVote={comment.myVote} />
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#8A6622]">
              <ChatBubbleLeftIcon className="h-3.5 w-3.5" aria-hidden />
              Reply
            </span>
            <ReactionPills reactions={comment.reactions} />
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#888888]">
              <BellAlertIcon className="h-3.5 w-3.5" aria-hidden />
              Follow
            </span>
            <span className="inline-flex text-[#888888]" aria-hidden>
              <EllipsisHorizontalIcon className="h-4 w-4" />
            </span>
          </div>
          {preview.map((reply) => (
            <CommentRow key={reply.id} comment={reply} depth={depth + 1} />
          ))}
          {hidden > 0 ? (
            <button
              type="button"
              className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#8A6622]"
            >
              <PlusCircleIcon className="h-4 w-4" aria-hidden />
              {hidden} more {hidden === 1 ? 'reply' : 'replies'}
            </button>
          ) : null}
        </div>
      </div>
    </article>
  );
}

/**
 * Marketing mock of the product ContentDiscussion overlay:
 * Reddit-like votes, nested replies, markdown body, reactions.
 */
export default function DiscussionThreadMock() {
  return (
    <div className="overflow-hidden rounded-[20px] border border-[#E4D9C4] bg-[#F7F3EA] shadow-[0_12px_40px_rgba(59,47,26,0.08)]">
      <div className="flex items-center justify-between border-b border-[#E4D9C4] bg-white px-4 py-3 sm:px-5">
        <div>
          <p className="text-sm font-semibold text-[#3B2F1A]">Discussion</p>
          <p className="text-xs text-[#888888]">Hub · Internship & research opportunities</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-[#EDE6D2] px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.08em] text-[#5C4520]">
            Best
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-[#EDE6D2] px-2.5 py-1 text-xs font-semibold text-[#8A6622]">
            <BellAlertIcon className="h-3.5 w-3.5" aria-hidden />
            Watching
          </span>
        </div>
      </div>

      <div className="grid lg:grid-cols-[minmax(0,1fr)_15rem]">
        <div className="min-w-0 bg-[#F7F3EA] px-4 py-4 sm:px-6 sm:py-5">
          <div className="flex items-center gap-2 rounded-full border border-[#E4D9C4] bg-white px-3.5 py-2.5 text-sm text-[#888888]">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EDE6D2] text-xs font-semibold text-[#5C4520]">
              You
            </span>
            Join the conversation…
          </div>

          <div className="mt-1 max-w-[45rem]">
            {THREAD.map((comment) => (
              <CommentRow key={comment.id} comment={comment} />
            ))}
          </div>
        </div>

        <aside className="hidden border-l border-[#E4D9C4] bg-[#EDE6D2]/60 p-4 lg:block">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#8A6622]">
            About this hub
          </p>
          <div className="mt-3 overflow-hidden rounded-xl bg-white ring-1 ring-[#E4D9C4]">
            <div className="aspect-[16/10] bg-[#D9DACB]" />
            <div className="px-3 py-3">
              <p className="text-sm font-semibold leading-snug text-[#3B2F1A]">
                Internship & research opportunities
              </p>
              <p className="mt-1 text-xs text-[#666666]">Amy · 28k views · $30</p>
            </div>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-[#666666]">
            Discussion sits on the hub (or a file). Votes, replies, and markdown stay next to the
            work—not a separate social feed.
          </p>
        </aside>
      </div>
    </div>
  );
}
