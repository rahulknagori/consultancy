import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Navigation, Pagination, A11y, Autoplay, Scrollbar } from "swiper";
import { ToastContainer } from "react-toastify";

import {
  FaInstagram,
  FaUserShield,
  FaMoneyCheckAlt,
  FaCheckSquare,
} from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import ConnectUsModal from "../components/HomePage/ConnectUsModal";

const Home: NextPage = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      <ConnectUsModal open={openModal} setOpenModal={setOpenModal} />
      <div className={`${styles.container} mx-auto max-w-7xl`}>
        <Head>
          <title>FlyBrod | Study Abroad Consultants</title>
          <meta
            name="description"
            content="Looking for professional overseas education consultants? We provide expert guidance and support to students and families looking to study abroad. From finding the right program to navigating the application process, we're here to help every step of the way."
          />
          <meta
            name="keywords"
            content="study abroad, study abroad consultants Uk, study abroad consultants near me, consultants, UK, education, overseas study, study abroad programs,  study abroad agency, study abroad consultants, international education, study abroad advisors"
          />
          <link rel="icon" href="/home/logo.png" />
        </Head>
        <div
          className={`z-20 ${styles["whatsapp-logo"]}`}
          style={{ position: "fixed", bottom: 30, right: 50 }}
        >
          <a href="https://wa.me/919110274844">
            <Image width={40} height={40} src="/home/whatsapp-icon.png" />
          </a>
        </div>
        <div className="relative overflow-hidden bg-white">
          <div className="mx-auto max-w-7xl">
            <ToastContainer />
            <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32 ">
              <svg
                className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
                fill="currentColor"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <polygon points="50,0 100,0 50,100 0,100" />
              </svg>

              <div>
                <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
                  <nav
                    className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                    aria-label="Global"
                  >
                    <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                      <div className="flex w-full items-center justify-between md:w-auto">
                        <a href="#">
                          <span className="sr-only">FlyBrod</span>
                          <Image
                            width={64}
                            height={45}
                            alt="Abroad Education Consultants"
                            className="w-auto"
                            src="/home/logo.png"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
                      <a
                        href="#"
                        className="font-medium text-gray-500 hover:text-gray-900"
                      >
                        FlyBrod
                      </a>
                    </div>
                  </nav>
                </div>
              </div>

              <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-5xl">
                    <span className="block xl:inline">
                      Achieve your Study Abroad Dreams with &nbsp;
                    </span>
                    <span className="block text-indigo-600 xl:inline">
                      India's Top Consultants
                    </span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                    Achieving your goal of studying abroad has never been easier
                    with our expert help. We have carefully selected the top
                    overseas education consultants in India to ensure a smooth
                    and stress-free process for you.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div
                      onClick={() => setOpenModal(!openModal)}
                      className="rounded-md shadow"
                    >
                      <a
                        href="#"
                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-3 md:px-10 md:text-lg"
                      >
                        Talk to an Expert
                      </a>
                    </div>
                  </div>
                  <div className="w-100 grid grid-cols-1 mt-5 md:grid-cols-3">
                    <div className="flex bg-emerald-600 items-center p-1">
                      <Image
                        width={28}
                        height={28}
                        src="/home/OISC-logo.webp"
                      ></Image>
                      <div className="font-bold text-white ml-1">CERTIFIED</div>
                    </div>
                    <div className="bg-red-700	flex items-center p-1">
                      <div className="w-20 bg-red p-1">
                        <img
                          className="w-100"
                          src="/home/britishcouncillogo.webp"
                        ></img>
                      </div>
                      <div className="font-bold text-white ml-2">CERTIFIED</div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <Image
              width={1000}
              height={1000}
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
              src="/home/interaction_with_employee.jpg"
              alt="customer interacting with the employee"
            />
          </div>
        </div>
        {/*   4 simple steps */}
        <div className="mt-5">
          <h2 className="text-4xl text-center mt-1 font-bold tracking-tight text-gray-900 sm:text-5xl">
            Study abroad in 4 simple steps
          </h2>
          <p className="text-center mt-3">
            Our team will guide you through every step of the study abroad
            process, from consultation to visa, at no cost.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <div className="relative z-4">
              <span className="p-1 rounded-md text-xs text-white bg-emerald-600">
                Free
              </span>
              <div className="absolute right-5 z-1 text-indigo-300 md:text-9xl text-8xl font-bold">
                1
              </div>
              <h2 className="text-2xl relative z-4 font-bold tracking-tight text-gray-900">
                Consultation
              </h2>
              <p className="text-base relative z-4 text-gray mt-2">
                Share your study abroad goals with us and our team will contact
                you to understand your needs, shortlist universities and
                destinations that match your preferences, and provide expert
                advice on the best options for you.
              </p>
            </div>
            <div className="relative z-4">
              <span className="p-1 rounded-md text-xs text-white bg-emerald-600">
                Free
              </span>
              <div className="absolute right-5 z-1 text-indigo-300 md:text-9xl text-8xl font-bold">
                2
              </div>
              <h2 className="text-2xl relative z-4 font-bold tracking-tight text-gray-900">
                Document Preparation and Verification
              </h2>
              <p className="text-base relative z-4 text-gray mt-2">
                We provide a comprehensive document preparation and verification
                service to ensure that your application is complete and meets
                all the necessary requirements for your chosen program.
              </p>
            </div>
            <div className="relative z-4">
              <span className="p-1 rounded-md text-xs text-white bg-emerald-600">
                Free
              </span>
              <div className="absolute right-5 z-1 text-indigo-300 md:text-9xl text-8xl font-bold">
                3
              </div>
              <h2 className="text-2xl relative z-4 font-bold tracking-tight text-gray-900">
                Application Assistance
              </h2>
              <p className="text-base relative z-4 text-gray mt-2">
                Receive help with writing a strong statement of purpose,
                preparing for IELTS exams and faculty interviews, and building a
                professional CV. We also offer advice on how to stand out to
                admissions committees.
              </p>
            </div>
            <div className="relative z-4">
              <span className="p-1 rounded-md text-xs text-white bg-emerald-600">
                Free
              </span>
              <div className="absolute right-5 z-1 text-indigo-300 md:text-9xl text-8xl font-bold">
                4
              </div>
              <h2 className="text-2xl relative z-4 font-bold tracking-tight text-gray-900">
                Visa and Payment
              </h2>
              <p className="text-base relative z-4 text-gray mt-2">
                Our team will guide you through the visa application process,
                including mock interviews and provide advice on finding suitable
                accommodation. All our services are free of charge, with the
                fees paid directly to the university.
              </p>
            </div>
          </div>
        </div>
        {/* destinations */}
        <div className="bg-indigo-50">
          <h2 className="pt-5 text-4xl text-center mt-20 font-bold tracking-tight text-gray-900 sm:text-5xl">
            Destinations
          </h2>
          <p className="sm:px-14 md:px-28 text-base text-center relative z-4 text-gray mt-4">
            Currently, we are assisting students to pursue their dream of
            studying abroad in these countries.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-7 pb-5">
            <div className=" flex flex-col items-center">
              <Image
                width={110}
                height={110}
                className="m-auto"
                alt="destinations - study in the UK"
                src="/home/study-in-uk.png"
              ></Image>
              <h3 className="text-center font-bold mt-3 ">Study in the UK</h3>
            </div>
            <div className=" flex flex-col items-center">
              <Image
                width={110}
                height={110}
                className="m-auto"
                alt="destinations - study in Canada"
                src="/home/study-in-canada.png"
              ></Image>
              <h3 className="text-center font-bold mt-3 ">Study in Canada</h3>
            </div>
            <div className="flex flex-col items-center">
              <Image
                width={110}
                height={110}
                className="m-auto"
                alt="destinations - study in the Australia"
                src="/home/study-in-australia.png"
              ></Image>
              <h3 className="text-center font-bold mt-3 ">Study in Ireland</h3>
            </div>
          </div>
        </div>
        {/* why choose us */}
        <div className="relative mt-14">
          {/* <div className="w-20 h-20 rounded-full bg-red-100 absolute top-10 left-80"></div>
        <div className="w-20 h-20 rounded-full bg-indigo-100 opacity-50 absolute left-96 top-16"></div> */}
          <h2 className="text-4xl text-center  font-bold tracking-tight text-gray-900 sm:text-5xl">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className="max-w-96 m-auto">
              <Image
                width={400}
                height={400}
                alt="why choose us section"
                src="/home/why-choose-us.png"
              ></Image>
            </div>
            <div>
              <div className="max-w-md">
                <div className="flex items-center">
                  <FaMoneyCheckAlt className="text-indigo-600" size={20} />
                  <h5 className="text-gray font-bold tracking-tight ml-4">
                    Free Study Abroad Services
                  </h5>
                </div>
                <p className="tracking-tight ml-9 mt-1 ">
                  We offer a range of study abroad services completely free of
                  charge, including university selection, application support,
                  and visa guidance, so you can focus on securing the best
                  tuition prices for your chosen university.
                </p>
              </div>
              <div className="max-w-md mt-5">
                <div className="flex items-center">
                  <FaMoneyCheckAlt className="text-indigo-600" size={20} />
                  <h5 className="text-gray font-bold tracking-tight ml-4">
                    Show Money Assistance
                  </h5>
                </div>
                <p className="tracking-tight ml-9 mt-1 ">
                  Our show money assistance helps students alleviate financial
                  stress and settle into their studies in the UK with ease. By
                  covering expenses, students can fully immerse themselves in
                  their education and reach their full potential.
                </p>
              </div>
              <div className="max-w-md mt-5">
                <div className="flex items-center">
                  <FaUserShield className="text-indigo-600" size={20} />
                  <h5 className="text-gray font-bold tracking-tight ml-4">
                    Expert Consultants
                  </h5>
                </div>
                <p className=" tracking-tight  ml-9 mt-1">
                  Our team of highly skilled education consultants from India
                  boasts over 7 years of experience in assisting students
                  through every step of the study abroad process, offering a
                  tailored and effortless experience.
                </p>
              </div>
              {/* <div className="max-w-md mt-5">
                <div className="flex items-center">
                  <FaGgCircle className="text-indigo-600" size={20} />
                  <h5 className="text-gray font-bold tracking-tight ml-4">
                    Convenient and Efficient Visa Process
                  </h5>
                </div>
                <p className="tracking-tight  ml-9 mt-1">
                  We offer an easy-to-use online platform for all your visa
                  needs, streamlining the process and minimizing the stress of
                  the visa application process, resulting in a high success
                  rate.
                </p>
              </div> */}
              <div className="max-w-md mt-5">
                <div className="flex items-center">
                  <FaCheckSquare className="text-indigo-600" size={20} />
                  <h5 className="text-gray font-bold tracking-tight ml-4">
                    High Visa Success Rate
                  </h5>
                </div>
                <p className="tracking-tight ml-9 mt-1">
                  We conduct a thorough assessment of each student's profile to
                  ensure they meet the requirements and have the best chance of
                  success in the visa application process.
                </p>
              </div>
              <button
                onClick={() => setOpenModal(true)}
                className="bg-indigo-600 rounded-md mt-4 ml-9 text-white hover:bg-indigo-700 px-8 py-2"
              >
                Talk to our expert
              </button>
            </div>
          </div>
        </div>
        <div className="bg-indigo-50">
          <h2 className="pt-5 text-4xl text-center mt-20 font-bold tracking-tight text-gray-900 sm:text-5xl">
            Partnered with 200+ universities
          </h2>
          <p className="sm:px-14 max-w-4xl m-auto md:px-28 text-base text-center relative z-4 text-gray mt-4 ">
            Our consultants have established partnerships with over 200
            universities worldwide, providing students with access to a wide
            range of top-ranked institutions and diverse academic programs.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-7 pb-5">
            <div className="flex flex-col items-center">
              <Image
                width={110}
                height={110}
                className="m-auto rounded-full"
                alt="UWS Scotland"
                src="/home/uws-scotland.jpeg"
              ></Image>
              <h3 className="text-center font-bold mt-3 ">
                University of the West of Scotland
              </h3>
            </div>
            <div className=" flex flex-col items-center">
              <Image
                width={110}
                height={110}
                className="m-auto rounded-full"
                alt="York st john"
                src="/home/york-st-john.jpeg"
              ></Image>
              <h3 className="text-center font-bold mt-3 ">
                York St John University
              </h3>
            </div>
            <div className="flex flex-col items-center">
              <Image
                width={110}
                height={110}
                className="m-auto rounded-full"
                alt="University of east london"
                src="/home/univeristy-of-east-london.jpeg"
              ></Image>
              <h3 className="text-center font-bold mt-3 ">
                University of East London
              </h3>
            </div>
            <div className="flex flex-col items-center">
              <Image
                width={110}
                height={110}
                className="m-auto rounded-full"
                alt="University of east london"
                src="/home/University-of-glasgow.jpeg"
              ></Image>
              <h3 className="text-center font-bold mt-3 ">
                University of Glasgow
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-7 pb-5">
            <div className=" flex flex-col items-center">
              <Image
                width={110}
                height={110}
                className="m-auto rounded-full"
                alt="UWS Scotland"
                src="/home/Regent's-university-london.jpeg"
              ></Image>
              <h3 className="text-center font-bold mt-3 ">
                Regent's University London
              </h3>
            </div>
            <div className=" flex flex-col items-center">
              <Image
                width={110}
                height={110}
                className="m-auto rounded-full"
                alt="York st john"
                src="/home/University-of-Greenwich.jpeg"
              ></Image>
              <h3 className="text-center font-bold mt-3 ">
                University of Greenwich
              </h3>
            </div>
            <div className="flex flex-col items-center">
              <Image
                width={110}
                height={110}
                className="m-auto rounded-full"
                alt="University of east london"
                src="/home/Imperial-College-London.jpeg"
              ></Image>
              <h3 className="text-center font-bold mt-3 ">
                Imperial College London
              </h3>
            </div>
            <div className="flex flex-col items-center">
              <Image
                width={110}
                height={110}
                className="m-auto rounded-full"
                alt="University of east london"
                src="/home/Northumbria-University-London.jpeg"
              ></Image>
              <h3 className="text-center font-bold mt-3 ">
                Northumbria University London
              </h3>
            </div>
          </div>
        </div>

        {/* testimonials */}
        <h2 className="text-4xl text-center mt-14 font-bold tracking-tight text-gray-900 sm:text-5xl">
          Student Stories
        </h2>
        <p className="sm:px-14 md:px-28 max-w-4xl m-auto text-base text-center relative z-4 text-gray mt-4">
          Our students have recently been accepted to universities in Canada,
          the UK and Ireland. What are you waiting for?
        </p>
        <div className="flex justify-between mt-10 bg-indigo-50 relative">
          <div className={` ${styles["slanted-div"]}`}></div>
          <div
            className={`h-100 md:w-7/12 lg:w-6/12 z-10 bg-red-700 p-5 hidden md:block ${styles["success-div"]}`}
          >
            <p className="text-white text-2xl text-center font-medium md:text-5xl mt-7">
              Success
            </p>
            <p className="text-white text-center text-base md:text-4xl">
              Stories
            </p>
          </div>

          <Swiper
            // install Swiper modules
            className={"swiper-pagination-home"}
            modules={[Navigation, Pagination, A11y, Scrollbar, Autoplay]}
            spaceBetween={50}
            slidesPerView={3}
            autoplay={{
              delay: 5000,
            }}
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              480: {
                slidesPerView: 1.5,
              },
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2.2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
          >
            {[
              "testimonial-1.png",
              "testimonial-2.png",
              "testimonial-3.png",
              "testimonial-4.png",
              "testimonial-5.png",
            ].map((_item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="max-w-sm rounded-lg p-5 md:p-7">
                    <div className="shadow-lg flex flex-col justify-between leading-normal">
                      <Image
                        src={`/home/${_item}`}
                        width={220}
                        className="rounded"
                        height={200}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        {/* footer */}
        <div className="bg-gray-800 mt-14">
          <div className="flex flex-col px-8 md:flex-row md:justify-between text-white p-3 md:px-24 bg-indigo-600">
            <p className="text-sm w-full md:w-2/4 font-medium">
              Get Connected with us on Social Networks
            </p>
            <div className="w-full md:w-2/4 flex mt-2 md:mt-0 justify-end">
              <div className="flex justify-end w-12 mr-0">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://instagram.com/fly_brod?igshid=YmMyMTA2M2Y="
                >
                  <FaInstagram />
                </a>
                {/* <FaFacebook /> */}
              </div>
            </div>
          </div>
          <div className="flex flex-col px-8 md:flex-row md:justify-between text-white p-3 mt-4 md:mt-0 md:px-24 pb-10">
            <div className="max-w-xs w-full md:w-2/4">
              <p className="font-bold">FLYBROD</p>
              <p className="text-sm mt-2">
                We can put our knowledge and experience to work for you from the
                very start of your study abroad journey – from finding a
                reputable institution abroad to helping with visa applications.
              </p>
            </div>
            <ul className="w-full md:w-2/4 flex mt-2 md:mt-0 md:items-end flex-col">
              <li className="text-sm mb-2">Phone: +919110274844</li>
              <li className="text-sm mb-2">Email: info@flybrod.com</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
