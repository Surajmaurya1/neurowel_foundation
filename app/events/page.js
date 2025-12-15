"use client";

export default function EventsPage() {
  return (
    <main className="pt-28">

      {/* =================== HERO BANNER =================== */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden shadow-lg">
          <img
            src="/events.jpg"
            alt="Events Hero Banner"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-xl">
              Our Events
            </h1>
          </div>
        </div>

        <p className="text-center mt-6 text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Discover our current initiatives and upcoming programs designed to empower communities.
        </p>
      </section>

      {/* ====================== CURRENT EVENTS ====================== */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <h2 className="text-3xl font-semibold mb-6 text-purple-700 dark:text-purple-400">
          Current Events
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* --- CURRENT EVENT 1 --- */}
          <div className="bg-white dark:bg-[#121212] rounded-xl shadow p-6">
            <img
              src="/placeholder.jpg"
              className="w-full h-48 object-cover rounded-lg mb-4"
              alt="Clean Water Event"
            />
            <h3 className="text-xl font-semibold mb-2">Rural Clean Water Mission</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
              Providing clean drinking water filters to 150+ families.
            </p>
            <p className="text-sm font-medium text-purple-700 dark:text-purple-400">
              📅 Ongoing • Jan–Feb 2025
            </p>
          </div>

          {/* --- CURRENT EVENT 2 --- */}
          <div className="bg-white dark:bg-[#121212] rounded-xl shadow p-6">
            <img
              src="/placeholder.jpg"
              className="w-full h-48 object-cover rounded-lg mb-4"
              alt="Digital Literacy Camp"
            />
            <h3 className="text-xl font-semibold mb-2">Women Digital Literacy Camp</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
              Training 200 rural women in digital and financial literacy.
            </p>
            <p className="text-sm font-medium text-purple-700 dark:text-purple-400">
              📅 Ongoing • Feb–Mar 2025
            </p>
          </div>

          {/* --- CURRENT EVENT 3 --- */}
          <div className="bg-white dark:bg-[#121212] rounded-xl shadow p-6">
            <img
              src="/placeholder.jpg"
              className="w-full h-48 object-cover rounded-lg mb-4"
              alt="Healthcare Event"
            />
            <h3 className="text-xl font-semibold mb-2">Health Awareness Mega Drive</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
              Free medical checkups & nutrition awareness for school children.
            </p>
            <p className="text-sm font-medium text-purple-700 dark:text-purple-400">
              📅 Ongoing • Jan 2025
            </p>
          </div>

        </div>
      </section>

      {/* ====================== UPCOMING EVENTS ====================== */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <h2 className="text-3xl font-semibold mb-6 text-purple-700 dark:text-purple-400">
          Upcoming Events
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* --- UPCOMING EVENT 1 --- */}
          <div className="bg-white dark:bg-[#121212] p-6 rounded-xl shadow">
            <img
              src="/placeholder.jpg"
              className="w-full h-48 object-cover rounded-lg mb-4"
              alt="Tree Plantation"
            />
            <h3 className="text-xl font-semibold mb-2">purple Earth Tree Plantation</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
              Goal: Plant 10,000 trees across 5 districts.
            </p>
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
              📅 March 2025
            </p>
          </div>

          {/* --- UPCOMING EVENT 2 --- */}
          <div className="bg-white dark:bg-[#121212] p-6 rounded-xl shadow">
            <img
              src="/placeholder.jpg"
              className="w-full h-48 object-cover rounded-lg mb-4"
              alt="Leadership Summit"
            />
            <h3 className="text-xl font-semibold mb-2">Youth Leadership Summit</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
              Empowering 500+ students with civic leadership training.
            </p>
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
              📅 April 2025
            </p>
          </div>

          {/* --- UPCOMING EVENT 3 --- */}
          <div className="bg-white dark:bg-[#121212] p-6 rounded-xl shadow">
            <img
              src="/placeholder.jpg"
              className="w-full h-48 object-cover rounded-lg mb-4"
              alt="Mental Health Camp"
            />
            <h3 className="text-xl font-semibold mb-2">Rural Mental Health Camp</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
              Counselling & stress-relief workshops for families.
            </p>
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
              📅 May 2025
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
