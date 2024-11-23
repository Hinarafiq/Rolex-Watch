import Link from "next/link"
export default function Forms(){
    return(
        <div className="form">
            <h1 className="fade-in">Enter Your Details</h1>
            
            <div>
            <form className="form-content">

                <input type="text" placeholder="Enter Your Name" />
                <input type="email" placeholder="Enter Your Email" />
                <input type="number" placeholder="Enter Your Card Number" />
                <input type="text" placeholder="Enter Your Address" />

                <Link href="/thankyou"><button className="py-5 px-2 bg-blue-700 text-white rounded-lg mb-8">Place Your Order</button></Link>
            </form>
            </div>
        </div>
    )
}