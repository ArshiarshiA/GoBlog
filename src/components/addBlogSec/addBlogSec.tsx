 import CheckIsLogin from "../checkIsLogin";
import IfDLogin from "./ifDlogin";

export default function AddBlogsSec() {
    return (
        <section>
            <div>
                <div className="text-center px-5 text-3xl verbFont">
                    <h1>Add Your Writes Right Now..!</h1>
                </div>
                <div className="p-10 pt-5 min-[753px]:pt-20 justify-around items-center min-[753px]:flex min-[753px]:flex-row-reverse">
                    <div className="w-full text-center min-[753px]:w-1/2">
                        <CheckIsLogin link="/addBlog">
                            <div className="bg-red-300 rounded-full py-2 text-white verbFont">IF YOU ARE LOGIN</div>
                        </CheckIsLogin>
                        <IfDLogin />
                    </div>
                    <div className="w-full min-[753px]:w-1/2">
                        <ul className="list-decimal capitalize">
                            <li className="pt-5">Login to your account</li>
                            <li className="pt-5">go to the add blog section</li>
                            <li className="pt-5">make full the all information to the perfectly</li>
                            <li className="pt-5">click to the confirm button</li>
                            <li className="pt-5">and done!</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}