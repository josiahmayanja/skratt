export default function Home() {
  return (
    <div className="bg-customLightLightYellow p-4">
      <h1 className="text-5xl font-sans font-bold text-customLightBlue mt-5 mb-5">
        Polera din svensk som pro.
      </h1>
      <div className="flex" >
        <h1 className="text-5xl font-sans font-bold text-customLightBlue mb-5">
          <span className="bg-customLightRed text-customDarkRed mr-3 underline">
            Polera
          </span>
          din
          <span className="bg-customLightRed text-customDarkRed ml-4 mr-3 underline">
            svensk
          </span>
          som
          <span className="bg-customLightRed text-customDarkRed ml-3 mr-0.5 underline">
            pro
          </span>
          .
        </h1> 
        
        <div className="rounded-md"> ←
        <div className="bg-red-200 font-sans p-4 rounded-md w-1/2">
          <h2 className="font-bold font-sans text-red-700 underline">
            Before Skrätt:
          </h2>
          <p>Incorrect word choices and incomplete phrasing</p>
        </div>
        </div>
      </div>
      <h1 className="text-5xl font-sans font-bold text-customLightBlue mb-5">
        <span className="bg-customLighLightGreen text-customLightGreen mr-3 underline">
          Förfina
        </span>
        din
        <span className="bg-customLighLightGreen text-customLightGreen ml-3.5 mr-3.5 underline">
          svenska
        </span>
        som
        <span className="bg-customLighLightGreen text-customLightGreen ml-3 mr-0.5 underline">
          ett proffs
        </span>
        .
      </h1>
      <h1 className="text-5xl font-sans font-bold text-customLightBlue mb-10">
        Förfina din svenska som ett proffs.
      </h1>

      {/* Before and After Skrätt Section */}
      <div className="flex space-x-8 my-4">
        <div className="bg-red-200 font-sans p-4 rounded-md w-1/2">
          <h2 className="font-bold font-sans text-red-700 underline">
            Before Skrätt:
          </h2>
          <p>Incorrect word choices and incomplete phrasing</p>
        </div>
        <div className="bg-green-200 font-sans p-4 rounded-md w-1/2">
          <h2 className="font-bold  text-green-700 underline">After Skrätt:</h2>
          <p>Improves word choice for a natural, professional expression</p>
        </div>
      </div>

      <hr className="border-4 border-customBlue my-4" />

      <h1 className="text-5xl font-sans font-bold text-customBlue mb-4">
        Polish Your Swedish Like a Pro.
      </h1>

      <p className="text-lg font-sans font-bold mb-8 text-customGold">
        Real-time grammar and tone-checking for Swedish learners and native
        speakers. Skrätt makes your writing{" "}
        <span className="font-bold italic underline">clear</span>,{" "}
        <span className="font-bold italic underline">correct</span>, and{" "}
        <span className="font-bold italic underline">culturally accurate</span>.
      </p>

      {/* Start Writing Button */}
      <button className="bg-customDarkGreen font-sans text-white py-3 px-6 rounded-md text-xl font-bold mb-8 hover:bg-green-700 transition-colors duration-200 shadow-md">
        Start Writing in Swedish
      </button>

      {/* Language Toggle */}
      <div className="flex justify-end space-x-2 text-gray-600 text-lg">
        <span>EN</span>
        <span>|</span>
        <span>SV</span>
      </div>
    </div>
  );
}
