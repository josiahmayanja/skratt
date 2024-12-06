import { useLanguage } from "./languageContext";

export default function Home() {
  //const { language } = useLanguage();

  return (
    <div className=" h-full bg-customLightLightYellow p-4">
      {/* Main Header */}
      <div className="flex">
        <h1 className="text-5xl font-sans font-bold text-customLightBlue mt-5 mb-5">
          Polera din svensk som pro.
        </h1>
        <div className="flex">
          <div className="bg-customLightRed font-sans p-2 rounded-md ml-5 border-4 border-customDarkRed">
            <h2 className="font-bold font-sans text-black-700 underline text-center">
              Before Skrätt:
            </h2>
            <p>Incorrect word choices and incomplete phrasing</p>
          </div>
        </div>
      </div>

      {/* Incorrect and Explanation Section */}
      <div className="flex">
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
      </div>

      {/* Correct Version */}
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
      <div className="flex">
        <h1 className="text-5xl font-sans font-bold text-customLightBlue mb-10">
          Förfina din svenska som ett proffs.
        </h1>

        <div className="flex m-0.3">
          <div className="bg-customLighLightGreen font-sans p-2f rounded-md ml-5 border-4 border-customDarkGreen">
          <h2 className="font-bold text-black-700 underline text-center">After Skrätt:</h2>
          <p>Improves word choice for a natural, professional expression</p>
          </div>
        </div>
      </div>

      
      <hr className="border-4 border-customBlue my-4" />

      {/* Polish Swedish Like a Pro Section */}
      <h1 className="text-5xl font-sans font-bold text-customBlue mb-4">
        Polish Your Swedish Like a Pro.
      </h1>
      <p className="text-lg font-sans font-bold mb-8 text-customGold">
        Real-time grammar and tone-checking for Swedish learners and native
        speakers.
        <br />
        Skrätt makes your writing{" "}
        <span className="font-bold italic underline">clear</span>,{" "}
        <span className="font-bold italic underline">correct</span>, and{" "}
        <span className="font-bold italic underline">culturally accurate</span>.
      </p>

      {/* Start Writing Button */}
      <button className="bg-customDarkGreen font-sans text-white py-3 px-6 rounded-md text-xl font-bold mb-8 hover:bg-green-700 transition-colors duration-200 shadow-md">
       {/*language === "EN" ? "Start Writing in Swedish" : "Börja skriva på svenska"*/}
      </button>
    </div>
  );
}
