import { FaBowlingBall, FaHandshake, FaHeadphones, FaIdBadge, FaTruck } from "react-icons/fa";
import { FaBookJournalWhills } from "react-icons/fa6";

export default function ModalDescription (){
   return (
    <section className="py-10">
        <div className="border border-gray-200">
    <div className="flex justify-center border-b border-gray-200">
        <button className="px-6 py-4 border-b-2 border-orange-500 font-medium">DESCRIPTION</button>
        <button className="px-6 py-4 font-medium">ADDITIONAL INFORMATION</button>
        <button className="px-6 py-4 font-medium">SPECIFICATION</button>
        <button className="px-6 py-4 font-medium">REVIEW</button>
        
    </div>
    <div className="grid grid-col-1 md:grid-cols-3 gap-8 p-8">
        <div>
            <h3 className="font-semibold mb-3">Description</h3>
            <p className="text-gray-600">The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip - the first Apple silicon designed for pros - you get groundbreaking performance and amazing battery life. Add to that a stunning Liquid Retina XDR display,the best camera and audio ever in a Mac notebook, and all the ports you need. The first notebook of its kind, this MacBook Pro is a best. M1 Pro takes the exceptional performance of the M1 architecture to a whole new level for pro users.</p>
            <p className="py-2">Even the most ambitious projects are easily handled with up to 10CPU cores, up to 16 CPU cores, a 16-core Neural Engine, and dedicated encode and decode and media engines that support H.264, HEVC and ProRes codecs.</p>
        </div>
        <div className="md:border-r md:border-gray-200 md:pr-6 space-y-6">
            <h3 className="font-semibold mb-3">Feature</h3>
            <ul className="space-y-3 text-xl">
                <li className="flex items-center gap-2">
                    <FaBowlingBall  className="text-orange-600"/>
                    free 1 year Warranty</li>
                <li className="flex items-center gap-2">
                    <FaTruck  className="text-orange-600"/>
                    free shipping & fastest Delivery</li>
                <li className="flex items-center gap-2">
                    <FaHandshake className="text-orange-600"/>
                    100% Money-black guarantee</li>
                <li className="flex items-center gap-2">
                    <FaHeadphones className="text-orange-600"/>
                    24/7 Customer support</li>
                <li className="flex items-center gap-2">
                    <FaBookJournalWhills className="text-orange-600"/>
                    Secure payment method</li>
            </ul>
        </div>
        <div className="px-6 space-y-6">
            <h3 className="font-semi-bold mb-3">Shipping Information</h3>
            <p>Courier: 2-4 days, free shipping</p>
            <p>Local Shipping: up to one week</p>
            <p>UPS Ground: 4-6 days</p>
            <p>Unishop Global Export: 3-4 days, $39.00</p>
        </div>
    </div>
</div>
    </section>
   ) 
}