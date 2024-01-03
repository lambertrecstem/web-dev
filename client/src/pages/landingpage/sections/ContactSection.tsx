import {
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactSection = () => {
  return (
    <>
      <div>
        <div className="lg:hidden relative  bottom-[-5%] grid place-items-center m-0 bg-primary w-full h-[100px]">
          <div className="relative top-[5%] grid grid-cols-[29%_29%_29%]   place-items-center gap-3 ">
            <div className="grid w-full h-full place-items-center bg-redAccent text-[18pt] text-secondary p-4 rounded-full duration-500 transition-all  hover:text-redAccent hover:bg-secondary  hover:border-redAccent hover:border-[1px]">
              <FontAwesomeIcon icon={faYoutube} />
            </div>
            <div className="grid w-full h-full place-items-center bg-redAccent text-[18pt] text-secondary p-4 rounded-full duration-500 transition-all  hover:text-redAccent hover:bg-secondary  hover:border-redAccent hover:border-[1px]">
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div className="grid w-full h-full place-items-center bg-redAccent text-[18pt] text-secondary p-4 rounded-full duration-500 transition-all  hover:text-redAccent hover:bg-secondary  hover:border-redAccent hover:border-[1px]">
              <FontAwesomeIcon icon={faTiktok} />
            </div>
          </div>
        </div>
      </div>
      <div className=" xs:hidden lg:grid display w-full h-[75%] p-[5%] min-h-[450px]">
        <div className="grid grid-rows-[40%_60%]">
          <p className="text-primary font-secondary   font-light text-[36pt]">
            CONTACT US
          </p>
          <div className="w-full h-full flex flex-row justify-between ">
            <div className="grid grid-rows-[70%_30%] w-[50%] h-full  border-r-2 border-r-primary ">
              <div className="w-full h-auto  ">
                <p className="text-[35pt] text-primary font-primary">
                  Help us make STEM more accessible.
                </p>
              </div>
              <div className="relative top-[30%] grid grid-cols-[33%_33%_33%] h-full w-[50%] ">
                <div className=" grid w-[60px] h-[60px] place-items-center bg-redAccent text-[20pt] text-secondary p-4 rounded-full duration-500 transition-all  hover:text-redAccent hover:bg-secondary  hover:border-redAccent hover:border-[1px]">
                  <FontAwesomeIcon icon={faYoutube} />
                </div>
                <div className="grid w-[60px] h-[60px] place-items-center bg-redAccent text-[20pt] text-secondary p-4 rounded-full duration-500 transition-all  hover:text-redAccent hover:bg-secondary  hover:border-redAccent hover:border-[1px]">
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
                <div className="grid w-[60px] h-[60px] place-items-center bg-redAccent text-[20pt] text-secondary p-4 rounded-full duration-500 transition-all  hover:text-redAccent hover:bg-secondary  hover:border-redAccent hover:border-[1px]">
                  <FontAwesomeIcon icon={faTiktok} />
                </div>
              </div>
            </div>
            <div className=" flex flex-col w-[50%] overflow-hidden ">
              <div className="ml-[50%] flex flex-col w-full h-full   ">
                <p className="text-primary text-[15pt] font-secondary">
                  Phone:
                </p>
                <p className="text-greyAccent text-[15pt] font-secondary ">
                  000-000-000
                </p>
              </div>
              <div className=" ml-[50%] flex flex-col w-full h-full  ">
                <p className="text-primary text-[15pt] font-secondary">
                  Email:
                </p>
                <p className="text-greyAccent text-[15pt] font-secondary">
                  random@email.com
                </p>
              </div>
              <div className="ml-[50%] flex flex-col w-full h-full  ">
                <p className="text-primary text-[15pt] font-secondary">
                  Address:
                </p>
                <p className="text-greyAccent text-[15pt] font-secondary">
                  Lambert High School
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
