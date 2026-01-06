"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

import applogo from "./images/applogo.png"
import applogowithtext from "./images/applogowithtext.png"
import AppleIcon from "./images/appstorecommingsoon.png"
import birr from "./images/birr.png"
import bottomBgimage from "./images/bottomBgimage.png"
import cashbackoffer from "./images/cashbackoffer.svg"
import collectIcon from "./images/collecticon.svg"
import comletinnerIcon from "./images/comletinnerIcon.svg"
import completoffer from "./images/completoffer.svg"
import googleplayIcon from "./images/googleplay.png"
import gradientColor from "./images/gradientColor.png"
// import pro1 from "./images/productlist/pro1.png"
// import pro2 from "./images/productlist/pro2.png"
// import pro3 from "./images/productlist/pro3.png"
import scanIcon from "./images/scanIcon.svg"
// import sup1 from "./images/supermarketlist/sup1.svg"
// import sup2 from "./images/supermarketlist/sup2.svg"
// import flashIcon from "./images/svg/flashIcon.svg"
import instagramIcon from "./images/svg/instagram.svg"
import linkedinIcon from "./images/svg/linkedin.svg"
// import linkedinIcon from "./images/svg/icons8-linkedin-24.png"
import tiktokIcon from "./images/svg/tiktok.svg"

import DeleteAccount from "./pages/DeleteAccount"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import TermsAndConditions from "./pages/TermsAndConditions"


function Home() {
  const { t, i18n } = useTranslation()
  const [openId, setOpenId] = useState<number | null>(null)

  const faqs = [
    {
      question: t("What is Gursha Rewards?"),
      answer: t("Gursha Rewards is a supermarket loyalty app that lets shoppers earn Gursha points, Maximize savings with exclusive offers, and save on every spend at our partner supermarkets.")
    },
    {
      question: t("How do I earn Gursha Points?"),
      answer: t("You earn gursha points by shopping at partner supermarkets and uploading your receipt in the app, (1 Gursha points = 1 ETB).")
    },
    {
      question: t("How does Gursha Rewards works?"),
      answer: t("Simply upload your purchase receipt to the app from one of our partner supermarkets and see your saving grow through Gursha points.")
    },
    {
      question: t("What is an Offer?"),
      answer: t("Offers are bonus campaigns that help you earn more Gursha points through game-like progress, either by buying specific items or spending a set amount within the campaign period.")
    },
    {
      question: t("What to do with my Gursha points?"),
      answer: t("Gursha points collected from a supermarket can be converted into a discount coupon, which will be deducted for your next purchase by giving the cashier your coupon code and pay only the remaining amounts.")
    },
  ]

  function FAQAccordion() {
    return (
      <div className="flex flex-col gap-2">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className={`w-full mt-[15px] px-[20px] py-[17px] text-[15px] font-[500] text-[#363636] hover:bg-gray-200 transition-all duration-100 ${openId === i ? 'rounded-[35px]' : 'rounded-[30px]'}`}
            style={{ background: '#D4D4D440', border: '0.5px solid #D4D4D4' }}
          >
            <button
              onClick={() => setOpenId(openId === i ? null : i)}
              className="w-full flex items-center justify-between text-left bg-transparent border-none p-0"
            >
              <span>{faq.question}</span>
              <ChevronDown className={`h-4 w-4 flex-shrink-0 transition-transform duration-300 ${openId === i ? "rotate-180" : ""}`} />
            </button>
            {openId === i && (
              <div className="py-[15px] text-[14px] text-{#363636}">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    )
  }

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
  <div className="flex justify-between items-center mb-6">
    <img src={applogowithtext} alt="Gursha Rewards" className="h-10" />
    <button
      onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'am' : 'en')}
      className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
    >
      {i18n.language === 'en' ? 'አማርኛ' : 'English'}
    </button>
  </div>

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
    {t("Supermarket Money Saving App")}
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

  <span style={{ fontWeight: 700 }}>
    <img
      src={birr}
      alt="Birr"
      style={{
        width: "15px",
        height: "15px",
        display: "inline",
        verticalAlign: "middle",
        marginRight: "4px",
      }}
    />
    {t("Up to 10% Gursha points for Scanned Receipts!")}
  </span>
</p>


  {/* Store Buttons — Image Only */}
  <div className="flex flex-row gap-3 mb-6 w-full flex-nowrap">

   <div className="flex-1 min-w-0">
  <a
    href="https://play.google.com/store/apps/details?id=com.gursha_rewards"
    target="_blank"
    rel="noopener noreferrer"
    className=""
  >
    <img
      src={googleplayIcon}
      alt="Google Play Button"
      className="h-[46px] w-[155px]"
    /> 
  </a>
</div>

      <div className="flex-1 min-w-0">
      <button className="">
         <img
        src={AppleIcon}
        alt="Apple Store Button"
      className="h-[46px] w-[155px]"
      />
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
 <span className="block mb-2 text-black font-bold text-sm">{t("How it Works?")}</span>
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
  {t("It's sooo easy")}
</h3>

</div>
</div>



      {/* How it Works Steps */}
    <section className="mx-auto max-w-full px-6 md:px-12 lg:px-16 mt-6 md:mt-8">
  <div className="flex flex-col gap-6 mb-8">
    {[
      {
        icon: <img src={scanIcon} className="h-[40px] w-[40px]" alt="Scan" />,
        title: t("1. Scan your receipt"),
        sub: t("Simply upload your purchase receipts into the App"),
      },
      {
        icon: <img src={collectIcon} className="h-[40px] w-[40px]" alt="Collect" />,
        title: t("2. Earn Gursha points"),
        sub: t("Collect Gursha points and save on every supermarket purchases (1 Gursha point = 1 ETB)"),
      },
      {
        icon: <div className="relative"><img src={completoffer} className="h-[40px] w-[40px]" alt="Complete" /><img src={comletinnerIcon} className="absolute inset-0 h-3 w-3 m-auto" alt="Inner" /></div>,
        title: t("3. Shop from Offers"),
        sub: t("Shop from bonus offers to earn additional Gursha points"),
      },
      {
        icon: <img src={cashbackoffer} className="h-[40px] w-[40px]" alt="Cashback" />,
        title: t("4. Discounts from points"),
        sub: t("Convert your Gursha points into supermarket Discount Coupons"),
      },
    ].map((step, i) => (
      <div
        key={i}
        className="flex flex-col gap-2 bg-white rounded-[25px] p-[20px] border"
        style={{ border: '0.5px solid #D4D4D4' }} // Inner border
      >
        <div className="rounded-lg flex h-[35px] w-[35px] items-center justify-center flex-shrink-0">
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
      {/* <section className="mx-auto max-w-full px-6 md:px-12 lg:px-16 mt-8 md:mt-12">
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
      </section> */}
     
     {/* Offers List */}
      
  {/* <section className="mx-auto max-w-full px-6 md:px-12 lg:px-16 mt-8 md:mt-12 mb-12">
  <h2 className="text-[20px] font-black mb-6 text-black flex items-center gap-2">
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
      <div
        key={i}
        className="relative rounded-2xl bg-white shadow-md p-4 md:p-5 border border-gray-100"
      >
        <div
          className="absolute top-0 right-0 flex items-center justify-center"
          style={{
            width: "60px",
            height: "20px",
            borderTopRightRadius: "20px",
            borderBottomLeftRadius: "10px",
            background: "linear-gradient(180deg, #FF6600 0%, #FF0000 100%)",
            opacity: 1,
            transform: "rotate(0deg)",
          }}
        >
          <span
            className="text-white font-bold"
            style={{ fontSize: "7px", fontWeight: "bold" }}
          >
            {o.left}
          </span>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <img
                src={o.img || "/placeholder.svg"}
                className="w-[85px] h-[85px] rounded-xl object-cover"
                alt="product"
              />
            </div>

            <div className="flex-1 min-w-0">
              <div className="inline-block bg-[#FF660059] text-[#613700] px-3 py-1 rounded-lg text-xs font-bold mb-2">
                {o.badge}
              </div>
              <div className="font-bold text-[12px] text-black">{o.title}</div>
              <div className="flex items-center gap-1 text-black">
                <div className="text-[10px] text-black mt-1">
                  <span style={{ fontWeight: 700, paddingRight: 3 }}>0%</span>
                  <span>completed</span>
                </div>
                <img
                  src={o.icon || "/placeholder.svg"}
                  className="w-[15px] h-[15px] rounded-full"
                  alt="Store icon"
                />
                <span className="text-[10px]">{o.store}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pl-[15px]">
            <div className="flex-1 mr-4">
              <div className="flex gap-1">
                {[...Array(o.total)].map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-2 flex-1 rounded-full ${
                      idx < o.progress ? "bg-orange-500" : ""
                    }`}
                    style={{
                      border: "1px solid #D4D4D4",
                      background: "#D9D9D959",
                    }}
                  ></div>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-[10px]">Get</span>
              <span className="font-[900] text-[15px] text-[#613700]">
                {o.reward}
              </span>
              <div>
                <img
                  src={birr || "/placeholder.svg"}
                  className="h-[17px]"
                  alt="Birr"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</section> */}

     


      {/* FAQ */}
      <section className="mx-auto max-w-full px-6 md:px-12 lg:px-16 mt-8 md:mt-12 mb-12">
        <h2 className="text-[30px] font-black mb-6 text-black">{t("Asked Questions")}</h2>
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
  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-20">
    <img src={applogo || "/placeholder.svg"} className="h-16 w-16 md:h-20 md:w-20" alt="App Logo" />
  </div>
  {/* Content wrapper */}
  <div className="relative z-10">
    {/* Heading */}
    <h2 className="text-[20px] font-semibold mb-6">
      {t("Download the app to save on every purchase!")}
    </h2>

    {/* Buttons row */}
   <div className="flex flex-row gap-3 mb-6 w-full flex-nowrap"> 

   <div className="flex-1 min-w-0">
  <a
    href="https://play.google.com/store/apps/details?id=com.gursha_rewards"
    target="_blank"
    rel="noopener noreferrer"
    className=""
  >
    <img
      src={googleplayIcon}
      alt="Google Play Button"
      className="h-[46px] w-[155px]"
    /> 
  </a>
</div>

      <div className="flex-1 min-w-0">
      <button className="">
         <img
        src={AppleIcon}
        alt="Apple Store Button"
      className="h-[46px] w-[155px]"
      />
      </button>
    </div>

  </div>



    {/* Social icons row */}
    <div className="w-full flex justify-between pt-[15px] px-[14px]">
      <a href="https://www.linkedin.com/company/shewaber-reward/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300 bg-white rounded-[12px] p-[5px]">
        <img src={linkedinIcon || "/placeholder.svg"} className="h-[30px] w-[30px]" alt="LinkedIn" />
      </a>
      <a href="https://www.instagram.com/gursha.rewards/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300"> 
        <img src={instagramIcon || "/placeholder.svg"} className="h-[40px] w-[40px]" alt="Instagram" />
      </a>
      <a href="tiktok.com/@gursha.rewards" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
        <img src={tiktokIcon || "/placeholder.svg"} className="h-[40px] w-[40px]" alt="TikTok" />
      </a>
    </div>
  </div>
</div>
</div>
)
}

export default function App() {
return (
<Router>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/privacypolicy" element={<PrivacyPolicy />} />
    <Route path="/termandconditions" element={<TermsAndConditions />} />
    <Route path="/deleteaccount" element={<DeleteAccount />} />
  </Routes>
</Router>
)
}


