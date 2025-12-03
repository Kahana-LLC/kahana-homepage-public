# Page Structure Analysis - Mobile Scrollability

## Overall Container Hierarchy

```
┌─────────────────────────────────────────────────────────┐
│ _app.js (Root Container)                                │
│ - flex flex-col min-h-screen                            │
│ - z-index: 100 (sticky header container)                │
│                                                          │
│ ├─ NavbarDup (FIXED - z-50)                            │
│ │  - position: fixed                                    │
│ │  - top: 0                                             │
│ │  - height: 64px (h-16)                                │
│ │  - z-index: 50                                        │
│ │  - Background: white/transparent with backdrop-blur   │
│ │                                                  │
│ ├─ GlobalBanner (STICKY - z-100)                       │
│ │  - position: sticky (in _app.js wrapper)              │
│ │  - top: 0                                             │
│ │  - z-index: 100                                       │
│ │                                                         │
│ ├─ Main Content (SCROLLABLE)                           │
│ │  - flex-grow                                          │
│ │  - All content scrolls here                          │
│ │                                                         │
│ │  └─ index.js (Homepage)                               │
│ │     └─ <div className="relative bg-white...">         │
│ │        │                                               │
│ │        ├─ Fixed Background Layer (z-0)                │
│ │        │  - position: fixed                           │
│ │        │  - inset-0                                   │
│ │        │  - pointer-events-none                       │
│ │        │  - Animated gradient blurs                   │
│ │        │  - Parallax effect on scroll                 │
│ │        │                                               │
│ │        ├─ Decorative Top Line (z-10)                 │
│ │        │  - position: absolute                        │
│ │        │  - top: 0                                    │
│ │        │                                               │
│ │        └─ Main Content (z-10)                         │
│ │           - position: relative                        │
│ │           - scroll-smooth                            │
│ │           - All sections scroll normally              │
│ │                                                         │
│ │           ├─ ProductSection                           │
│ │           │  - Has its own background blurs          │
│ │           │  - pointer-events-none                   │
│ │           │                                             │
│ │           ├─ VideoSection                             │
│ │           │                                             │
│ │           ├─ WhyOasisSection                          │
│ │           │                                             │
│ │           ├─ FeaturesShowcase                         │
│ │           │  - Horizontal carousel                   │
│ │           │  - overflow-x-auto                       │
│ │           │                                             │
│ │           └─ HowItWorks                               │
│ │              - Has its own background blurs        │
│ │                                                         │
│ └─ Footer (SCROLLABLE - at bottom)                     │
│    - Normal document flow                               │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

## Current Structure Details

### 1. **Fixed Elements (Don't Scroll)**
- **NavbarDup**: `fixed top-0 z-50` - Always visible at top
- **GlobalBanner**: `sticky top-0 z-100` - Sticks below navbar
- **Background Gradients**: `fixed inset-0 z-0` - Parallax effect

### 2. **Scrollable Elements (Normal Flow)**
- **Main content**: All sections scroll vertically
- **Horizontal carousels**: Scroll horizontally within their containers
- **Footer**: Scrolls into view at bottom

### 3. **Background Layers**

#### Layer 1: Fixed Background (index.js)
```jsx
<div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
  {/* Animated gradient blurs with parallax */}
</div>
```
- **Purpose**: Decorative background that moves with parallax
- **Mobile**: Should stay fixed, but may cause performance issues
- **Recommendation**: Consider `position: absolute` on mobile for better performance

#### Layer 2: Section Backgrounds
Each section can have its own background:
```jsx
<div className="pointer-events-none absolute inset-0">
  {/* Section-specific blur effects */}
</div>
```
- **Purpose**: Section-specific decorative elements
- **Mobile**: Scrolls with section (good)

### 4. **Z-Index Stacking Order**
```
z-100: GlobalBanner (sticky)
z-50:  NavbarDup (fixed)
z-10:  Main content sections
z-0:   Background gradients
```

## Mobile-Specific Recommendations

### ✅ **Should Be Fixed on Mobile:**
1. **Navbar** - Already fixed ✓
2. **GlobalBanner** - Already sticky ✓

### ⚠️ **Should Be Scrollable on Mobile:**
1. **All main content sections** - Already scrollable ✓
2. **Horizontal carousels** - Already scrollable ✓
3. **Background gradients** - Currently fixed, but consider:
   - **Option A**: Keep fixed (current) - Parallax effect
   - **Option B**: Change to `absolute` on mobile - Better performance
   - **Option C**: Remove on mobile - Simplest, best performance

### 🔧 **Potential Issues on Mobile:**

1. **Fixed Background Performance**
   - Fixed backgrounds with blur can cause scroll jank on mobile
   - **Fix**: Use `will-change: transform` or change to `absolute` on mobile

2. **Horizontal Carousel Overflow**
   - Carousels need `overflow-x-auto` (already done)
   - Need to prevent body scroll when swiping carousel
   - **Fix**: Use `touch-action: pan-x` on carousel, `pan-y` on body

3. **Z-Index Conflicts**
   - Multiple fixed/sticky elements can cause issues
   - **Current**: Navbar (z-50) + Banner (z-100) = Good separation

## Recommended Mobile Optimizations

### 1. Background Performance
```jsx
// In index.js, change fixed background for mobile:
<div className={`
  ${isMobile ? 'absolute' : 'fixed'} 
  inset-0 overflow-hidden pointer-events-none z-0
`}>
```

### 2. Carousel Touch Handling
```jsx
// Already implemented in FeaturesShowcase:
style={{ touchAction: 'pan-y' }} // Prevents vertical scroll when swiping
```

### 3. Smooth Scrolling
```jsx
// Already implemented:
<main className="scroll-smooth bg-white relative z-10">
```

## Summary

**Current State:**
- ✅ Navbar: Fixed (correct)
- ✅ Banner: Sticky (correct)
- ✅ Content: Scrollable (correct)
- ⚠️ Backgrounds: Fixed (may cause performance issues on mobile)

**Recommended Changes:**
1. Consider making fixed backgrounds `absolute` on mobile
2. Ensure carousels have proper touch handling (already done)
3. Test scroll performance on actual mobile devices

