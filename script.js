// Supabase uses the internal admin email only in the background. The email is never shown in the login form.
const ADMIN_PASSWORD = "mazen";
const STORE_WHATSAPP = "201101729109";
const STORE_PHONE = "01275026300";

const defaultProducts = [
  { id: 118, nameAr: "لافيرن سينس - طقم عطر وكريم", nameEn: "Laverne Sense Gift Set", price: 2400, oldPrice: 0, discount: 0, image: "assets/laverne_sense.jpg", category: "original", gender: "women" },
  { id: 116, nameAr: "يارا كاندي", nameEn: "Yara Candy", price: 1300, oldPrice: 0, discount: 0, image: "assets/yara_candy.jpg", category: "original", gender: "women" },
  { id: 117, nameAr: "خمرة دخان", nameEn: "Khamrah Dukhan", price: 1780, oldPrice: 0, discount: 0, image: "assets/khamrah_dukhan.jpg", category: "original", gender: "men" },
  { id: 101, nameAr: "نود كورال دايموند", nameEn: "Nude Coral Diamond", price: 2100, oldPrice: 0, discount: 0, image: "assets/nude_coral_diamond.jpg", category: "original", gender: "women" },
  { id: 102, nameAr: "بينك دايموند ساكورا", nameEn: "Pink Diamond Sakura", price: 2100, oldPrice: 0, discount: 0, image: "assets/pink_diamond_sakura.jpg", category: "original", gender: "women" },
  { id: 103, nameAr: "بيانكو لاتيه", nameEn: "Bianco Latte", price: 1700, oldPrice: 0, discount: 0, image: "assets/bianco_latte.jpg", category: "original", gender: "unisex" },
  { id: 105, nameAr: "نجدية", nameEn: "Najdia", price: 800, oldPrice: 0, discount: 0, image: "assets/najdia.jpg", category: "original", gender: "men" },
  { id: 106, nameAr: "عشق الشيوخ جولد", nameEn: "Ishq Al Shuyukh Gold", price: 1850, oldPrice: 0, discount: 0, image: "assets/ishq_al_shuyukh_gold.jpg", category: "original", gender: "men" },
  { id: 108, nameAr: "خمرة قهوة", nameEn: "Khamrah Qahwa", price: 1500, oldPrice: 0, discount: 0, image: "assets/khamrah_qahwa.jpg", category: "original", gender: "male" },
  { id: 109, nameAr: "قائد الفرسان", nameEn: "Qaed Al Fursan", price: 1500, oldPrice: 0, discount: 0, image: "assets/qaed_al_fursan.jpg", category: "original", gender: "male" },
  { id: 110, nameAr: "أمير العود إنتنس عود", nameEn: "Ameer Al Oudh Intense Oud", price: 1235, oldPrice: 0, discount: 0, image: "assets/ameer_al_oudh.jpg", category: "original", gender: "male" },
  { id: 112, nameAr: "عود الليل", nameEn: "Oud Al Layl", price: 1100, oldPrice: 0, discount: 0, image: "assets/oud_al_layl.jpg", category: "original", gender: "male" },
  { id: 113, nameAr: "شيخ الشيوخ لوكس إديشن", nameEn: "Sheikh Al Shuyukh Luxe Edition", price: 950, oldPrice: 0, discount: 0, image: "assets/sheikh_shuyukh_luxe.jpg", category: "original", gender: "male" },
  { id: 114, nameAr: "إبراهيم القرشي", nameEn: "Ibrahim Al Qurashi", price: 1100, oldPrice: 0, discount: 0, image: "assets/ibrahim_al_qurashi_red.jpg", category: "original", gender: "male" },
  { id: 115, nameAr: "أسد لطافة", nameEn: "Lattafa Asad", price: 1300, oldPrice: 0, discount: 0, image: "assets/lattafa_asad.jpg", category: "original", gender: "male" }
];

const removedProduct = p => {
  const name = `${p.nameAr || ""} ${p.nameEn || ""}`.toLowerCase().replace(/[\s_-]+/g, "");
  return name.includes("hawas") || name.includes("هوس") || name.includes("هوايس") || name.includes("9pm") || name.includes("9بيام") || name.includes("9بيإم");
};
const translations = {
  ar: {
    dir: "rtl", lang: "ar", siteTag: "عطور شرقية فاخرة", call: "اتصل بنا", admin: "تحكم الإدارة", cart: "السلة",
    heroTitle: "عطور تليق بذوقك", heroText: "اختار عطرك المفضل واستمتع بتجربة تسوق بسيطة وسريعة.", browse: "تصفح المنتجات",
    ourProducts: "منتجاتنا", latest: "أحدث المنتجات", offers: "عروض مميزة", search: "ابحث عن منتج...", all: "الكل", original: "أوريجينال", blends: "تركيبات", men: "رجالي", women: "حريمي",
    add: "أضف للسلة", cartTitle: "سلة المشتريات", emptyCart: "السلة فارغة", total: "الإجمالي", yourData: "بيانات طلبك", name: "الاسم", phone: "رقم الموبايل", email: "الإيميل", area: "المنطقة", address: "العنوان بالتفصيل", notes: "ملاحظات إضافية", namePh: "اكتب اسمك", phonePh: "01xxxxxxxxx", emailPh: "example@gmail.com", areaPh: "مثال: مدينة نصر", addressPh: "الشارع، العمارة، الدور، الشقة", notesPh: "أي ملاحظات على الطلب", checkout: "تأكيد الطلب والتواصل عبر واتساب", registered: "تم تسجيل الطلب", codeText: "كود الطلب الخاص بك:", waReady: "تم تجهيز رسالة واتساب بالطلب.", openWa: "فتح واتساب والتواصل مع المتجر", login: "دخول الإدارة", adminEmail: "الإيميل", password: "كلمة المرور", enter: "دخول", panel: "لوحة التحكم", manage: "إدارة المنتجات والطلبات", currentProducts: "المنتجات الحالية", addProduct: "إضافة منتج جديد", productNameAr: "اسم المنتج بالعربي", productNameEn: "اسم المنتج بالإنجليزي", price: "السعر", oldPrice: "السعر القديم", discount: "الخصم %", category: "القسم", gender: "الفئة", image: "صورة المنتج", chooseImage: "اختار صورة من جهازك", addProductBtn: "إضافة المنتج", originalOpt: "أوريجينال", noCategoryOpt: "بدون قسم", blendsOpt: "تركيبات", menOpt: "رجالي", womenOpt: "حريمي", unisexOpt: "رجالي وحريمي", delete: "حذف", orders: "الطلبات", orderedProducts: "المنتجات المطلوبة", deviceOrders: "طلبات هذا الجهاز", clear: "مسح الطلبات", noOrders: "لا توجد طلبات محفوظة على هذا الجهاز.", accept: "قبول وإرسال واتساب", reject: "رفض وإرسال واتساب", invalidPass: "كلمة السر غير صحيحة", fillProduct: "اكتب اسم المنتج بالعربي والسعر واختر صورة", imageRequired: "اختار صورة للمنتج", cartEmptyAlert: "السلة فارغة", required: "من فضلك املأ الاسم ورقم الهاتف والمنطقة والعنوان", deleteConfirm: "هل تريد حذف المنتج؟", clearConfirm: "مسح الطلبات المحفوظة على هذا الجهاز؟", remove: "حذف", old: "القديم", notAdded: "غير مضاف", noNotes: "لا يوجد", newOrder: "طلب جديد - El OUD ELMALAKI", quantityShort: "الكمية:", statusNew: "جديد", accepted: "مقبول", rejected: "مرفوض", acceptedOrder: "تم قبول الطلب", rejectedOrder: "تم رفض الطلب", language: "English", footer: "عطور وعود فاخرة"
  },
  en: {
    dir: "ltr", lang: "en", siteTag: "Luxury Oud & Perfumes", call: "Call us", admin: "Admin", cart: "Cart",
    heroTitle: "Perfumes that match your taste", heroText: "Choose your favorite fragrance and enjoy a simple, fast shopping experience.", browse: "Browse products",
    ourProducts: "Our Products", latest: "Latest Products", offers: "Special Offers", search: "Search for a product...", all: "All", original: "Original", blends: "Blends", men: "Men", women: "Women",
    add: "Add to cart", cartTitle: "Shopping Cart", emptyCart: "Your cart is empty", total: "Total", yourData: "Your Order Details", name: "Name", phone: "Mobile", email: "Email", area: "Area", address: "Full address", notes: "Additional notes", namePh: "Your name", phonePh: "01xxxxxxxxx", emailPh: "example@gmail.com", areaPh: "e.g. Nasr City", addressPh: "Street, building, floor, apartment", notesPh: "Any notes about the order", checkout: "Confirm order & contact us on WhatsApp", registered: "Order registered", codeText: "Your order code:", waReady: "Your WhatsApp order message is ready.", openWa: "Open WhatsApp", login: "Admin Login", adminEmail: "Email", password: "Password", enter: "Login", panel: "Control Panel", manage: "Products & Orders", currentProducts: "Current Products", addProduct: "Add New Product", productNameAr: "Product name in Arabic", productNameEn: "Product name in English", price: "Price", oldPrice: "Old price", discount: "Discount %", category: "Category", gender: "Gender", image: "Product image", chooseImage: "Choose an image from your device", addProductBtn: "Add Product", originalOpt: "Original", noCategoryOpt: "No category", blendsOpt: "Blends", menOpt: "Men", womenOpt: "Women", unisexOpt: "Men & Women", delete: "Delete", orders: "Orders", orderedProducts: "Ordered Products", deviceOrders: "Orders on this device", clear: "Clear orders", noOrders: "No orders saved on this device.", accept: "Accept & WhatsApp", reject: "Reject & WhatsApp", invalidPass: "Incorrect password", fillProduct: "Enter the Arabic name and price, then choose an image", imageRequired: "Choose a product image", cartEmptyAlert: "Your cart is empty", required: "Please fill in name, mobile, area and address", deleteConfirm: "Delete this product?", clearConfirm: "Clear orders saved on this device?", remove: "Remove", old: "Old", notAdded: "Not added", noNotes: "None", newOrder: "New Order - El OUD ELMALAKI", quantityShort: "Qty:", statusNew: "New", accepted: "Accepted", rejected: "Rejected", acceptedOrder: "Order Accepted", rejectedOrder: "Order Rejected", language: "العربية", footer: "Luxury Oud & Perfumes"
  }
};

let lang = localStorage.getItem("royal_oud_lang") || "ar";
let products = JSON.parse(localStorage.getItem("royal_oud_products") || "null");

if (!Array.isArray(products) || products.length === 0) {
  products = defaultProducts.filter(p => !removedProduct(p));
} else {
  // Remove old products that should no longer appear in the store.
  // Their product entries and images are removed from this release.
  products = products.filter(p => {
    if (removedProduct(p)) return false;
    const ar = String(p.nameAr || "").trim();
    const en = String(p.nameEn || "").trim().toLowerCase();
    const isPolo = ar.includes("بابلو") || en === "polo";
    const isOldKhamrah400 = (ar === "خمره" || ar === "خمرة" || en === "khamrah") && Number(p.price) === 400;
    return !isPolo && !isOldKhamrah400;
  });

  // Keep all other existing products and make sure the current default products are present.
  const existingIds = new Set(products.map(p => p.id));
  defaultProducts.forEach(p => {
    if (!removedProduct(p) && !existingIds.has(p.id)) products.push(p);
  });
}
localStorage.setItem("royal_oud_products", JSON.stringify(products));
products = products
  .filter(p => typeof p.image === "string" && p.image.trim() !== "")
  .map(p => {
    const normalized = {...p, nameAr: p.nameAr ?? p.name ?? "", nameEn: p.nameEn ?? p.nameAr ?? p.name ?? "", category: p.category ?? "", gender: p.gender ?? "unisex"};
    if (["male", "رجالي"].includes(String(normalized.gender).toLowerCase())) normalized.gender = "men";
    if (["female", "حريمي"].includes(String(normalized.gender).toLowerCase())) normalized.gender = "women";
    const arName = normalized.nameAr || "";
    const enName = (normalized.nameEn || "").toLowerCase();
    if (arName.includes("شيخ الشيوخ") || enName.includes("sheikh al shuyukh")) normalized.price = 950;
    if (arName.includes("عود الليل") || enName.includes("oud al layl")) normalized.price = 1100;
    if (arName.includes("قائد الفرسان") || enName.includes("qaed al fursan")) normalized.price = 1500;
    if (arName.includes("شيخ الشيوخ") || enName.includes("sheikh al shuyukh") || arName.includes("عود الليل") || enName.includes("oud al layl") || arName.includes("أمير العود") || enName.includes("ameer al oudh") || arName.includes("قائد الفرسان") || enName.includes("qaed al fursan") || arName.includes("خمرة قهوة") || enName.includes("khamrah qahwa")) normalized.gender = "male";
    return normalized;
  });
localStorage.setItem("royal_oud_products", JSON.stringify(products));
let cart = JSON.parse(localStorage.getItem("royal_oud_cart") || "[]");
let orders = [];
// Admin login is local. The password is NOT sent to Supabase.
// When the site is served by server.js, the same password is used only
// for requests to your own Node.js server so the admin can see shared orders.
let adminAccessToken = sessionStorage.getItem("oud_admin_access_token") || "";
const ORDERS_API = "/api/orders";
function adminHeaders(extra={}){
  return { "Content-Type":"application/json", "X-Admin-Password": adminAccessToken, ...extra };
}
async function apiRequest(path, options={}){
  const r = await fetch(path, options);
  if(!r.ok){ let detail=""; try{detail=await r.text();}catch{} throw new Error(`Server request failed (${r.status}) ${detail}`); }
  if(r.status===204) return null;
  const text=await r.text(); return text ? JSON.parse(text) : null;
}
async function loadOrdersFromServer(){
  if(!adminAccessToken) throw new Error("Admin login required");
  const data=await apiRequest(ORDERS_API,{headers:adminHeaders()});
  orders=Array.isArray(data)?data:[];
  renderAdminOrders();
}
async function createOrderOnServer(order){
  await apiRequest(ORDERS_API,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(order)});
}
async function updateOrderOnServer(code,status){
  await apiRequest(`${ORDERS_API}/${encodeURIComponent(code)}`,{method:"PATCH",headers:adminHeaders(),body:JSON.stringify({status})});
}
async function clearOrdersOnServer(){
  await apiRequest(ORDERS_API,{method:"DELETE",headers:adminHeaders()});
}
let activeCategory = "all";
let searchTerm = "";

const $ = id => document.getElementById(id);
const t = key => translations[lang][key] ?? key;
function save(){ localStorage.setItem("royal_oud_products", JSON.stringify(products)); localStorage.setItem("royal_oud_cart", JSON.stringify(cart)); }
function normalizePhone(phone){ let p=String(phone||"").replace(/[^\d+]/g,""); if(p.startsWith("+"))p=p.slice(1); if(p.startsWith("0"))p="20"+p.slice(1); return p; }
function makeOrderCode(){ return "EOM-" + Date.now().toString().slice(-8); }
function money(n){ if(Number(n) === 0) return lang === "ar" ? "السعر يحدد لاحقًا" : "Price to be announced"; return Number(n).toLocaleString(lang === "ar" ? "ar-EG" : "en-US") + (lang === "ar" ? " جنيه" : " EGP"); }
function productName(p){ return lang === "ar" ? (p.nameAr || p.nameEn) : (p.nameEn || p.nameAr); }
function genderLabel(g){ return g === "men" || g === "male" ? t("men") : g === "women" || g === "female" ? t("women") : t("unisexOpt"); }
function categoryLabel(c){ return c === "blends" ? t("blends") : c === "original" ? t("original") : ""; }

function applyLanguage(){
  document.documentElement.lang = t("lang");
  document.documentElement.dir = t("dir");
  document.querySelectorAll("[data-i18n]").forEach(el => el.textContent = t(el.dataset.i18n));
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => el.placeholder = t(el.dataset.i18nPlaceholder));
  $("languageToggle").textContent = t("language");
  $("customerPhone").dir = "ltr";
  renderProducts(); renderCart(); renderAdminProducts(); renderAdminOrders();
}
function toggleLanguage(){ lang = lang === "ar" ? "en" : "ar"; localStorage.setItem("royal_oud_lang", lang); applyLanguage(); }

function filteredProducts(){
  return products.filter(p => {
    const text = `${p.nameAr} ${p.nameEn}`.toLowerCase();
    const q = searchTerm.toLowerCase();
    const matchesSearch = !q || text.includes(q) || (categoryLabel(p.category) || "").toLowerCase().includes(q) || genderLabel(p.gender).toLowerCase().includes(q);
    const gender = String(p.gender || "").toLowerCase();
    const isMen = ["men", "male", "رجالي"].includes(gender);
    const isWomen = ["women", "female", "حريمي"].includes(gender);
    const matchesGender = activeCategory === "men" ? isMen : activeCategory === "women" ? isWomen : false;
    const matchesCategory = activeCategory === "all" || p.category === activeCategory || matchesGender;
    return matchesSearch && matchesCategory;
  });
}
function renderProducts(){
  const grid=$("productsGrid"); if(!grid)return;
  const list=filteredProducts();
  if(!list.length){grid.innerHTML=`<div class="empty-state full-empty">${lang === "ar" ? "لا توجد منتجات مطابقة للبحث." : "No matching products found."}</div>`;return;}
  grid.innerHTML=list.map(p=>`<article class="product-card"><div class="product-image-wrap">${p.discount ? `<span class="discount-badge">${lang === "ar" ? "خصم" : "Save"} ${p.discount}%</span>` : ""}<img class="product-image" src="${p.image}" alt="${productName(p)}"></div><div class="product-info"><div class="product-tags">${categoryLabel(p.category) ? `<span>${categoryLabel(p.category)}</span>` : ""}<span>${genderLabel(p.gender)}</span></div><h3>${productName(p)}</h3><div class="price-row"><span class="price">${money(p.price)}</span>${p.oldPrice ? `<span class="old-price">${money(p.oldPrice)}</span>` : ""}</div><button class="primary-btn" onclick="addToCart(${p.id})">${t("add")}</button></div></article>`).join("");
}
function renderCart(){
  const box=$("cartItems"); if(!box)return;
  if(!cart.length) box.innerHTML=`<div class="empty-state">${t("emptyCart")}</div>`;
  else box.innerHTML=cart.map((x,i)=>`<div class="cart-item"><img src="${x.image}" alt="${productName(x)}"><div class="cart-info"><strong>${productName(x)}</strong><span>${money(x.price)} × ${x.qty}</span></div><button class="remove-btn" onclick="removeFromCart(${i})">${t("remove")}</button></div>`).join("");
  const total=cart.reduce((s,x)=>s+x.price*x.qty,0); $("cartTotal").textContent=money(total); $("cartCount").textContent=cart.reduce((s,x)=>s+x.qty,0);
}
function addToCart(id){ const p=products.find(x=>x.id===id); if(!p)return; const f=cart.find(x=>x.id===id); if(f)f.qty++; else cart.push({...p,qty:1}); save(); renderCart(); }
function removeFromCart(i){ cart.splice(i,1); save(); renderCart(); }
function show(id){$(id)?.classList.add("show");}
function hide(id){$(id)?.classList.remove("show");}

function buildOrderMessage(o){
  return [t("newOrder"),`Order: ${o.code}`,"",`${t("name")}: ${o.customer.name}`,`${t("phone")}: ${o.customer.phone}`,`${t("email")}: ${o.customer.email||t("notAdded")}`,`${t("area")}: ${o.customer.area}`,`${t("address")}: ${o.customer.address}`,`${t("notes")}: ${o.customer.notes||t("noNotes")}`,"",`${t("ourProducts")}:`,...o.items.map(x=>`- ${x.displayName} × ${x.qty} = ${money(x.price*x.qty)}`),"",`${t("total")}: ${money(o.total)}`].join("\n");
}
async function submitOrder(e){
  e.preventDefault();
  if(!cart.length)return alert(t("cartEmptyAlert"));
  const o={code:makeOrderCode(),createdAt:new Date().toISOString(),status:"new",items:cart.map(x=>({id:x.id,nameAr:x.nameAr,nameEn:x.nameEn,displayName:productName(x),price:x.price,qty:x.qty})),total:cart.reduce((s,x)=>s+x.price*x.qty,0),customer:{name:$("customerName").value.trim(),phone:$("customerPhone").value.trim(),email:$("customerEmail").value.trim(),area:$("customerArea").value.trim(),address:$("customerAddress").value.trim(),notes:$("customerNotes").value.trim()}};
  if(!o.customer.name||!o.customer.phone||!o.customer.area||!o.customer.address)return alert(t("required"));
  try {
    await createOrderOnServer(o);
    orders.unshift(o); save();
  } catch(err) {
    console.error(err);
    return alert(lang === "ar" ? "حصل خطأ أثناء حفظ الطلب. راجع إعدادات قاعدة البيانات في ملف SETUP_SUPABASE_AR.txt ثم حاول مرة أخرى." : "Could not save the order. Check SETUP_SUPABASE_AR.txt and try again.");
  }
  const url=`https://wa.me/${STORE_WHATSAPP}?text=${encodeURIComponent(buildOrderMessage(o))}`;
  $("customerOrderCode").textContent=o.code; $("whatsappLink").href=url; $("orderFormArea").hidden=true; $("orderSuccess").hidden=false;
  cart=[]; save(); renderCart(); renderAdminOrders(); window.open(url,"_blank");
}

function renderAdminProducts(){
  const box=$("adminProducts"); if(!box)return;
  box.innerHTML=`<h3>${t("currentProducts")}</h3>`+products.map(p=>`<div class="admin-product"><img src="${p.image}"><div class="admin-info"><strong>${productName(p)}</strong><div>${money(p.price)}${p.oldPrice?` — ${t("old")} ${money(p.oldPrice)}`:""}</div><small>${categoryLabel(p.category) ? categoryLabel(p.category) + " • " : ""}${genderLabel(p.gender)}</small></div><button class="delete-btn" onclick="deleteProduct(${p.id})">${t("delete")}</button></div>`).join("");
}
function deleteProduct(id){ if(!confirm(t("deleteConfirm")))return; products=products.filter(p=>p.id!==id); save(); renderProducts(); renderAdminProducts(); }

function renderAdminOrders(){
  const box=$("adminOrders"); if(!box)return;
  if(!orders.length){box.innerHTML=`<div class="empty-orders">${t("noOrders")}</div>`;return;}
  box.innerHTML=orders.map(o=>{
    const statusText = o.status === "accepted" ? t("acceptedOrder") : o.status === "rejected" ? t("rejectedOrder") : t("statusNew");
    const actions = o.status === "new" ? `<div class="order-actions"><button class="accept-btn" onclick="contactCustomer('${o.code}','accepted')">${t("accept")}</button><button class="reject-btn" onclick="contactCustomer('${o.code}','rejected')">${t("reject")}</button></div>` : `<div class="order-result ${o.status === "accepted" ? "accepted-result" : "rejected-result"}">${statusText}</div>`;
    return `<div class="order-card"><div class="order-top"><span class="order-code">${o.code}</span><span class="order-status">${o.status === "accepted" ? t("accepted") : o.status === "rejected" ? t("rejected") : t("statusNew")}</span></div><div class="order-info"><div>${t("name")}: ${o.customer.name}</div><div>${t("phone")}: ${o.customer.phone}</div><div>${t("email")}: ${o.customer.email||t("notAdded")}</div><div>${t("area")}: ${o.customer.area}</div><div>${t("address")}: ${o.customer.address}</div><div>${t("total")}: <strong>${money(o.total)}</strong></div></div><div class="order-products"><strong>${t("orderedProducts")}:</strong><div class="ordered-products-list">${o.items.map((x,i)=>`<div class="ordered-product-row"><span>${i+1}. ${x.displayName || x.nameAr || x.nameEn}</span><span>${t("quantityShort")} ${x.qty}</span></div>`).join("")}</div></div>${actions}</div>`;
  }).join("");
}
async function contactCustomer(code,status){
  const o=orders.find(x=>x.code===code); if(!o)return;
  try { await updateOrderOnServer(code,status); o.status=status; save(); renderAdminOrders(); }
  catch(err) { console.error(err); return alert(lang === "ar" ? "تعذر تحديث حالة الطلب." : "Could not update the order status."); }
  const text=status==="accepted" ? `Hello ${o.customer.name}, your order ${o.code} from El OUD ELMALAKI has been accepted.` : `Hello ${o.customer.name}, we are sorry that we could not accept your order ${o.code} from El OUD ELMALAKI.`;
  const phone=normalizePhone(o.customer.phone); if(phone)window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`,"_blank");
}

async function adminLogin(e){
  e.preventDefault();
  const password = $("adminPassword").value;
  if(password !== ADMIN_PASSWORD){
    alert(t("invalidPass"));
    return;
  }
  // Keep the password only in this browser session. It is never sent to Supabase.
  adminAccessToken = password;
  sessionStorage.setItem("oud_admin_access_token", adminAccessToken);
  hide("adminLoginModal");
  show("adminModal");
  renderAdminProducts();
  try {
    await loadOrdersFromServer();
  } catch(err) {
    console.error(err);
    alert(lang === "ar" ? "تعذر تحميل الطلبات المشتركة. تأكد أن الموقع يعمل على Node.js/VPS." : "Could not load shared orders. Make sure the site is running on Node.js/VPS.");
  }
}

function addProduct(e){
  e.preventDefault();
  const nameAr=$("newProductNameAr").value.trim(), nameEn=$("newProductNameEn").value.trim() || nameAr;
  const price=Number($("newProductPrice").value), oldPrice=Number($("newProductOldPrice").value)||0, discount=Number($("newProductDiscount").value)||0;
  const category=$("newProductCategory").value || "", gender=$("newProductGender").value, file=$("newProductImage").files[0];
  if(!nameAr || !price) return alert(t("fillProduct"));
  if(!file) return alert(t("imageRequired"));
  const reader=new FileReader();
  reader.onload=()=>{
    products.unshift({id:Date.now(),nameAr,nameEn,price,oldPrice,discount,image:reader.result,category,gender});
    save(); renderProducts(); renderAdminProducts(); e.target.reset();
  };
  reader.readAsDataURL(file);
}

document.addEventListener("DOMContentLoaded",async()=>{
  renderProducts(); renderCart(); renderAdminOrders(); applyLanguage();
  $("languageToggle")?.addEventListener("click",toggleLanguage);
  const topMenuBtn = $("topMenuBtn");
  const topMenuDropdown = $("topMenuDropdown");
  topMenuBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    topMenuDropdown.hidden = !topMenuDropdown.hidden;
  });
  document.addEventListener("click", (e) => {
    if (topMenuDropdown && !topMenuDropdown.hidden && !topMenuDropdown.contains(e.target) && e.target !== topMenuBtn) {
      topMenuDropdown.hidden = true;
    }
  });
  $("adminOpen")?.addEventListener("click", () => {
    topMenuDropdown.hidden = true;
  });
  $("searchInput")?.addEventListener("input",e=>{searchTerm=e.target.value;renderProducts();});
  document.querySelectorAll(".filter-btn").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll(".filter-btn").forEach(b=>b.classList.remove("active"));btn.classList.add("active");activeCategory=btn.dataset.filter;renderProducts();}));
  $("orderForm")?.addEventListener("submit",submitOrder);
  $("adminLoginForm")?.addEventListener("submit",adminLogin);
  $("productForm")?.addEventListener("submit",addProduct);
  $("cartOpen")?.addEventListener("click",()=>{ $("orderFormArea").hidden=false; $("orderSuccess").hidden=true; show("cartModal"); });
  $("closeCart")?.addEventListener("click",()=>hide("cartModal"));
  $("adminOpen")?.addEventListener("click",()=>show("adminLoginModal"));
  $("closeAdminLogin")?.addEventListener("click",()=>hide("adminLoginModal"));
  $("closeAdmin")?.addEventListener("click",()=>hide("adminModal"));
  $("clearOrders")?.addEventListener("click",async()=>{
    if(!confirm(t("clearConfirm"))) return;
    try { await clearOrdersOnServer(); orders=[]; save(); renderAdminOrders(); }
    catch(err) { console.error(err); alert(lang === "ar" ? "تعذر مسح الطلبات." : "Could not clear orders."); }
  });
});

// Keep the shared admin order list in sync across devices while the panel is open.
setInterval(() => {
  if(adminAccessToken && $("adminModal")?.classList.contains("show")) {
    loadOrdersFromServer().catch(err => console.warn("Order refresh failed", err));
  }
}, 12000);
