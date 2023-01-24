import React from "react";
import FeaturesSectionCSS from "./FeaturesSection.module.css";
import FeaturesTab from "../FeaturesTabs/FeaturesTab";
import Container from "../../../UI/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../../Redux/ui-Slice";

function FeaturesSection() {
  const styled = FeaturesSectionCSS;
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.ui.activeTab);
  const tabHandler = (e) => {
    dispatch(uiActions.setActiveTab(e.currentTarget.id));
    e.currentTarget.status = "active";
  };
  return (
    <Container width="width__80">
      <section className={styled.featuresSectionContainer}>
        <div className={styled.sectionCaption}>
          <h2>Features</h2>
          <p>
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
          <div className={styled.sectionCaption__buttonContainer}>
            <button
              onClick={tabHandler}
              id="simpleBookmarking"
              status={activeTab === "simpleBookmarking" ? "active" : "disabled"}
            >
              Simple Bookmarking
            </button>
            <button
              onClick={tabHandler}
              id="speedySearching"
              status={activeTab === "speedySearching" ? "active" : "disabled"}
            >
              Speedy Searching
            </button>
            <button
              onClick={tabHandler}
              id="easySharing"
              status={activeTab === "easySharing" ? "active" : "disabled"}
            >
              Easy Sharing
            </button>
          </div>
        </div>
        <FeaturesTab className={styled.tabContent} />
      </section>
    </Container>
  );
}

export default FeaturesSection;
