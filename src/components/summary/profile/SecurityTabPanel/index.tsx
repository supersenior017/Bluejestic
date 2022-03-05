const SecurityTabPanel = () => {
  return (
    <div style={{backgroundColor:'#ECEEF4'}}>
      <div className="py-16 px-32 mb-12 -mt-8 rounded-2xl bg-white">
        <div className="flex justify-between items-center pb-12">
          <div>
            <p className="text-gray-700 font-medium text-base">Two-facto Authentication</p>
            <p className="text-gray-400 font-medium text-sm">Surpercharge your store by connect to powerful tool and apps</p>
          </div>
          <button className="font-normal text-base text-white bg-indigo-500 hover:bg-indigo-700 rounded-xl px-4 py-2">Enable</button>
        </div>
        
        <div className="flex justify-between items-center py-12 px-32 -mx-32 border-t">
          <div>
            <p className="text-gray-700 font-medium text-base">Authentication app</p>
            <p className="text-gray-400 font-medium text-sm">Google auth app</p>
          </div>
          <button className="font-normal hover:font-semibold text-base text-gray-400 border border-gray-400 rounded-xl px-4 py-2">Setup</button>
        </div>
        
        <div className="flex justify-between items-center py-12 px-32 -mx-32 border-t">
          <div>
            <p className="text-gray-700 font-medium text-base">Another e-mail</p>
            <p className="text-gray-400 font-medium text-sm">E-mail to send notification link</p>
          </div>
          <button className="font-normal hover:font-semibold text-base text-gray-400 border border-gray-400 rounded-xl px-4 py-2">Setup</button>
        </div>
        
        <div className="flex justify-between items-center pt-12 pb px-32 -mx-32 border-t">
          <div>
            <p className="text-gray-700 font-medium text-base">SMS Recovery</p>
            <p className="text-gray-400 font-medium text-sm">Your phone number or another SMS number</p>
          </div>
          <button className="font-normal hover:font-semibold text-base text-gray-400 border border-gray-400 rounded-xl px-4 py-2">Setup</button>
        </div>
      </div>

      <div className="py-12 px-32 mb-12 mt-16 rounded-2xl bg-white">
        <p className="text-gray-700 font-medium text-base">Password</p>
        <p className="text-gray-400 font-medium text-sm mb-12">Surpercharge your store by connect to powerful tool and apps </p>
        
        <div className="border-t border-b -mx-32 px-32">
            <div className="flex justify-between items-center w-full my-12">              
                <div className="text-base text-gray-600 font-medium">Current Password</div>
                <input type="password" className="bg-gray-200 rounded-xl p-3 text-xs w-300" placeholder="Current Password"/>              
            </div>
            <div className="flex justify-between items-center w-full my-12">              
                <div className="text-base text-gray-600 font-medium">New Password</div>
                <input type="password" className="bg-gray-200 rounded-xl p-3 text-xs w-300" placeholder="New Password"/>              
            </div>
            <div className="flex justify-between items-center w-full my-12">              
                <div className="text-base text-gray-600 font-medium">Confirm password</div>
                <input type="password" className="bg-gray-200 rounded-xl p-3 text-xs w-300" placeholder="Confirm Password"/>              
            </div>
        </div>
        <div className="mt-12 flex justify-end mr-20">
          <button className="font-normal text-base text-white bg-indigo-500 hover:bg-indigo-700 rounded-xl px-4 py-2">Save</button>
        </div>
      </div>
    </div>
  )
}

export default SecurityTabPanel;