# How to View User Intent Analytics

## Overview
The `userIntentTracking.js` file contains functions that track user behavior and push events to Google Analytics. Here's how to view and use this data.

## 📊 Where to View Analytics

### Option 1: Google Analytics 4 (GA4) Dashboard

1. **Access Google Analytics**
   - Go to [analytics.google.com](https://analytics.google.com)
   - Sign in with your Google account
   - Select your property (should be configured with ID: `G-KQHFL9605P`)

2. **View Events**
   - Navigate to **Reports** → **Engagement** → **Events**
   - You'll see all custom events from `userIntentTracking.js`

3. **Key Events to Monitor**

   | Event Name | What It Tracks | Where to Find |
   |------------|----------------|---------------|
   | `category_filter` | Which categories users click | Engagement → Events → category_filter |
   | `category_click` | Category clicks from blog posts | Engagement → Events → category_click |
   | `blog_engagement` | Blog post engagement (views, scroll, time) | Engagement → Events → blog_engagement |
   | `related_blog_click` | Related blog clicks | Engagement → Events → related_blog_click |
   | `browser_search_intent` | "Top browser" searches | Engagement → Events → browser_search_intent |
   | `user_segment` | User segmentation by interest | Engagement → Events → user_segment |
   | `oasis_relevance` | When users understand Oasis value | Engagement → Events → oasis_relevance |

### Option 2: Google Analytics DebugView (Real-time)

1. **Enable Debug Mode**
   - Install [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger) Chrome extension
   - Or add `?debug_mode=true` to your URL
   - Open GA4 → **Configure** → **DebugView**

2. **See Events in Real-time**
   - Events appear as they happen
   - See event parameters (category, blog_slug, etc.)
   - Perfect for testing

### Option 3: Browser Console (Development)

1. **Open Browser Console**
   - Press `F12` or `Cmd+Option+I` (Mac)
   - Go to **Console** tab

2. **Check dataLayer**
   - Type: `window.dataLayer`
   - See all tracked events
   - Events only push if user has consented to analytics

## 🔍 How to Answer Key Questions

### Question 1: Which user types care most about Oasis?

**Steps:**
1. Go to GA4 → **Reports** → **Engagement** → **Events**
2. Find `user_segment` event
3. Click on it → **View event details**
4. Look at `segment_value` parameter
5. **Answer**: Categories with highest counts = most interested user types

**Example Query:**
```
Event: user_segment
Group by: segment_value (category)
Sort by: Event count (descending)
```

### Question 2: Which categories are most popular?

**Steps:**
1. Go to GA4 → **Reports** → **Engagement** → **Events**
2. Find `category_filter` event
3. Click → **View event details**
4. Look at `category` parameter
5. **Answer**: Categories with most filters = most popular topics

**Example Query:**
```
Event: category_filter
Group by: category
Sort by: Event count (descending)
```

### Question 3: Do users search for "top browser"?

**Steps:**
1. Go to GA4 → **Reports** → **Engagement** → **Events**
2. Find `browser_search_intent` event
3. Click → **View event details**
4. Look at `search_term` parameter
5. **Answer**: Count of events = demand for browser comparison content

**Example Query:**
```
Event: browser_search_intent
Filter: search_term contains "top browser"
Count: Total events
```

### Question 4: Which blog posts engage users most?

**Steps:**
1. Go to GA4 → **Reports** → **Engagement** → **Events**
2. Find `blog_engagement` event
3. Click → **View event details**
4. Filter by `engagement_type: 'scroll_100'` or `'time_2min'`
5. Group by `blog_slug`
6. **Answer**: Blogs with highest engagement = most valuable content

**Example Query:**
```
Event: blog_engagement
Filter: engagement_type = scroll_100
Group by: blog_slug
Sort by: Event count (descending)
```

### Question 5: Do users understand why Oasis is relevant?

**Steps:**
1. Go to GA4 → **Reports** → **Engagement** → **Events**
2. Find `oasis_relevance` event
3. Click → **View event details**
4. Group by `relevance_type` (security, productivity, compliance, comparison)
5. **Answer**: Which value propositions resonate most

**Example Query:**
```
Event: oasis_relevance
Group by: relevance_type
Sort by: Event count (descending)
```

## 🧪 Testing Analytics (Development)

### Test in Browser Console

1. **Open your site** in development mode
2. **Open Console** (F12)
3. **Check if tracking works:**

```javascript
// Check if dataLayer exists
console.log(window.dataLayer);

// Manually trigger an event
window.dataLayer.push({
  event: 'test_event',
  category: 'Security',
  timestamp: new Date().toISOString()
});

// Check consent status
const consent = localStorage.getItem('kahana_consent_preferences');
console.log(JSON.parse(consent));
```

### Test User Intent Tracking

```javascript
// Import tracking functions (in browser console after page loads)
import { trackCategoryFilter, trackBlogEngagement } from './utils/userIntentTracking';

// Test category filter
trackCategoryFilter('Security', 'test');

// Test blog engagement
trackBlogEngagement('test-blog', 'Security', 'view');
```

## 📈 Creating Custom Reports

### Custom Report: User Segments Dashboard

1. Go to GA4 → **Explore** → **Free Form**
2. **Dimensions**: 
   - `Event name` = `user_segment`
   - `Custom parameter: segment_value`
3. **Metrics**: 
   - `Event count`
4. **Visualization**: Bar chart
5. **Save** as "User Segments Analysis"

### Custom Report: Blog Engagement Dashboard

1. Go to GA4 → **Explore** → **Free Form**
2. **Dimensions**: 
   - `Event name` = `blog_engagement`
   - `Custom parameter: blog_slug`
   - `Custom parameter: engagement_type`
3. **Metrics**: 
   - `Event count`
   - `Average engagement time` (if available)
4. **Visualization**: Table
5. **Save** as "Blog Engagement Analysis"

### Custom Report: Browser Search Intent

1. Go to GA4 → **Explore** → **Free Form**
2. **Dimensions**: 
   - `Event name` = `browser_search_intent`
   - `Custom parameter: search_term`
3. **Metrics**: 
   - `Event count`
4. **Visualization**: Table
5. **Save** as "Browser Search Intent"

## 🔔 Setting Up Alerts

### Alert: High Browser Search Intent

1. Go to GA4 → **Admin** → **Custom Alerts**
2. **Create Alert**:
   - Name: "High Browser Search Intent"
   - Event: `browser_search_intent`
   - Condition: Event count > 10 per day
   - Notification: Email

### Alert: Popular Category Change

1. Go to GA4 → **Admin** → **Custom Alerts**
2. **Create Alert**:
   - Name: "Category Popularity Shift"
   - Event: `category_filter`
   - Condition: Change in top category > 20%
   - Notification: Email

## 📝 Key Metrics to Track Weekly

1. **Top 5 Categories** (from `category_filter`)
2. **Top 5 Blog Posts** (from `blog_engagement` with `scroll_100`)
3. **Browser Search Volume** (from `browser_search_intent`)
4. **User Segments** (from `user_segment` grouped by `segment_value`)
5. **Oasis Relevance Types** (from `oasis_relevance` grouped by `relevance_type`)

## 🚨 Troubleshooting

### Events Not Showing Up?

1. **Check Consent**: User must consent to analytics
   ```javascript
   localStorage.getItem('kahana_consent_preferences')
   ```

2. **Check dataLayer**: 
   ```javascript
   console.log(window.dataLayer)
   ```

3. **Check GA4 Configuration**: Verify tracking ID `G-KQHFL9605P` is correct

4. **Check Network Tab**: Look for requests to `google-analytics.com`

### Events Showing But No Data?

1. **Wait 24-48 hours**: GA4 can take time to process
2. **Check Filters**: Make sure no filters are excluding your events
3. **Check Date Range**: Make sure you're looking at the right time period

## 💡 Pro Tips

1. **Use DebugView** for real-time testing during development
2. **Create Custom Reports** for quick access to key metrics
3. **Set Up Alerts** to be notified of significant changes
4. **Export Data** to CSV for deeper analysis in Excel/Sheets
5. **Compare Time Periods** to see trends (this week vs last week)

## 📚 Additional Resources

- [GA4 Events Documentation](https://support.google.com/analytics/answer/9322688)
- [GA4 Custom Events Guide](https://support.google.com/analytics/answer/9267735)
- [GA4 DebugView Guide](https://support.google.com/analytics/answer/7201382)
