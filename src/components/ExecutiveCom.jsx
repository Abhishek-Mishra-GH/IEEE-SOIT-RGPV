import React from "react";
import image from "../assets/photo_2024-06-06_17-27-50 1.svg"
const DrJitendraAgrawal = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 bg-white  rounded-lg">
      <div className="flex justify-center">
        <img
          src={image}
          className="h-72 mb-10 mt-16 rounded-lg "
          alt="img"
        />
      </div>
      <h1
        className="text-xl sm:text-3xl lg:text-4xl font-bold text-center"
        style={{ color: "#002250", fontFamily: "Poppins, sans-serif" }}
      >
        Dr. Jitendra Agrawal- Counselor
      </h1>
      <p style={{ color: "#002250", fontFamily: "Poppins, sans-serif" }} className=" font-bold text-center mb-1 sm:mb-10">Associate Professor at School of Information Technology, Rajiv Gandhi Prodyougiki Vishwavidyalaya</p>

      <section className="mb-4 sm:mb-6">
        <h2
          className="text-lg sm:text-xl font-semibold mb-2"
          style={{ color: "#002250", fontFamily: "Poppins, sans-serif" }}
        >
          Educational Background
        </h2>
        <ul
          className="list-disc list-inside"
          style={{ color: "#000", fontFamily: "Poppins, sans-serif" }}
        >
          <li>
          MCA in Computer Science from Smarat Ashok Technological Institute Vidisha (1994 - 2000)
          </li>
        </ul>
      </section>

      <section className="mb-4 sm:mb-6">
        <h2
          className="text-lg sm:text-xl font-semibold mb-2"
          style={{ color: "#002250", fontFamily: "Poppins, sans-serif" }}
        >
          Professional Experience and Research Work
        </h2>
        <p
          className="mb-2 sm:mb-4"
          style={{ color: "#000", fontFamily: "Poppins, sans-serif" }}
        >
         Dr. Agrawal has 25 years of teaching and research experience, focusing on Data Mining, Soft Computing, Machine Learning, and Information Security.
        </p>
        <p
          className="mb-2 sm:mb-4"
          style={{ color: "#000", fontFamily: "Poppins, sans-serif" }}
        >
        </p>
        <ul
          className="list-disc list-inside"
          style={{ color: "#000", fontFamily: "Poppins, sans-serif" }}
        >
          <li>
          He has guided 45 Masters students and is currently guiding 07 doctoral and 05 Masters’ students.
          </li>
          <li>
          He has published over 60 research papers, some awarded as best papers in reputed conferences.
          </li>
          <li>
          He has authored 07 books.
          </li>
          <li>
          Recipient of the Best Teacher award in Information Technology by World Education Congress.
          </li>
        </ul>
      </section>

      <section className="mb-4 sm:mb-6">
        <h2
          className="text-lg sm:text-xl font-semibold mb-2"
          style={{ color: "#002250", fontFamily: "Poppins, sans-serif" }}
        >
          Contributions and Improvements:
        </h2>
        <ul
          className="list-disc list-inside"
          style={{ color: "#000", fontFamily: "Poppins, sans-serif" }}
        >
          <li>Dr. Agrawal has significantly contributed to professional bodies like ACM, IEEE, and CSI.</li>
          <li>Founding faculty sponsor for ACM Students Chapter at RGPV Bhopal.</li>
          <li>Secretary of ACM Chapter Bhopal and Vice Chairman Cum Chairman Elect Computer Society of India Bhopal Chapter 2017-18.</li>
          <li>Actively involved in editorial boards of several journals and international conference committees.</li>
        </ul>
      </section>

      <section className="mb-4 sm:mb-6">
        <h2
          className="text-lg sm:text-xl font-semibold mb-2"
          style={{ color: "#002250", fontFamily: "Poppins, sans-serif" }}
        >
          Involvement with IEEE
        </h2>
        <p
          className="mb-2 sm:mb-4"
          style={{ color: "#000", fontFamily: "Poppins, sans-serif" }}
        >
          <ul className="list-disc list-inside"
          style={{ color: "#000", fontFamily: "Poppins, sans-serif" }}>
            <li>Bhopal representative of IEEE, MP Sub Section.</li>
            <li>His involvement in IEEE has helped students at RGPV gain access to international conferences, workshops, and various professional development opportunities.</li>
          </ul>
        </p>
      </section>

      <section>
        <h2
          className="text-lg sm:text-xl font-semibold mb-2"
          style={{ color: "#002250", fontFamily: "Poppins, sans-serif" }}
        >
          Gratitude
        </h2>
        <p
          className="mb-2 sm:mb-4"
          style={{ color: "#000", fontFamily: "Poppins, sans-serif" }}
        >
          We extend our gratitude to Dr. Jitendra Agrawal for his relentless efforts in bringing new opportunities to our students through IEEE. His dedication has immensely uplifted the college and contributed to the professional growth of many.
        </p>
      </section>
    </div>
  );
};

export default DrJitendraAgrawal;