import styled from 'styled-components';

const ProfileFeatureWrapper = styled.div`
  margin-top: calc(100vh * 375 / 812); /* phone height ratio */
  padding: 0 var(--phone-margin);
  gap: calc(100vh * 40 / 812); /* phone height ratio */
  display: flex;
  flex-direction: column;
`;

const MainSection = styled.div`
  gap: calc(100vh * 25 / 812); /* phone height ratio */
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    gap: calc(100vh * 12 / 812); /* phone height ratio */
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const FeatureSection = styled.div`
  gap: 35px;
  display: flex;
  justify-content: center;

  div {
    gap: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export { ProfileFeatureWrapper, MainSection, FeatureSection };
