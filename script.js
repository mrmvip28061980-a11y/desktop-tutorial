const ADMIN_PASSWORD = "mazen";
const STORE_WHATSAPP = "201101729109";
const STORE_PHONE = "01275026300";

const defaultProducts = [
  { id: 1, nameAr: "POLO", nameEn: "POLO", price: 250, oldPrice: 350, discount: 10, image: "assets/polo.jpg", category: "original", gender: "men" },
  { id: 2, nameAr: "خمره", nameEn: "Khamrah", price: 400, oldPrice: 600, discount: 5, image: "assets/khamrah.jpg", category: "original", gender: "unisex" }
];

const translations = {
  ar: {
    dir: "rtl", lang: "ar", siteTag: "عطور شرقية فاخرة", call: "اتصل بنا", admin: "تحكم الإدارة", cart: "السلة",
    heroTitle: "عطور تليق بذوقك", heroText: "اختار عطرك المفضل واستمتع بتجربة تسوق بسيطة وسريعة.", browse: "تصفح المنتجات",
    ourProducts: "منتجاتنا", latest: "أحدث المنتجات", offers: "عروض مميزة", search: "ابحث عن منتج...", all: "الكل", original: "أوريجينال", blends: "تركيبات", men: "رجالي", women: "حريمي",
    add: "أضف للسلة", cartTitle: "سلة المشتريات", emptyCart: "السلة فارغة", total: "الإجمالي", yourData: "بيانات طلبك", name: "الاسم", phone: "رقم الموبايل", email: "الإيميل", area: "المنطقة", address: "العنوان بالتفصيل", notes: "ملاحظات إضافية", namePh: "اكتب اسمك", phonePh: "01xxxxxxxxx", emailPh: "example@gmail.com", areaPh: "مثال: مدينة نصر", addressPh: "الشارع، العمارة، الدور، الشقة", notesPh: "أي ملاحظات على الطلب", checkout: "تأكيد الطلب والتواصل عبر واتساب", registered: "تم تسجيل الطلب", codeText: "كود الطلب الخاص بك:", waReady: "تم تجهيز رسالة واتساب بالطلب.", openWa: "فتح واتساب والتواصل مع المتجر", login: "دخول الإدارة", password: "كلمة المرور", enter: "دخول", panel: "لوحة التحكم", manage: "إدارة المنتجات والطلبات", currentProducts: "المنتجات الحالية", addProduct: "إضافة منتج جديد", productNameAr: "اسم المنتج بالعربي", productNameEn: "اسم المنتج بالإنجليزي", price: "السعر", oldPrice: "السعر القديم", discount: "الخصم %", category: "القسم", gender: "الفئة", image: "صورة المنتج", chooseImage: "اختار صورة من جهازك", addProductBtn: "إضافة المنتج", originalOpt: "أوريجينال", noCategoryOpt: "بدون قسم", blendsOpt: "تركيبات", menOpt: "رجالي", womenOpt: "حريمي", unisexOpt: "رجالي وحريمي", delete: "حذف", orders: "الطلبات", orderedProducts: "المنتجات المطلوبة", deviceOrders: "طلبات هذا الجهاز", clear: "مسح الطلبات", noOrders: "لا توجد طلبات محفوظة على هذا الجهاز.", accept: "قبول وإرسال واتساب", reject: "رفض وإرسال واتساب", invalidPass: "كلمة السر غير صحيحة", fillProduct: "اكتب اسم المنتج بالعربي والسعر واختر صورة", imageRequired: "اختار صورة للمنتج", cartEmptyAlert: "السلة فارغة", required: "من فضلك املأ الاسم ورقم الهاتف والمنطقة والعنوان", deleteConfirm: "هل تريد حذف المنتج؟", clearConfirm: "مسح الطلبات المحفوظة على هذا الجهاز؟", remove: "حذف", old: "القديم", notAdded: "غير مضاف", noNotes: "لا يوجد", newOrder: "طلب جديد - El OUD ELMALAKI", quantityShort: "الكمية:", statusNew: "جديد", accepted: "مقبول", rejected: "مرفوض", language: "English", footer: "عطور وعود فاخرة"
  },
  en: {
    dir: "ltr", lang: "en", siteTag: "Luxury Oud & Perfumes", call: "Call us", admin: "Admin", cart: "Cart",
    heroTitle: "Perfumes that match your taste", heroText: "Choose your favorite fragrance and enjoy a simple, fast shopping experience.", browse: "Browse products",
    ourProducts: "Our Products", latest: "Latest Products", offers: "Special Offers", search: "Search for a product...", all: "All", original: "Original", blends: "Blends", men: "Men", women: "Women",
    add: "Add to cart", cartTitle: "Shopping Cart", emptyCart: "Your cart is empty", total: "Total", yourData: "Your Order Details", name: "Name", phone: "Mobile", email: "Email", area: "Area", address: "Full address", notes: "Additional notes", namePh: "Your name", phonePh: "01xxxxxxxxx", emailPh: "example@gmail.com", areaPh: "e.g. Nasr City", addressPh: "Street, building, floor, apartment", notesPh: "Any notes about the order", checkout: "Confirm order & contact us on WhatsApp", registered: "Order registered", codeText: "Your order code:", waReady: "Your WhatsApp order message is ready.", openWa: "Open WhatsApp", login: "Admin Login", password: "Password", enter: "Login", panel: "Control Panel", manage: "Products & Orders", currentProducts: "Current Products", addProduct: "Add New Product", productNameAr: "Product name in Arabic", productNameEn: "Product name in English", price: "Price", oldPrice: "Old price", discount: "Discount %", category: "Category", gender: "Gender", image: "Product image", chooseImage: "Choose an image from your device", addProductBtn: "Add Product", originalOpt: "Original", noCategoryOpt: "No category", blendsOpt: "Blends", menOpt: "Men", womenOpt: "Women", unisexOpt: "Men & Women", delete: "Delete", orders: "Orders", orderedProducts: "Ordered Products", deviceOrders: "Orders on this device", clear: "Clear orders", noOrders: "No orders saved on this device.", accept: "Accept & WhatsApp", reject: "Reject & WhatsApp", invalidPass: "Incorrect password", fillProduct: "Enter the Arabic name and price, then choose an image", imageRequired: "Choose a product image", cartEmptyAlert: "Your cart is empty", required: "Please fill in name, mobile, area and address", deleteConfirm: "Delete this product?", clearConfirm: "Clear orders saved on this device?", remove: "Remove", old: "Old", notAdded: "Not added", noNotes: "None", newOrder: "New Order - El OUD ELMALAKI", quantityShort: "Qty:", statusNew: "New", accepted: "Accepted", rejected: "Rejected", language: "العربية", footer: "Luxury Oud & Perfumes"
  }
};

const SUPABASE_URL = "https://tsaniabyiorcjxxzwxij.supabase.co";
const SUPABASE_KEY = "sb_publishable_hsj3SiL2b7j3flolL3563A_kn9KA36U";
const supabaseClient = window.supabase?.createClient(SUPABASE_URL, SUPABASE_KEY);

let lang = localStorage.getItem("royal_oud_lang") || "ar";
let products = JSON.parse(localStorage.getItem("royal_oud_products") || "null");
if (!Array.isArray(products) || products.length === 0) products = defaultProducts;
products = products.map(p => ({...p, nameAr: p.nameAr ?? p.name ?? "", nameEn: p.nameEn ?? p.nameAr ?? p.name ?? "", category: p.category ?? "", gender: p.gender ?? "unisex"}));
let cart = JSON.parse(localStorage.getItem("royal_oud_cart") || "[]");
let orders = JSON.parse(localStorage.getItem("royal_oud_orders") || "[]");
let activeCategory = "all";
let searchTerm = "";

const $ = id => document.getElementById(id);
const t = key => translations[lang][key] ?? key;
function save(){ localStorage.setItem("royal_oud_products", JSON.stringify(products)); localStorage.setItem("royal_oud_cart", JSON.stringify(cart)); localStorage.setItem("royal_oud_orders", JSON.stringify(orders)); }

function normalizeRemoteProduct(p){
  return {
    id: Number(p.id),
    nameAr: p.name_ar || "",
    nameEn: p.name_en || p.name_ar || "",
    price: Number(p.price) || 0,
    oldPrice: Number(p.old_price) || 0,
    discount: Number(p.discount) || 0,
    category: p.category || "",
    gender: p.gender || "unisex",
    image: p.image || ""
  };
}

async function loadProductsFromSupabase(){
  if(!supabaseClient) return;
  try{
    const { data, error } = await supabaseClient.from("products").select("*").order("created_at", { ascending:false });
    if(error) throw error;
    const remoteProducts = (data || []).map(normalizeRemoteProduct);
    const remoteIds = new Set(remoteProducts.map(p => p.id));
    products = [...defaultProducts.filter(p => !remoteIds.has(p.id)), ...remoteProducts];
    save();
    renderProducts();
    renderAdminProducts();
  }catch(err){
    console.error("Supabase products load error:", err);
  }
}
function normalizePhone(phone){ let p=String(phone||"").replace(/[^\d+]/g,""); if(p.startsWith("+"))p=p.slice(1); if(p.startsWith("0"))p="20"+p.slice(1); return p; }
function makeOrderCode(){ return "EOM-" + Date.now().toString().slice(-8); }
function money(n){ return Number(n).toLocaleString(lang === "ar" ? "ar-EG" : "en-US") + (lang === "ar" ? " جنيه" : " EGP"); }
function productName(p){ return lang === "ar" ? (p.nameAr || p.nameEn) : (p.nameEn || p.nameAr); }
function genderLabel(g){ return g === "men" ? t("men") : g === "women" ? t("women") : t("unisexOpt"); }
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
    const matchesCategory = activeCategory === "all" || p.category === activeCategory || p.gender === activeCategory;
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
function submitOrder(e){
  e.preventDefault();
  if(!cart.length)return alert(t("cartEmptyAlert"));
  const o={code:makeOrderCode(),createdAt:new Date().toISOString(),status:"new",items:cart.map(x=>({id:x.id,nameAr:x.nameAr,nameEn:x.nameEn,displayName:productName(x),price:x.price,qty:x.qty})),total:cart.reduce((s,x)=>s+x.price*x.qty,0),customer:{name:$("customerName").value.trim(),phone:$("customerPhone").value.trim(),email:$("customerEmail").value.trim(),area:$("customerArea").value.trim(),address:$("customerAddress").value.trim(),notes:$("customerNotes").value.trim()}};
  if(!o.customer.name||!o.customer.phone||!o.customer.area||!o.customer.address)return alert(t("required"));
  orders.unshift(o); save();
  const url=`https://wa.me/${STORE_WHATSAPP}?text=${encodeURIComponent(buildOrderMessage(o))}`;
  $("customerOrderCode").textContent=o.code; $("whatsappLink").href=url; $("orderFormArea").hidden=true; $("orderSuccess").hidden=false;
  cart=[]; save(); renderCart(); renderAdminOrders(); window.open(url,"_blank");
}

function renderAdminProducts(){
  const box=$("adminProducts"); if(!box)return;
  box.innerHTML=`<h3>${t("currentProducts")}</h3>`+products.map(p=>`<div class="admin-product"><img src="${p.image}"><div class="admin-info"><strong>${productName(p)}</strong><div>${money(p.price)}${p.oldPrice?` — ${t("old")} ${money(p.oldPrice)}`:""}</div><small>${categoryLabel(p.category) ? categoryLabel(p.category) + " • " : ""}${genderLabel(p.gender)}</small></div><button class="delete-btn" onclick="deleteProduct(${p.id})">${t("delete")}</button></div>`).join("");
}
async function deleteProduct(id){
  if(!confirm(t("deleteConfirm")))return;
  const isRemote = Number(id) > 100000000000;
  if(isRemote && supabaseClient){
    const { error } = await supabaseClient.from("products").delete().eq("id", id);
    if(error){ console.error(error); return alert(lang === "ar" ? "حصلت مشكلة أثناء حذف المنتج." : "There was a problem deleting the product."); }
  }
  products=products.filter(p=>p.id!==id);
  save(); renderProducts(); renderAdminProducts();
}

function renderAdminOrders(){
  const box=$("adminOrders"); if(!box)return;
  if(!orders.length){box.innerHTML=`<div class="empty-orders">${t("noOrders")}</div>`;return;}
  box.innerHTML=orders.map(o=>`<div class="order-card"><div class="order-top"><span class="order-code">${o.code}</span><span class="order-status">${o.status === "accepted" ? t("accepted") : o.status === "rejected" ? t("rejected") : t("statusNew")}</span></div><div class="order-info"><div>${t("name")}: ${o.customer.name}</div><div>${t("phone")}: ${o.customer.phone}</div><div>${t("email")}: ${o.customer.email||t("notAdded")}</div><div>${t("area")}: ${o.customer.area}</div><div>${t("address")}: ${o.customer.address}</div><div>${t("total")}: <strong>${money(o.total)}</strong></div></div><div class="order-products"><strong>${t("orderedProducts")}:</strong><div class="ordered-products-list">${o.items.map((x,i)=>`<div class="ordered-product-row"><span>${i+1}. ${x.displayName || x.nameAr || x.nameEn}</span><span>${t("quantityShort")} ${x.qty}</span></div>`).join("")}</div></div><div class="order-actions"><button class="accept-btn" onclick="contactCustomer('${o.code}','accepted')">${t("accept")}</button><button class="reject-btn" onclick="contactCustomer('${o.code}','rejected')">${t("reject")}</button></div></div>`).join("");
}
function contactCustomer(code,status){
  const o=orders.find(x=>x.code===code); if(!o)return; o.status=status; save(); renderAdminOrders();
  const text=status==="accepted" ? `Hello ${o.customer.name}, your order ${o.code} from El OUD ELMALAKI has been accepted.` : `Hello ${o.customer.name}, we are sorry that we could not accept your order ${o.code} from El OUD ELMALAKI.`;
  const phone=normalizePhone(o.customer.phone); if(phone)window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`,"_blank");
}

function adminLogin(e){e.preventDefault(); if($("adminPassword").value!==ADMIN_PASSWORD)return alert(t("invalidPass")); hide("adminLoginModal"); show("adminModal"); renderAdminProducts(); renderAdminOrders();}

async function addProduct(e){
  e.preventDefault();
  const nameAr=$("newProductNameAr").value.trim(), nameEn=$("newProductNameEn").value.trim() || nameAr;
  const price=Number($("newProductPrice").value), oldPrice=Number($("newProductOldPrice").value)||0, discount=Number($("newProductDiscount").value)||0;
  const category=$("newProductCategory").value || "", gender=$("newProductGender").value, file=$("newProductImage").files[0];
  if(!nameAr || !price) return alert(t("fillProduct"));
  if(!file) return alert(t("imageRequired"));
  const reader=new FileReader();
  reader.onload=async()=>{
    const id=Date.now();
    const product={id,nameAr,nameEn,price,oldPrice,discount,image:reader.result,category,gender};
    if(!supabaseClient) return alert(lang === "ar" ? "تعذر الاتصال بقاعدة البيانات." : "Could not connect to the database.");
    const { error } = await supabaseClient.from("products").insert({
      id, name_ar:nameAr, name_en:nameEn, price, old_price:oldPrice, discount, category, gender, image:reader.result
    });
    if(error){
      console.error(error);
      return alert(lang === "ar" ? "المنتج لم يُحفظ في قاعدة البيانات. تأكد من إعداد Supabase." : "The product was not saved to the database. Check Supabase setup.");
    }
    products.unshift(product);
    save(); renderProducts(); renderAdminProducts(); e.target.reset();
  };
  reader.readAsDataURL(file);
}

document.addEventListener("DOMContentLoaded",async()=>{
  renderProducts(); renderCart(); renderAdminOrders(); applyLanguage();
  await loadProductsFromSupabase();
  $("languageToggle")?.addEventListener("click",toggleLanguage);
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
  $("clearOrders")?.addEventListener("click",()=>{if(confirm(t("clearConfirm"))){orders=[];save();renderAdminOrders();}});
});
