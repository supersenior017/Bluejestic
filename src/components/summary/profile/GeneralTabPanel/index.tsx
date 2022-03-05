const GeneralTabPanel = () => {
  return (
    <div style={{backgroundColor:'#ECEEF4'}}>
      <div className="py-16 px-32 mb-12 -mt-8 rounded-2xl bg-white">
        <p className="text-gray-700 font-medium text-base">Personal Information</p>
        <p className="text-gray-400 font-medium text-sm">Update your store profile with accurate information</p>
        <div className="flex justify-end pb-10 border-b border-gray-200 -mx-32">
          <button className="font-normal text-base text-gray-400 border border-gray-400 rounded-xl px-4 py-2 mr-32">Edit Profile</button>
        </div>
        <p className="text-gray-700 font-medium text-base mt-8">Profile</p>
        <div className="grid grid-flow grid-cols-3 ...">
          <div > </div>
          <div className="col-span-2">
            <div className="grid grid-flow grid-cols-2 gap-16 ...">
              <div className="p">
                <div className="text-xs text-gray-400">First Name</div>
                <input className="bg-gray-200 rounded-xl p-4 text-xs w-full" placeholder="Vincent"/>
              </div>
              <div className="p">
                <div className="text-xs text-gray-400">Last Name</div>
                <input className="bg-gray-200 rounded-xl p-4 text-xs w-full" placeholder="Zhang"/>
              </div>
              <div className="p">
                <div className="text-xs text-gray-400">E-Mail Address</div>
                <input className="bg-gray-200 rounded-xl p-4 text-xs w-full" placeholder="VZhang@gmail.com"/>
              </div>
              <div className="p">
                <div className="text-xs text-gray-400">Telephone</div>
                <input className="bg-gray-200 rounded-xl p-4 text-xs w-full" placeholder="921-555-9016"/>
              </div>
              <div className="p">
                <div className="text-xs text-gray-400">Gender</div>
                <input className="bg-gray-200 rounded-xl p-4 text-xs w-full" placeholder="Male"/>
              </div>
              <div className="p">
                <div className="text-xs text-gray-400">Date of Birth</div>
                <input className="bg-gray-200 rounded-xl p-4 text-xs w-full" placeholder="11/11/2009"/>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="py-16 px-32 mb-12 mt-16 rounded-2xl bg-white">
        <p className="text-gray-700 font-medium text-base">Shipping Details</p>
        <p className="text-gray-400 font-medium text-sm">Provide your shipping information</p>
        
        <div className="grid grid-flow grid-cols-3 ...">    
          <div > </div>      
          <div className="col-span-2">
            <div className="grid grid-flow grid-cols-2 gap-16 ...">
              <div className="p col-span-2">
                <div className="text-xs text-gray-400">Address</div>
                <input className="bg-gray-200 rounded-xl p-4 text-xs w-full" placeholder="Address Line1"/>
              </div>
              <div className="p col-span-2">                
                <input className="bg-gray-200 rounded-xl p-4 text-xs w-full" placeholder="Address Line2"/>
              </div>
              <div className="p">
                <div className="text-xs text-gray-400">City</div>
                <input className="bg-gray-200 rounded-xl p-4 text-xs w-full" placeholder="VZhang@gmail.com"/>
              </div>
              <div className="p">
                <div className="text-xs text-gray-400">State</div>
                <input className="bg-gray-200 rounded-xl p-4 text-xs w-full" placeholder="921-555-9016"/>
              </div>
              <div className="p">
                <div className="text-xs text-gray-400">Zip Code</div>
                <input className="bg-gray-200 rounded-xl p-4 text-xs w-full" placeholder="Male"/>
              </div>
              <div className="p">
                <div className="text-xs text-gray-400">Country</div>
                <input className="bg-gray-200 rounded-xl p-4 text-xs w-full" placeholder="11/11/2009"/>
              </div>
              <div className="col-span-2 ">
                <div className="flex justify-end">
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

export default GeneralTabPanel;