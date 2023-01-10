import React from "react";

const Map = () => {
  return (
    <>
      <div className="google-map">
        <iframe
          className="embed-responsive-item"
          title="my location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2627.439089014335!2d2.510707977068707!3d48.81168307132608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e60c4cc5dad7d9%3A0xe800ef587713e3af!2s10%20Rue%20de%20Musselburgh%2C%2094500%20Champigny-sur-Marne!5e0!3m2!1sfr!2sfr!4v1673309625421!5m2!1sfr!2sfr"
          ></iframe>
      </div>
      {/* End google-map */}
    </>
  );
};

export default Map;
