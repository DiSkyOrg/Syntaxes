import SearchComponent from "./components/SearchBar";
import logo from './logo.png';
import React, {Component} from "react";

export default class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            comp: React.lazy(() => import('./components/Cards'))
        }
    }

    render() {
        return (
            <div className={"bg-gray-600 h-full"}>
                <header className="text-gray-400 bg-gray-900 body-font fixed top-0 right-0 left-0">
                    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
                            <a target={"_blank"} rel={"noreferrer"} href={"https://disky.me/discord"} className="mr-5 hover:text-white">Discord</a>
                            <a target={"_blank"} rel={"noreferrer"} href={"https://github.com/DiSkyOrg/DiSky"} className="mr-5 hover:text-white">GitHub</a>
                            <a target={"_blank"} rel={"noreferrer"} href={"https://docs.disky.me/"} className="hover:text-white">Wiki</a>
                        </nav>
                        <a href={"/"} className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0">
                            <img className="w-10 h-10 text-white bg-purple-500 rounded-full"
                                 src={logo} alt={"DiSky Logo"}/>

                            <span className="ml-3 text-xl xl:block lg:hidden">
                            DiSky Documentation
                        </span>
                        </a>
                        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
                            <SearchComponent/>
                        </div>
                    </div>
                </header>

                <div className={"m-10 mt-28"} id={"elements"}>
                    <React.Suspense fallback={
                        <div className={"flex items-center justify-center flex-col text-center"}>
                            <h2 className={"text-2xl text-gray-400"}>Loading...</h2>
                            <p className={"text-gray-400"}>
                                Please, this can take a while.
                            </p>
                            <div className="animate-spin mt-8 rounded-full h-32 w-32 border-b-2 border-purple-500"></div>
                        </div>
                    } >
                        <this.state.comp/>
                    </React.Suspense>
                </div>

            </div>
        );
    }

}
