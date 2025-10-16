# 📸 Project Images Update Guide

## 🎯 আপনার Live Websites:

### 1. Banglay IELTS
- URL: http://banglayielts.com
- Screenshot নিন: Full homepage
- Save as: `public/projects/banglay-ielts.jpg`

### 2. BIIC
- URL: http://biic.com.bd
- Screenshot নিন: Full homepage
- Save as: `public/projects/biic.jpg`

### 3. Shamz Fashion
- URL: http://shamz.com.bd
- Screenshot নিন: Full homepage
- Save as: `public/projects/shamz.jpg`

### 4. 90s Kick Official
- URL: http://90skickofficial.com
- Screenshot নিন: Full homepage
- Save as: `public/projects/90s-kick.jpg`

---

## 📸 Screenshot নেওয়ার উপায়:

### Option 1: Browser Extension
1. Chrome Web Store থেকে "Full Page Screen Capture" install করুন
2. Website খুলুন
3. Extension click করুন
4. Full page screenshot save করুন

### Option 2: Online Tools

#### A. Screenshot.guru (সবচেয়ে সহজ)
```
1. https://screenshot.guru/ এ যান
2. আপনার website URL paste করুন
3. "Capture" click করুন
4. Download করুন
```

#### B. Screenshotmachine
```
1. https://screenshotmachine.com/ এ যান
2. URL enter করুন
3. Size: 1200x800 select করুন
4. "Capture" click করুন
```

#### C. Mini S-Shot
```
1. https://mini.s-shot.ru/ এ যান
2. URL paste করুন
3. Screenshot download করুন
```

---

## 📁 File Structure তৈরি করুন:

```bash
portfolio-main/
└── public/
    └── projects/
        ├── banglay-ielts.jpg
        ├── biic.jpg
        ├── shamz.jpg
        ├── 90s-kick.jpg
        └── react-ecommerce.jpg
```

---

## 🔧 portfolio.ts Update করুন:

After screenshots save করার পর, এই file আপডেট করুন:

```typescript
// src/data/portfolio.ts

export const projects: Project[] = [
  {
    id: "1",
    title: "Banglay IELTS",
    description: "Comprehensive IELTS coaching platform",
    image: "/projects/banglay-ielts.jpg",  // ← এখানে আপডেট
    // ... rest of the data
  },
  {
    id: "2",
    title: "BIIC",
    image: "/projects/biic.jpg",  // ← এখানে আপডেট
    // ... rest
  },
  // ... বাকি projects
];
```

---

## ⚡ Quick Method (আমি script দিচ্ছি):

যদি সব website একসাথে screenshot নিতে চান, এই service ব্যবহার করুন:

### Bulk Screenshot Tool:
```
https://www.websitescreenshots.com/

1. সব URLs একসাথে paste করুন:
   - http://banglayielts.com
   - http://biic.com.bd
   - http://shamz.com.bd
   - http://90skickofficial.com

2. "Generate Screenshots" click করুন
3. Zip file download করুন
4. Extract করে public/projects এ রাখুন
```

---

## 📐 Image Size Recommendations:

### Ideal Dimensions:
- Width: 1200px - 1920px
- Height: 800px - 1080px
- Format: JPG or WebP
- Quality: 80-90%

### Optimization:
```
- TinyPNG.com এ optimize করুন
- File size: Under 500KB
- Maintain aspect ratio: 16:9 or 3:2
```

---

## 🎨 Professional Screenshot Tips:

### 1. Clean Browser:
- Close unnecessary tabs
- Hide bookmarks bar
- Full screen mode
- Clear notifications

### 2. Perfect Timing:
- Homepage fully loaded
- No loading spinners
- Images loaded
- Animations complete

### 3. Best Section:
- Hero section visible
- Main content shown
- Branding clear
- Call-to-actions visible

---

## 🚀 After Screenshot:

### Steps:
1. ✅ Screenshots নিন (1200x800px)
2. ✅ Optimize করুন (TinyPNG)
3. ✅ `public/projects/` folder এ save করুন
4. ✅ `portfolio.ts` file আপডেট করুন
5. ✅ `npm run dev` চালান
6. ✅ Check করুন browser এ

---

## 💡 Pro Tip:

### Placeholder থেকে Real Images:
Currently আপনার projects এ Unsplash images আছে:
```typescript
image: "https://images.unsplash.com/photo-..."
```

এটা replace করুন:
```typescript
image: "/projects/your-image.jpg"
```

---

## 🎯 Quick Action Plan:

### Right Now:
1. একটা browser extension install করুন
2. প্রতিটা website খুলুন
3. Full page screenshot নিন
4. Images save করুন

### Or Use Online:
1. Screenshot.guru তে যান
2. URL paste করুন
3. Download করুন
4. Save করুন

---

## 📞 Need Help?

যদি screenshot নিতে সমস্যা হয়, আমাকে বলুন:
- আমি step-by-step guide দিব
- Alternative methods দেখাব
- Image optimization tips দিব

---

**🎊 Screenshots নেওয়ার পর আমাকে বলুন, আমি portfolio.ts file আপডেট করে দিব!**
