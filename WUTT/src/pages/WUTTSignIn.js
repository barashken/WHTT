import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./WUTTSignIn.module.css";
const WUTTSignIn = () => {
  const navigate = useNavigate();

  const onLogo1Click = useCallback(() => {
    navigate("/wutt-main");
  }, [navigate]);

  return (
    <div className={styles.wuttSignin}>
      <div className={styles.frame1}>
        <div className={styles.sectionscBpbtie}>
          <div className={styles.divscKsgusi}>
            <div className={styles.div}>
              <div className={styles.mostPopularDestinations}>
                Most popular destinations
              </div>
              <div className={styles.divscBshghc}>
                <div className={styles.divnewBgBlur} />
                <img
                  className={styles.arrowrightsvgIcon}
                  alt=""
                  src="/arrowrightsvg3.svg"
                />
                <div className={styles.divscEcqkzk}>
                  <div className={styles.divscJlqhrw}>
                    <div className={styles.greece}>Greece</div>
                    <img
                      className={styles.greeceSmalljpgIcon}
                      alt=""
                      src="/greece-smalljpg1@2x.png"
                    />
                  </div>
                  <div className={styles.divscJlqhrw1}>
                    <div className={styles.portugal}>Portugal</div>
                    <img
                      className={styles.greeceSmalljpgIcon}
                      alt=""
                      src="/portugal-smalljpg1@2x.png"
                    />
                  </div>
                  <div className={styles.divscJlqhrw2}>
                    <div className={styles.norway}>Norway</div>
                    <img
                      className={styles.greeceSmalljpgIcon}
                      alt=""
                      src="/norway-smalljpg1@2x.png"
                    />
                  </div>
                  <div className={styles.divscJlqhrw3}>
                    <div className={styles.georgia}>Georgia</div>
                    <img
                      className={styles.greeceSmalljpgIcon}
                      alt=""
                      src="/georgia-smalljpg1@2x.png"
                    />
                  </div>
                  <div className={styles.divscJlqhrw4}>
                    <div className={styles.mexico}>Mexico</div>
                    <img
                      className={styles.greeceSmalljpgIcon}
                      alt=""
                      src="/mexicopng1@2x.png"
                    />
                  </div>
                  <div className={styles.divscJlqhrw5}>
                    <div className={styles.montenegro}>Montenegro</div>
                    <img
                      className={styles.greeceSmalljpgIcon}
                      alt=""
                      src="/montenegro-smalljpg1@2x.png"
                    />
                  </div>
                </div>
                <img
                  className={styles.arrowrightsvgIcon1}
                  alt=""
                  src="/arrowrightsvg4.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.div1}>
            <div className={styles.divvideodivlandingpage}>
              <div className={styles.divvideopageVideowrapper} />
            </div>
            <div className={styles.divnewMagicworks}>
              <div className={styles.div2}>
                <b className={styles.howTheMagic}>How The Magic Works</b>
                <div className={styles.connectingTheDots}>
                  Connecting the dots of your trip, backed by local experts
                </div>
              </div>
              <div className={styles.divnewCardsMainDiv}>
                <div className={styles.div3}>
                  <div className={styles.beforeYourTrip}>Before Your Trip</div>
                  <div className={styles.divnewCards}>
                    <img
                      className={styles.newUpdateBeforeyourtrippngIcon}
                      alt=""
                      src="/new-update-beforeyourtrippng@2x.png"
                    />
                    <div className={styles.divnewCardsContent}>
                      <div className={styles.divnewCardInnerName}>
                        <img
                          className={styles.mobilelogopngIcon}
                          alt=""
                          src="/mobilelogopng@2x.png"
                        />
                        <div className={styles.planningTool}>Planning Tool</div>
                      </div>
                      <div className={styles.pnewMagicP}>
                        <div className={styles.createAPersonalizedContainer}>
                          <span
                            className={styles.createAPersonalizedContainer1}
                          >
                            <p className={styles.createAPersonalized}>
                              Create a personalized trip itinerary in a fun and
                            </p>
                            <p
                              className={styles.createAPersonalized}
                            >{`effortless way supported by in-depth & unique local`}</p>
                            <p className={styles.createAPersonalized}>
                              heroes knowledge.
                            </p>
                          </span>
                        </div>
                      </div>
                      <div className={styles.divcssErkj9oControl}>
                        <img
                          className={styles.divcss187htnsIndicatorcontaIcon}
                          alt=""
                          src="/divcss187htnsindicatorcontainer2.svg"
                        />
                        <div className={styles.divcss1d8n9bt}>
                          <div className={styles.chooseADestination}>
                            Choose a Destination
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.div4}>
                  <div className={styles.beforeYourTrip}>During Your Trip</div>
                  <div className={styles.divnewCards1}>
                    <img
                      className={styles.newUpdateDuringyourplantripIcon}
                      alt=""
                      src="/new-update-duringyourplantrippng@2x.png"
                    />
                    <div className={styles.divnewCardsContent1}>
                      <div className={styles.divnewCardInnerName1}>
                        <img
                          className={styles.thankyouvgiconpng}
                          alt=""
                          src="/thankyouvgiconpng1@2x.png"
                        />
                        <div className={styles.appGuide}>App Guide</div>
                      </div>
                      <div className={styles.pnewMagicP1}>
                        <div className={styles.useOurUniqueContainer}>
                          <span
                            className={styles.createAPersonalizedContainer1}
                          >
                            <p className={styles.createAPersonalized}>
                              Use our unique on-trip travel companion app to
                            </p>
                            <p className={styles.createAPersonalized}>
                              receive real-time detailed guidance and seamlessly
                            </p>
                            <p className={styles.createAPersonalized}>
                              navigate day-by-day through the points of
                              interests.
                            </p>
                          </span>
                        </div>
                      </div>
                      <div className={styles.divsitebtnhover}>
                        <div className={styles.learnMoreAbout}>
                          Learn more about the App Guide
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.divnewWhyplanyourtrip}>
              <div className={styles.div5}>
                <b className={styles.whyPlanyourtrip}>Why PlanYourTrip</b>
                <div className={styles.enablingIndependentTravellerContainer}>
                  <span className={styles.createAPersonalizedContainer1}>
                    <p className={styles.createAPersonalized}>
                      Enabling independent travellers to plan, book and
                      experience their own
                    </p>
                    <p
                      className={styles.createAPersonalized}
                    >{`personalized trip in an easy & fun way.`}</p>
                  </span>
                </div>
              </div>
              <div className={styles.divnewGridBox}>
                <div className={styles.div6}>
                  <img
                    className={styles.newIllustrator1pngIcon}
                    alt=""
                    src="/new-illustrator-1png1@2x.png"
                  />
                  <div className={styles.span}>
                    <div
                      className={styles.personalizedItineraryWithinContainer}
                    >
                      <p className={styles.createAPersonalized}>
                        Personalized itinerary within
                      </p>
                      <p className={styles.createAPersonalized}>
                        seconds and for free curated by our
                      </p>
                      <p className={styles.createAPersonalized}>local heroes</p>
                    </div>
                  </div>
                </div>
                <div className={styles.div7}>
                  <img
                    className={styles.newIllustrator1pngIcon}
                    alt=""
                    src="/new-illustrator-2png1@2x.png"
                  />
                  <div className={styles.span1}>
                    <div
                      className={styles.personalizedItineraryWithinContainer}
                    >
                      <p className={styles.createAPersonalized}>
                        Two strong tools covering both
                      </p>
                      <p className={styles.createAPersonalized}>
                        planning and in-trip guidance
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.div8}>
                  <img
                    className={styles.newIllustrator1pngIcon}
                    alt=""
                    src="/illustrator203png1@2x.png"
                  />
                  <div className={styles.span2}>
                    <div
                      className={styles.personalizedItineraryWithinContainer}
                    >
                      <p className={styles.createAPersonalized}>
                        Automated synchronization
                      </p>
                      <p className={styles.createAPersonalized}>
                        between the planned itinerary and
                      </p>
                      <p className={styles.createAPersonalized}>
                        the in-trip app guide
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.div9}>
                  <img
                    className={styles.newIllustrator1pngIcon}
                    alt=""
                    src="/new-illustrator-4png1@2x.png"
                  />
                  <div className={styles.span3}>
                    <div
                      className={styles.personalizedItineraryWithinContainer}
                    >
                      <p className={styles.createAPersonalized}>
                        Community of local heroes, on the
                      </p>
                      <p className={styles.createAPersonalized}>
                        ground for you in all destinations
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.div10}>
              <b className={styles.whatPeopleSay}>
                What people say about PlanYourTrip
              </b>
              <div className={styles.divrow}>
                <div className={styles.divcolLg3}>
                  <div className={styles.great}>Great</div>
                  <div className={styles.iframe}>
                    <div className={styles.bodylight}>
                      <div className={styles.divtpWidgetWrapper}>
                        <div className={styles.atranslationsCheckoutourrevi}>
                          <div className={styles.checkOutOur}>
                            Check out our 22 reviews
                          </div>
                        </div>
                        <div className={styles.svg}>
                          <img
                            className={styles.frameIcon}
                            alt=""
                            src="/frame2.svg"
                          />
                        </div>
                        <div className={styles.svg1}>
                          <img
                            className={styles.frameIcon1}
                            alt=""
                            src="/frame3.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.divnewGridTrustpilotBox}>
                  <div className={styles.div11}>
                    <img
                      className={styles.newRatingStarsTrustpngIcon}
                      alt=""
                      src="/new-rating-stars-trustpng@2x.png"
                    />
                    <b className={styles.highlyRecommended}>
                      Highly recommended
                    </b>
                    <div className={styles.divtrustpilotdiscriptionpara}>
                      <div
                        className={styles.personalizedItineraryWithinContainer}
                      >
                        <p className={styles.createAPersonalized}>
                          I got a recommendation about a site from a friend.
                        </p>
                        <p className={styles.createAPersonalized}>
                          I have created a personalized trip itinerary super
                        </p>
                        <p className={styles.createAPersonalized}>
                          quickly for free.
                        </p>
                      </div>
                    </div>
                    <div className={styles.divtrustpilotdiscriptionpara1}>
                      <div
                        className={styles.personalizedItineraryWithinContainer}
                      >
                        <p className={styles.createAPersonalized}>
                          The local Hero is a great feature! For us, solo
                        </p>
                        <p className={styles.createAPersonalized}>
                          travelers its the best solution for a new place.
                        </p>
                        <p className={styles.createAPersonalized}>
                          Highly recommended
                        </p>
                      </div>
                    </div>
                    <i className={styles.marcus}>Marcus</i>
                  </div>
                  <div className={styles.div12}>
                    <img
                      className={styles.newRatingStarsTrustpngIcon}
                      alt=""
                      src="/new-rating-stars-trustpng1@2x.png"
                    />
                    <b className={styles.superEasyAnd}>Super easy and fun</b>
                    <div className={styles.divtrustpilotdiscriptionpara2}>
                      <div
                        className={styles.personalizedItineraryWithinContainer}
                      >
                        <p className={styles.createAPersonalized}>
                          Love the website, super easy, and fun with a great
                        </p>
                        <p className={styles.createAPersonalized}>
                          solution for anyone
                        </p>
                      </div>
                    </div>
                    <i className={styles.lara}>Lara</i>
                  </div>
                  <div className={styles.div12}>
                    <img
                      className={styles.newRatingStarsTrustpngIcon}
                      alt=""
                      src="/new-rating-stars-trustpng2@2x.png"
                    />
                    <b className={styles.greatExperience}>Great experience</b>
                    <div className={styles.divtrustpilotdiscriptionpara3}>
                      <div
                        className={styles.personalizedItineraryWithinContainer}
                      >
                        <p className={styles.createAPersonalized}>
                          My local Hero is Greece was amazing! Thank you
                        </p>
                        <p className={styles.createAPersonalized}>
                          Iraklis for this unique experience
                        </p>
                      </div>
                    </div>
                    <i className={styles.hansAndAnna}>Hans and Anna</i>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.divnewPartners}>
              <div className={styles.divnewPartnersMarginDiv}>
                <div className={styles.div14}>
                  <b className={styles.weAreProud}>
                    We are proud to call them partners
                  </b>
                  <div
                    className={styles.helpingUsTo}
                  >{`Helping us to provide safe, secure, hassle-free & memory making trip experiences to our clients`}</div>
                </div>
                <div className={styles.divnewGridPartnersBox}>
                  <img
                    className={styles.newDefaultPartner1pngIcon}
                    alt=""
                    src="/new-default-partner-1png@2x.png"
                  />
                  <img
                    className={styles.newDefaultPartner2pngIcon}
                    alt=""
                    src="/new-default-partner-2png@2x.png"
                  />
                  <img
                    className={styles.newDefaultPartner3pngIcon}
                    alt=""
                    src="/new-default-partner-3png@2x.png"
                  />
                  <img
                    className={styles.newDefaultPartner4pngIcon}
                    alt=""
                    src="/new-default-partner-4png@2x.png"
                  />
                  <img
                    className={styles.newDefaultPartner5pngIcon}
                    alt=""
                    src="/new-default-partner-5png@2x.png"
                  />
                  <img
                    className={styles.newDefaultPartner6pngIcon}
                    alt=""
                    src="/new-default-partner-6png@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className={styles.divbackimgreason}>
              <div className={styles.divnewReasons}>
                <div className={styles.div15}>
                  <b className={styles.theReasonsWhy}>
                    The reasons why travellers love PlanYourTrip
                  </b>
                  <div className={styles.deliveringTheGreatest}>
                    Delivering the greatest experience to our clients
                  </div>
                </div>
                <div className={styles.divnewTitlesReasonsDiv}>
                  <div className={styles.divnewTitlesRow}>
                    <img
                      className={styles.newReasons1pngIcon}
                      alt=""
                      src="/new-reasons-1png@2x.png"
                    />
                    <div className={styles.divnewReasonsDiscription}>
                      <div className={styles.easyPlanningTool}>
                        Easy planning tool
                      </div>
                      <div className={styles.div16}>
                        <div
                          className={
                            styles.personalizedItineraryWithinContainer
                          }
                        >
                          <p className={styles.createAPersonalized}>
                            Our free automated itinerary creator makes a
                            personalized itinerary within seconds.
                          </p>
                          <p
                            className={styles.createAPersonalized}
                          >{`We guarantee that you'll find the perfect trip according to your needs & preferences.`}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.divnewTitlesRow1}>
                    <img
                      className={styles.newReasons1pngIcon}
                      alt=""
                      src="/new-reasons-2png@2x.png"
                    />
                    <div className={styles.divnewReasonsDiscription1}>
                      <div className={styles.easyPlanningTool}>
                        Curated travel adventures
                      </div>
                      <div className={styles.div16}>
                        <div
                          className={
                            styles.personalizedItineraryWithinContainer
                          }
                        >
                          <p className={styles.createAPersonalized}>
                            Everything our hub offers is created or selected by
                            local experts who know the
                          </p>
                          <p className={styles.createAPersonalized}>
                            destination personally. Their local expertise
                            provides you an unforgettable trip.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.divnewTitlesRow2}>
                    <img
                      className={styles.newReasons1pngIcon}
                      alt=""
                      src="/new-reasons-3png@2x.png"
                    />
                    <div className={styles.divnewReasonsDiscription2}>
                      <div
                        className={styles.easyPlanningTool}
                      >{`Peace of mind thanks to a safe & secure hub`}</div>
                      <div className={styles.div18}>
                        <div
                          className={
                            styles.personalizedItineraryWithinContainer
                          }
                        >
                          <p
                            className={styles.createAPersonalized}
                          >{`We offer a manageable list of hotels, experiences, trails & tips linked to the itinerary`}</p>
                          <p
                            className={styles.createAPersonalized}
                          >{`& routes. Book them via our secure payment platform.`}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.divnewTitlesRow3}>
                    <img
                      className={styles.newReasons1pngIcon}
                      alt=""
                      src="/new-reasons-4png@2x.png"
                    />
                    <div className={styles.divnewReasonsDiscription3}>
                      <div className={styles.easyPlanningTool}>
                        Everything in your pocket
                      </div>
                      <div className={styles.div19}>
                        <div
                          className={
                            styles.personalizedItineraryWithinContainer
                          }
                        >
                          <p className={styles.createAPersonalized}>
                            Thanks to our virtual guide mobile application, you
                            always have access to your
                          </p>
                          <p
                            className={styles.createAPersonalized}
                          >{`itinerary, activities, reservations & navigation. Never miss a landmark, never get lost`}</p>
                          <p
                            className={styles.createAPersonalized}
                          >{`& find what you need within seconds`}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.divnewTitlesRow4}>
                    <img
                      className={styles.newReasons1pngIcon}
                      alt=""
                      src="/new-reasons-5png@2x.png"
                    />
                    <div className={styles.divnewReasonsDiscription4}>
                      <div
                        className={styles.easyPlanningTool}
                      >{`Human & local support during your trip`}</div>
                      <div className={styles.div20}>
                        <div
                          className={
                            styles.personalizedItineraryWithinContainer
                          }
                        >
                          <p
                            className={styles.createAPersonalized}
                          >{`Real-time virtual & human support with an app and a local hero who you can call`}</p>
                          <p className={styles.createAPersonalized}>
                            when planning your trip and/or during your stay.
                            Never
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.divcss253u24Control}>
                  <img
                    className={styles.divcss187htnsIndicatorcontaIcon1}
                    alt=""
                    src="/divcss187htnsindicatorcontainer3.svg"
                  />
                  <div className={styles.divcss1d8n9bt1}>
                    <div className={styles.chooseADestination1}>
                      Choose a Destination
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.divourteam}>
              <div className={styles.divpowerofteamheadingMainDi}>
                <b className={styles.whatPeopleSay}>The Power of one team</b>
                <div className={styles.bringingYouThe}>
                  Bringing you the most accurate and exciting travel
                  opportunities
                </div>
              </div>
              <div className={styles.divscGsydnn}>
                <div className={styles.divscJffhpj}>
                  <img
                    className={styles.newOmerFlumPerson1jpegIcon}
                    alt=""
                    src="/new-omer-flum-person-1jpeg@2x.png"
                  />
                  <div className={styles.divscJgpytc}>
                    <b className={styles.omerFlum}>Omer Flum</b>
                    <div className={styles.theLeadingForce}>
                      The leading force behind PlanYourTrip
                    </div>
                  </div>
                </div>
                <div className={styles.divscJffhpj1}>
                  <img
                    className={styles.newTsachiglobinpngIcon}
                    alt=""
                    src="/new-tsachiglobinpng1@2x.png"
                  />
                  <div className={styles.divscJgpytc1}>
                    <b className={styles.tsachiGlobin}>Tsachi Globin</b>
                    <div className={styles.theLeadingForce}>
                      Our Chief Trip Planning Officer
                    </div>
                  </div>
                </div>
              </div>
              <img
                className={styles.divscGxfvknIcon}
                alt=""
                src="/divscgxfvkn2.svg"
              />
              <div className={styles.divourteamdiscriptionpara}>
                <div className={styles.personalizedItineraryWithinContainer}>
                  <p className={styles.createAPersonalized}>
                    Our team at PlanYourTrip works closely with our Community of
                    Local
                  </p>
                  <p className={styles.createAPersonalized}>
                    Experts every day and night to continuously provide bring
                    you the most
                  </p>
                  <p className={styles.createAPersonalized}>
                    accurate and exciting travel opportunities.
                  </p>
                </div>
              </div>
              <div className={styles.divscIniqyp}>
                <b className={styles.meetTheLocal}>Meet the Local Heroes</b>
              </div>
            </div>
            <div className={styles.divmaincommited}>
              <div className={styles.divcommitedinnerdiv}>
                <b className={styles.weCareAbout}>
                  We care about our environment
                </b>
                <div className={styles.divnewEnvironmentLogosDiv}>
                  <img
                    className={styles.newEcologypngIcon}
                    alt=""
                    src="/new-ecologypng@2x.png"
                  />
                  <img
                    className={styles.newFootprintpngIcon}
                    alt=""
                    src="/new-footprintpng@2x.png"
                  />
                  <img
                    className={styles.newSaveEnvironmentpngIcon}
                    alt=""
                    src="/new-save-environmentpng@2x.png"
                  />
                  <img
                    className={styles.newPlaceEnvironmentpngIcon}
                    alt=""
                    src="/new-place-environmentpng@2x.png"
                  />
                </div>
                <div className={styles.p}>
                  <div className={styles.personalizedItineraryWithinContainer}>
                    <p className={styles.createAPersonalized}>
                      As travelers, we all care about local cultures and their
                      environment. For us, it is not just a slogan, but a
                    </p>
                    <p className={styles.createAPersonalized}>
                      way of life. It is quite simple, without it, there is no
                      life, there is no travel.
                    </p>
                  </div>
                </div>
                <div className={styles.p1}>
                  <div className={styles.personalizedItineraryWithinContainer}>
                    <p className={styles.createAPersonalized}>
                      That is why we optimize every travel, every experience,
                      and every adventure so it is as clean and
                    </p>
                    <p className={styles.createAPersonalized}>
                      sustainable as possible and pays the utmost respect to the
                      local culture and community.
                    </p>
                  </div>
                </div>
                <div className={styles.divscGiaqhp}>
                  <div className={styles.chooseADestination}>
                    Learn how we are Committed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.divscGefpzt}>
            <div className={styles.divscHalscm}>
              <img
                className={styles.newFooterLogo1pngIcon}
                alt=""
                src="/newfooterlogo-1png@2x.png"
              />
              <img
                className={styles.newFooterLogo2pngIcon}
                alt=""
                src="/newfooterlogo-2png@2x.png"
              />
              <img
                className={styles.newFooterLogo3pngIcon}
                alt=""
                src="/newfooterlogo-3png@2x.png"
              />
              <img
                className={styles.newFooterLogo4pngIcon}
                alt=""
                src="/newfooterlogo-4png@2x.png"
              />
              <img
                className={styles.newFooterLogo5pngIcon}
                alt=""
                src="/newfooterlogo-5png@2x.png"
              />
            </div>
          </div>
          <div className={styles.divcolLg10}>
            <div className={styles.divnewFooterItemBox}>
              <b className={styles.travelWithUs}>Travel with us</b>
              <div className={styles.planYourTrip}>Plan your trip</div>
              <div className={styles.appGuide1}>App Guide</div>
              <div className={styles.localHero}>Local hero</div>
              <div className={styles.selfGuidedPackages}>
                Self-guided packages
              </div>
              <div
                className={styles.hotelsAttractions}
              >{`Hotels & attractions`}</div>
            </div>
            <div className={styles.divnewFooterItemBox1}>
              <b className={styles.support}>Support</b>
              <div className={styles.faq}>FAQ</div>
              <div className={styles.cancellationPolicy}>
                Cancellation policy
              </div>
              <div className={styles.contactUs}>Contact us</div>
            </div>
            <div className={styles.divnewFooterItemBox2}>
              <b className={styles.partnerWithUs}>Partner with us</b>
              <div className={styles.becomeALocal}>Become a local hero</div>
              <div className={styles.contributeWithMore}>
                Contribute with more tip
              </div>
            </div>
            <div className={styles.divnewFooterItemBox3}>
              <b className={styles.company}>Company</b>
              <div className={styles.aboutUs}>About us</div>
              <div className={styles.ourTeam}>Our team</div>
              <div className={styles.joinPlanyourtrip}>Join PlanYourTrip</div>
              <div className={styles.environment}>Environment</div>
            </div>
            <div className={styles.divnewFooterItemBox4}>
              <b className={styles.legal}>Legal</b>
              <div className={styles.privacyPolicy}>Privacy policy</div>
              <div className={styles.termsOfUse}>Terms of use</div>
              <div className={styles.siteMap}>Site map</div>
            </div>
          </div>
          <div className={styles.bottom1}>
            <div className={styles.divrow1}>
              <div className={styles.divcolLg4}>
                <img
                  className={styles.newFooterPlaystorepngIcon}
                  alt=""
                  src="/new-footer-playstorepng@2x.png"
                />
                <img
                  className={styles.newFooterAppstorepngIcon}
                  alt=""
                  src="/new-footer-appstorepng@2x.png"
                />
              </div>
              <div className={styles.copyright2023Planyourtrip}>
                © Copyright 2023, PlanYourTrip
              </div>
              <div className={styles.supportplanyourtripcom}>
                Support@Planyourtrip.com
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className={styles.logoIcon} alt="" src="/logo3.svg" />
      <b className={styles.welcomeTo}>{`Welcome to `}</b>
      <img className={styles.maskGroupIcon} alt="" src="/mask-group10@2x.png" />
      <div className={styles.frameParent}>
        <div className={styles.aboutUsParent}>
          <b className={styles.help}>about us</b>
          <img className={styles.frameChild} alt="" src="/vector-7.svg" />
        </div>
        <div className={styles.aboutUsParent}>
          <b className={styles.help}>help</b>
          <img className={styles.frameChild} alt="" src="/vector-8.svg" />
        </div>
        <div className={styles.signInWrapper}>
          <b className={styles.help}>sign in</b>
        </div>
      </div>
      <div className={styles.eMailWrapper}>
        <b className={styles.eMail}>E-mail</b>
      </div>
      <div className={styles.passwordWrapper}>
        <b className={styles.password}>Password</b>
      </div>
      <img className={styles.wuttSigninChild} alt="" src="/group-37.svg" />
      <div className={styles.logInWrapper}>
        <b className={styles.help}>Log in</b>
      </div>
      <img
        className={styles.logoIcon1}
        alt=""
        src="/logo4.svg"
        onClick={onLogo1Click}
      />
    </div>
  );
};

export default WUTTSignIn;
