import Head from 'next/head'
import Link from "next/Link";
import {useRouter} from "next/router";

    const Navigation = (props) => {
    console.log(props);
    const { children } = props;
    const router = useRouter();
    return (
        <main>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/category">
                        <a>Category</a>
                    </Link>
                </li>
                <li>
                    <Link href="/cart">
                        <a>Cart</a>
                    </Link>
                </li>
            </ul>
            <div className="container">
                {children}
            </div>
        </main>   
    )
    }
export default Navigation;
