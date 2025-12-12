"use client";


export default function DonationCard() {

  

  return (
    <section id="donate" className="max-w-4xl mx-auto px-6 py-16">
      <div className="bg-white border border-slate-200 rounded-2xl p-10 shadow-sm md:flex items-start gap-12">

        {/* Left */}
        <div className="flex-1 mt-[45px]">

       
          <div className="mb-6">
            <svg
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              className="text-green-600"
            >
              <path
                d="M12 21s-6-4.35-9-8.5C1.5 10.2 1 7.9 2.5 6.4c2-2 5-.5 5 .5s1.5-2.5 4.5-2.5 4.5 3 4.5 3-1-2.5 1.5-3.5S23 7.4 21 10.5C18 14.65 12 21 12 21z"
                fill="currentColor"
              />
            </svg>
          </div>

          <h3 className="text-4xl font-semibold tracking-tight">Support Our Work</h3>

          <p className="text-slate-600 mt-4 text-lg leading-relaxed">
            Your donation helps provide clean water, education, and healthcare 
            to communities in need. Every contribution makes a meaningful impact.
          </p>

          
        </div>

        {/* Form */}
        <div className="mt-10 md:mt-0 w-full md:w-[360px] bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm">
          <form className="space-y-5">

            <input 
              className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" 
              placeholder="Full Name" 
            />

            <input 
              className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" 
              placeholder="Email Address" 
            />

            
           

            {/*Amount */}
            <input 
              className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" 
              placeholder="Amount"
            />

            <button className="w-full bg-green-600 text-white rounded-lg py-3 font-medium hover:bg-green-700 transition">
              Donate
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}
