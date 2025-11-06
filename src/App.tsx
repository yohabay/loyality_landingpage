"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"

import AppleIcon from "./images/applIcon.png"
import applogo from "./images/applogo.png"
import applogowithtext from "./images/applogowithtext.png"
import birr from "./images/birr.png"
import bottomBgimage from "./images/bottomBgimage.png"
import cashbackoffer from "./images/cashbackoffer.svg"
import collectIcon from "./images/collecticon.svg"
import comletinnerIcon from "./images/comletinnerIcon.svg"
import completoffer from "./images/completoffer.svg"
import googleplayIcon from "./images/googleplayIcon.png"
import gradientColor from "./images/gradientColor.png"
import pro1 from "./images/productlist/pro1.png"
import pro2 from "./images/productlist/pro2.png"
import pro3 from "./images/productlist/pro3.png"
import scanIcon from "./images/scanIcon.svg"
import sup1 from "./images/supermarketlist/sup1.svg"
import sup2 from "./images/supermarketlist/sup2.svg"
import sup3 from "./images/supermarketlist/sup3.svg"
import sup4 from "./images/supermarketlist/sup4.svg"
import carticon from "./images/svg/cartIcon.svg"
import flashIcon from "./images/svg/flashIcon.svg"
import instagramIcon from "./images/svg/instagram.svg"
import telegramIcon from "./images/svg/telegram.svg"
import tiktokIcon from "./images/svg/tiktok.svg"

function FAQAccordion() {
  const [openId, setOpenId] = useState<number | null>(null)

  const faqs = [
    "What is shewaber rewards?",
    "How to claim offers?",
    "How to use offers?",
    "What is shewaber rewards?",
    "What is shewaber rewards?",
  ]

  return (
    <div className="flex flex-col gap-2">
      {faqs.map((q, i) => (
        <button
          key={i}
          onClick={() => setOpenId(openId === i ? null : i)}
          className="rounded-full mt-[15px] px-[20px] py-[17px] text-[15px] font-medium text-gray-700 flex items-center justify-between hover:bg-gray-200 transition-colors text-left"
          style={{ background: '#D4D4D440', border: '0.5px solid #D4D4D4' }}
        >
          <span>{q}</span>
          <ChevronDown className={`h-4 w-4 flex-shrink-0 transition-transform ${openId === i ? "rotate-180" : ""}`} />
        </button>
      ))}
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-[#fff] w-full">
      {/* Top header gradient */}
   <header className="w-full relative overflow-hidden">
  {/* Bottom background image */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: `url(${gradientColor})`,
      backgroundSize: "cover",
      backgroundPosition: "center",  
  
    }}
  />

  {/* Gradient overlay */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: `url(${bottomBgimage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />

  {/* Content */}
  <div className="relative z-10 mx-auto max-w-full px-6 md:px-12 lg:px-16 pt-8 md:pt-12 pb-8 text-white">
  <img src={applogowithtext} alt="Gursha Rewards" className="h-12 md:h-14 mb-6" />

  {/* Main Title */}
  <h1
    className="font-extrabold leading-tight mb-4"
    style={{
      fontFamily: "'Rammetto One', cursive",
      fontWeight: 400,
      fontStyle: "normal",
      fontSize: "30px",
      lineHeight: "35px",
      letterSpacing: "0%",
      verticalAlign: "middle",
      whiteSpace: "pre-wrap",
    }}
  >
    Supermarket{"\n"}Saving App!
  </h1>

  {/* Subtitle */}
  <p
    className="mb-8"
    style={{
      fontWeight: 400,
      fontStyle: "normal",
      fontSize: "15px",
    }}
  >
    Cashback from every <span style={{ fontWeight: 700 }}>Receipts Uploaded!</span>
  </p>

  {/* Store Buttons — Image Only */}
  <div className="flex flex-row gap-3 mb-6 w-full flex-nowrap">

    <div className="flex-1 min-w-0">
      <button className="w-full bg-white border border-gray-300 rounded-lg p-[10px] flex items-center justify-center hover:bg-gray-50 transition-colors">
         <img
        src={googleplayIcon}
        alt="Apple Store Button"
        className="h-[25px] w-[25px]"
      />
<span className="text-[12px] font-[650] text-black pl-2">Coming Soon ...</span>
      </button>
    </div>

      <div className="flex-1 min-w-0">
      <button className="w-full bg-white border border-gray-300 rounded-lg p-[10px] flex items-center justify-center hover:bg-gray-50 transition-colors">
         <img
        src={AppleIcon}
        alt="Apple Store Button"
        className="h-[25px] w-[25px]"
      />
<span className="text-[12px] font-[650] text-black pl-2">Coming Soon ...</span>
      </button>
    </div>

  </div>
</div>


</header>

{/* "How it works" card */}
<div
className="relative z-20 w-full rounded-[35px] shadow-md px-[15px] py-[20px] -mt-[37px]"
style={{ background: '#FFFFFF', boxShadow:'none'}} // Outer bg white
>
<div
 className="px-[20px] py-[30px]"
 style={{
   background: '#FFF6EB',
   borderRadius: '25px', // Inner border radius
   border: '0.5px solid #FF9800', // Inner border
 }}
>
 <span className="block mb-2 text-black font-bold text-sm">How it Works?</span>
<h3
  className="leading-tight font-extrabold text-[50px]"
  style={{
  
    background: 'linear-gradient(90deg, #FF6600 0%, #FF0000 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textAlign: 'left',
    lineHeight: '50px',
    verticalAlign: 'middle',
  }}
>
  It's sooo<br /> easy
</h3>

</div>
</div>



      {/* How it Works Steps */}
    <section className="mx-auto max-w-full px-6 md:px-12 lg:px-16 mt-6 md:mt-8">
  <div className="flex flex-col gap-6 mb-8">
    {[
      {
        icon: <img src={scanIcon} className="h-[30px] w-[30px]" alt="Scan" />,
        title: "Scan your receipt",
        sub: "From Our Partner Supermarkets",
      },
      {
        icon: <img src={collectIcon} className="h-[30px] w-[30px]" alt="Collect" />,
        title: "Collect Cashback",
        sub: "Uploaded Receipts earns you Cashback & Saves you Money",
      },
      {
        icon: <div className="relative"><img src={completoffer} className="h-[30px] w-[30px]" alt="Complete" /><img src={comletinnerIcon} className="absolute inset-0 h-3 w-3 m-auto" alt="Inner" /></div>,
        title: "Complete Offers",
        sub: "Shop from Bonus Offers & Earn extra Cashback rewards",
      },
      {
        icon: <img src={cashbackoffer} className="h-[30px] w-[30px]" alt="Cashback" />,
        title: "Cashback to Discounts",
        sub: "Convert Cashback into Supermarket Discount Coupons",
      },
    ].map((step, i) => (
      <div
        key={i}
        className="flex flex-col gap-2 bg-white rounded-[25px] p-[20px] border"
        style={{ border: '0.5px solid #D4D4D4' }} // Inner border
      >
        <div className="rounded-lg flex h-[30px] w-[30px] items-center justify-center flex-shrink-0">
          {step.icon}
        </div>
        <div className="">
          <span className="font-[700] text-base text-[17px]">
            {i + 1}. {step.title}
          </span>
          <div className="text-sm text-gray-500 mt-1">{step.sub}</div>
        </div>
      </div>
    ))}
  </div>
</section>



      {/* Partners */}
      <section className="mx-auto max-w-full px-6 md:px-12 lg:px-16 mt-8 md:mt-12">
         <p className="">
          Our partner
        </p>
        <h2 className="text-[35px] font-black text-gray-900 mb-6 flex items-center gap-2">
          <a href="#" className="hover:opacity-80 transition-opacity">
      <img src={carticon || "/placeholder.svg"} className="h-6 w-6" alt="carticon" />
    </a>
         Supermarkets
        </h2>
        <div className="overflow-hidden -mx-6 md:-mx-12 lg:-mx-16">
          <div className="flex flex-col gap-4">
            <div className="flex gap-3 scrolling">
              {[sup1, sup2, sup3, sup4, sup1, sup2, sup3, sup4].map((sup, i) => (
                <div key={i} className="flex items-center justify-center flex-shrink-0">
                  <img
                    src={sup || "/placeholder.svg"}
                    className="rounded-full border border-gray-100 bg-white p-2 h-[75px] w-[75px] object-contain"
                    alt="Supermarket"
                  />
                </div>
              ))}
            </div>
            <div className="flex gap-3 scrolling">
              {[sup1, sup2, sup3, sup4, sup1, sup2, sup3, sup4].map((sup, i) => (
                <div key={i} className="flex items-center justify-center flex-shrink-0">
                  <img
                    src={sup || "/placeholder.svg"}
                    className="rounded-full border border-gray-100 bg-white p-2 h-[75px] w-[75px] object-contain"
                    alt="Supermarket"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Offers */}
 <section className="mx-auto max-w-full px-6 md:px-12 lg:px-16 mt-8 md:mt-12 mb-12">
  <h2 className="text-xl md:text-2xl font-black mb-6 text-gray-900 flex items-center gap-2">
    <img src={flashIcon} className="h-6 w-6" alt="Flash" />
    Popular Offers
  </h2>
  <div className="flex flex-col gap-6">
    {[
      {
        img: pro1,
        badge: "Buy X3 OMO",
        title: "Buy X3 OMO Until next Saturday & Earn 25 Birr",
        progress: 3,
        total: 3,
        store: "Shoa Supermarket",
        icon: sup1,
        reward: 25,
        left: "13 days left",
      },
      {
        img: pro2,
        badge: "Buy X10 Hair Shampoo",
        title: "Buy X10 Hair Shampoo – 500ml from Tilla Club",
        progress: 10,
        total: 10,
        store: "Tilla Club",
        icon: sup2,
        reward: 25,
        left: "13 days left",
      },
      {
        img: pro3,
        badge: "Spend 2,500 ETB",
        title: "Spend 2,500 ETB at Shoa Supermarket & you will Get 95 Birr",
        progress: 1,
        total: 1,
        store: "Shoa Supermarket",
        icon: sup1,
        reward: 95,
        left: "13 days left",
      },
    ].map((o, i) => (
      <div key={i} className="relative rounded-2xl bg-white shadow-md p-4 md:p-5 border border-gray-100">
        {/* Days left badge */}
        <div className="absolute top-0 right-0 flex items-center justify-center" style={{ width: '60px', height: '20px', borderTopRightRadius: '20px', borderBottomLeftRadius: '10px', background: 'linear-gradient(180deg, #FF6600 0%, #FF0000 100%)', opacity: 1, transform: 'rotate(0deg)' }}>
          <span className="text-white font-bold" style={{ fontSize: '7px' }}>{o.left}</span>
        </div>

        <div className="flex flex-col gap-6">
          {/* Top row: Product Image, Badge, Title, Store */}
          <div className="flex gap-4">
            {/* Product Image */}
            <div className="flex-shrink-0">
              <img
                src={o.img || "/placeholder.svg"}
                className="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover"
                alt="product"
              />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              {/* Badge */}
              <div className="inline-block bg-[#FF660059] text-[#613700] px-3 py-1 rounded-lg text-xs font-bold mb-2">
                {o.badge}
              </div>
              {/* Title */}
              <div className="font-bold text-[12px] text-gray-900">{o.title}</div>
              {/* Store with icon */}
              <div className="flex items-center gap-1 text-gray-600">
                    <div className="text-[10px] text-gray-500 mt-1">0% completed</div>
                <img src={o.icon || "/placeholder.svg"} className="w-4 h-4 rounded-full" alt="Store icon" />
                <span className="text-[10px]">{o.store}</span>
              </div>
            </div>
          </div>

          {/* Bottom row: Progress bar and Reward spanning full width */}
          <div className="flex items-center justify-between pl-[15px]">
            <div className="flex-1 mr-4">
              <div className="flex gap-1">
                {[...Array(o.total)].map((_, idx) => (
                  <div key={idx} className={`h-2 flex-1 rounded-full ${idx < o.progress ? 'bg-orange-500' : ''}`} style={{ border: '1px solid #D4D4D4', background: '#D9D9D959' }}></div>
                ))}
              </div>
      
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-[10px]">Get</span>
              <span className="font-[900] text-[15px] text-[#613700]"> {o.reward}</span>
              <div className="">
                <img src={birr || "/placeholder.svg"} className="h-4" alt="Birr" />
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* FAQ */}
      <section className="mx-auto max-w-full px-6 md:px-12 lg:px-16 mt-8 md:mt-12 mb-12">
        <h2 className="text-xl md:text-2xl font-black mb-6 text-gray-900">Asked Questions</h2>
        <FAQAccordion />
      </section>

      {/* Footer CTA */}
      <div
  className="w-full relative rounded-t-3xl pt-16 pb-8 px-[50px] text-white text-center mt-[80px]"
  style={{
    backgroundImage: `url(${gradientColor})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Bottom background image */}
  <div
    className="absolute inset-0 z-0 rounded-t-3xl"
    style={{
      backgroundImage: `url(${bottomBgimage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
  
    }}
  />
  {/* Logo on top overlapping */}
  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
    <img src={applogo || "/placeholder.svg"} className="h-16 w-16 md:h-20 md:w-20" alt="App Logo" />
  </div>

  {/* Heading */}
  <h2 className="text-lg md:text-xl font-semibold mb-6">
    Download the app to save on every purchase!
  </h2>

  {/* Buttons row */}
  <div className="flex flex-row gap-3 mb-6 w-full flex-nowrap">

    <div className="flex-1 min-w-0">
      <button className="w-full bg-white border border-gray-300 rounded-lg p-[10px] flex items-center justify-center hover:bg-gray-50 transition-colors">
         <img
        src={googleplayIcon}
        alt="Apple Store Button"
        className="h-[20px] w-[20px]"
      />
<span className="text-[11px] font-[650] text-black pl-2">Coming Soon ...</span>
      </button>
    </div>

      <div className="flex-1 min-w-0">
      <button className="w-full bg-white border border-gray-300 rounded-lg p-[10px] flex items-center justify-center hover:bg-gray-50 transition-colors">
         <img
        src={AppleIcon}
        alt="Apple Store Button"
        className="h-[20px] w-[20px]"
      />
<span className="text-[11px] font-[650] text-black pl-2">Coming Soon ...</span>
      </button>
    </div>

  </div>


  {/* Social icons row */}
  <div className="w-full flex justify-between pt-[15px]">
    <a href="#" className="hover:opacity-80 transition-opacity">
      <img src={instagramIcon || "/placeholder.svg"} className="h-[40px] w-[40px]" alt="Instagram" />
    </a>
    <a href="#" className="hover:opacity-80 transition-opacity">
      <img src={telegramIcon || "/placeholder.svg"} className="h-[40px] w-[40px]" alt="Telegram" />
    </a>
    <a href="#" className="hover:opacity-80 transition-opacity">
      <img src={tiktokIcon || "/placeholder.svg"} className="h-[40px] w-[40px]" alt="TikTok" />
    </a>
  </div>
</div>

    </div>
  )
}





