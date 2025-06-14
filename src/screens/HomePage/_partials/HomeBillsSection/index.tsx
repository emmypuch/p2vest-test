import React from "react";
import Image from "next/image";
import HomeBillsStyles from "./HomeBillsSection.module.scss";

const HomeBillsSection = () => {
  return (
    <section className={HomeBillsStyles.wrapper}>
      <div className={HomeBillsStyles.wrapper__content}>
        <div className={HomeBillsStyles.wrapper__info}>
          <h1 className={HomeBillsStyles.wrapper__title}>Pay Bills</h1>
          <p className={HomeBillsStyles.wrapper__description}>
            Say goodbye to long queues and endless processes—our platform offers
            a seamless solution for paying bills instantly without any hiccups.
          </p>
          <div className={HomeBillsStyles.wrapper__app}>
            <p className={HomeBillsStyles.wrapper__appText}>Get Revve on your phone</p>
            <button className={HomeBillsStyles.wrapper__appButton}>Coming soon</button>
          </div>
        </div>

        <div className={HomeBillsStyles.wrapper__calendar}>
          <Image
            src="/assets/images/bills-calendar.png"
            alt="Calendar"
            width={340}
            height={588}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HomeBillsSection;