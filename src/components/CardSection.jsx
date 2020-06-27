import React from 'react';
import styled from '@emotion/styled';
import iconBrandRecognition from '../assets/images/icon-brand-recognition.svg';
import iconDetailedRecords from '../assets/images/icon-detailed-records.svg';
import iconFullyCustomizable from '../assets/images/icon-fully-customizable.svg';

const CardsContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  margin-top: 1.5em;

  .background {
    position: absolute;
    top: 0;
    left: 49%;
    width: 0.5em;
    z-index: 0;
    margin: 1em 0;
    height: 80%;
    background-color: var(--cyan);
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
    border-radius: 5px;
    background-color: white;
    z-index: 1;
    padding: 1em;

    .card-icon-container {
      background-color: var(--darkViolet);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      width: 60px;
      height: 60px;
      margin-top: -46px;

      .card-icon {
        width: 50%;
        height: 50%;
      }
    }

    h3 {
      text-align: center;
      margin: 0;
      margin-top: 5px;
      color: var(--darkViolet);
    }
  }

  @media screen and (min-width: 768px) {
    margin-top: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .background {
      top: 50%;
      left: 20%;
      margin: 0 1em;
      width: 50%;
      height: 0.5em;
    }

    .card {
      margin: 0 1em;
      width: 25%;
      align-items: flex-start;

      h3 {
      }

      p {
        font-size: 15px;
        text-align: start;
      }
    }

    .card:nth-of-type(3) {
      margin-top: 7%;
    }
    .card:last-child {
      margin-top: 14%;
    }
  }
`;

const CardSection = () => {
  return (
    <CardsContainer>
      <div className="background"></div>
      <div className="card">
        <div className="card-icon-container">
          <img className="card-icon" src={iconBrandRecognition} alt="icon" />
        </div>
        <h3>Brand Recognition</h3>
        <p>
          Boost your brand recognition with each click. Generic links don’t mean
          a thing. Branded links help instil confidence in your content.
        </p>
      </div>
      <div className="card">
        <div className="card-icon-container">
          <img className="card-icon" src={iconDetailedRecords} alt="icon" />
        </div>
        <h3>Detailed Records</h3>
        <p>
          Gain insights into who is clicking your links. Knowing when and where
          people engage with your content helps inform better decisions.
        </p>
      </div>
      <div className="card">
        <div className="card-icon-container">
          <img className="card-icon" src={iconFullyCustomizable} alt="icon" />
        </div>
        <h3>Fully Customizable</h3>
        <p>
          Improve brand awareness and content discoverability through
          customizable links, supercharging audience engagement.
        </p>
      </div>
    </CardsContainer>
  );
};

export default CardSection;
