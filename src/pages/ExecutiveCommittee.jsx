import React from "react";
import image from "../assets/photo_2024-06-06_17-27-50 1.svg";
import mentorImg from "../assets/sanjeevsir.jpg"

import clsx from "clsx";
import Navbar from "../components/Navbar";

const ExecutiveCommittee = () => {
  const [readingMoreS1, setReadingMoreS1] = React.useState(false);
  const [readingMoreS2, setReadingMoreS2] = React.useState(false);


  return (
    <>
    <Navbar />
      <div>
        <h1 className="text-4xl text-center font-semibold mt-6 mb-2">
          {"Executive Committee".toUpperCase()}
        </h1>
      </div>
      {/* Counselor */}
      <div className="flex flex-col-reverse sm:flex-row p-6">
        {/* left section */}
        <div className="sm:w-1/2 max-h-full p-4">
          <div className={clsx("overflow-hidden", !readingMoreS1 && "h-[23.8rem]")}>
            {" "}
            <section className="mb-4 sm:mb-6">
              <h2 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: "#002250", fontFamily: "Poppins, sans-serif" }}>
                Educational Background
              </h2>
              <ul className="list-disc list-inside" style={{ color: "#000", fontFamily: "Poppins, sans-serif" }}>
                <li>MCA in Computer Science from Smarat Ashok Technological Institute Vidisha (1994 - 2000)</li>
              </ul>
            </section>
            <section className="mb-4 sm:mb-6">
              <h2 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: "#002250", fontFamily: "Poppins, sans-serif" }}>
                Professional Experience and Research Work
              </h2>
              <p className="mb-2 sm:mb-4" style={{ color: "#000", fontFamily: "Poppins, sans-serif" }}>
                Dr. Agrawal has 25 years of teaching and research experience, focusing on Data Mining, Soft Computing, Machine Learning, and Information Security.
              </p>
              <p className="mb-2 sm:mb-4" style={{ color: "#000", fontFamily: "Poppins, sans-serif" }}></p>
              <ul className="list-disc list-inside" style={{ color: "#000", fontFamily: "Poppins, sans-serif" }}>
                <li>He has guided 45 Masters students and is currently guiding 07 doctoral and 05 Masters’ students.</li>
                <li>He has published over 60 research papers, some awarded as best papers in reputed conferences.</li>
                <li>He has authored 07 books.</li>
                <li>Recipient of the Best Teacher award in Information Technology by World Education Congress.</li>
              </ul>
            </section>
            <section className="mb-4 sm:mb-6">
              <h2 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: "#002250", fontFamily: "Poppins, sans-serif" }}>
                Contributions and Improvements:
              </h2>
              <ul className="list-disc list-inside" style={{ color: "#000", fontFamily: "Poppins, sans-serif" }}>
                <li>Dr. Agrawal has significantly contributed to professional bodies like ACM, IEEE, and CSI.</li>
                <li>Founding faculty sponsor for ACM Students Chapter at RGPV Bhopal.</li>
                <li>Secretary of ACM Chapter Bhopal and Vice Chairman Cum Chairman Elect Computer Society of India Bhopal Chapter 2017-18.</li>
                <li>Actively involved in editorial boards of several journals and international conference committees.</li>
              </ul>
            </section>
            <section className="mb-4 sm:mb-6">
              <h2 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: "#002250", fontFamily: "Poppins, sans-serif" }}>
                Involvement with IEEE
              </h2>
              <div className="mb-2 sm:mb-4" style={{ color: "#000", fontFamily: "Poppins, sans-serif" }}>
                <ul className="list-disc list-inside" style={{ color: "#000", fontFamily: "Poppins, sans-serif" }}>
                  <li>Bhopal representative of IEEE, MP Sub Section.</li>
                  <li>His involvement in IEEE has helped students at RGPV gain access to international conferences, workshops, and various professional development opportunities.</li>
                </ul>
              </div>
            </section>
            <section>
              <h2 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: "#002250", fontFamily: "Poppins, sans-serif" }}>
                Gratitude
              </h2>
              <p className="mb-2 sm:mb-4" style={{ color: "#000", fontFamily: "Poppins, sans-serif" }}>
                We extend our gratitude to Dr. Jitendra Agrawal for his relentless efforts in bringing new opportunities to our students through IEEE. His dedication has immensely uplifted the college and contributed to the professional growth of many.
              </p>
            </section>
          </div>

          <button
            onClick={() => setReadingMoreS1(prev => !prev)}
            className="bg-primary-background text-white hover:text-primary-foreground px-4 py-2 rounded-sm flex-1 mt-3">
            Read {!readingMoreS1 ? "More" : "Less"}
          </button>
        </div>

        {/* right section */}

        <div className="flex flex-col items-center gap-4 p-4 max-h-[calc(100vh-10rem)]">
          <div className="flex justify-center">
            <img src={image} className="h-72 rounded-lg " alt="img" />
          </div>
          <div className="w-[75%]">
            <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold" style={{ color: "#002250", fontFamily: "Poppins, sans-serif" }}>
              Dr. Jitendra Agrawal- Counselor
            </h1>
            <p style={{ color: "#002250", fontFamily: "Poppins, sans-serif" }} className=" font-bold mb-1 sm:mb-10">
              Associate Professor at School of Information Technology, Rajiv Gandhi Prodyougiki Vishwavidyalaya
            </p>
          </div>
        </div>
      </div>

      {/* Mentor */}
      <div className="flex flex-col-reverse sm:flex-row p-6">

        {/* left section */}

        <div className="flex flex-col items-center gap-4 p-4 max-h-[calc(100vh-10rem)]">
          <div className="flex justify-center">
            <img src={mentorImg} className="h-72 rounded-lg " alt="img" />
          </div>
          <div className="w-[75%]">
            <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold" style={{ color: "#002250", fontFamily: "Poppins, sans-serif" }}>
              Dr. Sanjeev Sharma - Mentor
            </h1>
            <p style={{ color: "#002250", fontFamily: "Poppins, sans-serif" }} className=" font-bold mb-1 sm:mb-10">
              Professor at School of Information Technology, Rajiv Gandhi Prodyougiki
              Vishwavidyalaya
            </p>
          </div>
        </div>

        {/* right section */}
        <div className="sm:w-1/2 max-h-full p-4">
          <div className={clsx("overflow-hidden", !readingMoreS2 && "h-[23.8rem]")}>
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
                  Bachelor's Degree in Engineering from Samrat Ashok Technological
                  Institute, Vidisha (1987 - 1991)
                </li>
                <li>
                  Master of Technology (MTech) from Maulana Azad National Institute of
                  Technology (1999 - 2001)
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
                Dr. Sanjeev Sharma boasts an illustrious teaching career spanning over
                two decades. Currently, he holds the prestigious position of Dean of
                Faculty at Rajiv Gandhi Prodyogiki Vishwavidyalaya (RGPV), a role he
                has excelled in since December 2020. His long-standing tenure since
                June 2003 as Director and Professor at the School of Information
                Technology at RGPV further underscores his unwavering dedication and
                exceptional leadership.
              </p>
              <p
                className="mb-2 sm:mb-4"
                style={{ color: "#000", fontFamily: "Poppins, sans-serif" }}
              >
                His scholarly pursuits encompass Mobile Computing, Data Mining, and
                Social Media Analytics. Dr. Sharma has demonstrated unparalleled
                expertise in steering numerous international conferences, including:
              </p>
              <ul
                className="list-disc list-inside"
                style={{ color: "#000", fontFamily: "Poppins, sans-serif" }}
              >
                <li>
                  International Conference on Social Networking and Computational
                  Intelligence (SCI 2K19) since 2019
                </li>
                <li>
                  International Conference on Data Engineering and Applications since
                  2018
                </li>
                <li>
                  International Conference on Data, Engineering, and Applications
                  (IDEA 2017) since 2016
                </li>
                <li>
                  International Conference on Cloud, Big Data, and Trust (November
                  2013)
                </li>
              </ul>
            </section>

            <section className="mb-4 sm:mb-6">
              <h2
                className="text-lg sm:text-xl font-semibold mb-2"
                style={{ color: "#002250", fontFamily: "Poppins, sans-serif" }}
              >
                Certifications
              </h2>
              <ul
                className="list-disc list-inside"
                style={{ color: "#000", fontFamily: "Poppins, sans-serif" }}
              >
                <li>EMC Academic Associate</li>
              </ul>
            </section>

            <section className="mb-4 sm:mb-6">
              <h2
                className="text-lg sm:text-xl font-semibold mb-2"
                style={{ color: "#002250", fontFamily: "Poppins, sans-serif" }}
              >
                Publications
              </h2>
              <p
                className="mb-2 sm:mb-4"
                style={{ color: "#000", fontFamily: "Poppins, sans-serif" }}
              >
                Dr. Sharma's profound contributions to academic literature are
                manifested in his numerous publications, including:
              </p>
              <ul
                className="list-disc list-inside"
                style={{ color: "#000", fontFamily: "Poppins, sans-serif" }}
              >
                <li>Advanced Database Management System</li>
                <li>
                  A Comparative Study of Fuzzy PSO (Particle Swarm Optimization) and
                  Fuzzy SVD (Singular Value Decomposition)-Based RBF (Radial Basis
                  Function) Neural Network for Multi-Label Classification
                </li>
                <li>
                  Reducing Overhead in Movement-Based Dynamic Location Management
                  Scheme for Cellular Networks
                </li>
                <li>
                  Region Duplication Forgery Detection Technique Based on SURF
                  (Speeded-Up Robust Features) and HAC (Hierarchical Agglomerative
                  Clustering)
                </li>
                <li>
                  Defending Wireless Ad Hoc Networks from Single and Cooperative Black
                  Holes
                </li>
              </ul>
            </section>

            <section className="mb-4 sm:mb-6">
              <h2
                className="text-lg sm:text-xl font-semibold mb-2"
                style={{ color: "#002250", fontFamily: "Poppins, sans-serif" }}
              >
                Contributions to RGPV
              </h2>
              <p
                className="mb-2 sm:mb-4"
                style={{ color: "#000", fontFamily: "Poppins, sans-serif" }}
              >
                Dr. Sanjeev Sharma has played an instrumental role in the advancement
                of Rajiv Gandhi Prodyogiki Vishwavidyalaya. His visionary leadership
                and innovative contributions have significantly uplifted the
                institution's stature. Under his stewardship, the university has seen
                the organization of esteemed international conferences and the
                promotion of cutting-edge research, thereby enhancing its academic
                prestige and influence.
              </p>
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
                As an active and influential member of IEEE, Dr. Sharma has adeptly
                leveraged the platform to cultivate a vibrant community of learning
                and innovation. His endeavors through IEEE have been pivotal in
                providing students with opportunities to engage in advanced research
                and gain invaluable exposure to global technological advancements.
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
                We extend our deepest gratitude to Dr. Sanjeev Sharma for his
                unwavering commitment to academic excellence and for ushering in new
                opportunities through IEEE. His remarkable contributions continue to
                inspire and shape the future trajectories of our students and faculty,
                fortifying the institution's legacy of distinction.
              </p>
            </section>
          </div>

          <button
            onClick={() => setReadingMoreS2(prev => !prev)}
            className="bg-primary-background text-white hover:text-primary-foreground px-4 py-2 rounded-sm flex-1 mt-3">
            Read {!readingMoreS2 ? "More" : "Less"}
          </button>

        </div>
      </div>
    </>
  );
};

export default ExecutiveCommittee;
