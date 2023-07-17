import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Components1.module.css";
const Components1 = () => {
  const navigate = useNavigate();

  const onProperty1hoveringContainer1Click = useCallback(() => {
    navigate("/wutt-signin");
  }, [navigate]);

  const onProperty1hoveringContainer2Click = useCallback(() => {
    navigate("/wutt-signin");
  }, [navigate]);

  const onProperty1Variant2Container5Click = useCallback(() => {
    navigate("/wutt-signin");
  }, [navigate]);

  const onLogoClick = useCallback(() => {
    navigate("/wutt-main");
  }, [navigate]);

  const onLetsHaveFun1Click = useCallback(() => {
    navigate("/wutt-summery");
  }, [navigate]);

  const onCostaRicaText2Click = useCallback(() => {
    navigate("/wutt-costarica");
  }, [navigate]);

  return (
    <div className={styles.components}>
      <div className={styles.property1defaultParent}>
        <div className={styles.property1default}>
          <div className={styles.findYourTrip}>Find Your Trip</div>
        </div>
        <div className={styles.property1hovering}>
          <div className={styles.findYourTrip}>Find Your Trip</div>
        </div>
      </div>
      <div className={styles.property1defaultGroup}>
        <div className={styles.property1default1}>
          <b className={styles.findYourTrip}>Sign In</b>
        </div>
        <div
          className={styles.property1hovering1}
          onClick={onProperty1hoveringContainer1Click}
        >
          <b className={styles.findYourTrip}>Sign In</b>
        </div>
      </div>
      <div className={styles.property1defaultContainer}>
        <div className={styles.property1default2}>
          <b className={styles.findYourTrip}>sign in</b>
        </div>
        <div
          className={styles.property1hovering2}
          onClick={onProperty1hoveringContainer2Click}
        >
          <b className={styles.findYourTrip}>sign in</b>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.property1default3}>
          <b className={styles.rePlan}>Re-Plan</b>
        </div>
        <div className={styles.property1hovering3}>
          <b className={styles.rePlan}>Re-Plan</b>
        </div>
      </div>
      <div className={styles.property1defaultParent1}>
        <div className={styles.property1default4}>
          <b className={styles.rePlan}>Continue</b>
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="/mask-group@2x.png"
          />
        </div>
        <div className={styles.property1hovering4}>
          <b className={styles.rePlan}>Continue</b>
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="/mask-group@2x.png"
          />
        </div>
      </div>
      <div className={styles.tripStyle}>
        <div className={styles.property1default5}>
          <img
            className={styles.property1defaultChild}
            alt=""
            src="/rectangle-9.svg"
          />
          <b className={styles.dynamic}>dynamic</b>
          <b className={styles.b}>1</b>
          <div className={styles.imLookingForContainer}>
            <p className={styles.imLookingFor}> im looking for a dynamic</p>
            <p className={styles.imLookingFor}> travel experience, exploring</p>
            <p className={styles.imLookingFor}> multiple destinations and</p>
            <p className={styles.coveringALotOfGround}>
              <span className={styles.coveringALot}> covering a lot o</span>
              <span className={styles.fGround}>f ground</span>
            </p>
          </div>
          <b className={styles.relaxed}>relaxed</b>
          <div className={styles.imSeekingAContainer}>
            <p className={styles.coveringALotOfGround}>
              im seeking a leisurely travel
            </p>
            <p className={styles.coveringALotOfGround}>
              {" "}
              experience, where i can immerse
            </p>
            <p className={styles.coveringALotOfGround}>
              Myself in one destination
            </p>
            <p className={styles.coveringALotOfGround}>
              and take My time exploring
            </p>
          </div>
          <img
            className={styles.property1defaultItem}
            alt=""
            src="/vector-9.svg"
          />
        </div>
        <div className={styles.property1mustBold}>
          <img
            className={styles.property1defaultChild}
            alt=""
            src="/rectangle-9.svg"
          />
          <b className={styles.dynamic1}>dynamic</b>
          <b className={styles.b}>1</b>
          <b className={styles.imLookingForContainer1}>
            <p className={styles.imLookingFor}> im looking for a dynamic</p>
            <p className={styles.imLookingFor}> travel experience, exploring</p>
            <p className={styles.imLookingFor}> multiple destinations and</p>
            <p className={styles.coveringALotOfGround}>
              <span className={styles.coveringALot}> covering a lot o</span>
              <span className={styles.fGround}>f ground</span>
            </p>
          </b>
          <b className={styles.relaxed}>relaxed</b>
          <div className={styles.imSeekingAContainer}>
            <p className={styles.coveringALotOfGround}>
              im seeking a leisurely travel
            </p>
            <p className={styles.coveringALotOfGround}>
              {" "}
              experience, where i can immerse
            </p>
            <p className={styles.coveringALotOfGround}>
              Myself in one destination
            </p>
            <p className={styles.coveringALotOfGround}>
              and take My time exploring
            </p>
          </div>
          <img
            className={styles.property1defaultItem}
            alt=""
            src="/vector-9.svg"
          />
        </div>
        <div className={styles.property1optionalBold}>
          <img
            className={styles.property1defaultChild}
            alt=""
            src="/rectangle-9.svg"
          />
          <b className={styles.dynamic}>dynamic</b>
          <b className={styles.b}>1</b>
          <div className={styles.imLookingForContainer}>
            <p className={styles.imLookingFor}> im looking for a dynamic</p>
            <p className={styles.imLookingFor}> travel experience, exploring</p>
            <p className={styles.imLookingFor}> multiple destinations and</p>
            <p className={styles.coveringALotOfGround}>
              <span className={styles.coveringALot}> covering a lot o</span>
              <span className={styles.fGround}>f ground</span>
            </p>
          </div>
          <b className={styles.relaxed2}>relaxed</b>
          <b className={styles.imSeekingAContainer2}>
            <p className={styles.coveringALotOfGround}>
              im seeking a leisurely travel
            </p>
            <p className={styles.coveringALotOfGround}>
              {" "}
              experience, where i can immerse
            </p>
            <p className={styles.coveringALotOfGround}>
              Myself in one destination
            </p>
            <p className={styles.coveringALotOfGround}>
              and take My time exploring
            </p>
          </b>
          <img
            className={styles.property1defaultItem}
            alt=""
            src="/vector-9.svg"
          />
        </div>
      </div>
      <div className={styles.tripLength}>
        <div className={styles.property1default5}>
          <img
            className={styles.property1defaultChild}
            alt=""
            src="/rectangle-9.svg"
          />
          <b className={styles.b}>2</b>
          <b className={styles.short}>short</b>
          <div className={styles.days}>
            <span className={styles.span}>{`3-5 `}</span>
            <span className={styles.days1}>days</span>
          </div>
          <img className={styles.vectorIcon} alt="" src="/vector-11.svg" />
          <img
            className={styles.property1variant4Inner}
            alt=""
            src="/vector-11.svg"
          />
          <b className={styles.medium}>medium</b>
          <div className={styles.days2}>
            <span className={styles.span}>{`6-9 `}</span>
            <span className={styles.days1}>days</span>
          </div>
          <b className={styles.long}>long</b>
          <div className={styles.days4}>
            <span className={styles.span}>{`10-16 `}</span>
            <span className={styles.days1}>days</span>
          </div>
        </div>
        <div className={styles.property1mustBold}>
          <img
            className={styles.property1defaultChild}
            alt=""
            src="/rectangle-9.svg"
          />
          <b className={styles.b}>2</b>
          <b className={styles.short1}>short</b>
          <b className={styles.days6}>
            <span className={styles.span}>{`3-5 `}</span>
            <span className={styles.days1}>days</span>
          </b>
          <img className={styles.vectorIcon} alt="" src="/vector-11.svg" />
          <img
            className={styles.property1variant4Inner}
            alt=""
            src="/vector-11.svg"
          />
          <b className={styles.medium}>medium</b>
          <div className={styles.days2}>
            <span className={styles.span}>{`6-9 `}</span>
            <span className={styles.days1}>days</span>
          </div>
          <b className={styles.long}>long</b>
          <div className={styles.days4}>
            <span className={styles.span}>{`10-16 `}</span>
            <span className={styles.days1}>days</span>
          </div>
        </div>
        <div className={styles.property1optionalBold}>
          <img
            className={styles.property1defaultChild}
            alt=""
            src="/rectangle-9.svg"
          />
          <b className={styles.b}>2</b>
          <b className={styles.short}>short</b>
          <div className={styles.days}>
            <span className={styles.span}>{`3-5 `}</span>
            <span className={styles.days1}>days</span>
          </div>
          <img className={styles.vectorIcon} alt="" src="/vector-11.svg" />
          <img
            className={styles.property1variant4Inner}
            alt=""
            src="/vector-11.svg"
          />
          <b className={styles.medium2}>medium</b>
          <b className={styles.days14}>
            <span className={styles.span}>{`6-9 `}</span>
            <span className={styles.days1}>days</span>
          </b>
          <b className={styles.long}>long</b>
          <div className={styles.days4}>
            <span className={styles.span}>{`10-16 `}</span>
            <span className={styles.days1}>days</span>
          </div>
        </div>
        <div className={styles.property1variant4}>
          <img
            className={styles.property1defaultChild}
            alt=""
            src="/rectangle-9.svg"
          />
          <b className={styles.b}>2</b>
          <b className={styles.short}>short</b>
          <div className={styles.days}>
            <span className={styles.span}>{`3-5 `}</span>
            <span className={styles.days1}>days</span>
          </div>
          <img className={styles.vectorIcon} alt="" src="/vector-11.svg" />
          <img
            className={styles.property1variant4Inner}
            alt=""
            src="/vector-11.svg"
          />
          <b className={styles.medium}>medium</b>
          <div className={styles.days2}>
            <span className={styles.span}>{`6-9 `}</span>
            <span className={styles.days1}>days</span>
          </div>
          <b className={styles.long3}>long</b>
          <b className={styles.days22}>
            <span className={styles.span}>{`10-16 `}</span>
            <span className={styles.days1}>days</span>
          </b>
        </div>
      </div>
      <div className={styles.chooseNature}>
        <div className={styles.property1default5}>
          <img
            className={styles.property1defaultChild}
            alt=""
            src="/rectangle-9.svg"
          />
          <b className={styles.b}>3</b>
          <img
            className={styles.property1defaultItem}
            alt=""
            src="/vector-9.svg"
          />
          <b className={styles.must}>must</b>
          <b className={styles.optional}>optional</b>
          <div className={styles.cravingAnImmersiveContainer}>
            <span className={styles.cravingAnImmersiveContainer1}>
              <p
                className={styles.coveringALotOfGround}
              >{`Craving an immersive `}</p>
              <p className={styles.coveringALotOfGround}>nature experience</p>
            </span>
          </div>
          <div className={styles.lookingForAContainer}>
            <p className={styles.coveringALotOfGround}>Looking for a break</p>
            <p className={styles.coveringALotOfGround}>
              {" "}
              from nature's embrace
            </p>
          </div>
        </div>
        <div className={styles.property1mustBold}>
          <img
            className={styles.property1defaultChild}
            alt=""
            src="/rectangle-9.svg"
          />
          <b className={styles.b}>3</b>
          <img
            className={styles.property1defaultItem}
            alt=""
            src="/vector-9.svg"
          />
          <b className={styles.must1}>must</b>
          <b className={styles.optional}>optional</b>
          <b className={styles.cravingAnImmersiveContainer2}>
            <span className={styles.cravingAnImmersiveContainer1}>
              <p
                className={styles.coveringALotOfGround}
              >{`Craving an immersive `}</p>
              <p className={styles.coveringALotOfGround}>nature experience</p>
            </span>
          </b>
          <div className={styles.lookingForAContainer}>
            <p className={styles.coveringALotOfGround}>Looking for a break</p>
            <p className={styles.coveringALotOfGround}>
              {" "}
              from nature's embrace
            </p>
          </div>
        </div>
        <div className={styles.property1optionalBold}>
          <img
            className={styles.property1defaultChild}
            alt=""
            src="/rectangle-9.svg"
          />
          <b className={styles.b}>3</b>
          <img
            className={styles.property1defaultItem}
            alt=""
            src="/vector-9.svg"
          />
          <b className={styles.must}>must</b>
          <b className={styles.optional2}>optional</b>
          <div className={styles.cravingAnImmersiveContainer}>
            <span className={styles.cravingAnImmersiveContainer1}>
              <p
                className={styles.coveringALotOfGround}
              >{`Craving an immersive `}</p>
              <p className={styles.coveringALotOfGround}>nature experience</p>
            </span>
          </div>
          <b className={styles.lookingForAContainer2}>
            <p className={styles.coveringALotOfGround}>Looking for a break</p>
            <p className={styles.coveringALotOfGround}>
              {" "}
              from nature's embrace
            </p>
          </b>
        </div>
      </div>
      <div className={styles.chooseCulture}>
        <div className={styles.property1default5}>
          <img
            className={styles.property1defaultChild}
            alt=""
            src="/rectangle-9.svg"
          />
          <b className={styles.b10}>4</b>
          <img
            className={styles.property1defaultItem}
            alt=""
            src="/vector-9.svg"
          />
          <b className={styles.must}>must</b>
          <b className={styles.optional}>optional</b>
          <div className={styles.eagerToIndulgeContainer}>
            <p
              className={styles.coveringALotOfGround}
            >{`Eager to indulge in `}</p>
            <p className={styles.coveringALotOfGround}>{`an abundance of `}</p>
            <p className={styles.coveringALotOfGround}>cultural delights</p>
          </div>
          <div className={styles.seekingACulturalContainer}>
            <p className={styles.coveringALotOfGround}>
              Seeking a cultural break or
            </p>
            <p className={styles.coveringALotOfGround}>
              {" "}
              looking for alternative
            </p>
            <p className={styles.coveringALotOfGround}> experiences</p>
          </div>
        </div>
        <div className={styles.property1mustBold}>
          <img
            className={styles.property1defaultChild}
            alt=""
            src="/rectangle-9.svg"
          />
          <b className={styles.b10}>4</b>
          <img
            className={styles.property1defaultItem}
            alt=""
            src="/vector-9.svg"
          />
          <b className={styles.must1}>must</b>
          <b className={styles.optional}>optional</b>
          <b className={styles.eagerToIndulgeContainer1}>
            <p
              className={styles.coveringALotOfGround}
            >{`Eager to indulge in `}</p>
            <p className={styles.coveringALotOfGround}>{`an abundance of `}</p>
            <p className={styles.coveringALotOfGround}>cultural delights</p>
          </b>
          <div className={styles.seekingACulturalContainer}>
            <p className={styles.coveringALotOfGround}>
              Seeking a cultural break or
            </p>
            <p className={styles.coveringALotOfGround}>
              {" "}
              looking for alternative
            </p>
            <p className={styles.coveringALotOfGround}> experiences</p>
          </div>
        </div>
        <div className={styles.property1optionalBold}>
          <img
            className={styles.property1defaultChild}
            alt=""
            src="/rectangle-9.svg"
          />
          <b className={styles.b10}>4</b>
          <img
            className={styles.property1defaultItem}
            alt=""
            src="/vector-9.svg"
          />
          <b className={styles.must}>must</b>
          <b className={styles.optional2}>optional</b>
          <div className={styles.eagerToIndulgeContainer}>
            <p
              className={styles.coveringALotOfGround}
            >{`Eager to indulge in `}</p>
            <p className={styles.coveringALotOfGround}>{`an abundance of `}</p>
            <p className={styles.coveringALotOfGround}>cultural delights</p>
          </div>
          <b className={styles.seekingACulturalContainer2}>
            <p className={styles.coveringALotOfGround}>
              Seeking a cultural break or
            </p>
            <p className={styles.coveringALotOfGround}>
              {" "}
              looking for alternative
            </p>
            <p className={styles.coveringALotOfGround}> experiences</p>
          </b>
        </div>
      </div>
      <div className={styles.chooseFood}>
        <div className={styles.property1default5}>
          <img
            className={styles.property1defaultChild}
            alt=""
            src="/rectangle-9.svg"
          />
          <b className={styles.b10}>5</b>
          <img
            className={styles.property1defaultItem}
            alt=""
            src="/vector-9.svg"
          />
          <b className={styles.must}>must</b>
          <b className={styles.optional}>optional</b>
          <div className={styles.cravingACulinaryAdventureContainer}>
            <p className={styles.coveringALotOfGround}>Craving a culinary</p>
            <p className={styles.coveringALotOfGround}>adventure to savor</p>
            <p className={styles.coveringALotOfGround}>
              diverse flavors across
            </p>
            <p className={styles.coveringALotOfGround}> multiple restaurants</p>
          </div>
          <div className={styles.selectiveGastronomicExploraContainer}>
            <p className={styles.coveringALotOfGround}>Selective gastronomic</p>
            <p className={styles.coveringALotOfGround}>
              {" "}
              exploration preferred
            </p>
          </div>
        </div>
        <div className={styles.property1mustBold}>
          <img
            className={styles.property1defaultChild}
            alt=""
            src="/rectangle-9.svg"
          />
          <b className={styles.b10}>5</b>
          <img
            className={styles.property1defaultItem}
            alt=""
            src="/vector-9.svg"
          />
          <b className={styles.must1}>must</b>
          <b className={styles.optional}>optional</b>
          <b className={styles.cravingACulinaryAdventureContainer1}>
            <p className={styles.coveringALotOfGround}>Craving a culinary</p>
            <p className={styles.coveringALotOfGround}>adventure to savor</p>
            <p className={styles.coveringALotOfGround}>
              diverse flavors across
            </p>
            <p className={styles.coveringALotOfGround}> multiple restaurants</p>
          </b>
          <div className={styles.selectiveGastronomicExploraContainer}>
            <p className={styles.coveringALotOfGround}>Selective gastronomic</p>
            <p className={styles.coveringALotOfGround}>
              {" "}
              exploration preferred
            </p>
          </div>
        </div>
        <div className={styles.property1optionalBold}>
          <img
            className={styles.property1defaultChild}
            alt=""
            src="/rectangle-9.svg"
          />
          <b className={styles.b10}>5</b>
          <img
            className={styles.property1defaultItem}
            alt=""
            src="/vector-9.svg"
          />
          <b className={styles.must}>must</b>
          <b className={styles.optional2}>optional</b>
          <div className={styles.cravingACulinaryAdventureContainer}>
            <p className={styles.coveringALotOfGround}>Craving a culinary</p>
            <p className={styles.coveringALotOfGround}>adventure to savor</p>
            <p className={styles.coveringALotOfGround}>
              diverse flavors across
            </p>
            <p className={styles.coveringALotOfGround}> multiple restaurants</p>
          </div>
          <b className={styles.selectiveGastronomicExploraContainer2}>
            <p className={styles.coveringALotOfGround}>Selective gastronomic</p>
            <p className={styles.coveringALotOfGround}>
              {" "}
              exploration preferred
            </p>
          </b>
        </div>
      </div>
      <div className={styles.daysDescription}>
        <div className={styles.property1day1}>
          <img
            className={styles.property1day1Child}
            alt=""
            src="/rectangle-23.svg"
          />
          <div className={styles.day1}>Day 1</div>
          <div className={styles.day1Container}>
            <span className={styles.cravingAnImmersiveContainer1}>
              <p className={styles.coveringALotOfGround}>
                <b className={styles.day11}>
                  Day 1 - Manuel Antonio Nacional Park
                </b>
              </p>
              <p
                className={styles.weWillDrive}
              >{`We will drive along the coast heading Manuel Antonio National Park and explore its beautiful trails and surrounding, hopefully see a few species of monkeys and a big variety of birds and explore the picturesque beaches near the park. We will drive back to Uvita and enjoy a beautiful laid-back and spend the afternoon relaxing and enjoying the attractions around Uvita. `}</p>
            </span>
          </div>
          <img className={styles.image51Icon} alt="" src="/image-51@2x.png" />
          <div className={styles.stunningCombinationOf}>
            stunning combination of pristine beaches, lush rainforests, and
            abundant wildlife, making it a must-visit destination for nature
            enthusiasts.
          </div>
          <div className={styles.property1day1Item} />
          <img
            className={styles.maskGroupIcon2}
            alt=""
            src="/mask-group1@2x.png"
          />
        </div>
        <div className={styles.property1day2}>
          <img
            className={styles.property1day1Child}
            alt=""
            src="/rectangle-23.svg"
          />
          <div className={styles.day2}>Day 2</div>
          <div className={styles.day1Container}>
            <span className={styles.cravingAnImmersiveContainer1}>
              <p className={styles.coveringALotOfGround}>
                <b className={styles.day11}>Day 2 - Corcovado National Park</b>
              </p>
              <p className={styles.weWillDrive}>
                Today we will spend most of our day exploring the rich
                biodiverse Corcovado National Park (highest biodiversity
                percentage in the world) by boat and walking combination tour.
                Enjoying a relaxed afternoon in Uvita. Overnight in Uvita.
              </p>
            </span>
          </div>
          <div className={styles.takeABoat}>
            take a boat rise to the park, a guided walk and have some beach time
            there
          </div>
          <div className={styles.property1day1Item} />
          <img
            className={styles.maskGroupIcon2}
            alt=""
            src="/mask-group1@2x.png"
          />
          <img className={styles.image52Icon} alt="" src="/image-52@2x.png" />
          <img
            className={styles.maskGroupIcon4}
            alt=""
            src="/mask-group2@2x.png"
          />
        </div>
        <div className={styles.property1day3}>
          <img
            className={styles.property1day1Child}
            alt=""
            src="/rectangle-23.svg"
          />
          <div className={styles.day3}>Day 3</div>
          <div className={styles.day1Container}>
            <span className={styles.cravingAnImmersiveContainer1}>
              <p className={styles.coveringALotOfGround}>
                <b className={styles.day11}>
                  Day 3 - Fabulous Monteverde Cloud Forest
                </b>
              </p>
              <p className={styles.weWillDrive}>
                We will spend the entire day exploring Monteverde cloud forest,
                located in a tropical mountain ridge and enjoy adventure
                activities, and other attractions. on our way back to Lake
                Arenal we will stop for some panoramic viewpoints and great
                local cafe. Overnight in one of the Eco-Thermal resorts bellow
                Volcano Arenal.
              </p>
            </span>
          </div>
          <div className={styles.property1day1Item} />
          <img
            className={styles.maskGroupIcon2}
            alt=""
            src="/mask-group1@2x.png"
          />
          <img
            className={styles.maskGroupIcon4}
            alt=""
            src="/mask-group2@2x.png"
          />
          <img className={styles.image54Icon} alt="" src="/image-54@2x.png" />
          <div
            className={styles.takeAGuided}
          >{`take a guided hike or self hike and explore the magic forest `}</div>
        </div>
        <div className={styles.property1day4}>
          <img
            className={styles.property1day1Child}
            alt=""
            src="/rectangle-23.svg"
          />
          <div className={styles.day3}>Day 4</div>
          <div className={styles.day1Container}>
            <span className={styles.cravingAnImmersiveContainer1}>
              <p className={styles.coveringALotOfGround}>
                <b className={styles.day11}>
                  Day 8 - Volcano Poas National Park and Back to San Jose
                </b>
              </p>
              <p className={styles.weWillDrive}>
                we will start our journey towards the Central Valley and San
                Jose and on our way back we will take a chocolate tour to learn
                about its production, and we will drive to Volcano Poas to visit
                the national park and to peer into Poas's smoking crater lake.
                Drive to San Jose. End of the trip
              </p>
            </span>
          </div>
          <div className={styles.breathtakingViewsOf}>
            breathtaking views of the active crater, stunning cloud forests, and
            unique biodiversity, providing an unforgettable experience in the
            heart of Costa Rica.
          </div>
          <div className={styles.property1day1Item} />
          <img
            className={styles.maskGroupIcon2}
            alt=""
            src="/mask-group1@2x.png"
          />
          <img
            className={styles.maskGroupIcon8}
            alt=""
            src="/mask-group3@2x.png"
          />
          <img className={styles.image56Icon} alt="" src="/image-56@2x.png" />
        </div>
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.property1default10}>
          <img className={styles.image8Icon} alt="" src="/image-8@2x.png" />
          <b className={styles.favoritePlaces}>Favorite Places</b>
          <img className={styles.image5Icon} alt="" src="/image-5@2x.png" />
          <img className={styles.image6Icon} alt="" src="/image-6@2x.png" />
          <img className={styles.image7Icon} alt="" src="/image-7@2x.png" />
          <b className={styles.norway}>NORWAY</b>
          <b className={styles.hongary}>HONGARY</b>
          <b className={styles.greece}>GREECE</b>
          <b className={styles.france}>FRANCE</b>
        </div>
        <div className={styles.property1variant24}>
          <img className={styles.image8Icon} alt="" src="/image-8@2x.png" />
          <b className={styles.favoritePlaces}>Favorite Places</b>
          <img className={styles.image5Icon} alt="" src="/image-5@2x.png" />
          <img className={styles.image6Icon} alt="" src="/image-6@2x.png" />
          <img className={styles.image7Icon} alt="" src="/image-7@2x.png" />
          <b className={styles.norway}>NORWAY</b>
          <b className={styles.hongary}>HONGARY</b>
          <b className={styles.greece}>GREECE</b>
          <b className={styles.france}>FRANCE</b>
          <div className={styles.hoveringNorway}>
            <b className={styles.norwayOfficiallyTheContainer}>
              <span className={styles.cravingAnImmersiveContainer1}>
                <p className={styles.coveringALotOfGround}>
                  Norway, officially the Kingdom
                </p>
                <p className={styles.coveringALotOfGround}>
                  of Norway, is a Nordic country
                </p>
                <p className={styles.coveringALotOfGround}>
                  in Northern Europe, the
                </p>
                <p className={styles.coveringALotOfGround}>
                  mainland territory of which
                </p>
                <p className={styles.coveringALotOfGround}>
                  comprises the western and
                </p>
                <p className={styles.coveringALotOfGround}>
                  northernmost portion of the
                </p>
                <p className={styles.coveringALotOfGround}>
                  {" "}
                  Scandinavian Peninsula.
                </p>
              </span>
            </b>
          </div>
          <div className={styles.hoveringHongary}>
            <b className={styles.hungaryIsAContainer}>
              <p className={styles.coveringALotOfGround}>
                Hungary is a landlocked
              </p>
              <p className={styles.coveringALotOfGround}>
                country in Central Europe.
              </p>
              <p className={styles.coveringALotOfGround}>
                it is bordered by Slovakia
              </p>
              <p className={styles.coveringALotOfGround}>
                to the north, Ukraine
              </p>
              <p className={styles.coveringALotOfGround}>
                to the northeast, Romania
              </p>
              <p className={styles.coveringALotOfGround}>
                to the east and southeast,
              </p>
              <p className={styles.coveringALotOfGround}>
                Serbia to the south,
              </p>
              <p className={styles.coveringALotOfGround}>
                Croatia and Slovenia to
              </p>
              <p className={styles.coveringALotOfGround}>
                the southwest, and Austria
              </p>
              <p className={styles.coveringALotOfGround}> to the west.</p>
            </b>
          </div>
          <div className={styles.hoveringGreece}>
            <b className={styles.greeceOfficiallyTheContainer}>
              <p className={styles.coveringALotOfGround}>
                Greece, officially the Hellenic
              </p>
              <p className={styles.coveringALotOfGround}>
                Republic, is a country in
              </p>
              <p className={styles.coveringALotOfGround}>Southeast Europe.</p>
              <p className={styles.coveringALotOfGround}>
                {" "}
                It is located at the crossroads
              </p>
              <p className={styles.coveringALotOfGround}>
                {" "}
                of Europe, Asia, and Africa.
              </p>
            </b>
          </div>
          <div className={styles.hoveringFrance}>
            <b className={styles.franceOfficiallyTheContainer}>
              <p className={styles.coveringALotOfGround}>
                France, officially the French
              </p>
              <p className={styles.coveringALotOfGround}>
                Republic is a country located
              </p>
              <p className={styles.coveringALotOfGround}>
                primarily in Western Europe.
              </p>
              <p className={styles.coveringALotOfGround}>
                It also includes overseas
              </p>
              <p className={styles.coveringALotOfGround}>
                regions and territories in the
              </p>
              <p className={styles.coveringALotOfGround}>
                Americas and the Atlantic,
              </p>
              <p className={styles.coveringALotOfGround}>
                {" "}
                Pacific and Indian Oceans.
              </p>
            </b>
          </div>
        </div>
      </div>
      <div className={styles.property1defaultParent2}>
        <div className={styles.property1default11}>
          <b className={styles.findYourTrip}>Log in</b>
        </div>
        <div
          className={styles.property1variant25}
          onClick={onProperty1Variant2Container5Click}
        >
          <b className={styles.findYourTrip}>Log in</b>
        </div>
      </div>
      <img
        className={styles.logoIcon}
        alt=""
        src="/logo.svg"
        onClick={onLogoClick}
      />
      <div className={styles.property1defaultParent3}>
        <div className={styles.property1default12}>
          <div className={styles.rectangleDiv} />
          <b className={styles.letsHaveFun}>{`lets Have Fun `}</b>
          <img
            className={styles.maskGroupIcon9}
            alt=""
            src="/mask-group4@2x.png"
          />
        </div>
        <div className={styles.property1variant26}>
          <div className={styles.property1variant2Child7} />
          <b
            className={styles.letsHaveFun1}
            onClick={onLetsHaveFun1Click}
          >{`lets Have Fun `}</b>
          <img
            className={styles.maskGroupIcon9}
            alt=""
            src="/mask-group4@2x.png"
          />
        </div>
      </div>
      <div className={styles.component8}>
        <div className={styles.property1default13}>
          <div className={styles.chooseYourDistentionParent}>
            <b className={styles.chooseYourDistention}>
              choose your distention
            </b>
            <img className={styles.frameChild} alt="" src="/polygon-1.svg" />
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.frameItem} />
            <div className={styles.frameInner} />
            <div className={styles.canadaParent}>
              <b className={styles.rePlan}>Canada</b>
              <b className={styles.rePlan}>India</b>
              <b className={styles.rePlan}>Japan</b>
              <b className={styles.rePlan}>Costa Rica</b>
              <b className={styles.rePlan}>Greece</b>
              <b className={styles.rePlan}>China</b>
              <b className={styles.rePlan}>Russia</b>
              <b className={styles.rePlan}>United Stats</b>
              <b className={styles.rePlan}>China</b>
              <b className={styles.rePlan}>Thailand</b>
              <b className={styles.rePlan}>England</b>
              <b className={styles.rePlan}>France</b>
              <b className={styles.rePlan}>Italy</b>
              <b className={styles.rePlan}>Germany</b>
            </div>
          </div>
        </div>
        <div className={styles.property1variant27}>
          <div className={styles.chooseYourDistentionGroup}>
            <b className={styles.chooseYourDistention}>
              choose your distention
            </b>
            <img className={styles.frameChild} alt="" src="/polygon-1.svg" />
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.frameItem} />
            <div className={styles.frameInner} />
            <div className={styles.canadaParent}>
              <b className={styles.rePlan}>Canada</b>
              <b className={styles.rePlan}>India</b>
              <b className={styles.rePlan}>Japan</b>
              <b className={styles.rePlan}>Costa Rica</b>
              <b className={styles.rePlan}>Greece</b>
              <b className={styles.rePlan}>China</b>
              <b className={styles.rePlan}>Russia</b>
              <b className={styles.rePlan}>United Stats</b>
              <b className={styles.rePlan}>China</b>
              <b className={styles.rePlan}>Thailand</b>
              <b className={styles.rePlan}>England</b>
              <b className={styles.rePlan}>France</b>
              <b className={styles.rePlan}>Italy</b>
              <b className={styles.rePlan}>Germany</b>
            </div>
          </div>
        </div>
        <div className={styles.property1variant34}>
          <div className={styles.chooseYourDistentionParent}>
            <b className={styles.chooseYourDistention}>
              choose your distention
            </b>
            <img className={styles.frameChild3} alt="" src="/polygon-11.svg" />
          </div>
          <div className={styles.rectangleContainer}>
            <div className={styles.frameItem} />
            <div className={styles.frameInner} />
            <div className={styles.canadaParent}>
              <b className={styles.rePlan}>Canada</b>
              <b className={styles.rePlan}>India</b>
              <b className={styles.rePlan}>Japan</b>
              <b className={styles.costaRica2} onClick={onCostaRicaText2Click}>
                Costa Rica
              </b>
              <b className={styles.rePlan}>Greece</b>
              <b className={styles.rePlan}>China</b>
              <b className={styles.rePlan}>Russia</b>
              <b className={styles.rePlan}>United Stats</b>
              <b className={styles.rePlan}>China</b>
              <b className={styles.rePlan}>Thailand</b>
              <b className={styles.rePlan}>England</b>
              <b className={styles.rePlan}>France</b>
              <b className={styles.rePlan}>Italy</b>
              <b className={styles.rePlan}>Germany</b>
            </div>
          </div>
        </div>
        <div className={styles.property1variant41}>
          <div className={styles.chooseYourDistentionParent}>
            <b className={styles.chooseYourDistention}>
              choose your distention
            </b>
            <img className={styles.frameChild3} alt="" src="/polygon-11.svg" />
          </div>
          <div className={styles.rectangleParent1}>
            <div className={styles.frameItem} />
            <div className={styles.frameChild8} />
            <div className={styles.canadaParent1}>
              <b className={styles.rePlan}>Canada</b>
              <b className={styles.rePlan}>India</b>
              <b className={styles.rePlan}>Japan</b>
              <b className={styles.rePlan}>Costa Rica</b>
              <b className={styles.rePlan}>Greece</b>
              <b className={styles.rePlan}>China</b>
              <b className={styles.rePlan}>Russia</b>
              <b className={styles.rePlan}>United Stats</b>
              <b className={styles.rePlan}>China</b>
              <b className={styles.rePlan}>Thailand</b>
              <b className={styles.rePlan}>England</b>
              <b className={styles.rePlan}>France</b>
              <b className={styles.rePlan}>Italy</b>
              <b className={styles.rePlan}>Germany</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Components1;
