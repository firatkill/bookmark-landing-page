import React from "react";
import FeaturesTabCSS from "./FeaturesTab.module.css";
import Button from "../../../UI/Button/Button";
import { useSelector } from "react-redux";
function FeaturesTab(props) {
  const styled = FeaturesTabCSS;
  const activeTab = useSelector((state) => state.ui.activeTab);

  return (
    <div className={styled.featuresTabContainer}>
      <div className={styled.featuresTabImageContainer}>
        {activeTab === "simpleBookmarking" && (
          <img alt={"tabImage"} src="/images/illustration-features-tab-1.svg" />
        )}
        {activeTab === "speedySearching" && (
          <img alt={"tabImage"} src="/images/illustration-features-tab-2.svg" />
        )}
        {activeTab === "easySharing" && (
          <img alt={"tabImage"} src="/images/illustration-features-tab-3.svg" />
        )}
        <div className={styled.bgLine}></div>
      </div>
      <div className={styled.textContent}>
        {activeTab === "simpleBookmarking" && (
          <>
            <h3>Bookmark in one click</h3>
            <p>
              Organize your bookmarks however you like. Our simple drag-and-drop
              interface gives you complete control over how you manage your
              favourite sites.
            </p>
          </>
        )}
        {activeTab === "speedySearching" && (
          <>
            <h3>Intelligent search</h3>
            <p>
              Our powerful search feature will help you find saved stes in no
              time at all. No need to trawl through all of your bookmarks.
            </p>
          </>
        )}
        {activeTab === "easySharing" && (
          <>
            <h3>Share your bookmarks</h3>
            <p>
              Easily share your bookmarks and collections with others. Create a
              shareable link that you can send at the click of a button.
            </p>
          </>
        )}
        <Button type="primary" className={styled.tabButton}>
          More info
        </Button>
      </div>
    </div>
  );
}

export default FeaturesTab;
