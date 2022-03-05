import {Switch } from 'antd';

const SocialCard = ({url, text, state}) =>{
  const play_icon = <svg width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0L10 6.54875L0 13V0Z" fill="#6366f1"/>
                    </svg>
  
  function onChange(checked: any) {
    console.log(`switch to ${checked}`);
  }  
  return(
    <>
      <div className="rounded-2xl border-gray-300 border w-300 p-8">
        <div className="flex justify-between items-center h-20">
          <img src={url} style={{width:'135px'}}/>
          {state?<Switch defaultChecked onChange={onChange}/>:<Switch onChange={onChange}/>}
        </div>
        <div className="text-gray-400 font-medium mt-12 mb-16" style={{fontSize:'12px'}}>{text}</div>
        <div className="flex justify-between -mx-8 -mb-8 p-8 border-t border-gray-300">
          <div className="text-xs text-indigo-500 font-medium">view integration</div>
          <button>{play_icon}</button>
        </div>
      </div>
    </>
  ) 
}

export default SocialCard;