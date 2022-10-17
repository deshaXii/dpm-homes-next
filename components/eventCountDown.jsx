import { useRef, useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { counterStart } from "../common/counterDown";

const EventCountDown = ({ id, end }) => {
  const countdownRef = useRef(null);
  useEffect(() => {
    counterStart(countdownRef.current, end);
  }, []);

  return (
    <>
      <div
        className="countdown-dispaly countdown-timer"
        id="countdown-display"
        ref={countdownRef}
      >
        <span>
          <FormattedMessage id="components.countdown.title" />
        </span>
        <div className="counterdown-content">
          <span className="time-col days">
            <span className="counting counting-days">--</span>
            <span className="subject">
              <span></span>
              <FormattedMessage id="components.countdown.days" />
            </span>
          </span>
          <span className="time-col">
            <span className="counting counting-hours">--</span>
            <span className="subject">
              <span></span>
              <FormattedMessage id="components.countdown.hours" />
            </span>
          </span>
          <span className="time-col">
            <span className="counting counting-minutes">--</span>
            <span className="subject">
              <span></span>
              <FormattedMessage id="components.countdown.minutes" />
            </span>
          </span>
          <span className="time-col">
            <span className="counting counting-seconds">--</span>
            <span className="subject">
              <span></span>
              <FormattedMessage id="components.countdown.seconds" />
            </span>
          </span>
        </div>
      </div>
    </>
  );
};

export default EventCountDown;
