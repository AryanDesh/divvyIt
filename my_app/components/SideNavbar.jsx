import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { IoTrashBinOutline } from "react-icons/io5";
import { RiFolderSharedLine } from "react-icons/ri";
import { FaRegFolder, FaRegFolderOpen, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

function SideNavbar() {

	const [folderOpen, setFolderOpen] = useState(false);

	const placeholderFileHashes = ['e3d67725-7371-4476-9329-b3738edf75a3', '1ca5e8a4-8f0a-40a0-b660-99dbc5382a44', 'e0401b5f-e19a-49fd-85e7-21ad4a4115d8', 'a689385f-1f5c-43d4-bc73-cbca05639f93', '0d91c37e-adc6-48b5-93d4-48777cbf178c'];

  return (
    <div>
      <Disclosure as="nav">
        <Disclosure.Button className=" absolute top-4 right-4 inline-flex items-center peer justify-center rounded md p-2 text-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group hover:bg-gray-900">
          <GiHamburgerMenu
            className="block md:hidden h-6 w-6"
            aria-hidden="true"
          />
        </Disclosure.Button>
        <div className="p-6 w-1/2 h-screen bg-white z-20 fixed top-0 -left-96 lg:w-60 lg:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <div className="flex flex-col justify-between h-full items-center overflow-hidden">
						<div className="flex flex-col justify-start items-center">
							<h1 className="text-base text-center cursor-pointer font-bold text-blue-900 border-gray-100 pb-4 w-full">
								Divvy-It
							</h1>
							<div className="my-4 border-b border-gray-100 pb-4">
								<div className="flex mb-2 justify-start items-center gap-4 pl-4 hover:bg-gray-900  p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
									<MdOutlineSpaceDashboard className="text-2xl text-gray-600 group-hover:text-white" />
									<h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
										Dashboard
									</h3>
								</div>
								<div className="flex mb-2 justify-start items-center gap-4 pl-4 hover:bg-gray-900  p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
									<RiFolderSharedLine className="text-2xl text-gray-600 group-hover:text-white" />
									<h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
										Shared
									</h3>
								</div>
								<div className="flex mb-2 justify-start items-center gap-4 pl-4 hover:bg-gray-900  p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
									<IoTrashBinOutline className="text-2xl text-gray-600 group-hover:text-white" />
									<h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
										Recently Deleted
									</h3>
								</div>
							</div>
							<div className="border-b border-gray-100 pb-4 w-full overflow-hidden">
								<div className="flex justify-start items-center gap-4 pl-4 hover:bg-gray-900  p-2 rounded-md group cursor-pointer hover:shadow-lg" onClick={() => setFolderOpen(prev => !prev)}>
									{folderOpen 
									? (
										<FaRegFolderOpen className="text-2xl text-gray-600 group-hover:text-white" />
									)
									: (
										<FaRegFolder className="text-2xl text-gray-600 group-hover:text-white" />
									)}
									
									<h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
										Folder
									</h3>
								</div>
							</div>
							{folderOpen && (
								<div className="max-h-[300px] max-w-[180px] pt-2 flex justify-start items-center group overflow-y-auto">
									<div className="w-full h-full flex flex-col gap-2">
										{placeholderFileHashes.map(file => {
											return (
												<p className="truncate text-gray-900 font-light cursor-pointer hover:bg-gray-900 hover:text-white p-0.5 rounded-md">{file}</p>
											)
										})}
									</div>
								</div>
							)}
						</div>
            <div className="my-4 border-b border-gray-100 w-full">
              <div className="flex mb-2 justify-start items-center gap-4 pl-4 hover:bg-gray-900  p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <IoSettingsOutline className="text-2xl text-gray-600 group-hover:text-white" />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                  Settings
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  );
}

export default SideNavbar;
