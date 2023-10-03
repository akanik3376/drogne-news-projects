
import logo from "../../../../src/assets/logo.png"
import moment from 'moment';


const Header = () => {
    return (
        <div>
            <div>
                <div className="flex justify-center mt-2">
                    <img src={logo} alt="" />

                </div>
                <p className="text-center text-xl text-[#706F6F] mt-2 font-normal">Journalism Without Fear or Favour</p>
                <p className="text-center text-xl text-[#706F6F] mt-2 font-medium">{moment().format("dddd, MMMM D,YYYY")}</p>
            </div>

        </div>
    );
};

export default Header;