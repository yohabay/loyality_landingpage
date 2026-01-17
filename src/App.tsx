"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

import AppImage from "./images/appimage.png"
import applogowithtext from "./images/applogowithtext.png"
import AppleIcon from "./images/appstorecommingsoon.png"
import bgImage from "./images/bgimage.png"
import birr from "./images/birr.png"
import bottomBgimage from "./images/bottomBgimage.png"
import cashbackoffer from "./images/cashbackoffer.svg"
import collectIcon from "./images/collecticon.svg"
import googleplayIcon from "./images/googleplay.png"
import applogo from "./images/personimage.png"
import product1 from "./images/product1.png"
import product2 from "./images/product2.png"
import product3 from "./images/product3.png"
import product4 from "./images/product4.png"
import cartImage from "./images/supermarketcart.svg"


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
            className={`w-full mt-[15px] px-[20px] py-[17px] text-[15px] font-[700] text-[#363636] hover:bg-gray-200 transition-all duration-100 ${openId === i ? 'rounded-[35px]' : 'rounded-[30px]'}`}
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
              <div className="py-[15px] text-[14px] text-[#363636] font-normal">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="min-h-screen amharic-font bg-[#fff] w-full">
      {/* Top header gradient */}
   <header className="w-full relative overflow-hidden">
  {/* Bottom background image */}
  <div
    className="absolute inset-0 z-0"

  />

  {/* Gradient overlay */}
  <div
    className="absolute inset-0 z-0"
  
  />

  {/* Content */}
  <div className="relative z-10 mx-auto max-w-full px-6 md:px-12 lg:px-16 pt-8 md:pt-12 pb-8 text-white">
  <div className="flex items-center justify-between w-full mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600">
  {/* Logo */}
  <img
    src={applogowithtext}
    alt="Gursha Rewards"
    className="h-8 md:h-9"
  />

  {/* Download Button */}
  <button
    className="flex items-center gap-2 bg-white text-orange-600 font-semibold px-4 py-2 rounded-full hover:bg-orange-50 transition"
  >
    Download app
    <span className="text-lg leading-none">→</span>
  </button>
</div> 


<div className="flex justify-center">
  <img
    src={AppImage}
    alt=""
    style={{ width: "181px" }}
  />
</div>

  {/* Main Title */}
<h1
  className="mb-4 text-center font-black mt-[30px] relative z-10
             bg-gradient-to-r from-[#5D3500] to-[#C36F00]
             bg-clip-text text-transparent"
  style={{
    fontFamily: "Nokia Pure Headline",
    fontWeight: 900,
    fontStyle: "normal",
    fontSize: "35px",
    lineHeight: "115%",
    letterSpacing: "0%",
    verticalAlign: "middle",
    whiteSpace: "pre-wrap",
  }}
>
  {t("የሱፐርማርኬት ገንዘብ መቆጠቢያ አፕሊኬሽን!")}
</h1>
   

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
        icon: <img src={cashbackoffer} className="h-[40px] w-[40px]" alt="Cashback" />,
        title: t("3. Discounts from points"),
        sub: t("Convert your Gursha points into supermarket Discount Coupons"),
      },
    ].map((step, i) => (
      <div
        key={i}
        className="flex flex-col gap-2 bg-white rounded-[25px] p-[20px] border"
        style={{ border: '0.5px solid #D4D4D4' }} // Inner border
      >
        <div className="rounded-lg flex h-[37px] w-[37px] items-center justify-center flex-shrink-0">
          {step.icon}
        </div>
        <div className="">
          <span className="font-[700] text-base text-[17px]">
            {step.title}
          </span>
<div
  className="mt-[17px]"
  style={{
    fontFamily: "Nokia Pure Headline",
    fontWeight: 250,
    fontStyle: "normal", // "Ultra Light" is represented by fontWeight
    fontSize: "15px",
    lineHeight: "150%",
    letterSpacing: "0%",
    verticalAlign: "middle",
    color: "#6B7280", // Tailwind gray-500 color
  }}
>
  {step.sub}
</div>
{i === 0 && <p
  className="mt-[23px]"
  style={{
    fontFamily: "Nokia Pure Headline",
    fontWeight: 700,        // Bold
    fontStyle: "normal",    // Bold handled by fontWeight
    fontSize: "12px",
    lineHeight: "100%",
    letterSpacing: "0%",
    verticalAlign: "middle",
    color: "#613700",
  }}
>
  መተግበሪያውን አሁን ያውርዱት
  <span
    className="text-lg leading-none"
    style={{ verticalAlign: "middle" }}
  >
    →
  </span>
</p>
}
        </div>
      </div>
    ))}
  </div> 
</section>
    {/* Outer wrapper for gradient border */}
<div className="relative mx-[10px] rounded-[35px] overflow-hidden p-[25px]">
  {/* Gradient border */}
  <div className="absolute inset-0 z-0 rounded-[35px]">
    <div className="w-full h-full rounded-[35px] bg-gradient-to-b from-[#FF9800] to-[#FF6600]" />
    <div className="absolute inset-[1.5px] rounded-[33.5px] bg-white" />
  </div>

  {/* Background image */}
  <div
    className="absolute inset-0 rounded-[35px] z-10"
    style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />

  {/* Gradient overlay */}
  <div
    className="absolute inset-0 rounded-[35px] z-20"
    style={{
      background: "linear-gradient(180deg, rgba(255,152,0,0.2) 0%, rgba(255,152,0,0) 100%)",
    }}
  />

  {/* Card content */}
  <div className="relative z-30">
  <img src={cartImage} alt="" className="w-[104px] h-[100px]" /> 

    <h1
      className="mb-4 text-center font-black mt-[7px] mx-[25px]"
      style={{
        fontFamily: "Nokia Pure Headline",
        fontWeight: 900,
        fontSize: "30px",
        lineHeight: "110%",
        letterSpacing: "0%",
        whiteSpace: "pre-wrap",
        verticalAlign: "middle",
      }}
    >
      {t("በተመረጡ እቃዎች ላይ ተጨማሪ ጉርሻ ያግኙ")}
    </h1>

    <div className="flex gap-[10px] pl-[20px]">
      <img src={product1} alt="" width={80} height={75} />
      <img src={product2} alt="" width={80} height={75} />
      <img src={product3} alt="" width={80} height={75} />
      <img src={product4} alt="" width={80} height={75} />
    </div>

    <div className="flex gap-3 mt-[17px] mb-[25px] gap-[25px] ml-[25px]">
     <div
       className="flex items-center gap-1 px-2 py-1 rounded-full"
  style={{
    background: "#61370026",
  }}
     >
   <p
  className="text-[15px]"
  style={{
    fontFamily: "Poppins",
    fontWeight: 900,
    fontStyle: "normal", // ExtraBold is controlled by fontWeight
    lineHeight: "15px",
    letterSpacing: "0%",
    textAlign: "right",
    verticalAlign: "middle",
    color: "#613700",
  }}
>
  +50
</p>

      <div className="w-4 h-4 rounded-full overflow-hidden">
    <img
      src={birr}
      alt=""
      className="w-full h-full object-cover"
    />
  </div>
     </div>

      <div
       className="flex items-center gap-1 px-2 py-2 rounded-full"
  style={{
    background: "#61370026",
  }}
     >
   <p
  className="text-[15px]"
  style={{
    fontFamily: "Poppins",
    fontWeight: 900,
    fontStyle: "normal", // ExtraBold is controlled by fontWeight
    lineHeight: "15px",
    letterSpacing: "0%",
    textAlign: "right",
    verticalAlign: "middle",
    color: "#613700",
  }}
>
  +25
</p>

      <div className="w-4 h-4 rounded-full overflow-hidden">
    <img
      src={birr}
      alt=""
      className="w-full h-full object-cover"
    />
  </div>
     </div>

      <div
       className="flex items-center gap-1 px-2 py-1 rounded-full"
  style={{
    background: "#61370026",
  }}
     >
   <p
  className="text-[15px]"
  style={{
    fontFamily: "Poppins",
    fontWeight: 900,
    fontStyle: "normal", // ExtraBold is controlled by fontWeight
    lineHeight: "15px",
    letterSpacing: "0%",
    textAlign: "right",
    verticalAlign: "middle",
    color: "#613700",
  }}
>
  +100
</p>

      <div className="w-4 h-4 rounded-full overflow-hidden">
    <img
      src={birr}
      alt=""
      className="w-full h-full object-cover"
    />
  </div>
     </div>

      <div
       className="flex items-center gap-1 px-2 py-1 rounded-full"
  style={{
    background: "#61370026",
  }}
     >
   <p
  className="text-[15px]"
  style={{
    fontFamily: "Poppins",
    fontWeight: 900,
    fontStyle: "normal", // ExtraBold is controlled by fontWeight
    lineHeight: "15px",
    letterSpacing: "0%",
    textAlign: "right",
    verticalAlign: "middle",
    color: "#613700",
  }}
>
  +200
</p>

      <div className="w-4 h-4 rounded-full overflow-hidden">
    <img
      src={birr}
      alt=""
      className="w-full h-full object-cover"
    />
  </div>
     </div>
    </div>
  </div>
</div>






      {/* Footer CTA */}
      <div
  className="w-full relative rounded-t-3xl pt-16 pb-8 px-[10px] text-white text-center mt-[200px] h-[625px]"

>
  {/* Bottom background image */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: `url(${bottomBgimage})`,
      backgroundSize: "cover",
      backgroundPosition: "center", 
    }}
  />
  {/* Logo on top overlapping */}
  <div className="absolute" style={{ top: "-23.5%", left: "50%", transform: "translateX(-50%)" }}>
  <img
    src={applogo || "/placeholder.svg"}
    className="h-[300px] w-[261px]"
    alt="App Logo"
  />
</div>


  {/* Content wrapper */}
  <div className="relative z-20">
    {/* Heading */}
   <div
  className="bg-white border border-[#D4D4D4] rounded-[35px] px-[25px] "
  style={{ borderWidth: "0.5px" }}
>
  <h1
    className="mb-4 text-center font-black mt-[40px]
               bg-gradient-to-r from-[#5D3500] to-[#C36F00]
               bg-clip-text text-transparent"
    style={{
      fontFamily: "Nokia Pure Headline",
      fontWeight: 900,
      fontStyle: "normal",
      fontSize: "35px",
      lineHeight: "115%",
      whiteSpace: "pre-wrap",
    }}
  >
    {t("ደረሰኞን በጉርሻ ወደ ቅናሽ ይቀይሩት")}
  </h1>

  {/* List */}
  <div className="text-left text-[#613700] space-y-2 font-bold">
    <p className="flex items-start gap-2">
      <span>→</span>
      <span>1 ጉርሻ ነጥብ = 1 ብር</span>
    </p>

    <p className="flex items-start gap-2">
      <span>→</span>
      <span>የአንዳንዱ ግዢዎት ላይ ጉርሻን ይጠቀሙ</span>
    </p>

    <p className="flex items-start gap-2">
      <span>→</span>
      <span>በተመረጡ ሱፐርማርኬቶች ብቻ።</span>
    </p>
  </div>

  <div className="flex gap-3 mt-[39px] mb-[25px]">
    <a
      href="https://play.google.com/store/apps/details?id=com.gursha_rewards"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={googleplayIcon}
        alt="Google Play Button"
        className="h-[46px] w-[155px]"
      />
    </a>

    <button>
      <img
        src={AppleIcon}
        alt="Apple Store Button"
        className="h-[46px] w-[155px]"
      />
    </button>
  </div>
</div>

<h2 className="text-[12px] text-white mb-[20px] mt-[30px]">
 Copyright &copy; Gursha Rewards 2026
</h2>




    {/* Social icons row */}
    <div className="w-full flex justify-between pt-[15px] px-[45px] mb-[25px]">
      <a href="https://www.linkedin.com/company/shewaber-reward/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300 bg-white rounded-[12px] p-[5px]">
        <img src={linkedinIcon || "/placeholder.svg"} className="h-[30px] w-[30px]" alt="LinkedIn" />
      </a>
      <a href="https://www.instagram.com/gursharewards/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300"> 
        <img src={instagramIcon || "/placeholder.svg"} className="h-[40px] w-[40px]" alt="Instagram" />
      </a>
      <a href="https://www.gursha.app/tiktok.com/@gursharewards" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
        <img src={tiktokIcon || "/placeholder.svg"} className="h-[40px] w-[40px]" alt="TikTok" />
      </a>
    </div>
    <div className="flex justify-center">
  <div className="flex flex-row gap-4 text-white text-[12px]">
    <a
      href="Privacy Policy"
      target="_blank"
      rel="noopener noreferrer"
      className="underline"
    >
      Privacy Policy
    </a>

    <a
      href="Terms & Conditions"
      target="_blank"
      rel="noopener noreferrer"
      className="underline"
    >
      Terms & Conditions
    </a>
  </div>
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



