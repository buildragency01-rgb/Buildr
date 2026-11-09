# Buildr Website – Guide (Hinglish)

## 1. VS Code mein kaise kholein
1. VS Code install karein: https://code.visualstudio.com
2. `File > Open Folder` se `buildr-website` folder kholein.
3. Extensions mein **Live Server** (Ritwick Dey) install karein.
4. `index.html` pe right-click, **Open with Live Server**. Browser mein site khul jayegi aur save karte hi auto-refresh hogi.

## 2. Folder structure
```
buildr-website/
  index.html        -> saare pages (Home, Templates, Services, About, Contact)
  css/style.css     -> colours, design, animations
  js/templates.js   -> WhatsApp number + TEMPLATES list (yahin sab kuch badalna hai)
  js/main.js        -> logic (gallery, tabs, routing). Normally touch nahi karna
  images/           -> template screenshots yahan rakhein
```

## 3. WhatsApp number badalna
`js/templates.js` ke top pe:
```js
whatsapp: "919118794177"
```
Country code ke saath number likhein, `+` ya space nahi. India: `91` + 10 digit.

## 4. Naya template add karna
`js/templates.js` mein `TEMPLATES` list mein ek block copy-paste karein:
```js
{ name:"MyTemplate", category:"Gym", price:"₹4,999", emoji:"💪",
  color:"linear-gradient(135deg,#222,#f55)", desc:"Short line about it",
  link:"https://your-demo-link.com", image:"" },
```
- **Comma (,)** har block ke baad zaroori hai (last wale ke baad nahi).
- **link**: card ya "Live Preview" pe click karne par yahi link naye tab mein khulta hai.
- **price**: kuch bhi likh sakte hain, jaise `"₹4,999"` ya `"From ₹3,000"`.
- **category**: naya naam likhte hi Templates page pe apne aap naya filter tab ban jata hai.
- **Get this design** button apne aap WhatsApp message kholta hai jisme template ka naam, category aur price hota hai.

## 5. Screenshot lagana (recommended)
1. Apne template ka screenshot `images/` folder mein daalein, jaise `images/fitpro.png`.
2. Us template mein `image:"images/fitpro.png"` likhein.
3. Image 16:9 ya 4:3 ho toh best dikhti hai.

## 6. Template ka live demo link kaise banayein
Har template ko free hosting pe daalein, phir milne wala link `link:` mein paste karein:
- **Netlify Drop**: https://app.netlify.com/drop (folder drag and drop)
- **GitHub Pages**, **Vercel** ya **Cloudflare Pages** bhi free hain.

## 7. Poori Buildr site live karna
Isi `buildr-website` folder ko Netlify Drop pe drag-drop karein. Link mil jayega. Baad mein apna domain jod sakte hain.

## 8. Aur kya badal sakte hain
- **Prices / services**: `index.html` mein `p-services` section dhoondhein aur text badal dein.
- **Reviews**: `index.html` mein `rev` class wale cards.
- **Quotes**: `js/main.js` ke top mein `Q` list.
- **Colours**: `css/style.css` ke top ke `--gd` (gold) aur `--vi` (violet).

## Common problems
- **Kuch dikh nahi raha**: browser mein F12, Console dekhein. Aksar `templates.js` mein comma ya bracket rah jata hai.
- **Image nahi dikh rahi**: file ka naam aur path (`images/naam.png`) bilkul same hona chahiye.
