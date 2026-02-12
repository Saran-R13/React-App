import React from "react";
import Header from "./Header";
import {Footer} from "./Footer";

export function About() {
  return (
    <>
      <Header />
      <section className="about-container">
        <section className="about-fst-container">
          <img
            src="https://brickandbuild.in/wp-content/uploads/2020/08/brickbuild_aboutus.jpg"
            alt=""
          />
          <section className="box-container">
            <h2> Rayora Land Developers</h2>
            <p className="box1">
              <span className="span">Rayora</span> is a modern real estate
              platform dedicated to buying and selling land and residential
              plots with transparency and trust. Our goal is to make property
              transactions simple, secure, and accessible for everyone.
            </p>
            <p className="box2">
              We specialize in listing verified lands and plots in prime
              locations, providing complete property details including price,
              size, and legal information. Rayora helps customers find the right
              property based on their budget and requirements.
            </p>
            <p className="box3">
              Our platform ensures smooth communication between buyers and
              sellers, making the entire process faster and more efficient.
            </p>
          </section>
        </section>
        <section className="about-snd-container">
          <h1>WHO WE ARE ?...</h1>
          <section className="sec-box-container">
            <section className="sec-box1">
              <p>
                Rayora is not just a real estate company — we are a dedicated
                land-focused platform that ensures every property listed is
                verified, legally clear, and transparently presented. Unlike
                traditional brokers, we emphasize complete documentation
                clarity, secure digital communication, and customer-first
                service.
              </p>
              <p>
                Our core task is to simplify land and plot transactions by
                combining professional guidance with modern technology. From
                verified listings to smooth buyer-seller coordination, Rayora
                ensures every transaction is safe, efficient, and trustworthy.
              </p>
            </section>
            <section className="sec-box2">
              <img
                src="https://www.shutterstock.com/image-photo/question-mark-house-model-on-600nw-2483839495.jpg"
                alt=""
              />
            </section>
          </section>
        </section>
        <section className="about-trd-container">
          <section className="trd-box-container">
            <div className="trd-box">
              <h1> Mission---Rayora</h1>
              <div className="trd-box1">
                <img
                  src="https://www.shutterstock.com/image-photo/innovative-architecture-inventive-civil-engineering-600nw-2144337233.jpg"
                  alt=""
                />
                <p>
                  To deliver exceptional real estate solutions by providing
                  transparent, technology-driven, and customer-centric land and
                  property services. We are committed to ensuring secure
                  transactions, verified property listings, and long-term value
                  creation for our clients and partners.
                </p>
              </div>
            </div>
            <div className="trd-box">
              <h1>Vision---Rayora</h1>
              <div className="trd-box2">
                <p>
                  To deliver exceptional real estate solutions by providing
                  transparent, technology-driven, and customer-centric land and
                  property services. We are committed to ensuring secure
                  transactions, verified property listings, and long-term value
                  creation for our clients and partners.
                </p>
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/049/685/801/small/construction-workers-celebrate-on-top-of-a-skyscraper-at-night-photo.jpg"
                  alt=""
                />
              </div>
            </div>
          </section>
          <section className="about-frth-container">
            <div className="h1tag">
              <h1>Our Core Value</h1>
            </div>
            <div className="frth-box">
              <p> 🤝Integrity</p>
              <p> 🔍Transparency</p>
              <p> 🏘️Customer Commitment</p>
              <p> 🚀Innovation</p>
              <p> 📈Excellence</p>
            </div>
          </section>
          <section className="about-fifth-container">
            <div className="fifth-h1">
              <h1>Why Choose Rayora</h1>
            </div>
            <div className="fifth-box1">
              <p>✔️ Verified property listings </p>
              <p>✔️ Clear documentation</p>
              <p>✔️ Professional support</p>
              <p>✔️ Prime locations</p>
              <p>✔️ Secure transactions</p>
            </div>
            <div className="fifth-box2">
              <p>
                At Rayora, we are committed to delivering reliable property
                solutions with honesty and professionalism, ensuring long-term
                value for our clients.
              </p>
            </div>
          </section>
        </section>
      </section>
      <Footer />
    </>
  );
}
