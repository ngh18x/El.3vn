
const translations = {
  de:{nav_products:"Produkte",nav_about:"Über uns",nav_contact:"Kontakt",
      hero_title:"Streetwear & Essentials – minimal, hochwertig, fair.",hero_subtitle:"Shoppe jetzt unsere neuesten Styles.",hero_cta:"Jetzt shoppen",
      products_title:"Produkte",about_title:"Über El3VN",about_text:"Wir sind eine unabhängige Marke. Kleine Chargen, faire Produktion, plastikfreie Verpackung.",
      contact_title:"Kontakt",contact_name:"Dein Name",contact_email:"E-Mail",contact_message:"Nachricht",contact_send:"Senden",
      cart_title:"Warenkorb",cart_total:"Gesamt",cart_checkout:"Zur Kasse"},
  en:{nav_products:"Products",nav_about:"About us",nav_contact:"Contact",
      hero_title:"Streetwear & Essentials – minimal, high-quality, fair.",hero_subtitle:"Shop our latest styles now.",hero_cta:"Shop now",
      products_title:"Products",about_title:"About El3VN",about_text:"We are an independent brand. Small batches, fair production, plastic-free packaging.",
      contact_title:"Contact",contact_name:"Your Name",contact_email:"Email",contact_message:"Message",contact_send:"Send",
      cart_title:"Cart",cart_total:"Total",cart_checkout:"Checkout"},
  ar:{nav_products:"المنتجات",nav_about:"معلومات عنا",nav_contact:"اتصال",
      hero_title:"ملابس الشارع والأساسيات - بسيطة وعالية الجودة وعادلة.",hero_subtitle:"تسوق أحدث التصاميم الآن.",hero_cta:"تسوق الآن",
      products_title:"المنتجات",about_title:"حول El3VN",about_text:"نحن علامة تجارية مستقلة. دفعات صغيرة، إنتاج عادل، تغليف خالٍ من البلاستيك.",
      contact_title:"اتصال",contact_name:"اسمك",contact_email:"البريد الإلكتروني",contact_message:"رسالة",contact_send:"إرسال",
      cart_title:"عربة التسوق",cart_total:"المجموع",cart_checkout:"الدفع"}
};

document.querySelectorAll('.lang-switch button').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const lang=btn.dataset.lang;
    document.documentElement.lang=lang;
    document.documentElement.dir=lang==="ar"?"rtl":"ltr";
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      el.textContent=translations[lang][el.dataset.i18n]||el.textContent;
    });
  });
});

const products = [
  {name:"Core Hoodie 'Midnight'",price:69.90,img:"https://images.unsplash.com/photo-1520975922071-a24e88b148a5?w=600"},
  {name:"Classic Tee 'White'",price:29.90,img:"https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600"},
  {name:"Snapback Cap 'Black'",price:24.90,img:"https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600"}
];

const grid=document.getElementById('product-grid');
products.forEach(p=>{
  const div=document.createElement('div');
  div.className='product';
  div.innerHTML=`<img src="${p.img}" alt="${p.name}"><h3>${p.name}</h3><p>€${p.price.toFixed(2)}</p><button class='btn btn-primary'>Add to Cart</button>`;
  div.querySelector('button').addEventListener('click',()=>addToCart(p));
  grid.appendChild(div);
});

let cart=[];
const cartCount=document.getElementById('cart-count');
const cartModal=document.getElementById('cart-modal');
const closeBtn=document.querySelector('.close');
const cartItems=document.getElementById('cart-items');
const cartTotal=document.getElementById('cart-total');

function addToCart(product){
  cart.push(product);
  cartCount.textContent=cart.length;
}

document.getElementById('cart-btn').onclick=()=>{renderCart();cartModal.style.display='block';};
closeBtn.onclick=()=>cartModal.style.display='none';
window.onclick=e=>{if(e.target==cartModal)cartModal.style.display='none';};

function renderCart(){
  cartItems.innerHTML='';
  let total=0;
  cart.forEach((p,i)=>{
    const item=document.createElement('div');
    item.textContent=`${p.name} - €${p.price.toFixed(2)}`;
    cartItems.appendChild(item);
    total+=p.price;
  });
  cartTotal.textContent=`€${total.toFixed(2)}`;
}

document.getElementById('year').textContent=new Date().getFullYear();
