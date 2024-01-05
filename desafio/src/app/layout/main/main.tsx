import Link from "next/link"

export function Main(){
    return(
        <main>
          <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About Us</Link>
                </li>
                <li>
                    <Link href="/blog/hello-world">Blog Post</Link>
                </li>
            </ul>
        </main>
    )
}