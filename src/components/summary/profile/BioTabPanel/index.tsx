const BioTabPanel = () => {
  const icon=<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 6C2 4.93913 2.42143 3.92172 3.17157 3.17157C3.92172 2.42143 4.93913 2 6 2H18C19.0609 2 20.0783 2.42143 20.8284 3.17157C21.5786 3.92172 22 4.93913 22 6V18C22 19.0609 21.5786 20.0783 20.8284 20.8284C20.0783 21.5786 19.0609 22 18 22H6C4.93913 22 3.92172 21.5786 3.17157 20.8284C2.42143 20.0783 2 19.0609 2 18V6Z" stroke="#ACB1C0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.5 11C9.88071 11 11 9.88071 11 8.5C11 7.11929 9.88071 6 8.5 6C7.11929 6 6 7.11929 6 8.5C6 9.88071 7.11929 11 8.5 11Z" stroke="#ACB1C0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.526 12.6208L6 21.9998H18.133C19.1586 21.9998 20.1422 21.5924 20.8674 20.8672C21.5926 20.142 22 19.1584 22 18.1328V17.9998C22 17.5338 21.825 17.3548 21.51 17.0098L17.48 12.6148C17.2922 12.4099 17.0637 12.2464 16.8092 12.1348C16.5546 12.0231 16.2796 11.9657 16.0017 11.9663C15.7237 11.9669 15.449 12.0254 15.1949 12.1381C14.9408 12.2507 14.713 12.4152 14.526 12.6208V12.6208Z" stroke="#ACB1C0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
  
  return (
    <div style={{backgroundColor:'#ECEEF4'}}>
      <div className="py-16 px-32 mb-12 -mt-8 rounded-2xl bg-white">
        <p className="text-gray-700 font-medium text-base">Personal Information</p>
        <p className="text-gray-400 font-medium text-sm">Update your store profile with accurate information</p>
        <div className="flex justify-end pb-10 border-b border-gray-200 -mx-32">
          <button className="font-normal text-base text-gray-400 border border-gray-400 rounded-xl px-4 py-2 mr-32">Edit Profile</button>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-700 font-medium text-base mt-16">Profile Avatar</p>
          <div className="rounded-xl border-indigo-300 border-dashed border-2 w-300 mt-10 mr-32 flex flex-col p-8 ">
            <div className="flex justify-center pb-8">{icon}</div>
            <div className="text-xs font-medium text-center text-gray-400"><span className="text-indigo-500"><a>Click to replace</a></span> or drag and drop PNG, JPG or GIF (max 800x800px)</div>
          </div>
        </div>
        <div className="flex justify-between mt-10 border-t -mx-32 px-32">
          <p className="text-gray-700 font-medium text-base mt-16">Profile Cover Image</p>
          <div className="rounded-xl border-indigo-300 border-dashed border-2 w-300 mt-10 mr-32 flex flex-col p-8 ">
            <div className="flex justify-center pb-8">{icon}</div>
            <div className="text-xs font-medium text-center text-gray-400"><span className="text-indigo-500"><a>Click to replace</a></span> or drag and drop PNG, JPG or GIF (max 800x800px)</div>
          </div>
        </div>
      </div>

      <div className="py-16 px-32 mb-12 mt-16 rounded-2xl bg-white">
        <div className="grid grid-flow grid-cols-3 ...">    
          <div ><p className="text-gray-700 font-medium text-base">Bio</p></div>      
          <div className="col-span-2">
            <div className="grid grid-flow grid-cols-2 gap-16 ...">
              <div className="p">
                <div className="text-xs text-gray-400">Marital Status</div>
                <input className="bg-gray-200 rounded-xl p-4 text-xs w-full" placeholder="Single"/>
              </div>
              <div className="p">
                <div className="text-xs text-gray-400">Occupation</div>
                <input className="bg-gray-200 rounded-xl p-4 text-xs w-full" placeholder="UI/UX Designer"/>
              </div>
              <div className="p">
                <div className="text-xs text-gray-400">Education</div>
                <input className="bg-gray-200 rounded-xl p-4 text-xs w-full" placeholder="Education"/>
              </div>
              <div className="p">
                <div className="text-xs text-gray-400">Interest</div>
                <input className="bg-gray-200 rounded-xl p-4 text-xs w-full" placeholder="Interest"/>
              </div>
              <div className="p col-span-2">
                <div className="text-xs text-gray-400">About Me</div>
                <textarea className="bg-gray-200 rounded-xl p-4 text-xs w-full h-40" />
              </div>
              <div className="p col-span-2">
                <div className="text-xs text-gray-400">Work & Experience</div>
                <textarea className="bg-gray-200 rounded-xl p-4 text-xs w-full h-40" />
              </div>
              <div className="p col-span-2">
                <div className="text-xs text-gray-400">Hobbies</div>
                <textarea className="bg-gray-200 rounded-xl p-4 text-xs w-full h-40" />
              </div>
              <div className="col-span-2 ">
                <div className="flex justify-end mr-32">
                  <button className="bg-gray-200 rounded-xl py-3 px-12 text-xs text-white bg-indigo-500 hover:bg-indigo-700">Save</button>
                </div>                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BioTabPanel;