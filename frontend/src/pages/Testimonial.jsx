import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import styles from "./Testimonial.module.css"; // Import CSS module

export default function Testimonial() {
  return (
    <>
      <div>
        <div className={styles.mySwiper}>
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className={styles.swiper} // Use className from CSS module
          >
            <SwiperSlide className={styles.swiperSlide}>
              {" "}
              {/* Use className from CSS module */}
              <section className="bg-white dark:bg-gray-900 ">
                <div className="w-full px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                  <figure className="w-full mx-auto">
                    <svg
                      className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                      viewBox="0 0 24 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                        fill="currentColor"
                      />
                    </svg>
                    <blockquote>
                      <p className="lg:text-2xl md:text-xl text-lg font-medium text-gray-900 dark:text-white">
                        "It was great experience to work in suvidha foundation,
                        team work is very good. They conduct daily meetings to
                        guide how to work,which they make our work more easy.
                        So, overall it's amazing organization to learn."
                      </p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center mt-6 space-x-3">
                      <img
                        className="w-6 h-6 rounded-full"
                        src="https://suvidhafoundationedutech.org/img/Testimonials/1.jpg"
                        alt="profile picture"
                      />
                      <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                        <div className="pr-3 font-medium text-gray-900 dark:text-white">
                          Divina Malfoy
                        </div>
                        <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                          Intern
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </section>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              {" "}
              {/* Use className from CSS module */}
              <section className="bg-white dark:bg-gray-900 ">
                <div className="w-full px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                  <figure className="w-full mx-auto">
                    <svg
                      className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                      viewBox="0 0 24 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                        fill="currentColor"
                      />
                    </svg>
                    <blockquote>
                      <p className="lg:text-2xl md:text-xl text-lg font-medium text-gray-900 dark:text-white">
                        "It was a great experience working with your NGO. I
                        learned to connect with the society and helped the
                        underprivileged section of the society."
                      </p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center mt-6 space-x-3">
                      <img
                        className="w-6 h-6 rounded-full"
                        src="https://suvidhafoundationedutech.org/img/Testimonials/9.jpg"
                        alt="profile picture"
                      />
                      <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                        <div className="pr-3 font-medium text-gray-900 dark:text-white">
                          Lekhashree H J
                        </div>
                        <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                          Intern
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </section>
            </SwiperSlide>

            <SwiperSlide className={styles.swiperSlide}>
              {" "}
              {/* Use className from CSS module */}
              <section className="bg-white dark:bg-gray-900 ">
                <div className="w-full px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                  <figure className="w-full mx-auto">
                    <svg
                      className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                      viewBox="0 0 24 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                        fill="currentColor"
                      />
                    </svg>
                    <blockquote>
                      <p className="lg:text-2xl md:text-xl text-lg font-medium text-gray-900 dark:text-white">
                        "The experience here at Suvidha Foundation was
                        wonderful. I learnt a lot. It was worth it."
                      </p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center mt-6 space-x-3">
                      <img
                        className="w-6 h-6 rounded-full"
                        src="https://suvidhafoundationedutech.org/img/Testimonials/2.jpg"
                        alt="profile picture"
                      />
                      <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                        <div className="pr-3 font-medium text-gray-900 dark:text-white">
                          Samrudhi Nawale
                        </div>
                        <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                          Intern
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </section>
            </SwiperSlide>
            {/* Add more SwiperSlide components as needed */}
          </Swiper>
        </div>
      </div>
    </>
  );
}
