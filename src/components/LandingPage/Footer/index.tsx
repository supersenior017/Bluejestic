const Footer = () => {
  return (
    <>   
      <div className="flex justify-center items-center bg-indigo-500 p-3 ">   
        <div className="company flex justify-between items-center text-white">
          
            <div>
              <div className="pb-3 font-semibold">COMPANY</div>
              <div>About</div>
              <div>How it works</div>
              <div>Contact</div>
            </div>
        
            <div>
              <div className="pb-3 font-semibold">SUPPORT</div>
              <div>Sell on Bluejestic</div>
              <div>Help Center</div>
              <div>Blog</div>
            </div>
        
            <div>
              <div className="pb-3 font-semibold">RESOURCES</div>
              <div>Term of Service</div>
              <div>Privacy Policy</div>
              <div>Developers</div>
            </div>            
        </div>
      </div> 
      <div className="social-link bg-white p-8 flex justify-around items-center md:px-96">
        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.5406 3.42C22.4218 2.94541 22.1799 2.51057 21.8392 2.15941C21.4986 1.80824 21.0713 1.55318 20.6006 1.42C18.8806 1 12.0006 1 12.0006 1C12.0006 1 5.12057 1 3.40057 1.46C2.92982 1.59318 2.50255 1.84824 2.16192 2.19941C1.82129 2.55057 1.57936 2.98541 1.46057 3.46C1.14579 5.20556 0.991808 6.97631 1.00057 8.75C0.989351 10.537 1.14334 12.3213 1.46057 14.08C1.59153 14.5398 1.83888 14.9581 2.17872 15.2945C2.51855 15.6308 2.93939 15.8738 3.40057 16C5.12057 16.46 12.0006 16.46 12.0006 16.46C12.0006 16.46 18.8806 16.46 20.6006 16C21.0713 15.8668 21.4986 15.6118 21.8392 15.2606C22.1799 14.9094 22.4218 14.4746 22.5406 14C22.8529 12.2676 23.0069 10.5103 23.0006 8.75C23.0118 6.96295 22.8578 5.1787 22.5406 3.42V3.42Z" stroke="#556EE6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9.75098 12.02L15.501 8.74998L9.75098 5.47998V12.02Z" stroke="#556EE6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23 1.01006C22.0424 1.68553 20.9821 2.20217 19.86 2.54006C19.2577 1.84757 18.4573 1.35675 17.567 1.13398C16.6767 0.911216 15.7395 0.967251 14.8821 1.29451C14.0247 1.62177 13.2884 2.20446 12.773 2.96377C12.2575 3.72309 11.9877 4.62239 12 5.54006V6.54006C10.2426 6.58562 8.50127 6.19587 6.93101 5.4055C5.36074 4.61513 4.01032 3.44869 3 2.01006C3 2.01006 -1 11.0101 8 15.0101C5.94053 16.408 3.48716 17.109 1 17.0101C10 22.0101 21 17.0101 21 5.51006C20.9991 5.23151 20.9723 4.95365 20.92 4.68006C21.9406 3.67355 22.6608 2.40277 23 1.01006V1.01006Z" stroke="#556EE6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 1H6C3.23858 1 1 3.23858 1 6V16C1 18.7614 3.23858 21 6 21H16C18.7614 21 21 18.7614 21 16V6C21 3.23858 18.7614 1 16 1Z" stroke="#556EE6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14.9997 10.3698C15.1231 11.2021 14.981 12.052 14.5935 12.7988C14.206 13.5456 13.5929 14.1512 12.8413 14.5295C12.0898 14.9077 11.2382 15.0394 10.4075 14.9057C9.57683 14.7721 8.80947 14.3799 8.21455 13.785C7.61962 13.1901 7.22744 12.4227 7.09377 11.592C6.96011 10.7614 7.09177 9.90971 7.47003 9.15819C7.84829 8.40667 8.45389 7.79355 9.20069 7.40605C9.94749 7.01856 10.7975 6.8764 11.6297 6.99981C12.4786 7.1257 13.2646 7.52128 13.8714 8.12812C14.4782 8.73496 14.8738 9.52089 14.9997 10.3698Z" stroke="#556EE6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16.5 5.5H16.51" stroke="#556EE6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 1H9C7.67392 1 6.40215 1.52678 5.46447 2.46447C4.52678 3.40215 4 4.67392 4 6V9H1V13H4V21H8V13H11L12 9H8V6C8 5.73478 8.10536 5.48043 8.29289 5.29289C8.48043 5.10536 8.73478 5 9 5H12V1Z" stroke="#556EE6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </>
  )
}

export default Footer
