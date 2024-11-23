import React from "react";
import Link from "next/link";
import Image from "next/image";

const Watches = () => {

    const watchData = [
        {id: 1 , name: 'DateJust' , price: 'USD $3,800' , description: 'the Datejust also embodies a harmonious and classic elegance.' , image: '/Date-just.webp'},
        {id: 2 , name: 'Submariner' , price: 'USD $17,100' , description: 'The Submariner was launched at a time when diving was becoming increasingly popular.' , image: '/Submariner.png'},
        {id: 3 , name: 'GMT-Master-||' , price: 'USD $11,000' , description: ' The GMT-Master accompanied the major transformations of its era.' , image: '/GMT-Master.png'},
        {id: 4 , name: 'Day-Date' , price: 'USD $22,000', description: 'The Day-Date was originally designed to be a precious instrument for everyday use.' , image: '/Day-Date.webp'},
        {id: 5 , name: 'Cosmograph Daytona' , price: 'USD $20,100' , description: 'the design of the Cosmograph Daytona keeps the legend of this unique chronograph alive.' , image: '/Cosmograph-Daytona.webp'},
        {id: 6 , name: 'Deep Sea' , price: 'USD $54,200' , description: 'The Rolex Deepsea meets the most exacting requirements of professional divers in its resistance to pressure, precision and reliability.' , image: '/Deep-Sea.png'}

    ]
    return (
        <div>
            <div className="watches">
                {watchData.map((watch) => (
                  <div key={watch.id} className="watch-card">
                     <Image src={watch.image} alt={watch.name} width="300" height="500"/>
                     <h3>{watch.name}</h3>
                     <p>{watch.description}</p>
                     <div className="price">{watch.price}</div>
                    <Link href="/form"><button>Add to Cart</button></Link>
                  </div>
                ))}
            </div>
        </div>
    )
}

export default Watches